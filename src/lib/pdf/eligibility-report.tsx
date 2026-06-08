import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer'

// Register Hebrew-compatible font
Font.register({
  family: 'Helvetica',
  src: 'https://fonts.gstatic.com/s/assistant/v19/2sDcZGJYnIjSi6H75xkZZE1I0yCmYzzQtmZnEGOf.woff2',
})

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    padding: 0,
    fontFamily: 'Helvetica',
  },
  // Header bar
  header: {
    backgroundColor: '#0d3d2a',
    padding: '28 40',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#f7f5f0',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#c9a84c',
    fontSize: 10,
    marginTop: 2,
    textAlign: 'right',
  },
  headerDate: {
    color: 'rgba(247,245,240,0.5)',
    fontSize: 9,
    textAlign: 'left',
  },
  // Gold accent bar
  accentBar: {
    backgroundColor: '#c9a84c',
    height: 4,
  },
  // Body
  body: {
    padding: '30 40',
  },
  // Section title
  sectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#0d3d2a',
    marginBottom: 10,
    textAlign: 'right',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e4dc',
    paddingBottom: 6,
  },
  // Score box
  scoreBox: {
    backgroundColor: '#f0f7f3',
    borderWidth: 1.5,
    borderColor: '#0d3d2a',
    borderRadius: 8,
    padding: '18 24',
    marginBottom: 20,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scoreNumber: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#0d3d2a',
  },
  scoreLabel: {
    fontSize: 10,
    color: '#6b6560',
    textAlign: 'right',
  },
  scoreRecommendation: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#0d3d2a',
    textAlign: 'right',
    maxWidth: 280,
  },
  // Info row
  row: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0ece4',
  },
  rowLabel: {
    fontSize: 10,
    color: '#9b9590',
    textAlign: 'right',
  },
  rowValue: {
    fontSize: 10,
    color: '#1a1614',
    fontWeight: 'bold',
    textAlign: 'left',
    maxWidth: 220,
  },
  // Missing docs
  missingSection: {
    backgroundColor: '#fff8ed',
    borderWidth: 1,
    borderColor: '#f0c060',
    borderRadius: 6,
    padding: '12 16',
    marginTop: 16,
    marginBottom: 16,
  },
  missingTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#a07c20',
    textAlign: 'right',
    marginBottom: 8,
  },
  missingItem: {
    fontSize: 10,
    color: '#6b5a1e',
    textAlign: 'right',
    marginBottom: 4,
  },
  // Disclaimer
  disclaimer: {
    backgroundColor: '#f7f5f0',
    borderRadius: 6,
    padding: '12 16',
    marginTop: 20,
  },
  disclaimerText: {
    fontSize: 8.5,
    color: '#9b9590',
    textAlign: 'right',
    lineHeight: 1.6,
  },
  // Footer
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 40,
    right: 40,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 8,
    color: '#c9a84c',
  },
  footerPage: {
    fontSize: 8,
    color: '#c0bdb8',
  },
  // Two columns
  twoCol: {
    flexDirection: 'row-reverse',
    gap: 16,
    marginBottom: 16,
  },
  col: {
    flex: 1,
    backgroundColor: '#faf9f6',
    borderWidth: 1,
    borderColor: '#e8e4dc',
    borderRadius: 6,
    padding: '10 14',
  },
  colLabel: {
    fontSize: 9,
    color: '#9b9590',
    textAlign: 'right',
    marginBottom: 3,
  },
  colValue: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#0d3d2a',
    textAlign: 'right',
  },
  badge: {
    borderRadius: 4,
    padding: '3 8',
    alignSelf: 'flex-end',
  },
})

const COMPLEXITY_MAP: Record<string, { label: string; bg: string; color: string }> = {
  low: { label: 'נמוכה', bg: '#d4edda', color: '#155724' },
  medium: { label: 'בינונית', bg: '#fff3cd', color: '#856404' },
  high: { label: 'גבוהה', bg: '#f8d7da', color: '#721c24' },
}

const SERVICE_MAP: Record<string, string> = {
  new_license: 'בקשה חדשה לרישיון',
  renewal: 'חידוש רישיון / מרשם',
  dosage_increase: 'הגדלת מינון',
  documents_review: 'בדיקת מסמכים',
}

const DURATION_MAP: Record<string, string> = {
  less_than_1_year: 'פחות משנה',
  '1_3_years': '1–3 שנים',
  '3_5_years': '3–5 שנים',
  more_than_5_years: 'מעל 5 שנים',
}

interface ReportData {
  full_name: string
  phone: string
  city?: string
  purpose: string
  medical_condition: string
  condition_duration?: string
  documents_available: string[]
  previous_license: boolean
  score: number
  complexity: 'low' | 'medium' | 'high'
  recommendation: string
  missing_documents: string[]
  created_at: string
}

