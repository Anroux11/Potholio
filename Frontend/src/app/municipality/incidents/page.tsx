"use client";

import { useEffect, useState } from "react";
import { Table, Button, Modal, Select, Space, Tag, message } from "antd/es";
import type { ColumnsType } from "antd/es/table";
import { useStyles } from "./style/styles";
import {
  useIncidentActions,
  useIncidentState,
} from "@/providers/incident-provider";
import { IIncident } from "@/providers/incident-provider/context";

const { Option } = Select;

const IncidentListPage = () => {
  const { styles } = useStyles();
  const { incidents } = useIncidentState();
  const { getIncidentList, updateIncident } = useIncidentActions();

  const [selectedIncident, setSelectedIncident] = useState<IIncident | null>(
    null
  );
  const serviceProvider = ["John Doe Construction", "BAW Roadworks", "Boxfusion Road Repair"];
  const [assignMode, setAssignMode] = useState(false);
  const [selectedServiceProvider, setSelectedServiceProvider] = useState<string>();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getIncidentList();
  }, []);

  const handleView = (incident: IIncident) => {
    setSelectedIncident(incident);
    setAssignMode(false);
    setSelectedServiceProvider(undefined);
    setModalVisible(true);
  };

  const handleAssign = () => {
    setAssignMode(true);
  };

  const handleConfirmAssign = () => {
    if (!selectedIncident || !selectedServiceProvider) return;

    // const updatedIncidents = incidents?.map((inc) =>
    //   inc.id === selectedIncident.id
    //     ? { ...inc, status: "Assigned", ServiceProvider: selectedServiceProvider }
    //     : inc
    // );

    const payload: IIncident = {
      ...selectedIncident,
      status: "Assigned",
      serviceProviderName: selectedServiceProvider,
    } 

    updateIncident(payload);
    setModalVisible(false);
    message.success(`Assigned to ${selectedServiceProvider}`);
  };

  const handleComplete = () => {
    if (!selectedIncident) return;

    // const updatedIncidents = incidents?.map((svrp) =>
    //   svrp.id === selectedIncident.id
    //     ? { ...svrp, status: "Completed" }
    //     : svrp
    // );

    const payload: IIncident = {
      ...selectedIncident,
      status: "Completed",
    }

    updateIncident(payload);
    setModalVisible(false);
    message.success(`Marked incident ${selectedIncident.id} as Completed`);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const columns: ColumnsType<IIncident> = [
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const color = status === "Assigned" ? "green" : status === "Completed" ? "blue" : "orange";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Service Provider",
      dataIndex: "serviceProvider",
      key: "serviceProvider",
      render: (srvP) => srvP || "-",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button type="link" onClick={() => handleView(record)}>
          View
        </Button>
      ),
    },
  ];

  return (
    <div className={styles.incidentContainer}>
      <Table
        columns={columns}
        dataSource={incidents}
        className={styles.incidentTable}
        rowKey="id"
      />

      <Modal
        title={selectedIncident ? `Incident: ${selectedIncident.id}` : ""}
        open={modalVisible}
        onCancel={handleCancel}
        footer={
          assignMode ? (
            <Space>
              <Button onClick={() => setAssignMode(false)}>Back</Button>
              <Button
                type="primary"
                disabled={!selectedServiceProvider}
                onClick={handleConfirmAssign}
              >
                Confirm Assignment
              </Button>
            </Space>
          ) : (
            <Space>
              {selectedIncident?.status === "Assigned" && (
                <Button type="primary" onClick={handleComplete}>
                  Mark as Completed
                </Button>
              )}
              {selectedIncident?.status !== "Completed" && (
                <Button onClick={handleAssign}>Assign</Button>
              )}
              <Button onClick={handleCancel}>Close</Button>
            </Space>
          )
        }
      >
        {selectedIncident && !assignMode && (
          <>
            <p><strong>Description:</strong> {selectedIncident.description}</p>
            <p><strong>Status:</strong> {selectedIncident.status}</p>
            <p><strong>Service Provider:</strong> {selectedIncident.serviceProviderName || "-"}</p>
          </>
        )}

        {assignMode && (
          <>
            <p>Select a Service Provider to assign this incident:</p>
            <Select
              placeholder="Select Service Provider"
              style={{ width: "100%" }}
              onChange={(value) => setSelectedServiceProvider(value)}
            >
              {serviceProvider.map((srvP, index) => (
                <Option key={index} value={srvP}>
                  {srvP}
                </Option>
              ))}
            </Select>
          </>
        )}
      </Modal>
    </div>
  );
};

export default IncidentListPage;
