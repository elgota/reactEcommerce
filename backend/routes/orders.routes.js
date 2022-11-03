import { Router } from "express";
import {
    getOrders,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder
} from "../controllers/orders.controllers.js"

const router = Router();

router.get("/api/orders", getOrders);
router.get("/api/orders/:id", getOrder);
router.get("/api/orders", createOrder);
router.get("/api/orders/:id", updateOrder);
router.get("/api/orders/:id", deleteOrder);

export default router;