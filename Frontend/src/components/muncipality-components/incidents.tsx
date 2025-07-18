import React from "react";
import { Flex, List } from "antd/es";
import "@ant-design/v5-patch-for-react-19";

import Title from "antd/es/typography/Title";
import ViewIncident from "./view-incident";
import AssignIncident from "./assign-incident";

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

const IncidentList: React.FC = () => (
  <>
    <List
      header={<Title level={3}>Incident List</Title>}
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
              <ViewIncident/>
              <AssignIncident/>
            </Flex>
        </List.Item>
      )}
    />
  </>
);

export default IncidentList;
