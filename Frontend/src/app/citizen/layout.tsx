"use client";

import React, { useState} from "react";
import { useRouter, usePathname } from "next/navigation";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    LogoutOutlined,
    HomeOutlined,
    FileTextOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Modal, theme, Image } from "antd/es";
import Title from "antd/es/typography/Title";
import { useStyles } from "@/app/serviceProvider/style/styles";
import "@ant-design/v5-patch-for-react-19";

const { Header, Sider, Content } = Layout;

const CitizenLayout = ({ children }: { children: React.ReactNode }) => {
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
        if (pathname.includes("/settings")) return "3";
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
                        if (info.key === "1") router.push("/citizen/dashboard");
                        if (info.key === "2") router.push("/citizen/incidents");
                        if (info.key === "3") router.push("/citizen/technicians");
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
                            icon: <SettingOutlined />,
                            label: "Settings",
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
                        Citizen Dashboard
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

export default CitizenLayout;
