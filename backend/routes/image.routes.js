import { Router } from 'express';
import { 
    createImage,
    getImage,
    getImages,
    updateImage,
    deleteImage
 } from './../controllers/image.controllers';

const router = Router();

router.post("/api/images", createImage);
router.get("/api/images", getImage);
router.get("/api/images/:id", getImages);
router.updateImage("/api/images/:id", updateImage);
router.delete("/api/images/:id", deleteImage);

export default router;
