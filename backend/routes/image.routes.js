import { Router } from "express";

import { createImage, getImages, getImagesByProductId} from "./../controllers/image.controllers.js";

import { fileUpload } from "./../middleware/image.middleware.js";

const router = Router();

router.post("/api/images", fileUpload, createImage);
router.get("/api/images", getImages);
router.get("/api/images/product/:productId", getImagesByProductId);

export default router;
