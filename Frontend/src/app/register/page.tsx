"use client";

import React, { useState } from "react";
import "@ant-design/v5-patch-for-react-19";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
import { useStyles } from "./style/style";
import Image from "next/image";
import Typography from "antd/es/typography";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  PhoneOutlined,
  TeamOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { Form, Input, Button, Select, Divider } from "antd/es";

const RegistrationForm = () => {
  // const router = useRouter();
  const { styles } = useStyles();
  const [form] = Form.useForm();
  // const [loading, setLoading] = useState(false);
  const { Title } = Typography;
  const [isMunicipality, setIsMunicipality] = useState(false);
  const [isCitizen, setIsCitizen] = useState(false);

  const onChange = (value: string) => {
    if (value === "municipality") {
      setIsMunicipality(true);
      setIsCitizen(false);
    } else if (value === "citizen") {
      setIsCitizen(true);
      setIsMunicipality(false);
    }
  };

  return (
    <>
      <div className={styles.splitLeft}>
        <div className={styles.centered}>
          <Image
            src="/AppLogo-TransparentWhite.png"
            alt="Profile"
            width={300}
            height={300}
          ></Image>
          <Title>To Get Started, please register to Potholio.</Title>
        </div>
      </div>

      <div className={styles.splitRight}>
        {/* <div>
            <Flex
              justify="center"
              align="center"
              style={{ marginBottom: 20, width: "100%", height: "100vh" }}
            >
              <Spin size="large" />
            </Flex>
          </div> */}
        <div className={styles.page}>
          <div className={styles.form}>
            <Form
              form={form}
              name="register"
              // onFinish={handleRegister}
              scrollToFirstError
            >
              <h1 className={styles.heading}>Register</h1>
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Email"
                  prefix={<MailOutlined />}
                  className={styles.input}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                  {
                    type: "regexp",
                    pattern: new RegExp(
                      "(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
                    ),
                    // This regex requires at least one uppercase letter, one lowercase letter, one digit, and a minimum length of 8 characters
                    message: "Does not meet requirements",
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  className={styles.input}
                  size="large"
                  placeholder="Password"
                  prefix={<LockOutlined />}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
              <Divider>Please Select Role</Divider>
            
              <Form.Item
                name="role"
                // className={styles.select}
                rules={[{ required: true, message: "Please Select Role" }]}
                style={{ backgroundColor: "grey", background: "#0b192c" }}
              >
                <Select
                  size="large"
                  placeholder="Role"
                  onChange={onChange}
                  prefix={<UserOutlined />}
                >
                  <Select.Option value="citizen">Citizen</Select.Option>
                  <Select.Option value="municipality">
                    Municipality
                  </Select.Option>
                </Select>
              </Form.Item>

              {isMunicipality && (
                <div>
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please input Municipality Name!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Name of Municipality"
                      prefix={<TeamOutlined />}
                      className={styles.input}
                    />
                  </Form.Item>

                   <Form.Item
                name="address"
                rules={[
                  {
                    required: true,
                    message: "Please input address!",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Address of Municipality"
                  prefix={<EnvironmentOutlined />}
                  className={styles.input}
                />
              </Form.Item>

              <Form.Item
                name="contactNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input the phone number!",
                  },
                ]}
              >
                <Input
                  className={styles.input}
                  size="large"
                  placeholder="Contact Number"
                  prefix={<PhoneOutlined />}
                />
              </Form.Item>
              </div>
              )}

              {isCitizen && (
                <div>
                  {/* <Form form={form} name="register" scrollToFirstError> */}
                  <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="Username"
                    prefix={<UserOutlined />}
                    className={styles.input}
                  />
                </Form.Item>

                <Form.Item
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your First Name!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="First Name"
                    prefix={<UserOutlined />}
                    className={styles.input}
                  />
                </Form.Item>

                <Form.Item
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Last Name!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="Last Name"
                    prefix={<UserOutlined />}
                    className={styles.input}
                  />
                </Form.Item>
                </div>
              )}
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  style={{ width: "300px" }}
                  size="large"
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
