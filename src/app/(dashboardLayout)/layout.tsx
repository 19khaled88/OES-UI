"use client";
import React from "react";

import {  Layout, theme } from "antd";
import Sidebar from "@/components/ui/Sidebar";
import ContentsPage from "@/components/ui/Contents";

// const { Header, Content, Footer } = Layout;

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sidebar />
      <ContentsPage> {children}</ContentsPage>
    </Layout>
  );
};

export default DashboardLayout;
