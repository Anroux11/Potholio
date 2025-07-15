"use client";

import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SnippetsOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Image } from "antd/es";
import { useStyles } from "./style/styles";
import Title from "antd/es/typography/Title";
// import IncidentList from "@/components/muncipality-components/incidents";

const { Header, Sider, Content } = Layout;

const MunicipalityLayout = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [collapsed, setCollapsed] = useState(false);
  const { styles } = useStyles();

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider 
      trigger={null} 
        collapsible 
        collapsed={collapsed}
        breakpoint="lg"
        collapsedWidth="80"
        onBreakpoint={(broken) => {
          // Auto-collapse on mobile
          setCollapsed(broken);
        }}>
        <div className={styles.imageContainer}
        >
          <Image
            src="/AppLogo-Dashboard.png"
            alt="Logo"
            width={collapsed ? 40 : 70}
            height={collapsed ? 40 : 70}
            className={styles.image}
            preview={false}
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <SnippetsOutlined />,
              label: "Incidents",
            },
            {
              key: "2",
              icon: <ToolOutlined />,
              label: "Service Providers",
            },
          ]}
        />
      </Sider>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          position: "absolute",
          top: 10,
          left: collapsed ? "80px" : "200px",
          zIndex: 1000,
          fontSize: "16px",
          width: 40,
          height: 40,
          background: colorBgContainer,
          borderRadius: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "left 0.2s ease",
        }}
      />
      <Layout>
        <Header className={styles.headerTitle}>
          <Title level={2}
          style={{ 
              margin: 0,
              fontSize: "clamp(1.2rem, 4vw, 1.5rem)",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          // className={styles.title}
          >Ekhurhuleni</Title>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        > {children}
          {/* <IncidentList/> */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MunicipalityLayout;
