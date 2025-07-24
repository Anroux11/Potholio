"use client";

import { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, Space, message, Flex, Spin } from "antd/es";
import type { ColumnsType } from "antd/es/table";
import { useStyles } from "./style/styles";
import { IServiceProvider } from "@/providers/serviceProvider-provider/context";
import { useServiceProviderActions, useServiceProviderState } from "@/providers/serviceProvider-provider";
import { Address } from "@/providers/incident-provider/context";


const ServiceProviderPage = () => {
  const { styles } = useStyles();

  const { serviceProviders } = useServiceProviderState();
  const { getServiceProviderList } = useServiceProviderActions();


  const [modalVisible, setModalVisible] = useState(false);
  const { createServiceProvider } = useServiceProviderActions();

  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();

  useEffect(() => {
    getServiceProviderList();
  }, [""]);

  const handleAddServiceProvider = async () => {
    setLoading(true);
    try {
      const values = await form.validateFields();
      const addressPayload: Address = { city: values.city, province: "Gauteng" };
      const payload: IServiceProvider = {
        name: values.name,
        email: values.email,
        address: addressPayload,
        password: values.password,
        latitude: "0",
        longitude: "0",
        municipalityName: sessionStorage.getItem("municipalityName") || "",
      };

      createServiceProvider(payload);
      setModalVisible(false);
      form.resetFields();
      message.success(`Added Service Provider ${values.name}`);
    } catch (error) {
      console.error("Error adding service provider:", error);
      message.error("Failed to add Service Provider");
    }

    setLoading(false);
  };

  const columns: ColumnsType<IServiceProvider> = [
    {
      title: "Name",
      key: "name",
      render: (_, record) => record.name || "-",
    },
    {
      title: "Email",
      key: "email",
      render: (_, record) => record.email || "-",
    },
    {
      title: "City",
      key: "address",
      render: (_, record) => record.address?.city
    },
    {
      title: "Province",
      key: "address",
      render: (_, record) => record.address?.province
    },
  ];

  return (
    <>
      {loading ? (
        <div>
          <Flex
            justify="center"
            align="center"
            style={{ height: "100vh" }}
          >
            <Spin size="large" />
          </Flex>
        </div>
      ) : (
        <div className={styles.serviceProviderContainer}>
          <div style={{ width: "100%", display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
            <h2 style={{ margin: 0 }}>Service Provider List</h2>
            <Button type="primary" onClick={() => setModalVisible(true)}>
              Add Service Provider
            </Button>
          </div>

          <Table
            columns={columns}
            dataSource={serviceProviders}
            className={styles.serviceProviderTable}
            rowKey="key"
            pagination={{ pageSize: 5 }}
          />

          <Modal
            title="Add Service Provider"
            open={modalVisible}
            onCancel={() => setModalVisible(false)}
            footer={
              <Space>
                <Button onClick={() => setModalVisible(false)}>Cancel</Button>
                <Button type="primary" onClick={handleAddServiceProvider}>
                  Add
                </Button>
              </Space>
            }
          >
            <Form form={form} layout="vertical">
              <Form.Item
                name="name"
                label="Service Provider Name"
                rules={[{ required: true, message: "Please enter Service Provider name" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: "Please enter email" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please enter the User's Password",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                name="city"
                label="City"
                rules={[{ required: true, message: "Please enter the address" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="province"
                label="Province"
                rules={[{ required: true, message: "Please enter the address" }]}
              >
                <Input />
              </Form.Item>
            </Form>
          </Modal>
        </div>
      )}
    </>
  );
};

export default ServiceProviderPage;