export function EligibilityReportPDF({ data }: { data: ReportData }) {
  const complexity = COMPLEXITY_MAP[data.complexity] || COMPLEXITY_MAP.medium
  const date = new Date(data.created_at).toLocaleDateString('he-IL', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>המרכז לליווי רפואי בישראל</Text>
            <Text style={styles.headerSubtitle}>דוח התאמה ראשוני — אישי וסודי</Text>
          </View>
          <Text style={styles.headerDate}>{date}</Text>
        </View>
        <View style={styles.accentBar} />

        <View style={styles.body}>
          {/* Score box */}
          <View style={styles.scoreBox}>
            <View>
              <Text style={styles.scoreNumber}>{data.score}</Text>
              <Text style={styles.scoreLabel}>מתוך 100</Text>
            </View>
            <View style={{ flex: 1, paddingRight: 20 }}>
              <Text style={styles.scoreRecommendation}>{data.recommendation}</Text>
              <View style={[styles.badge, { backgroundColor: complexity.bg, marginTop: 8 }]}>
                <Text style={{ fontSize: 10, color: complexity.color, fontWeight: 'bold' }}>
                  מורכבות: {complexity.label}
                </Text>
              </View>
            </View>
          </View>

          {/* Personal info */}
          <Text style={styles.sectionTitle}>פרטי הפונה</Text>
          <View style={styles.twoCol}>
            <View style={styles.col}>
              <Text style={styles.colLabel}>שם מלא</Text>
              <Text style={styles.colValue}>{data.full_name}</Text>
            </View>
            <View style={styles.col}>
              <Text style={styles.colLabel}>טלפון</Text>
              <Text style={styles.colValue}>{data.phone}</Text>
            </View>
          </View>
          {data.city && (
            <View style={styles.row}>
              <Text style={styles.rowLabel}>עיר</Text>
              <Text style={styles.rowValue}>{data.city}</Text>
            </View>
          )}

          {/* Medical info */}
          <Text style={[styles.sectionTitle, { marginTop: 16 }]}>פרטים רפואיים</Text>
          {[
            ['מצב רפואי עיקרי', data.medical_condition],
            ['משך הבעיה', DURATION_MAP[data.condition_duration || ''] || data.condition_duration || 'לא צוין'],
            ['מטרת הפנייה', SERVICE_MAP[data.purpose] || data.purpose],
            ['רישיון/מרשם קיים', data.previous_license ? 'כן' : 'לא'],
          ].map(([label, value]) => (
            <View key={label} style={styles.row}>
              <Text style={styles.rowLabel}>{label}</Text>
              <Text style={styles.rowValue}>{value}</Text>
            </View>
          ))}

          {/* Available documents */}
          {data.documents_available.length > 0 && (
            <>
              <Text style={[styles.sectionTitle, { marginTop: 16 }]}>מסמכים קיימים</Text>
              {data.documents_available.map((doc) => (
                <View key={doc} style={styles.row}>
                  <Text style={styles.rowLabel}>✓</Text>
                  <Text style={styles.rowValue}>{doc}</Text>
                </View>
              ))}
            </>
          )}

          {/* Missing documents */}
          {data.missing_documents.length > 0 && (
            <View style={styles.missingSection}>
              <Text style={styles.missingTitle}>⚠ מסמכים חסרים לפי הערכה ראשונית</Text>
              {data.missing_documents.map((doc) => (
                <Text key={doc} style={styles.missingItem}>• {doc}</Text>
              ))}
            </View>
          )}

          {/* Next steps */}
          <Text style={[styles.sectionTitle, { marginTop: 16 }]}>הצעדים הבאים המומלצים</Text>
          {[
            'נציג מטעמנו יצור קשר תוך 24 שעות לבדיקה ראשונית',
            'יש להכין את המסמכים הקיימים לשיחה',
            'במידת הצורך — נסייע לאסוף מסמכים חסרים',
            'לאחר השלמת התיק — נפנה לגורם מוסמך',
          ].map((step, i) => (
            <View key={i} style={[styles.row, { alignItems: 'flex-start' }]}>
              <Text style={[styles.rowLabel, { color: '#c9a84c', fontWeight: 'bold' }]}>
                {String(i + 1).padStart(2, '0')}
              </Text>
              <Text style={[styles.rowValue, { maxWidth: 360 }]}>{step}</Text>
            </View>
          ))}

          {/* Disclaimer */}
          <View style={styles.disclaimer}>
            <Text style={styles.disclaimerText}>
              הצהרת אחריות: דוח זה הוא כלי עזר תפעולי בלבד ואינו מהווה ייעוץ רפואי, חוות דעת רפואית
              או התחייבות לאישור בקשה. המרכז לליווי רפואי בישראל אינו מוכר קנאביס ואינו מחליף רופא
              או גורם מוסמך. כל החלטה רפואית ורגולטורית נמצאת בידי הגורמים המוסמכים בלבד. הדוח
              מיועד לשימוש פנימי של הפונה והצוות המטפל בלבד.
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>המרכז לליווי רפואי בישראל · hamerkaz-refui.co.il</Text>
          <Text style={styles.footerPage}>דוח סודי — לא להפצה</Text>
        </View>
      </Page>
    </Document>
  )
}
