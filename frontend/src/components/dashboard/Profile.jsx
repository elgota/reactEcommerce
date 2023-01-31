import React, { useState } from "react";
import { Layout, Menu } from "antd";
import UserData from "./UserData";

const { Sider, Content } = Layout;

function Profile() {
  const [selectedKey, setSelectedKey] = useState("1");

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider>
        <Menu
          mode="inline"
          defaultSelectedKeys={[selectedKey]}
          onClick={({ key }) => setSelectedKey(key)}
        >
          <Menu.Item key="1">Mis Datos</Menu.Item>
          <Menu.Item key="2">Cambiar Contraseña</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content>
          <div
            style={{ overflowY: "scroll", height: "calc(100vh - 64px - 48px)" }}
          >
            {selectedKey === "2" ? <UserData /> : <UserData />}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Profile;
