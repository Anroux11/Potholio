"use client";

import React, { useState } from "react";
import "@ant-design/v5-patch-for-react-19";
// import Image from "next/image";
import { useRouter } from "next/navigation";
import { useStyles } from "./style/style";
import Image from "next/image";
import Typography from "antd/es/typography";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Select,
  Divider,
  FormProps,
  message,
  Flex,
  Spin,
} from "antd/es";
import {
  useRegisterCitizenActions,
  useRegisterMunicipalityActions,
} from "@/providers/auth-provider";

type FieldType = {
  emailAddress: string;
  password: string;
  roleName: string;
  name: string;
  surname: string;
  address: string;
  contactNumber: number;
  userName: string;
};

const RegistrationForm = () => {
  const router = useRouter();
  const { styles } = useStyles();
  const [form] = Form.useForm();
  // const [loading, setLoading] = useState(false);
  const { Title } = Typography;
  const [isMunicipality, setIsMunicipality] = useState(false);
  const [isCitizen, setIsCitizen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { registerMunicipality } = useRegisterMunicipalityActions();
  const { registerCitizen } = useRegisterCitizenActions();

  const onChange = (value: string) => {
    if (value === "municipality") {
      setIsMunicipality(true);
      setIsCitizen(false);
    } else if (value === "citizen") {
      setIsCitizen(true);
      setIsMunicipality(false);
    }
  };

  const handleRegister: FormProps<FieldType>["onFinish"] = async (values) => {
    setLoading(true);
    if (isMunicipality) {
      try {
        const payload = {
          emailAddress: values.emailAddress,
          password: values.password,
          roleName: "Municipality",
          name: values.name,
          userName: values.userName,
          surname: values.surname,
          address: values.address,
          contactNumber: values.contactNumber,
        };
        await registerMunicipality(payload);
        message.success("Registered successfully!");
        router.push("/login");
      } catch (error) {
        console.log("Register error:: ", error);
        message.error("Register failed. Please try again.");
      }
      setLoading(false);
      return router.push("/login");
    } else if (isCitizen) {
      try {
        const payload = {
          emailAddress: values.emailAddress,
          password: values.password,
          roleName: "Citizen",
          userName: values.userName,
          name: values.name,
          surname: values.surname,
        };
        await registerCitizen(payload);
        message.success("Registered successfully!");
        router.push("/login");
      } catch (error) {
        console.log("Register error:: ", error);
        message.error("Register failed. Please try again.");
      }
      setLoading(false);
      return router.push("/login");
    }
  };
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
            <div className={styles.page}>
              <div className={styles.form}>
                <Form
                  form={form}
                  name="register"
                  onFinish={handleRegister}
                  scrollToFirstError
                >
                  <h1 className={styles.heading}>Register</h1>
                  <Form.Item
                    name="emailAddress"
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
                        // className={styles.select}
                        rules={[
                          {
                            required: true,
                            message: "Please Select Municipality",
                          },
                        ]}
                        style={{
                          backgroundColor: "grey",
                          background: "#0b192c",
                        }}
                      >
                        <Select
                          size="large"
                          placeholder="Choose Municipality"
                          onChange={onChange}
                          prefix={<UserOutlined />}
                          className={styles.municipalitySelect}
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

                       <Form.Item
                        name="userName"
                        rules={[
                          {
                            required: true,
                            message: "Please input your name!",
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
                        name="surname"
                        rules={[
                          {
                            required: true,

                            message: "Please input your surname!",
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder="surname"
                          prefix={<UserOutlined />}
                          className={styles.input}
                        />
                      </Form.Item>
                    </div>
                  )}

                  {isCitizen && (
                    <div>
                      {/* <Form form={form} name="register" scrollToFirstError> */}
                      <Form.Item
                        name="userName"
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
                        name="name"
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
                        name="surname"
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
      )}
    </>
  );
};

export default RegistrationForm;
