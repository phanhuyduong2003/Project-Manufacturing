import { message } from "antd";
import { ReactNode } from "react";

import { MessageContext } from "@/contexts/MessageContext/MessageContext";

export const MessageProvider = ({ children }: { children: ReactNode }) => {
  const [messageApi, contextHolder] = message.useMessage({ top: "90%" });

  return (
    <MessageContext.Provider value={messageApi}>
      {contextHolder}
      {children}
    </MessageContext.Provider>
  );
};
