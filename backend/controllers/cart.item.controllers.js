import { pool } from "../db.js";

export const createCartItem = async (req, res) => {
  try {
    const {
      productId,
      cartId,
      sku,
      price,
      discount,
      quantity,
      active,
      updatedAt,
      content,
    } = req.body;

    const [result] = await pool.query(
      "INSERT INTO `cart_item` (productId, cartId, sku, price, discount, quantity, active, updatedAt, content) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        productId,
        cartId,
        sku,
        price,
        discount,
        quantity,
        active,
        updatedAt,
        content,
      ]
    );
    res.json({
      id: result.insertId,
      productId,
      cartId,
      sku,
      price,
      discount,
      quantity,
      active,
      updatedAt,
      content,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCartItems = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM `cart_item`");
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const getCartItemsByUserId = async (req, res) => {
  try {
    var [result] = await pool.query(
      "SELECT p.title, p.price, p.summary FROM `cart_item` ci INNER JOIN `cart` c ON ci.cartId = c.id INNER JOIN `product` p ON p.id = ci.productId WHERE c.userId = ? AND c.status = 1;",
      [req.query.userId]
    );

    if (result.length === 0) {
      return res.status(404).json({ message: "Imagenes no encontradas" });
    }

    if (req.query.productId === "null") {
      res.json(imagenDir);
    } else {
      const imageDirByProductId = imagenDir.filter((image) =>
        image.startsWith(req.query.productId + "-")
      );
      res.json(imageDirByProductId);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCartItem = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM `cart_item` WHERE id = ?",
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

export const updateCartItem = async (req, res) => {
  try {
    const [result] = await pool.query("UPDATE `cart_item` SET ? WHERE id = ?", [
      req.body,
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

export const deleteCartItem = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM `cart_item` WHERE id = ?", [
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
