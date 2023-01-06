import React from 'react';
import { useState } from 'react';
import css from "./AddProduct.module.css";

const AddProduct = () => {

  const [preImg, setpreImg] = useState([]);

  const changeInput = (e) => {
    let indexImg;

    if (preImg.length > 0) {
      indexImg = preImg[preImg.length - 1].index + 1;
    } else {
      indexImg = 0;
    }

    let newImgToState = readmultifile(e, indexImg);
    let newImgState = [...preImg, ...newImgToState];
    setpreImg(newImgState);
  }

  function readmultifile(e, indexImg) {
    const files = e.currentTarget.file;

    const arrayImages = [];

    Object.keys(files).forEach((i) => {
      const file = files[i];
      let url = URL.createObjectURL(file);

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

  function deleteImg(indice){
    const newImgs = preImg.filter(function (element){
      return element.index !== indice;
    });
    console.log(newImgs)
    setpreImg(newImgs)
  }



  return (
    <div className={css.container_form}>
      <div className={css.container_info}></div>
      <div className={css.form_product}>
        <form action="">

          <div className={css.input_group}>
            <input required="" type="text" name="text" autocomplete="off" className={css.inputs} />
            <label className={css.user_label}>Nombre Del Producto</label>
          </div>
          <div className={css.input_group}>
            <input required="" type="text" name="text" autocomplete="off" className={css.inputs} />
            <label className={css.user_label}>Title</label>
          </div>
          <div className={css.input_group}>
            <input required="" type="text" name="text" autocomplete="off" className={css.inputs} />
            <label className={css.user_label}>Slug</label>
          </div>
          <div className={css.input_group}>
            <input required="" type="text" name="text" autocomplete="off" className={css.inputs} />
            <label className={css.user_label}>Summary</label>
          </div>
          <div className={css.input_group}>
            <input required="" type="text" name="text" autocomplete="off" className={css.inputs} />
            <label className={css.user_label}>Type</label>
          </div>
          <div className={css.input_group}>
            <input required="" type="text" name="text" autocomplete="off" className={css.inputs} />
            <label className={css.user_label}>Sku</label>
          </div>
          <div className={css.input_group}>
            <input required="" type="text" name="text" autocomplete="off" className={css.inputs} />
            <label className={css.user_label}>Precio</label>
          </div>
          <div className={css.input_group}>
            <input required="" type="text" name="text" autocomplete="off" className={css.inputs} />
            <label className={css.user_label}>Descuento</label>
          </div>
          <div className={css.input_group}>
            <input required="" type="text" name="text" autocomplete="off" className={css.inputs} />
            <label className={css.user_label}>Unidades disponibles</label>
          </div>
          <label className={css.btnLabel}>
            <div className={css.btnSelector}>
              <span>Seleccionar archivos </span>
              <input hidden type="file" multiple ></input>
            </div>
          </label>
          <div className={css.filaImg}>
            <div className={css.caja}>
              <button className={css.btnDelete}>X</button>
            </div>

          </div>
          <button type='submit' className={css.btnSend}>Aceptar</button>
          <button type='submit' className={css.btnSend}>Limpiar</button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct