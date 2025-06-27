import { ConfigProvider } from "antd";
import viVN from "antd/locale/vi_VN";

import "@/assets/styles/style.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";

import App from "@/App.tsx";
import "@ant-design/v5-patch-for-react-19";

import themes from "@/config/themes";
import { store } from "@/redux/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ConfigProvider locale={viVN} theme={themes}>
          <App />
        </ConfigProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
