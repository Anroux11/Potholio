"use client";

import { useState, useEffect } from "react";
import {
  Table,
  Button,
  Modal,
  Tag,
  Flex,
  Spin,
  Image
} from "antd/es";
import type { ColumnsType } from "antd/es/table";
import { useStyles } from "./style/styles";
import {
  useIncidentActions,
  useIncidentState,
} from "@/providers/incident-provider";
import { IIncident } from "@/providers/incident-provider/context";

const IncidentListPage = () => {
  const { styles } = useStyles();
  const { incidents, isPending } = useIncidentState();
  const { getIncidentList } = useIncidentActions();

  const [selectedIncident, setSelectedIncident] = useState<IIncident | null>(
    null
  );
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getIncidentList();
  }, []);

  const handleView = (incident: IIncident) => {
    setSelectedIncident(incident);
    setModalVisible(true);
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
      title: "City",
      key: "city",
      render: (_, record) => record.incidentAddress?.city || "-",
    },
    {
      title: "Province",
      key: "province",
      render: (_, record) => record.incidentAddress?.province || "-",
    },
    {
      title: "Municipality",
      key: "municipality",
      render: (_, record) => record.municipalityName || "-",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const color =
          status === "Submitted"
            ? "yellow"
            : status === "Completed"
              ? "blue"
              : "orange";
        return <Tag color={color}>{status}</Tag>;
      },
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
    <>
      {isPending ? (
        <Flex
          justify="center"
          align="center"
          style={{ width: "100%", height: "100vh" }}
        >
          <Spin size="large" />
        </Flex>
      ) : (
        <div className={styles.incidentContainer}>
          <Table
            columns={columns}
            dataSource={incidents}
            className={styles.incidentTable}
            rowKey="id"
            pagination={{ pageSize: 5 }}
          />

          <Modal
            title={selectedIncident ? `Reference No: ${selectedIncident.id}` : ""}
            open={modalVisible}
            onCancel={handleCancel}
            footer={
              <Button onClick={handleCancel} type="primary">
                Close
              </Button>
            }
          >
            {selectedIncident && (
              <>
                <p>
                  {selectedIncident.imageUrl && (
                    <Image
                      width={200}
                      src={selectedIncident.imageUrl}
                    />
                  )}
                </p>
                <p>
                  <strong>Description:</strong>{" "}
                  {selectedIncident.description}
                </p>
                <p>
                  <strong>Status:</strong> {selectedIncident.status}
                </p>
                <p>
                  <strong>City:</strong>{" "}
                  {selectedIncident.incidentAddress?.city || "-"}
                </p>
                <p>
                  <strong>Province:</strong>{" "}
                  {selectedIncident.incidentAddress?.province || "-"}
                </p>
                <p>
                  <strong>Municipality:</strong>{" "}
                  {selectedIncident.municipalityName || "-"}
                </p>
              </>
            )}
          </Modal>
        </div>
      )}
    </>
  );
};

export default IncidentListPage;
