import { Layout } from "antd";
import { ReactNode } from "react";

import { Sidebar } from "@/components/Sidebar";

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Layout className="default-layout">
      <Sidebar />
      <Layout.Content className="content-layout">{children}</Layout.Content>
    </Layout>
  );
};

export default DefaultLayout;
