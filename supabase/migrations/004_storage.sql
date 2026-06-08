-- Create private storage bucket for documents and reports
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'documents',
  'documents',
  false,  -- private: access via signed URLs only
  52428800, -- 50MB max
  array['application/pdf', 'image/jpeg', 'image/png', 'image/webp', 'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
)
on conflict (id) do nothing;

-- RLS: service role can do anything (used by server-side code)
-- Customers can upload/read their own files
create policy "customers_own_documents" on storage.objects
  for all using (
    bucket_id = 'documents'
    and (
      -- Service role bypass is handled at the client level (admin client)
      -- Customers: path starts with their customer folder
      auth.uid()::text = (storage.foldername(name))[1]
      -- Staff can access all
      or exists (
        select 1 from public.profiles
        where id = auth.uid()
        and role in ('case_manager', 'medical_coordinator', 'admin', 'super_admin', 'sales_agent')
      )
    )
  );
