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
    path.join(__dirname, "../imagesUpload/" + req.file.filename)
  );

  await pool.query(
    "INSERT INTO `image` (productId, title, type, data) VALUES (?, ?, ?, ?)",
    [productId, title, type, data]
  );

  //console.log(req.file);
};

export const getImages = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM `image`");

  //console.log(result);

  result.map((image) => {
    fs.writeFileSync(
      path.join(__dirname, "../imagesDownload/" + image.id + "-vivero13.png"),
      image.data
    );
  });

  const imagenDir = fs.readdirSync(path.join(__dirname, "../imagesDownload/"));
  res.json(imagenDir);
  //console.log(imagenDir);
};
