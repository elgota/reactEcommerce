import { Router } from "express";
import {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/orders.controllers.js";

const router = Router();

router.get("/api/orders", getOrders);
router.get("/api/orders/:id", getOrder);
router.post("/api/orders", createOrder);
router.put("/api/orders/:id", updateOrder);
router.delete("/api/orders/:id", deleteOrder);

export default router;
