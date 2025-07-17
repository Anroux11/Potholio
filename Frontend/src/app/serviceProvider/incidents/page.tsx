"use client";

import { useState } from "react";
import { Table, Button, Modal, Select, Space, Tag, message } from "antd/es";
import type { ColumnsType } from "antd/es/table";
import { useStyles } from "./style/styles";

const { Option } = Select;

type Incident = {
  key: string;
  id: string;
  description: string;
  status: string;
  technician?: string;
};

const IncidentListPage = () => {
  const { styles } = useStyles();

  const [incidents, setIncidents] = useState<Incident[]>([
    { key: "1", id: "1a037009-1650-43be-9232-0bb8d446754e", description: "Pothole on Black Reef Rd", status: "Pending" },
    { key: "2", id: "INC002", description: "Big Pothole on Grey Ave", status: "Pending" },
    { key: "3", id: "INC003", description: "Pothole on Oak Ave.", status: "Pending" },
  ]);

  const technicians = ["John Doe", "Jane Smith", "Mike Johnson"];

  const [selectedIncident, setSelectedIncident] = useState<Incident | null>(null);
  const [assignMode, setAssignMode] = useState(false);
  const [selectedTechnician, setSelectedTechnician] = useState<string>();
  const [modalVisible, setModalVisible] = useState(false);

  const handleView = (incident: Incident) => {
    setSelectedIncident(incident);
    setAssignMode(false);
    setSelectedTechnician(undefined);
    setModalVisible(true);
  };

  const handleAssign = () => {
    setAssignMode(true);
  };

  const handleConfirmAssign = () => {
    if (!selectedIncident || !selectedTechnician) return;

    const updatedIncidents = incidents.map((inc) =>
      inc.id === selectedIncident.id
        ? { ...inc, status: "Assigned", technician: selectedTechnician }
        : inc
    );

    setIncidents(updatedIncidents);
    setModalVisible(false);
    message.success(`Assigned to ${selectedTechnician}`);
  };

  const handleComplete = () => {
    if (!selectedIncident) return;

    const updatedIncidents = incidents.map((inc) =>
      inc.id === selectedIncident.id
        ? { ...inc, status: "Completed" }
        : inc
    );

    setIncidents(updatedIncidents);
    setModalVisible(false);
    message.success(`Marked incident ${selectedIncident.id} as Completed`);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const columns: ColumnsType<Incident> = [
    {
      title: "Incident ID",
      dataIndex: "id",
      key: "id",
    },
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
      title: "Technician",
      dataIndex: "technician",
      key: "technician",
      render: (tech) => tech || "-",
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
                disabled={!selectedTechnician}
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
            <p><strong>Technician:</strong> {selectedIncident.technician || "-"}</p>
          </>
        )}

        {assignMode && (
          <>
            <p>Select a technician to assign this incident:</p>
            <Select
              placeholder="Select technician"
              style={{ width: "100%" }}
              onChange={(value) => setSelectedTechnician(value)}
            >
              {technicians.map((tech, index) => (
                <Option key={index} value={tech}>
                  {tech}
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
