import { pool } from "./../db.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const createImage = async (req, res) => {
  try {
    console.log(req.files);
    console.log(req.body.id);

    for (let i = 0; i < req.files.length; i++) {
      const productId = req.body.id[i];
      const title = req.files[i].originalname;
      const type = req.files[i].mimetype;
      const data = fs.readFileSync(
        path.join(__dirname, "../imagesUpload/" + req.files[i].filename)
      );

      await pool.query(
        "INSERT INTO `image` (productId, title, type, data) VALUES (?, ?, ?, ?)",
        [productId, title, type, data]
      );
    }
  } catch (error) {
    console.log(error);
  }

  fs.unlink(
    path.join(__dirname, "../imagesUpload/" + req.files.filename),
    (err) => {
      if (err) {
        return res.status(500).json({
          message: "No se pudo borrar imagen del middleware",
          error: err,
        });
      }
    }
  );
};

export const getImagesByProductId = async (req, res) => {
  if (req.query.productId === "null") {
    var [result] = await pool.query("SELECT * FROM `image`");
  } else {
    var [result] = await pool.query(
      "SELECT * FROM `image` WHERE productId = ?",
      [req.query.productId]
    );
  }

  if (result.length === 0) {
    return res.status(404).json({ message: "Imagenes no encontradas" });
  }

  fs.mkdir(
    path.join(__dirname, "../imagesProduct/"),
    { recursive: true },
    function (err) {
      if (err) return cb(err);
    }
  );

  result.map((image) => {
    fs.writeFileSync(
      path.join(
        __dirname,
        "../imagesProduct/" + image.productId + "-" + image.id + "-vivero13.png"
      ),
      image.data
    );
  });

  const imagenDir = fs.readdirSync(path.join(__dirname, "../imagesProduct/"));
  if (req.query.productId === "null") {
    res.json(imagenDir);
  } else {
    const imageDirByProductId = imagenDir.filter((image) =>
      image.startsWith(req.query.productId + "-")
    );
    res.json(imageDirByProductId);
  }
};

export const getImage = async (req, res) => {
  var [result] = await pool.query("SELECT * FROM `image` WHERE id = ?", [
    req.params.id,
  ]);

  if (result.length === 0) {
    return res.status(404).json({ message: "Imagen no encontrada" });
  }

  fs.mkdir(
    path.join(__dirname, "../imagesProduct/"),
    { recursive: true },
    function (err) {
      if (err) return cb(err);
    }
  );

  fs.writeFileSync(
    path.join(
      __dirname,
      "../imagesProduct/" +
        result[0].productId +
        "-" +
        result[0].id +
        "-vivero13.png"
    ),
    result[0].data
  );

  const imagenDir = fs.readdirSync(path.join(__dirname, "../imagesProduct/"));

  const imageDirById = imagenDir.filter((image) =>
    image.includes("-" + result[0].id + "-")
  );
  res.json(imageDirById);
};

export const deleteImage = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM `image` WHERE id = ?", [
    req.params.id,
  ]);

  if (result.length === 0) {
    return res.status(404).json({ message: "Imagen no encontrado" });
  }

  await pool.query("DELETE FROM `image` WHERE id = ?", [req.params.id]);

  fs.unlink(
    path.join(
      __dirname,
      "../imagesProduct/" +
        result[0].productId +
        "-" +
        result[0].id +
        "-vivero13.png"
    ),
    (err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "No se pudo borrar imagen", error: err });
      }
    }
  );

  return res.sendStatus(204);
};
