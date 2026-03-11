import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { PdfLayout } from "./pdfLayout";

const transactions = [
  {
    transaction_id: "TRX001",
    type: "income",
    date: "01 Mar, 08:30 AM",
    amount: 5000000,
    description: "Monthly salary",
  },
  {
    transaction_id: "TRX002",
    type: "expense",
    date: "02 Mar, 12:15 PM",
    amount: 150000,
    description: "Groceries at supermarket",
  },
  {
    transaction_id: "TRX003",
    type: "expense",
    date: "03 Mar, 09:20 AM",
    amount: 45000,
    description: "Morning coffee",
  },
  {
    transaction_id: "TRX004",
    type: "expense",
    date: "03 Mar, 06:45 PM",
    amount: 85000,
    description: "Ride-hailing transportation",
  },
  {
    transaction_id: "TRX005",
    type: "income",
    date: "04 Mar, 10:10 AM",
    amount: 1200000,
    description: "Freelance project payment",
  },
  {
    transaction_id: "TRX006",
    type: "expense",
    date: "05 Mar, 08:00 PM",
    amount: 200000,
    description: "Electricity bill payment",
  },
  {
    transaction_id: "TRX007",
    type: "expense",
    date: "06 Mar, 07:15 AM",
    amount: 30000,
    description: "Breakfast meal",
  },
  {
    transaction_id: "TRX008",
    type: "expense",
    date: "07 Mar, 01:40 PM",
    amount: 60000,
    description: "Lunch with coworkers",
  },
  {
    transaction_id: "TRX009",
    type: "income",
    date: "08 Mar, 11:30 AM",
    amount: 350000,
    description: "Sold unused items online",
  },
  {
    transaction_id: "TRX010",
    type: "expense",
    date: "08 Mar, 05:50 PM",
    amount: 125000,
    description: "Fuel refill",
  },
  {
    transaction_id: "TRX011",
    type: "expense",
    date: "09 Mar, 02:25 PM",
    amount: 99000,
    description: "Internet subscription",
  },
  {
    transaction_id: "TRX012",
    type: "income",
    date: "10 Mar, 09:10 AM",
    amount: 750000,
    description: "Part-time consulting payment",
  },
  {
    transaction_id: "TRX013",
    type: "expense",
    date: "10 Mar, 07:30 PM",
    amount: 54000,
    description: "Movie ticket",
  },
  {
    transaction_id: "TRX014",
    type: "expense",
    date: "11 Mar, 12:05 PM",
    amount: 78000,
    description: "Food delivery order",
  },
  {
    transaction_id: "TRX015",
    type: "expense",
    date: "11 Mar, 08:45 PM",
    amount: 42000,
    description: "Evening snacks",
  },
];

export const ReactPdf = () => {
  return (
    <div className="w-full h-screen">
      {/* <PDFViewer style={{ width: "100%", height: "100%" }}>
        <PdfLayout />
      </PDFViewer> */}
      <PDFDownloadLink
        document={<PdfLayout data={transactions} />}
        fileName="report-cashflow.pdf"
      >
        {({ loading }) => (
          <button className="bg-blue-600 p-2 rounded text-white text-sm">
            {loading ? "Preparing PDF..." : "Download Full Report"}
          </button>
        )}
      </PDFDownloadLink>
    </div>
  );
};
