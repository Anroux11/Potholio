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
      <Row gutter={[16, 16]} className={styles.summaryRow}>
        <Col xs={24} sm={12} md={8}>
          <Card className={styles.summaryCard}>
            <h3>Total Incidents</h3>
            <p className="count">24</p>
            <p>Open issues</p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card className={styles.summaryCard}>
            <h3>Technicians</h3>
            <p className="count">8</p>
            <p>Assigned technicians</p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card className={styles.summaryCard}>
            <h3>Active Service Areas</h3>
            <p className="count">5</p>
            <p>Regions covered</p>
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
            onClick={() => router.push("/reports")}
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
            onClick={() => router.push("/add-technician")}
          >
            Add Technician
          </Button>
        </Col>
        <Col xs={24} sm={8}>
          <Button
            type="dashed"
            size="large"
            block
            className={styles.quickActionButton}
            onClick={() => router.push("/technicians")}
          >
            View all Technicians
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
