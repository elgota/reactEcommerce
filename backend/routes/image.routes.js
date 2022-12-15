import { Router } from 'express';
import multer from 'multer';

import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';


import { 

    createImage,
    getImage,
    getImages,
    updateImage,
    deleteImage
 } from './../controllers/image.controllers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();
const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, '../images'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-vivero13-' + file.originalname)
    }
})

const fileUpload = multer({
    storage: diskstorage
}).single('image')

// router.post("/api/images", createImage);
router.post('/api/images/post', fileUpload,(req, res) => {

    req.getConnection((err, conn) => {
        if(err) return res.status(500).send("server error")
        
        const productId = 1; //Importante!
        const title = req.file.originalname;
        const type = req.file.mimetype;
        const data = fs.readFileSync(path.join(__dirname, '../images/' + req.file.filename))
        
        conn.query("INSERT INTO image set ?", [{productId, title, type, data}], (err, rows) => {
            if(err) return res.status(500).send("server error")
        
            res.send('Imagen guardada con éxito!')
        })
    })

    console.log(req.file)
    
})


// router.get("/api/images", getImage);
// router.get("/api/images/:id", getImages);
// router.updateImage("/api/images/:id", updateImage);
// router.delete("/api/images/:id", deleteImage);

export default router;
