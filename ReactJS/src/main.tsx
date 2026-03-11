import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { UseMemoLab } from "./hooks/useMemo/index.tsx";
import { ReactPdf } from "./components/features/ReactPDF/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UseMemoLab /> */}
    <ReactPdf />
  </StrictMode>,
);
