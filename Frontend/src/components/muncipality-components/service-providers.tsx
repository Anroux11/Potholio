import React from "react";
import { Flex, List } from "antd/es";
import "@ant-design/v5-patch-for-react-19";

import Title from "antd/es/typography/Title";
import ViewServiceProvider from "./view-service-provider";
import CreateServiceProvider from "./add-service-provider";

const data = [
  {
    status: "submitted",
    description: "Pothole on core of baker street"
  },
  {
    status: "In-progress",
    description: "Pothole on core of baker street"
  },
  {
    status: "Completed",
    description: "Pothole on core of baker street"
  },
  {
    status: "submitted",
    description: "Pothole on core of baker street"
  },
  
];

const ServiceProviderList: React.FC = () => (
  <>
      <CreateServiceProvider/>
    <List
      header={<Title level={3}>Service Provider List</Title>}
      itemLayout="horizontal"
      dataSource={data}
      pagination={{ pageSize: 6 }}
      renderItem={(data) => (
        <List.Item>
          <List.Item.Meta
            title={data.description}
          />
          <List.Item.Meta title={data.status} />
            <Flex gap="small" wrap>
              <ViewServiceProvider/>
            </Flex>
        </List.Item>
        
      )}
    />
  </>
);

export default ServiceProviderList;
