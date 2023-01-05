import { pool } from "./../db.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const createImage = async (req, res) => {
  const productId = 1;
  const title = req.file.originalname;
  const type = req.file.mimetype;
  const data = fs.readFileSync(
    path.join(__dirname, "../images/" + req.file.filename)
  );

  await pool.query(
    "INSERT INTO `image` (productId, title, type, data) VALUES (?, ?, ?, ?)",
    [productId, title, type, data]
  );

  //console.log(req.file);
};

export const getImages = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM `image`");
  res.json(result);
};

export const getImage = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM `image` WHERE id = ?", [
    req.params.id,
  ]);

  if (result.length === 0) {
    return res.status(404).json({ message: "Imagen no encontrada" });
  }

  res.json(result[0]);
};

export const updateImage = async (req, res) => {
  const [result] = await pool.query("UPDATE `image` SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Imagen no encontrada" });
  }

  return res.sendStatus(204);
};

export const deleteImage = async (req, res) => {
  const [result] = await pool.query("DELETE FROM `image` WHERE id = ?", [
    req.params.id,
  ]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Imagen no encontrada" });
  }

  return res.sendStatus(204);
};
