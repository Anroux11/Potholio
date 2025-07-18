"use client";

import { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Form,
  Input,
  message,
  Modal,
  Select,
  Space,
  Spin,
  Upload,
} from "antd/es";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { PlusOutlined } from "@ant-design/icons";

type FullReport = {
  // key: string;
  description: string;
  status: string;
  imageUrl: string;
  latitude: string;
  longitude: string;
  municipalityId: string;
};

const CitizenMap = dynamic(
  () => import("@/components/citizen-components/citizen-map"),
  {
    ssr: false,
  }
);

const CitizenDashboard: React.FC = () => {
  const router = useRouter();
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [quickReportModalVisible, setQuickReportModalVisible] = useState(false);
  const [fullReportModalVisible, setFullReportModalVisible] = useState(false);

  const [form] = Form.useForm();

  const [fullReport, setFullReport] = useState<FullReport[]>([
    {
      description: "Pothole on main reef road",
      status: "Submitted",
      imageUrl: "",
      latitude: "-26.027636",
      longitude: "28.071350",
      municipalityId: "Johannesburg Municipality",
    },
    {
      description: "Pothole on main reef road",
      status: "Submitted",
      imageUrl: "",
      latitude: "-26.027636",
      longitude: "28.071350",
      municipalityId: "Johannesburg Municipality",
    },
  ]);

  const handleAddFullReport = () => {
    form.validateFields().then((values) => {
      const newFull: FullReport = {
        description: values.description,
        status: values.status,
        imageUrl: values.imageUrl,
        latitude: values.latitude,
        longitude: values.longitude,
        municipalityId: values.municipalityId,
      };
      setFullReport([...fullReport, newFull]);
      setFullReportModalVisible(false);
      form.resetFields();
      message.success(`Added Full Report`);
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords: [number, number] = [
          pos.coords.latitude,
          pos.coords.longitude,
        ];
        setPosition(coords);
        sessionStorage.setItem("coords", JSON.stringify(coords));
        sessionStorage.setItem("latitude", coords[0].toString());
        sessionStorage.setItem("longitude", coords[1].toString());
        reverseGeocode(coords[0], coords[1]);
      },
      () => {
        message.error("Failed to retrieve your location.");
      }
    );
  }, []);

  const confirmQuickReport = () => {
    setQuickReportModalVisible(false);
    router.push("/citizen/report");
  };

  const reverseGeocode = async (lat: number, lon: number) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
      );
      const data = await response.json();
      const geoAddress = data.address || {};

      const newProvince = geoAddress.state || "";
      const newCity =
        geoAddress.city || geoAddress.town || geoAddress.village || "";
      const newMunicipality =
        geoAddress.county || geoAddress.municipality || "";

      setAddress(data.display_name || "");
      setProvince(newProvince);
      setCity(newCity);
      setMunicipality(newMunicipality);

      sessionStorage.setItem("province", newProvince);
      sessionStorage.setItem("city", newCity);
      sessionStorage.setItem("municipality", newMunicipality);
    } catch {
      message.error("Unable to get address details");
    }
  };

  const handleSearch = async () => {
    if (!searchValue.trim()) return;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          searchValue
        )}`
      );
      const results = await response.json();

      if (results.length === 0) {
        message.error("Location not found");
        return;
      }

      const coords: [number, number] = [
        parseFloat(results[0].lat),
        parseFloat(results[0].lon),
      ];
      setPosition(coords);
      sessionStorage.setItem("coords", JSON.stringify(coords));
      sessionStorage.setItem("latitude", coords[0].toString());
      sessionStorage.setItem("longitude", coords[1].toString());
      reverseGeocode(coords[0], coords[1]);
    } catch {
      message.error("Search failed");
    }
  };

  const handleCreateIncident = () => {
    setFullReportModalVisible(true);
  };

  const handleQuickReport = () => {
    setQuickReportModalVisible(true);
  };

  const handleMarkerDragEnd = (coords: [number, number]) => {
    setPosition(coords);
    sessionStorage.setItem("coords", JSON.stringify(coords));
    sessionStorage.setItem("latitude", coords[0].toString());
    sessionStorage.setItem("longitude", coords[1].toString());
    reverseGeocode(coords[0], coords[1]);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  if (!position) {
    return (
      <div>
        <Flex
          justify="center"
          align="center"
          style={{ marginBottom: 20, width: "100%", height: "100vh" }}
        >
          <Spin size="large" />
        </Flex>
      </div>
    );
  }

  return (
    <div style={{ padding: 24 }}>
      <h2>Citizen Dashboard</h2>

      <Space direction="vertical" style={{ width: "100%", marginBottom: 12 }}>
        <Input.Search
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onSearch={handleSearch}
          placeholder="Search for location"
          enterButton
        />
        <div>
          <strong>Address:</strong> {address}
        </div>
        <div>
          <strong>Coordinates:</strong> {position[0].toFixed(6)},{" "}
          {position[1].toFixed(6)}
        </div>
        <div>
          <strong>Province:</strong> {province}
        </div>
        <div>
          <strong>City:</strong> {city}
        </div>
        <div>
          <strong>Municipality:</strong> {municipality}
        </div>
      </Space>

      <CitizenMap position={position} onMarkerDragEnd={handleMarkerDragEnd} />

      <Button
        type="primary"
        block
        style={{ marginTop: 16 }}
        onClick={handleQuickReport}
      >
        Quick Report
      </Button>

      <Button
        type="default"
        block
        style={{ marginTop: 8 }}
        onClick={handleCreateIncident}
      >
        Full Report
      </Button>

      <Modal
        open={quickReportModalVisible}
        title="Confirm Quick Report"
        onCancel={() => setQuickReportModalVisible(false)}
        onOk={confirmQuickReport}
        okText="Yes, Create Report"
        cancelText="Cancel"
      >
        <p>Are you sure you want to create this quick report?</p>
      </Modal>

      <Modal
        title="Add Full Report"
        open={fullReportModalVisible}
        onCancel={() => setFullReportModalVisible(false)}
        footer={
          <Space>
            <Button onClick={() => setFullReportModalVisible(false)}>
              Cancel
            </Button>
            <Button type="primary" onClick={handleAddFullReport}>
              Submit
            </Button>
          </Space>
        }
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="description"
            label="Description"
            rules={[
              { required: true, message: "Please enter report description" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: "Please enter status" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload action="/upload.do" listType="picture-card">
              <button
                style={{
                  color: "inherit",
                  cursor: "inherit",
                  border: 0,
                  background: "none",
                }}
                type="button"
              >
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="latitude"
            label="Latitude"
            rules={[{ required: true, message: "Please enter latitude" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="longitude"
            label="Longitude"
            rules={[{ required: true, message: "Please enter longitude" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="name"
            label="Service Provider"
            rules={[
              {
                required: true,
                message: "Please Select Municipality",
              },
            ]}
          >
            <Select>
              <Select.Option value="City of Johannesburg Metropolitan Municipality">
                City of Johannesburg Metropolitan Municipality
              </Select.Option>
              <Select.Option value="eThekwini Metropolitan Municipality">
                eThekwini Metropolitan Municipality
              </Select.Option>
              <Select.Option value="Mangaung Metropolitan Municipalityame">
                Mangaung Metropolitan Municipality
              </Select.Option>
              <Select.Option value="Buffalo City Metropolitan Municipality">
                Buffalo City Metropolitan Municipality
              </Select.Option>
              <Select.Option value="Capricorn District Municipality">
                Capricorn District Municipality
              </Select.Option>
              <Select.Option value="City of Matlosana Local Municipality">
                City of Matlosana Local Municipality
              </Select.Option>
              <Select.Option value="Frances Baard District Municipality">
                Frances Baard District Municipality
              </Select.Option>
              <Select.Option value="City of Cape Town Metropolitan Municipality">
                City of Cape Town Metropolitan Municipality
              </Select.Option>
            </Select>
          </Form.Item>

          {/* <Form.Item label="Select">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item> */}
        </Form>
      </Modal>
    </div>
  );
};

export default CitizenDashboard;
