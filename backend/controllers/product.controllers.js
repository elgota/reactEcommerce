import { pool } from "../db.js";
import { v4 as uuidv4 } from "uuid";

export const createProduct = async (req, res) => {
  try {
    const {
      userId = 1,
      title,
      metaTitle,
      slug = uuidv4(),
      summary,
      type = 123,
      sku = uuidv4(),
      price,
      discount,
      quantity,
      shop = 1,
      updatedAt,
      publishedAt = new Date(),
      startsAt = new Date(),
      endsAt,
      content,
    } = req.body;
    const [result] = await pool.query(
      "INSERT INTO product (userId, title, metaTitle, slug, summary, type, sku, price, discount, quantity, shop, updatedAt, publishedAt, startsAt, endsAt, content) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        userId,
        title,
        metaTitle,
        slug,
        summary,
        type,
        sku,
        price,
        discount,
        quantity,
        shop,
        updatedAt,
        publishedAt,
        startsAt,
        endsAt,
        content,
      ]
    );
    res.json({ id: result.insertId, userId, title, summary, slug, sku });
  } catch (error) {
    console.error(error);
  }
};

export const getProducts = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM product WHERE ORDER BY createdAt ASC"
    );
    res.json(result);
  } catch (error) {
    console.error(error);
  }
};

export const getProduct = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT p.id, p.title, p.summary, p.price, p.content, i.data FROM product p INNER JOIN image i ON p.id = i.productId  WHERE p.id = ? GROUP BY p.id",
      [req.params.id]
    );

    let aux = 0;
    result.map(() => {
      const imageBuffer = result[aux].data;
      const imageUrl = `data:image/png;base64,${imageBuffer.toString(
        "base64"
      )}`;
      result[aux].data = imageUrl;
      aux++;
    });

    if (result.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(result[0]);
  } catch (error) {
    console.error(error);
  }
};

export const getProductsImages = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT p.id, p.title, p.summary, p.price, p.content, i.data FROM product p INNER JOIN image i ON p.id = i.productId"
    );

    let aux = 0;
    result.map(() => {
      const imageBuffer = result[aux].data;
      const imageUrl = `data:image/png;base64,${imageBuffer.toString(
        "base64"
      )}`;
      result[aux].data = imageUrl;
      aux++;
    });
    res.json(result);
  } catch (error) {
    console.error(console.error(error));
  }
};

export const getProductsImagesByUserId = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT p.id, p.title, p.summary, p.price, p.quantity, i.data FROM product p INNER JOIN image i ON p.id = i.productId WHERE p.userId=? AND p.status=0",
      [req.query.userId]
    );
    console.log(result);
    let aux = 0;
    result.map(() => {
      const imageBuffer = result[aux].data;
      const imageUrl = `data:image/png;base64,${imageBuffer.toString(
        "base64"
      )}`;
      result[aux].data = imageUrl;
      aux++;
    });
    res.json(result);
  } catch (error) {
    console.error(error);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const [result] = await pool.query("UPDATE product SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const [result] = await pool.query(
      "UPDATE product SET status=1 WHERE id = ?",
      [req.params.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
  }
};
