import { pool } from "../db.js";

export const getProduct = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM product WHERE id = ?", [
    req.params.id,
  ]);

  if (result.length === 0) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(result[0]);
};

export const getProducts = async (req, res) => {
  const [result] = await pool.query(
    "SELECT * FROM product ORDER BY createdAt ASC"
  );
  res.json(result);
};

export const createProduct = async (req, res) => {
  const { title, summary } = req.body;
  const [result] = await pool.query(
    "INSERT INTO product (title, summary) VALUES (?, ?)",
    [title, summary]
  );
  res.json({ id: result.insertId, title, summary });
};

export const updateProduct = async (req, res) => {
  const [result] = await pool.query("UPDATE product SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Product not found" });
  }

  return res.sendStatus(204);
};

export const deleteProduct = async (req, res) => {
  const [result] = await pool.query("DELETE FROM product WHERE id = ?", [
    req.params.id,
  ]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Product not found" });
  }

  return res.sendStatus(204);
};
