"use client";

import { useEffect, useState } from "react";
import { Table, Button, Modal, Select, Space, Tag, message } from "antd/es";
import type { ColumnsType } from "antd/es/table";
import { useStyles } from "../../app/municipality/incidents/style/styles";
import {
  useIncidentActions,
  useIncidentState,
} from "@/providers/incident-provider";
import { IIncident } from "@/providers/incident-provider/context";
import { IServiceProvider } from "@/providers/serviceProvider-provider/context";
import { useServiceProviderActions, useServiceProviderState } from "@/providers/serviceProvider-provider";
import "@ant-design/v5-patch-for-react-19";

const { Option } = Select;

const IncidentList = () => {
  const { styles } = useStyles();
  const { incidents } = useIncidentState();
  const { getIncidentList, updateIncident } = useIncidentActions();

  const { serviceProviders } = useServiceProviderState();
  const { getServiceProviderList } = useServiceProviderActions();

  const [selectedIncident, setSelectedIncident] = useState<IIncident | null>(
    null
  );
  
  const [selectedServiceProvider, setSelectedServiceProvider] = useState<IServiceProvider | null>(
    null
  )
  const [assignMode, setAssignMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getIncidentList();
    getServiceProviderList();
  }, [""]);


  const handleView = (incident: IIncident, serviceProvider?: IServiceProvider) => {
    setSelectedIncident(incident);
    setAssignMode(false);
    setSelectedServiceProvider(serviceProvider ?? null);
    setModalVisible(true);
  };

  const handleAssign = () => {
    setAssignMode(true);
  };

  const handleConfirmAssign = () => {
    if (!selectedIncident || !selectedServiceProvider) return;

    const payload: IIncident = {
      ...selectedIncident,
      status: "Assigned",
      serviceProviderName: selectedServiceProvider?.name,
    } 

    updateIncident(payload);
    setModalVisible(false);
    message.success(`Assigned to ${selectedServiceProvider.name}`);
  };

  const handleComplete = () => {
    if (!selectedIncident) return;

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
        <Button type="link" onClick={() => handleView(record, serviceProviders?.find(sp => sp.name === record.serviceProviderName))}>
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
        pagination={{ pageSize: 3 }}
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
              onChange={(value) =>
                setSelectedServiceProvider(serviceProviders?.find((sp) => sp.id === value) || null)
              }
              value={selectedServiceProvider?.id}
            >
              {serviceProviders?.map((srvP) => (
                <Option key={srvP.id} value={srvP.id}>
                  {srvP.name}
                </Option>
              ))}
            </Select>
          </>
        )}
      </Modal>
    </div>
  );
};

export default IncidentList;
