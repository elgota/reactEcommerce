import { pool } from "../db.js";

export const getUser = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM user WHERE id = ?", [
    req.params.id,
  ]);

  if (result.length === 0) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  res.json(result[0]);
};

export const getUsers = async (req, res) => {
  const [result] = await pool.query(
    "SELECT * FROM user ORDER BY registeredAt ASC"
  );
  res.json(result);
};

export const createUser = async (req, res) => {
  const { nombre, apellido, telefono, email, passwordHash } = req.body;
  const [result] = await pool.query(
    "INSERT INTO user (nombre, apellido, telefono, email, passwordHash) VALUES (?, ?, ?, ?, ?)",
    [nombre, apellido, telefono, email, passwordHash]
  );
  res.json({
    id: result.insertId,
    nombre,
    apellido,
    telefono,
    email,
    passwordHash,
  });
};

export const updateUser = async (req, res) => {
  const [result] = await pool.query("UPDATE user SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  return res.sendStatus(204);
};

export const deleteUser = async (req, res) => {
  const [result] = await pool.query("DELETE FROM user WHERE id = ?", [
    req.params.id,
  ]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  return res.sendStatus(204);
};
