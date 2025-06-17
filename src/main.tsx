import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/style.scss";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { ConfigProvider } from "antd";
import themes from "@/config/themes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ConfigProvider theme={themes}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </StrictMode>,
);
