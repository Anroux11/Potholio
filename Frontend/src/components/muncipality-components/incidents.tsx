import React from "react";
import { Avatar, Button, Flex, List } from "antd/es";
import Link from "next/link";

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

const IncidentList: React.FC = () => (
  <>
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar
                src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
              />
            }
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
          <Link
            href="/trainer/meal-plan-create"
            style={{ paddingRight: "0.4rem" }}
          >
            <Flex gap="small" wrap>
              <Button type="primary">View</Button>
            </Flex>
          </Link>
        </List.Item>
      )}
    />
  </>
);

export default IncidentList;
