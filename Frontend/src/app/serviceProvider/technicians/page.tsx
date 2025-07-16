"use client";

import { useState } from "react";
import { Table, Button, Modal, Form, Input, Space, message } from "antd/es";
import type { ColumnsType } from "antd/es/table";
import { useStyles } from "./style/styles";

type Technician = {
  key: string;
  name: string;
  email: string;
  contactNumber: string;
  employeeNumber: string;
};

const TechniciansPage = () => {
  const { styles } = useStyles();

  const [technicians, setTechnicians] = useState<Technician[]>([
    { key: "1", name: "John Doe", email: "johnd@service.com", contactNumber: "0732145568", employeeNumber: "00125" },
    { key: "2", name: "Jane Smith", email: "jane@service.com", contactNumber: "0744562317", employeeNumber: "00125" },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleAddTechnician = () => {
    form.validateFields().then(values => {
      const newTech: Technician = {
        key: (technicians.length + 1).toString(),
        name: values.name,
        email: values.email,
        contactNumber: values.contactNumber,
        employeeNumber: values.employeeNumber,
      };
      setTechnicians([...technicians, newTech]);
      setModalVisible(false);
      form.resetFields();
      message.success(`Added technician ${values.name}`);
    });
  };

  const columns: ColumnsType<Technician> = [
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
      title: "Employee Number",
      dataIndex: "employeeNumber",
      key: "empolyeeNumber",
    },
  ];

  return (
    <div className={styles.technicianContainer}>
      <div style={{ width: "100%", display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
        <h2 style={{ margin: 0 }}>Technicians List</h2>
        <Button type="primary" onClick={() => setModalVisible(true)}>
          Add Technician
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={technicians}
        className={styles.technicianTable}
        rowKey="key"
      />

      <Modal
        title="Add Technician"
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={
          <Space>
            <Button onClick={() => setModalVisible(false)}>Cancel</Button>
            <Button type="primary" onClick={handleAddTechnician}>
              Add
            </Button>
          </Space>
        }
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Technician Name"
            rules={[{ required: true, message: "Please enter technician name" }]}
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
            name="employeeNumber"
            label="Employee Number"
            rules={[{ required: true, message: "Please enter employee number" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TechniciansPage;
