"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    ToolOutlined,
    LogoutOutlined,
    HomeOutlined,
    FileTextOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Modal, theme, Image } from "antd/es";
import Title from "antd/es/typography/Title";
import { useStyles } from "./style/styles";

const { Header, Sider, Content } = Layout;

const ServiceProviderLayout = ({ children }: { children: React.ReactNode }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [collapsed, setCollapsed] = useState(false);
    const [logoutModalVisible, setLogoutModalVisible] = useState(false);
    const { styles } = useStyles();
    const router = useRouter();
    const pathname = usePathname();

    const getSelectedKey = () => {
        if (pathname.includes("/dashboard")) return "1";
        if (pathname.includes("/incidents")) return "2";
        if (pathname.includes("/technicians")) return "3";
        return "1";
    };

    const confirmLogout = () => {
        sessionStorage.clear();
        setLogoutModalVisible(false);
        router.push("/login");
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                breakpoint="lg"
                collapsedWidth="80"
                onBreakpoint={(broken) => setCollapsed(broken)}
            >
                <div className={styles.imageContainer}>
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
                    selectedKeys={[getSelectedKey()]}
                    onClick={(info) => {
                        if (info.key === "1") router.push("/serviceProvider/dashboard");
                        if (info.key === "2") router.push("/serviceProvider/incidents");
                        if (info.key === "3") router.push("/serviceProvider/technicians");
                    }}
                    items={[
                        {
                            key: "1",
                            icon: <HomeOutlined />,
                            label: "Home",
                        },
                        {
                            key: "2",
                            icon: <FileTextOutlined />,
                            label: "Incidents",
                        },
                        {
                            key: "3",
                            icon: <ToolOutlined />,
                            label: "Technicians",
                        },
                    ]}
                />

                <div style={{ marginTop: "auto", padding: "12px" }}>
                    <Button
                        type="primary"
                        danger
                        icon={<LogoutOutlined />}
                        block
                        onClick={() => setLogoutModalVisible(true)}
                    >
                        {!collapsed && "Logout"}
                    </Button>
                </div>
            </Sider>

            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                className={styles.toggleButton}
                style={{ left: collapsed ? "80px" : "200px", background: colorBgContainer }}
            />

            <Layout>
                <Header className={styles.headerTitle}>
                    <Title level={2} className={styles.title}>
                        Service Provider Dashboard
                    </Title>
                </Header>

                <Content className={styles.contentContainer}>
                    {children}
                </Content>
            </Layout>

            <Modal
                open={logoutModalVisible}
                title="Confirm Logout"
                onCancel={() => setLogoutModalVisible(false)}
                onOk={confirmLogout}
                okText="Yes, Logout"
                cancelText="Cancel"
            >
                <p>Are you sure you want to logout?</p>
            </Modal>
        </Layout>
    );
};

export default ServiceProviderLayout;
