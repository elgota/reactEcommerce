import { pool } from "../db.js";

export const createCartItem = async (req, res) => {
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
};

export const getCartItems = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM `cart_item`");
  res.json(result);
};

export const getCartItemsByUserId = async (req, res) => {
  var [result] = await pool.query(
    "SELECT * FROM `cart_item` as ci INNER JOIN `cart` as c WHERE ci.cartId = c.id AND c.userId = ?",
    [req.query.productId]
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
};

export const getCartItem = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM `cart_item` WHERE id = ?", [
    req.params.id,
  ]);

  if (result.length === 0) {
    return res.status(404).json({ message: "Item no encontrado" });
  }

  res.json(result[0]);
};

export const updateCartItem = async (req, res) => {
  const [result] = await pool.query("UPDATE `cart_item` SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Item no encontrado" });
  }

  return res.sendStatus(204);
};

export const deleteCartItem = async (req, res) => {
  const [result] = await pool.query("DELETE FROM `cart_item` WHERE id = ?", [
    req.params.id,
  ]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Item no encontrado" });
  }

  return res.sendStatus(204);
};
