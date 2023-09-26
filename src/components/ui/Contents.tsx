import React from "react";
import { Layout } from "antd";
import BreadCrumbPage from "./BreadCrumb";
const { Content } = Layout;
const ContentsPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content style={{ minHeight: "100vh" }}>
      <BreadCrumbPage
        items={[
          {
            label: "admin",
            link: "admin",
          },
          {
            label: "Link",
           link: "link",
          },
        ]}
      />
      {children}
    </Content>
  );
};

export default ContentsPage;
