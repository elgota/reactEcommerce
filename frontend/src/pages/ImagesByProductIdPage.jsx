import React, { useState, useEffect } from "react";
import { getImagesByProductIdRequest } from "../api/image.api";

function ImagesByProductIdPage() {
  const [images, setImages] = useState([]);
  const productId = null; //el productId debe venir de otro lado y ser variable

  useEffect(() => {
    async function loadImages() {
      const response = await getImagesByProductIdRequest(productId);
      setImages(response.data);
    }
    loadImages();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Images By Product Id = {productId}
          </a>
        </div>
      </nav>

      {images.map((image, index) => (
        <div key={index}>
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
