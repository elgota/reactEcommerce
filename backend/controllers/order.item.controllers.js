import e from "cors";
import { pool } from "../db.js";

export const createOrderItem = async (req, res) => {
  try {
    const {
      productId,
      orderId,
      sku,
      price,
      discount,
      quantity,
      updatedAt,
      content,
    } = req.body;

    const [result] = await pool.query(
      "INSERT INTO `order_item` (productId, orderId, sku, price, discount, quantity, updatedAt, content) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [productId, orderId, sku, price, discount, quantity, updatedAt, content]
    );
    res.json({
      id: result.insertId,
      productId,
      orderId,
      sku,
      price,
      discount,
      quantity,
      updatedAt,
      content,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getOrderItems = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM `order_item`");
    res.json(result);
  } catch (error) {
    console.error(error);
  }
};

export const getOrderItem = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM `order_item` WHERE id = ?",
      [req.params.id]
    );

    if (result.length === 0) {
      return res.status(404).json({ message: "Item no encontrado" });
    }

    res.json(result[0]);
  } catch (error) {
    console.error(error);
  }
};

export const updateOrderItem = async (req, res) => {
  try {
    const [result] = await pool.query(
      "UPDATE `order_item` SET ? WHERE id = ?",
      [req.body, req.params.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Item no encontrado" });
    }

    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
  }
};

export const deleteOrderItem = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM `order_item` WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Item no encontrado" });
    }

    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
  }
};
