import { pool } from "./../db.js";

export const createTransaction = async (req, res) => {
  try {
    const { userId, orderId, code, type, mode, status, updatedAt, content } =
      req.body;

    const [result] = await pool.query(
      "INSERT INTO `transaction` (userId, orderId, code, type, mode, status, updatedAt, content) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [userId, orderId, code, type, mode, status, updatedAt, content]
    );
    res.json({
      id: result.insertId,
      userId,
      orderId,
      code,
      type,
      mode,
      status,
      updatedAt,
      content,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getTransactions = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM `transaction`");
    res.json(result);
  } catch (error) {
    console.error(error);
  }
};

export const getTransaction = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM `transaction` WHERE id = ?",
      [req.params.id]
    );

    if (result.length === 0) {
      return res.status(404).json({ message: "Transacción no encontrada" });
    }

    res.json(result[0]);
  } catch (error) {
    console.error(error);
  }
};

export const updateTransaction = async (req, res) => {
  try {
    const [result] = await pool.query(
      "UPDATE `transaction` SET ? WHERE id = ?",
      [req.body, req.params.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Transacción no encontrada" });
    }

    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
  }
};

export const deleteTransaction = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM `transaction` WHERE id = ?",
      [req.params.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Transacción no encontrada" });
    }

    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
  }
};
