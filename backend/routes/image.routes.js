import { Router } from "express";

import {
  createImage,
  getImage,
  getImages,
  updateImage,
  deleteImage,
} from "./../controllers/image.controllers.js";

import { fileUpload } from "./../middleware/image.middleware.js";

const router = Router();

router.post("/api/images", fileUpload, createImage);
router.get("/api/images", getImage);
router.get("/api/images/:id", getImages);
router.put("/api/images/:id", updateImage);
router.delete("/api/images/:id", deleteImage);

export default router;
