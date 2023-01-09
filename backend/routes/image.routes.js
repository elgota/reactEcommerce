import { Router } from "express";

import {
  createImage,
  getImagesByProductId,
} from "./../controllers/image.controllers.js";

import { fileUpload } from "./../middleware/image.middleware.js";

const router = Router();

router.post("/api/images", fileUpload, createImage);
router.get("/api/images", getImagesByProductId);

export default router;
