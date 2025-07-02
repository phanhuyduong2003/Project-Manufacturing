import { ConfigProvider } from "antd";
import viVN from "antd/locale/vi_VN";

import "@/assets/styles/style.scss";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@ant-design/v5-patch-for-react-19";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";

import App from "@/App.tsx";
import themes from "@/config/themes";
import { MessageProvider } from "@/contexts/MessageContext/MessageProvider";
import { store } from "@/redux/store";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Ho_Chi_Minh");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ConfigProvider locale={viVN} theme={themes}>
          <MessageProvider>
            <App />
          </MessageProvider>
        </ConfigProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
