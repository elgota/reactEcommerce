import { Router } from "express";

import { createImage, getImages } from "./../controllers/image.controllers.js";

import { fileUpload } from "./../middleware/image.middleware.js";

const router = Router();

router.post("/api/images", fileUpload, createImage);
router.get("/api/images", getImages);

export default router;
