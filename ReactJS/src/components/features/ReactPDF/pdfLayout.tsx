import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

export const PdfLayout = ({ data }: { data: any }) => {
  const dateGenerated = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.header} fixed>
          <View>
            <View style={styles.logoSection}>
              <Image src="/public/logo 1.png" style={styles.logo} />
              <Text style={styles.companyName}>XYZ</Text>
            </View>
            <Text style={styles.companyAddress}>
              Bekasi, West Java, Indonesia
            </Text>
          </View>

          <View style={styles.reportInfo}>
            <Text style={styles.reportTitle}>CASH FLOW REPORT</Text>
            <Text style={styles.reportDate}>Generated: {dateGenerated}</Text>
          </View>
        </View>

        {/* Summary Cards */}
        <View style={styles.summaryContainer}>
          <View style={styles.summaryBox}>
            <Text style={styles.summaryLabel}>Total Transactions</Text>
            <Text style={styles.summaryValue}>{data.length}</Text>
          </View>
          <View
            style={[styles.summaryBox, { borderLeft: "1pt solid #e2e8f0" }]}
          >
            <Text style={styles.summaryLabel}>Report Status</Text>
            <Text style={[styles.summaryValue, { color: "#10b981" }]}>
              Verified
            </Text>
          </View>
        </View>

        {/* Table Section */}
        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderCell, { width: "25%" }]}>
              TRANSACTION ID
            </Text>
            <Text style={[styles.tableHeaderCell, { width: "15%" }]}>TYPE</Text>
            <Text style={[styles.tableHeaderCell, { width: "25%" }]}>DATE</Text>
            <Text style={[styles.tableHeaderCell, { width: "20%" }]}>
              AMOUNT
            </Text>
            <Text
              style={[
                styles.tableHeaderCell,
                { width: "15%", textAlign: "right" },
              ]}
            >
              STATUS
            </Text>
          </View>

          {/* Table Body */}
          {data.map((item: any, index: any) => (
            <View
              key={index}
              style={[styles.tableRow, index % 2 === 0 ? {} : styles.zebraRow]}
            >
              <Text
                style={[styles.tableCell, { width: "25%", color: "#64748b" }]}
              >
                #{item.transaction_id.substring(0, 8)}
              </Text>
              <Text
                style={[
                  styles.tableCell,
                  {
                    width: "15%",
                    color: index % 3 === 0 ? "#059669" : "#dc2626",
                    fontWeight: "bold",
                  },
                ]}
              >
                {index % 3 === 0 ? "INCOME" : "EXPENSE"}
              </Text>
              <Text style={[styles.tableCell, { width: "25%" }]}>
                {item.date}
              </Text>
              <Text
                style={[styles.tableCell, { width: "20%", fontWeight: "bold" }]}
              >
                ${item.amount.toLocaleString()}
              </Text>
              <View
                style={[
                  styles.tableCell,
                  { width: "15%", alignItems: "flex-end" },
                ]}
              >
                <Text style={styles.statusBadge}>SUCCESS</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Footer*/}
        <Text
          style={styles.footer}
          render={({ pageNumber, totalPages }) =>
            `Page ${pageNumber} of ${totalPages} — XYZ Informatics Official Report`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

// ---------------------------------------------------------
// STYLES
// ---------------------------------------------------------
const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 50,
    backgroundColor: "#FFFFFF",
    fontFamily: "Helvetica",
  },

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderBottom: "2pt solid #f1f5f9",
    paddingBottom: 20,
    marginBottom: 20,
  },
  logoSection: { flexDirection: "row", alignItems: "center", marginBottom: 4 },
  logo: { width: 30, height: 30 },
  companyName: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 8,
    color: "#1e293b",
  },
  companyAddress: { fontSize: 9, color: "#64748b" },

  reportInfo: { alignItems: "flex-end" },
  reportTitle: { fontSize: 16, fontWeight: "bold", color: "#1e293b" },
  reportDate: { fontSize: 9, color: "#94a3b8", marginTop: 4 },

  // Summary Cards
  summaryContainer: {
    flexDirection: "row",
    backgroundColor: "#f8fafc",
    borderRadius: 8,
    padding: 15,
    marginBottom: 25,
    border: "1pt solid #e2e8f0",
  },
  summaryBox: { flex: 1, paddingHorizontal: 15 },
  summaryLabel: {
    fontSize: 8,
    color: "#64748b",
    textTransform: "uppercase",
    marginBottom: 4,
  },
  summaryValue: { fontSize: 14, fontWeight: "bold", color: "#1e293b" },

  // Table Styles
  table: { width: "100%" },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#1e293b",
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  tableHeaderCell: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: 1,
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottom: "1pt solid #f1f5f9",
    alignItems: "center",
  },
  zebraRow: { backgroundColor: "#fdfdfd" },
  tableCell: { fontSize: 10, color: "#334155" },

  statusBadge: {
    fontSize: 8,
    backgroundColor: "#ecfdf5",
    color: "#065f46",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontWeight: "bold",
  },

  // Footer
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    fontSize: 9,
    textAlign: "center",
    color: "#94a3b8",
    paddingTop: 10,
  },
});
