import React, { useState } from "react";
import { createImageRequest } from "../api/image.api";

function ImagesUploadPage() {
  const [file, setFile] = useState(null);

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
            Imagen Upload
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
    </div>
  );
}

export default ImagesUploadPage;
