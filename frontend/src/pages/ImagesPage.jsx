import React, { useState, useEffect } from "react";
import { getImagesRequest } from "../api/image.api";

function ImagesPage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function loadImages() {
      const response = await getImagesRequest();
      setImages(response.data);
    }
    loadImages();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Images
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

export default ImagesPage;
