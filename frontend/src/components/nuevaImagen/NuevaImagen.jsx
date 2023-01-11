import React, { useEffect, useState } from "react";
import { getProductRequest } from "../../api/product.api";
import { createImageRequest } from "./../../api/image.api";


export const NuevaImagen = () => {
  const [selectedOption, setSelectedOption] = useState('')

  function handleChange(event) {
    setSelectedOption(event.target.value);
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts(){
      const response = await getProductRequest()
      // console.log(response.data)
      setProducts(response.data) 

    }
    loadProducts();

    
  }, [])
  
  const [file, setFile] = useState(null);
  
  const selectedHandler = (e) => {
    setFile(e.target.files[0]);
    setSelectedOption(e.target.value[1])
    console.log(setSelectedOption)
  };

  const sendHandler = () => {
    if (!file) {
      alert("Debes cargar un archivo");
      return;
    }

    const formdata = new FormData();
    formdata.append("image", file);
    formdata.append("id", selectedOption);

    console.log(selectedOption);

    createImageRequest(formdata);

    document.getElementById("fileinput").value = null;
    setFile(null);


  };

  return (
    <div className="d-flex justify-content-center">
      <div className="imagenForm"> 
        <div className="mb-3">
        <label className="form-label">Selecciona un archivo</label>
          <input id="fileinput" onChange={selectedHandler} type="file" className="form-control" />
        </div>
        <label className="form-label">Elige el producto</label>
        <div className="input-group mb-3">
          
          <select className="form-select" id="options"
            value={selectedOption}
            onChange={handleChange}
          >
            {
              products.map(product => (
                

                <option 
                value={product.id}
                key={product.title}
                >
                {product.title}
                </option>

              ))
            }

          </select>
        </div>

        <button onClick={sendHandler} type="button" className="btn btn-primary">
          Subir
        </button>
        
      </div>
      
    </div>
  );
};
