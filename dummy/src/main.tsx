import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "sebu-dev-lib/src/index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
