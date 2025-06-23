import { ConfigProvider } from "antd";
import viVN from "antd/locale/vi_VN";

import "@/assets/styles/style.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "@/App.tsx";
import themes from "@/config/themes";
import "@ant-design/v5-patch-for-react-19";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ConfigProvider locale={viVN} theme={themes}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </StrictMode>,
);
