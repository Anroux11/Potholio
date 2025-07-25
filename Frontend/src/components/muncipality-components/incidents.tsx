"use client";

import { useEffect, useState } from "react";
import { Table, Button, Modal, Select, Space, Tag, message, Flex, Spin } from "antd/es";
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

const IncidentList = ({ incidents: passedIncidents }: { incidents?: IIncident[] }) => {
  const { styles } = useStyles();
  const { incidents: contextIncidents } = useIncidentState();
  const incidents = passedIncidents ?? contextIncidents;
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getIncidentList();
    getServiceProviderList();
  }, [IncidentList]);


  const handleView = (incident: IIncident, serviceProvider?: IServiceProvider) => {
    setSelectedIncident(incident);
    setAssignMode(false);
    setSelectedServiceProvider(serviceProvider ?? null);
    setModalVisible(true);
  };

  const handleAssign = () => {
    setAssignMode(true);
  };

  const handleConfirmAssign = async () => {
    setLoading(true);
    try {
      if (!selectedIncident || !selectedServiceProvider) return;

      const payload: IIncident = {
        ...selectedIncident,
        status: "Assigned",
        serviceProviderName: selectedServiceProvider?.name,
      }
      await updateIncident(payload);
      setModalVisible(false);
      message.success(`Assigned to ${selectedServiceProvider.name}`);
      getIncidentList();
    } catch (error) {

      console.error(error);
      message.error("Assigning Incident failed");
    }

    setLoading(false);
  };

  const handleComplete = async () => {
    setLoading(true);
    try {
      if (!selectedIncident) return;

      const payload: IIncident = {
        ...selectedIncident,
        status: "Completed",
      }

      await updateIncident(payload);
      setModalVisible(false);
      message.success(`Marked incident ${selectedIncident.id} as Completed`);
      getIncidentList();
    } catch (error) {
      console.error(error);
      message.error("Completing Incident failed");
    }

    setLoading(false);
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
      dataIndex: "serviceProviderName",
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
    <>
      {loading ? (
        <div>
          <Flex
            justify="center"
            align="center"
            style={{ marginBottom: 20, width: "100%", height: "100vh" }}
          >
            <Spin size="large" />
          </Flex>
        </div>
      ) : (
        <div className={styles.incidentContainer}>
          <Table
            columns={columns}
            dataSource={incidents}
            className={styles.incidentTable}
            pagination={{ pageSize: 5 }}
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
                <p>
                  {selectedIncident.imageUrl && (
                    <div style={{ marginTop: 16 }}>
                      <img
                        src={selectedIncident.imageUrl}
                        alt="Incident"
                        width={200}
                        style={{ borderRadius: 8, objectFit: "cover" }}
                      />
                    </div>
                  )}

                </p>
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
      )}
    </>
  );
};

export default IncidentList;
