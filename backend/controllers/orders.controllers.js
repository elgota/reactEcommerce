import { pool } from "../db.js";

export const getOrder = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM `order` WHERE id = ?", [
    req.params.id,
  ]);

  if (result.length === 0) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  res.json(result[0]);
};

export const getOrders = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM `order`");
  res.json(result);
};

export const createOrder = async (req, res) => {
  const { nombre, apellido, telefono, email, line1, line2, province, country } =
    req.body;
  const [result] = await pool.query(
    "INSERT INTO `order` (nombre, apellido, telefono, email, line1, line2, province, country) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [nombre, apellido, telefono, email, line1, line2, province, country]
  );
  res.json({
    id: result.insertId,
    nombre,
    apellido,
    telefono,
    email,
    line1,
    line2,
    province,
    country,
  });
};

export const updateOrder = async (req, res) => {
  const [result] = await pool.query("UPDATE `order` SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Orden no encontrada" });
  }

  return res.sendStatus(204);
};

export const deleteOrder = async (req, res) => {
  const [result] = await pool.query("DELETE FROM `order` WHERE id = ?", [
    req.params.id,
  ]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Orden no encontrada" });
  }

  return res.sendStatus(204);
};
