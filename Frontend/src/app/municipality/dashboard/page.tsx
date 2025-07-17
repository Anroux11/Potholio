"use client";

import { Row, Col, Card, Button, Divider } from "antd/es";
import { useRouter } from "next/navigation";
import IncidentList from "@/components/muncipality-components/incidents";
import { useStyles } from "./style/styles";

const ServiceProviderPage = () => {
    const router = useRouter();
    const { styles } = useStyles();

    return (
        <div className={styles.dashboardContainer}>
            <Row gutter={[20, 20]} className={styles.summaryRow}>
                <Col xs={24} sm={10} md={12}>
                    <Card className={styles.summaryCard}>
                        <h3>Total Incidents</h3>
                        <p className="count">24</p>
                        <p>Open issues</p>
                    </Card>
                </Col>
                <Col xs={24} sm={10} md={12}>
                    <Card className={styles.summaryCard}>
                        <h3>Service Providers</h3>
                        <p className="count">8</p>
                        <p>Total Service Providers</p>
                    </Card>
                </Col>
            </Row>

            <Divider orientation="left">Quick Actions</Divider>
            <Row gutter={[16, 16]} className={styles.quickActionsRow}>
                <Col xs={24} sm={8}>
                    <Button
                        type="primary"
                        size="large"
                        block
                        className={styles.quickActionButton}
                        onClick={() => router.push("./incidents")}
                    >
                        View all Incidents
                    </Button>
                </Col>
                <Col xs={24} sm={8}>
                    <Button
                        type="default"
                        size="large"
                        block
                        className={styles.quickActionButton}
                        onClick={() => router.push("./serviceProvider")}
                    >
                        Add Service Providers
                    </Button>
                </Col>
                <Col xs={24} sm={8}>
                    <Button
                        type="dashed"
                        size="large"
                        block
                        className={styles.quickActionButton}
                        onClick={() => router.push("./serviceProvider")}
                    >
                        View all Service Providers
                    </Button>
                </Col>
            </Row>

            <Divider orientation="left">Recent Incidents</Divider>
            <Card className={styles.incidentCard}>
                <IncidentList />
            </Card>
        </div>
    );
};

export default ServiceProviderPage;
