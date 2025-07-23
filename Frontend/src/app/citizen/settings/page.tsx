"use client";

import { useState } from "react";
import { Button, Modal, Form, Input, Divider, message } from "antd/es";

import { useStyles } from "./style/styles";
import router from "next/router";
import { ICitizen } from "@/providers/citizen-provider/context";
import { useCitizenActions } from "@/providers/citizen-provider";

// type ServiceProvider = {
//   key: string;
//   name: string;
//   email: string;
//   contactNumber: string;
//   address: string;
// };

const SettingsPage = () => {
  const { styles } = useStyles();
  const { updateCitizen } = useCitizenActions();
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [form] = Form.useForm();

  //   const handleAddServiceProvider= () => {
  //     form.validateFields().then(values => {
  //       const newServP: ServiceProvider = {
  //         key: (serviceProviders.length + 1).toString(),
  //         name: values.name,
  //         email: values.email,
  //         contactNumber: values.contactNumber,
  //         address: values.address,
  //       };
  //       setServiceProviders([...serviceProviders, newServP]);
  //       setModalVisible(false);
  //       form.resetFields();
  //       message.success(`Added Service Provider ${values.name}`);
  //     });
  //   };
  const handleUpdateDetails = async () => {
    try {
      const values = await form.validateFields();
      const payload: ICitizen = {
        userName: values.userName,
        name: values.name,
        surname: values.surname,
        emailAddress: values.emailAddress,
        roleName: values.roleName,
      };
      await updateCitizen(payload);

      router.push("/login");
    } catch (error) {
      console.error("Update error:", error);
      message.error("Something went wrong while updating your details.");
    }
  };

  const confirmDelete = () => {
    sessionStorage.clear();
    setDeleteModalVisible(false);
    router.push("/");
  };

  return (
    <>
      <div className={styles.updateContainer}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "start",
            marginBottom: "16px",
          }}
        >
          <h2 style={{ margin: 0 }}>Update your details?</h2>
        </div>
        <div style={{ width: "100%" }}>
          <Form layout="vertical" form={form}>
            <Form.Item
              name="userName"
              label="Username"
              rules={[
                {
                  required: true,
                  message: "Please enter your Username",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please enter your Name" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="surname"
              label="Surname"
              rules={[{ required: true, message: "Please enter your Surname" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="emailAddress"
              label="Email"
              rules={[{ required: true, message: "Please enter your Email" }]}
            >
              <Input />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              onClick={handleUpdateDetails}
            >
              Confirm Update
            </Button>

            <Divider>Delete your Account?</Divider>

            <Button
              type="default"
              danger
              htmlType="submit"
              block
              size="large"
              onClick={() => setDeleteModalVisible(true)}
            >
              Delete Account
            </Button>
          </Form>

          <Modal
            open={deleteModalVisible}
            title="Confirm Delete"
            onCancel={() => setDeleteModalVisible(false)}
            onOk={confirmDelete}
            okText="Yes, Delete"
            cancelText="Cancel"
          >
            <p>Are you sure you want to delete your account and Log Out?</p>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
