import { MessageInstance } from "antd/es/message/interface";
import { useContext } from "react";

import { MessageContext } from "@/contexts/MessageContext/MessageContext";

export const useShowMessage = (): MessageInstance => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("useShowMessage must be used within a MessageProvider");
  }
  return context;
};
