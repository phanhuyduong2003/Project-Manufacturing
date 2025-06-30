import { MessageInstance } from "antd/es/message/interface";
import { createContext } from "react";

export const MessageContext = createContext<MessageInstance | null>(null);
