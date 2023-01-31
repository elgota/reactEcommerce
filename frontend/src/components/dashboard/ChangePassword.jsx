import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useAuthContext } from "./../../contexts/authContext";
import { updateUserRequest } from "../../api/user.api";

function ChangePassword() {
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
      passwordHash: formData.passwordHash,
    });
    console.log("formData");
    console.log(formData);
    updateUser();
  }

  return (
    <Form>
      <Form.Item label="Nueva contraseña">
        <Input name="passwordHash" onChange={handleChange} type="password"/>
      </Form.Item>

      <Form.Item>
        <Button type="primary" onClick={handleSave}>
          Guardar Cambios
        </Button>
      </Form.Item>
    </Form>
  );
}

export default ChangePassword;
