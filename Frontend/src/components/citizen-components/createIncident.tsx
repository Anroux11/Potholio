// "use client";

// import React, { useState } from "react";
// import {
//   Button,
//   Flex,
//   Form,
//   FormProps,
//   Input,
//   message,
//   Modal,
//   Space,
//   Spin,
//   Upload,
// } from "antd/es";
// import {  useIncidentActions } from "../../providers/incident-provider"
// import { PlusOutlined } from "@ant-design/icons";
// import "@ant-design/v5-patch-for-react-19";

// const CreateIncident: React.FC = () => {
//   const [loading, setLoading] = useState(false);
//   const [form] = Form.useForm();
//   const { createIncident } = useIncidentActions();
//   const[fullReportModalVisible, setFullReportModalVisible] = useState(false);
 

//   type FieldType = {
//     id?: string;
//     description: string;
//     status?: string;
//     imageUrl?: string;
//     latitude: number;
//     longitude: number
//     city?: string;
//     province?: string;
//     municipality?: string;
//   };

//   const handleCreateIncident: FormProps<FieldType>["onFinish"] = async (values) => {
//     setLoading(true);
//     try {
//       const payload = {
//         description: values.description,
//         status: values.status,
//         imageUrl: values.imageUrl,
//         latitude: values.latitude,
//         longitude: values.longitude,
//         city: values.city,
//         province: values.province,
//         municipality: values.municipality
//       };

//       await createIncident(payload);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       console.log("Error creating Incident:: ", error);
//       message.error("Creating Incident failed");
//     }
//     setFullReportModalVisible(false);
//   };

// //   const showModal = () => {
// //     setFullReportModalVisible(true);
// //   };

//   const handleCancel = () => {
//     form.resetFields();
//     setFullReportModalVisible(false);
//   };

// //   const formItemLayout = {
// //     labelCol: {
// //       xs: { span: 24 },
// //       sm: { span: 6 },
// //     },
// //     wrapperCol: {
// //       xs: { span: 24 },
// //       sm: { span: 14 },
// //     },
// //   };

//    // eslint-disable-next-line @typescript-eslint/no-explicit-any
//    const normFile = (e: any) => {
//     if (Array.isArray(e)) {
//       return e;
//     }
//     return e?.fileList;
//   };

//   return (
//     <>
//       {loading ? (
//         <div>
//           <Flex
//             justify="center"
//             align="center"
//             style={{ marginBottom: 20, width: "100%", height: "100vh" }}
//           >
//             <Spin size="large" />
//           </Flex>
//         </div>
//       ) : (
//         <>

//         <Modal
//         title="Add Full Report"
//         open={fullReportModalVisible}
//         onCancel={() => handleCancel}
//         footer={
//           <Space>
//             <Button onClick={() => setFullReportModalVisible(false)}>
//               Cancel
//             </Button>
//             <Button type="primary" >
//               Submit
//             </Button>
//           </Space>
//         }
//       >
//         <Form form={form} layout="vertical"
//         onFinish={handleCreateIncident}>
//           <Form.Item
//             name="description"
//             label="Description"
//             rules={[
//               { required: true, message: "Please enter report description" },
//             ]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             name="status"
//             label="Status"
//             rules={[{ required: true, message: "Please enter status" }]}
//           >
//             <Input />
//           </Form.Item>

//           <Form.Item
//             label="Upload"
//             valuePropName="fileList"
//             getValueFromEvent={normFile}
//           >
//             <Upload action="/upload.do" listType="picture-card">
//               <button
//                 style={{
//                   color: "inherit",
//                   cursor: "inherit",
//                   border: 0,
//                   background: "none",
//                 }}
//                 type="button"
//               >
//                 <PlusOutlined />
//                 <div style={{ marginTop: 8 }}>Upload</div>
//               </button>
//             </Upload>
//           </Form.Item>

//           <Form.Item name="province" label="Province">
//             <Input readOnly  />
//           </Form.Item>

//           <Form.Item name="city" label="City">
//             <Input readOnly  />
//           </Form.Item>

//           <Form.Item
//             name="municipalityId"
//             label="Municipality"
//             rules={[
//               {
//                 required: true,
//                 message: "Municipality is required",
//               },
//             ]}
//           >
//             <Input readOnly />
//           </Form.Item>

//           {/* <Form.Item label="Select">
//             <Select>
//               <Select.Option value="demo">Demo</Select.Option>
//             </Select>
//           </Form.Item> */}
//         </Form>
//       </Modal>
//         </>
//       )}
//     </>
//   );
// };

// export default CreateIncident;
