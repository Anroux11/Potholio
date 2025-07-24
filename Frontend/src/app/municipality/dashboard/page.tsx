"use client";

import { Row, Col, Card, Button, Divider } from "antd/es";
import { useRouter } from "next/navigation";
import IncidentList from "@/components/muncipality-components/incidents";
import { useStyles } from "./style/styles";
import { useIncidentState, useIncidentActions } from "@/providers/incident-provider";
import { useServiceProviderState, useServiceProviderActions } from "@/providers/serviceProvider-provider";
import { useEffect } from "react";

const ServiceProviderPage = () => {
    const router = useRouter();
    const { styles } = useStyles();

    const { incidents } = useIncidentState();
    const { getIncidentList } = useIncidentActions();


    const { serviceProviders } = useServiceProviderState();
    const { getServiceProviderList } = useServiceProviderActions();


    useEffect(() => {
        getIncidentList();
        getServiceProviderList();
    }, [""]);


    return (
        <div className={styles.dashboardContainer}>
            <Row gutter={[20, 20]} className={styles.summaryRow}>
                <Col xs={24} sm={10} md={12}>
                    <Card className={styles.summaryCard}>
                        <h3>Incidents</h3>
                        <p className="count">{incidents?.length || 0}</p>
                        <p>Total Incidents</p>
                    </Card>
                </Col>
                <Col xs={24} sm={10} md={12}>
                    <Card className={styles.summaryCard}>
                        <h3>Service Providers</h3>
                        <p className="count">{serviceProviders?.length || 0}</p>
                        <p>Total Service Providers</p>
                    </Card>
                </Col>
            </Row>

            <Divider orientation="left">Quick Actions</Divider>
            <Row gutter={[16, 16]} className={styles.quickActionsRow}>
                <Col xs={24} sm={12}>
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
                <Col xs={24} sm={12}>
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
