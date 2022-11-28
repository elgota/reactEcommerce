import { pool } from './../db';

export const createImage = async (req, res) => {

    const {productId, title, type, data} = req.body;
    const [result] = await pool.query(
        "INSERT INTO `image` (productId, title, type, data) VALUES (?, ?, ?, ?)",
        [ productId, title, type, data]
    );

    res.json({
        id: result.insertId,
        productId,
        title,
        type,
        data
    });
    
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