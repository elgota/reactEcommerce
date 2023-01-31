import React, { useState } from "react";
import { Layout, Menu } from "antd";
import AddProduct from "./AddProduct";
import MyProducts from "./MyProducts";

const { Sider, Content } = Layout;

const Dashboard = () => {
  const [selectedKey, setSelectedKey] = useState("1");

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider>
        <Menu
          mode="inline"
          defaultSelectedKeys={[selectedKey]}
          onClick={({ key }) => setSelectedKey(key)}
        >
          <Menu.Item key="1">Mis Productos</Menu.Item>
          <Menu.Item key="2">Publicar Producto</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content>
          <div
            style={{ overflowY: "scroll", height: "calc(100vh - 64px - 48px)" }}
          >
            {selectedKey === "2" ? <AddProduct /> : <MyProducts />}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
