"use client";

import { useEffect, useState } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Space,
  message,
  Select,
  FormProps,
  Flex,
  Spin,
} from "antd/es";
import type { ColumnsType } from "antd/es/table";
import { useStyles } from "./style/styles";
import { ICitizen } from "@/providers/citizen-provider/context";
import {
  useCitizenActions,
  useCitizenState,
} from "@/providers/citizen-provider";
import { useRegisterCitizenActions } from "@/providers/auth-provider";

type Citizen = {
  key: string;
  emailAddress: string;
  password: string;
  roleName: string;
  surname: string;
  userName: string;
  name: string;
};

type User = {
  key: string;
  emailAddress: string;
  password: string;
  roleName: string;
  surname: string;
  userName: string;
  name: string;
};

const AddUser = () => {
  const { styles } = useStyles();
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { registerCitizen } = useRegisterCitizenActions();
  const [form] = Form.useForm();
  const { getCitizenList } = useCitizenActions();

  const { citizens } = useCitizenState();

  const handleRegister: FormProps<Citizen>["onFinish"] = async (values) => {
    setLoading(true);
    try {
      const payload = {
        emailAddress: values.emailAddress,
        password: values.password,
        roleName: "Municipality",
        userName: values.userName,
        surname: values.surname,
        name: values.name,
      };
      await registerCitizen(payload);
      message.success("Registered successfully!");
    } catch (error) {
      console.error(error);
      message.error("Failed to add a user. Please try again.");
    }
    setLoading(false);
  };

  const handleAddUser = () => {
    form.validateFields().then((values) => {
      const newUser: User = {
        key: ((citizens?.length ?? 0) + 1).toString(),
        emailAddress: values.emailAddress,
        password: values.password,
        roleName: values.roleName,
        name: values.name,
        surname: values.surname,
        userName: values.userName,
      };
      handleRegister(newUser);
      setModalVisible(false);
      form.resetFields();
      message.success(`New User added Successfully`);
    });

  };

  useEffect(() => {
    // fetchCitizens();
    getCitizenList();
  }, [""]);

  // const fetchCitizens = async () => {
  //   await getCitizenList();
  // };

  const columns: ColumnsType<ICitizen> = [
    {
      title: "Name",
      key: "userName",
      render: (_, record) => record.userName || "-",
    },
    {
      title: "Surname",
      dataIndex: "surname",
      key: "name",
    },
    {
      title: "Email",
      key: "emailAddress",
      render: (_, record) => record.emailAddress || "-",
    },
    {
      title: "Municipality",
      dataIndex: "name",
      key: "userName",
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
        <div className={styles.serviceProviderContainer}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "16px",
            }}
          >
            <h2 style={{ margin: 0 }}>User List</h2>
            <Button type="primary" onClick={() => setModalVisible(true)}>
              Add User
            </Button>
          </div>

          <Table
            columns={columns}
            dataSource={citizens}
            className={styles.serviceProviderTable}
            pagination={{ pageSize: 6 }}
            rowKey="key"
          />
          {/* {citizens.length > 0 ? (
            <Table
              columns={columns}
              dataSource={citizens}
              className={styles.serviceProviderTable}
              rowKey="key"
            />
          ) : (
            <Empty description="No citizens found" />
          )} */}

          {/* <Table
            columns={columns}
            dataSource={citizens}
            className={styles.serviceProviderTable}
            rowKey="key"
          /> */}

          <Modal
            title="Add User"
            open={modalVisible}
            onCancel={() => setModalVisible(false)}
            footer={
              <Space>
                <Button onClick={() => setModalVisible(false)}>Cancel</Button>
                <Button type="primary" onClick={handleAddUser}>
                  Add
                </Button>
              </Space>
            }
          >
            <Form form={form} layout="vertical" onFinish={handleRegister}>
              <Form.Item
                name="emailAddress"
                label="Email"
                rules={[
                  { required: true, message: "Please enter the User's Email" },
                ]}
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
                <Input />
              </Form.Item>

              <Form.Item
                name="userName"
                label="User's Name"
                rules={[
                  { required: true, message: "Please enter the User's Name" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="surname"
                label="Surname"
                rules={[
                  {
                    required: true,
                    message: "Please enter the User's Surname",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="name"
                label="Choose Municipality"
                // className={styles.select}
                rules={[
                  {
                    required: true,
                    message: "Please Select Municipality",
                  },
                ]}
              >
                <Select
                //   onChange={onChange}
                //   className={styles.municipalitySelect}
                >
                  <Select.Option value="City of Ekurhuleni Metropolitan Municipality">
                    City of Ekurhuleni Metropolitan Municipality
                  </Select.Option>
                  <Select.Option value="City of Johannesburg Metropolitan Municipality">
                    City of Johannesburg Metropolitan Municipality
                  </Select.Option>
                  <Select.Option value="City of Tshwane Metropolitan Municipality">
                    City of Tshwane Metropolitan Municipality
                  </Select.Option>
                  <Select.Option value="Sedibeng District Municipality">
                    Sedibeng District Municipality
                  </Select.Option>
                  <Select.Option value="West Rand District Municipality">
                    West Rand District Municipality
                  </Select.Option>
                </Select>
              </Form.Item>
            </Form>
          </Modal>
        </div>
      )}
    </>
  );
};

export default AddUser;
