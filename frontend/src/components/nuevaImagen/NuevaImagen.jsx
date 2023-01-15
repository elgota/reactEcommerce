import React, { useState } from "react";

function NuevaImagen() {
  const [file, setFile] = useState(null);

  const selectedHandler = (e) => {
    // console.log(e.target.files[0])
    setFile(e.target.files[0]);
  };

  const sendHandler = () => {
    if (!file) {
      alert("Debes cargar un archivo");
      return;
    }

    const formdata = new FormData();
    formdata.append("image", file);

    fetch("http://localhost:4000/api/images/post", {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.text())
      .then((res) => console.log(res))
      .catch((err) => {
        console.error(err);
      });

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
    </div>
  );
}

export default NuevaImagen;
