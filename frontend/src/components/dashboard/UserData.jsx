import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useAuthContext } from "./../../contexts/authContext";
import { updateUserRequest } from "../../api/user.api";

function UserData() {
  const { user, changeUser } = useAuthContext();
  const [formData, setFormData] = useState(user);
  //console.log(formData);
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function updateUser() {
    changeUser(formData);
    await updateUserRequest(user.id, formData);
  }

  async function handleSave() {
    setFormData({
      firstName: formData.firstName,
      middleName: formData.middleName,
      lastName: formData.lastName,
      mobile: formData.mobile,
      email: formData.email,
      profile: formData.profile,
    });
    console.log("formData");
    console.log(formData);
    updateUser();
  }

  return (
    <Form>
      <Form.Item label="Primer Nombre">
        <Input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item label="Segundo Nombre">
        <Input
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item label="Apellidos">
        <Input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item label="Teléfono">
        <Input name="mobile" value={formData.mobile} onChange={handleChange} />
      </Form.Item>
      <Form.Item label="Email">
        <Input name="email" value={formData.email} onChange={handleChange} />
      </Form.Item>
      <Form.Item label="Descripción">
        <Input
          name="profile"
          value={formData.profile}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={handleSave}>
          Guardar Cambios
        </Button>
      </Form.Item>
    </Form>
  );
}

export default UserData;
