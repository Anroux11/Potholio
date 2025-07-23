"use client";

import { useState } from "react";
import { Table, Button, Modal, Form, Input, Space, message } from "antd/es";
import type { ColumnsType } from "antd/es/table";
import { useStyles } from "./style/styles";
import { IServiceProvider } from "@/providers/serviceProvider-provider/context";
import { useServiceProviderActions } from "@/providers/serviceProvider-provider";
import { Address } from "@/providers/incident-provider/context";

// type ServiceProvider = {
//   key: string;
//   name: string;
//   email: string;
//   contactNumber: string;
//   address: string;
// };

const ServiceProviderPage = () => {
  const { styles } = useStyles();

  const [serviceProviders, setServiceProviders] = useState<IServiceProvider[]>([]);

  const [modalVisible, setModalVisible] = useState(false);
  const { createServiceProvider } = useServiceProviderActions();
  const [form] = Form.useForm();

  const handleAddServiceProvider = () => {
    form.validateFields().then(values => {
      const addressPayload: Address = { city: values.city, province: values.province };
      const payload: IServiceProvider = {
        name: values.name,
        emailAddress: values.email,
        buildingAddress: addressPayload,
        password: values.password,
        latitude: values.latitude,
        longitude: values.longitude,
        municipalityId: values.municipalityId,
        municipalityName: values.municipalityName,
      }
      createServiceProvider(payload);
      setServiceProviders([...serviceProviders, payload]);
      setModalVisible(false);
      form.resetFields();
      message.success(`Added Service Provider ${values.name}`);
    });
  };

  const columns: ColumnsType<IServiceProvider> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Conatct Number",
      dataIndex: "contactNumber",
      key: "contactNumber",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
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
            name="contactNumber"
            label="Contact Number"
            rules={[{ required: true, message: "Please enter contact number" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: "Please enter the address" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ServiceProviderPage;
