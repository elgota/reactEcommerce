import React, { useState, useEffect } from "react";
import { getImagesByProductIdRequest } from "../api/image.api";

function ImagesByProductIdPage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function loadImages() {
      const productId = 2;//el productId debe venir de otro lado y ser variable
      const response = await getImagesByProductIdRequest(productId); 
      setImages(response.data);
    }
    loadImages();
  }, []);

  return (
    <div>
      {images.map((image) => (
        <div key={image.id}>
          <img
            src={"http://localhost:4000/" + image}
            width="300"
            height="300"
          />
        </div>
      ))}
    </div>
  );
}

export default ImagesByProductIdPage;
