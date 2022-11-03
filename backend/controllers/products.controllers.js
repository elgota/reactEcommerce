import { pool } from "../db.js";

export const createProduct = async (req, res) => {
  const { userId, title, summary, slug, sku } = req.body;
  const [result] = await pool.query(
    "INSERT INTO product (userId, title, summary, slug, sku) VALUES (?, ?, ?, ?, ?)",
    [userId, title, summary, slug, sku]
  );
  res.json({ id: result.insertId, userId, title, summary, slug, sku });
};

export const getProducts = async (req, res) => {
  const [result] = await pool.query(
    "SELECT * FROM product ORDER BY createdAt ASC"
  );
  res.json(result);
};

export const getProduct = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM product WHERE id = ?", [
    req.params.id,
  ]);

  if (result.length === 0) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(result[0]);
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
