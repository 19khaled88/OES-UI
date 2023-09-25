import React from "react";
import {Layout} from 'antd'
const {Content} = Layout
const ContentsPage = ({ children }: { children: React.ReactNode }) => {
  return <Content style={{ minHeight: "100vh" }}>{children}</Content>;
};

export default ContentsPage;
