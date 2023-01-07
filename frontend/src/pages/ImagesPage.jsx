import React, { useState, useEffect } from "react";
import { createImageRequest, getImagesRequest } from "../api/image.api";

function ImagesPage() {
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function loadImages() {
      const response = await getImagesRequest();
      setImages(response.data);
    }
    loadImages();
  }, []);

  const selectedHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const sendHandler = () => {
    if (!file) {
      alert("Debes cargar un archivo");
      return;
    }

    const formdata = new FormData();
    formdata.append("image", file);

    createImageRequest(formdata);

    document.getElementById("fileinput").value = null;
    setFile(null);
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Imagen
          </a>
        </div>
      </nav>

      <div className="input-group mt-3">
        <input
          id="fileinput"
          onChange={selectedHandler}
          type="file"
          className="form-control"
        />
        <button onClick={sendHandler} type="button" className="btn btn-primary">
          Subir
        </button>
      </div>

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

export default ImagesPage;
