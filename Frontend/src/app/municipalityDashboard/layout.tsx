"use client";

import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Image } from "antd/es";
import { useStyles } from "./style/styles";
import Title from "antd/es/typography/Title";

const { Header, Sider, Content } = Layout;

const MunicipalityLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { styles } = useStyles();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Incidents",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Title level={2}>Ekhurhuleni</Title>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default MunicipalityLayout;
