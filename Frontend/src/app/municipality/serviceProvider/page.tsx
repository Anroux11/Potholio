"use client";

import { useState } from "react";
import { Table, Button, Modal, Form, Input, Space, message } from "antd/es";
import type { ColumnsType } from "antd/es/table";
import { useStyles } from "./style/styles";

type ServiceProvider = {
  key: string;
  name: string;
  email: string;
  contactNumber: string;
  address: string;
};

const ServiceProviderPage = () => {
  const { styles } = useStyles();

  const [serviceProviders, setServiceProviders] = useState<ServiceProvider[]>([
    { key: "1", name: "John Doe Construction", email: "JohnDoeConstruction@mail.com", contactNumber: "0112345678", address: "20 Main Road Johannesburg" },
    { key: "2", name: "BAW Roadworks", email: "BAW@mail.com", contactNumber: "0744562317", address: "6 Grad Road Pretoria" },
    { key: "2", name: "Boxfusion Road Repair", email: "BoxRoadRepair@mail.com", contactNumber: "0317789955", address: "67 Eve Avenue Centurion " },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleAddServiceProvider= () => {
    form.validateFields().then(values => {
      const newServP: ServiceProvider = {
        key: (serviceProviders.length + 1).toString(),
        name: values.name,
        email: values.email,
        contactNumber: values.contactNumber,
        address: values.address,
      };
      setServiceProviders([...serviceProviders, newServP]);
      setModalVisible(false);
      form.resetFields();
      message.success(`Added Service Provider ${values.name}`);
    });
  };

  const columns: ColumnsType<ServiceProvider> = [
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
