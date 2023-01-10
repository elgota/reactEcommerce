import React, { useEffect } from 'react';
import { useState } from 'react';
import css from "./AddProduct.module.css";

import imgLogo from "../../assets/logoVivero.png"
import fondo from "../../assets/fondo-vivero.jpg"

const AddProduct = () => {

  const [preImg, setpreImg] = useState([]);
  const [text, setText] = useState("Bienvenido");

  const changeInput = (e) => {
    let indexImg;

    if (preImg.length > 0) {
      indexImg = preImg[preImg.length - 1].index + 1;
    } else {
      indexImg = 0;
    }


    let newImgsToState = readmultifile(e, indexImg);
    let newImgsState = [...preImg, ...newImgsToState];
    setpreImg(newImgsState);
  }

  function readmultifile(e, indexImg) {
    const files = e.currentTarget.files;

    const arrayImages = [];

    Object.keys(files).forEach((i) => {
      const file = files[i];
      let url = URL.createObjectURL(file);
      console.log(url);

      arrayImages.push({
        index: indexImg,
        name: file.name,
        url,
        file
      });
      indexImg++;
    })
    return arrayImages;
  }

  function deleteImg(indice) {
    const newImgs = preImg.filter(function (element) {
      return element.index !== indice;
    });
    console.log(newImgs)
    setpreImg(newImgs)
  }

  const texts = ["Vende tus Productos", "De Forma Segura", "Rapido y Facil!", "Sin Complicaciones"];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setText(texts[index]);
      index = (index + 1) % texts.length;
    }, 10000);
    return () => clearInterval(interval);
  }, [])



  return (
    <div className={css.container_form}>
      <div className={css.container_info}>
        <img src={fondo} alt="vivero" className={css.imagenFondo} />
        <img src={imgLogo} alt="logo" className={css.logo} />
        <div className={css.cajaTexto}>

        <p className={css.texto}>{text}</p>
        </div>
      </div>
      <div className={css.form_product}>
        <form action="">

          <div className={css.input_group}>
            <input required="" type="text" name="text" className={css.inputs} />
            <label className={css.user_label}>Nombre Del Producto</label>
          </div>
          <div className={css.input_group}>
            <input required="" type="text" name="text" className={css.inputs} />
            <label className={css.user_label}>Title</label>
          </div>
          <div className={css.input_group}>
            <input required="" type="text" name="text" className={css.inputs} />
            <label className={css.user_label}>Slug</label>
          </div>
          <div className={css.input_group}>
            <input required="" type="text" name="text" className={css.inputs} />
            <label className={css.user_label}>Summary</label>
          </div>
          <div className={css.input_group}>
            <input required="" type="text" name="text" className={css.inputs} />
            <label className={css.user_label}>Type</label>
          </div>
          <div className={css.input_group}>
            <input required="" type="text" name="text" className={css.inputs} />
            <label className={css.user_label}>Sku</label>
          </div>
          <div className={css.input_group}>
            <input required="" type="text" name="text" className={css.inputs} />
            <label className={css.user_label}>Precio</label>
          </div>
          <div className={css.input_group}>
            <input required="" type="text" name="text" className={css.inputs} />
            <label className={css.user_label}>Descuento</label>
          </div>
          <div className={css.input_group}>
            <input required="" type="text" name="text" className={css.inputs} />
            <label className={css.user_label}>Unidades disponibles</label>
          </div>
          <label className={css.btnLabel}>
            <div className={css.btnSelector}>
              <span>Agregar Imagen </span>
              <input hidden type="file" multiple onChange={changeInput}></input>
            </div>
          </label>
          {preImg.length > 0 && <div className={css.filaImg}>
            {
              preImg.map((imagen) => {
                return <div className={css.caja} key={imagen.index}>
                  <button className={css.btnDelete} onClick={deleteImg.bind(this, imagen.index)}>X</button>
                  <img
                    alt="algo"
                    src={imagen.url}
                    data-toggle="modal"
                    data-target="#ModalPreViewImg"
                    className={css.img_responsive}
                  ></img>
                  {console.log(imagen.url)}
                </div>
              })
            }

          </div>}
          <div className={css.btnUnder}>
            <button type='submit' className={css.btnSend}>Aceptar</button>
            <button type='submit' className={css.btnSend}>Limpiar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProduct