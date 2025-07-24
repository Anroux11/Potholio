"use client";

import { Row, Col, Card, Button, Divider } from "antd/es";
import { useRouter } from "next/navigation";

import { useStyles } from "./style/styles";
import { useIncidentState, useIncidentActions } from "@/providers/incident-provider";
import {  useServiceProviderActions } from "@/providers/serviceProvider-provider";
import { useEffect } from "react";
import ServicePIncidentList from "@/components/service-provider-components/service-provider-incidents";

const ServiceProviderPage = () => {
    const router = useRouter();
    const { styles } = useStyles();

    const { incidents } = useIncidentState();
    const { getIncidentList } = useIncidentActions();

    const { getServiceProviderList } = useServiceProviderActions();

    useEffect(() => {
        getIncidentList();
        getServiceProviderList();
    }, [""]);

    return (
        <div className={styles.dashboardContainer}>
            <Row gutter={[16, 16]} className={styles.summaryRow}>
                <Col xs={24} sm={30} md={10}>
                    <Card className={styles.summaryCard}>
                        <h3>Incidents</h3>
                        <p className="count">{incidents?.length || 0}</p>
                        <p>Total Incidents</p>
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
                        type="dashed"
                        size="large"
                        block
                        className={styles.quickActionButton}
                        onClick={() => router.push("./gemini")}
                    >
                        Interact with AI
                    </Button>
                </Col>
            </Row>

            <Divider orientation="left">Recent Incidents</Divider>
            <Card className={styles.incidentCard}>
                <ServicePIncidentList />
            </Card>
        </div>
    );
};

export default ServiceProviderPage;
