import { Router } from "express";
import {
  getCartItem,
  getCartItems,
  createCartItem,
  updateCartItem,
  deleteCartItem,
} from "../controllers/cart.item.controllers.js";

const router = Router();

router.post("/api/cart-items", createCartItem);
router.get("/api/cart-items", getCartItems);
router.get("/api/cart-items/:id", getCartItem);
router.put("/api/cart-items/:id", updateCartItem);
router.delete("/api/cart-items/:id", deleteCartItem);

export default router;
