import React from 'react'
import {Form, Formik} from "formik";
import {createProductRequest} from './../../api/product.api';

function NuevoProducto() {
  return (
    <div>
        
          <nav className="navbar bg-body-tertiary navbar-dark bg-dark">
              <div className="container-fluid">
                  <span className="navbar-brand mb-0 h1">Cargar producto</span>
              </div>
          </nav>
          <Formik
            initialValues= {{
                title: "",
                summary: "",
                price: "",
                quantity: "",


            }}
            onSubmit= {async (values) => {
                
                try {
                    console.log(values);
                    const response = await createProductRequest(values)
                } catch (error) {
                    console.log(error)
                }
                
            }}
          >
        {({handleChange, handleSubmit}) => (
           <div className="productoForm">
           <Form className="formInputs" onSubmit={handleSubmit}> 
               <div className="mb-3">
                   <label className="form-label">Nombre del producto</label>
                   <input type="text" name="title" className="form-control" onChange={handleChange} />
               </div>
               <div className="mb-3">
                   <label className="form-label">Resumen</label>
                   <textarea type="text" name="summary" rows="3" className="form-control" onChange={handleChange}  />
               </div>
               <div className="mb-3">
                   <label className="form-label">Precio</label>
                   <input type="text" name="price" className="form-control" onChange={handleChange}  />
               </div>
               <div className="mb-3">
                   <label className="form-label">Unidades disponibles</label>
                   <input type="number" name="quantity" className="form-control" onChange={handleChange}  />
               </div>

               <button type="submit" className="btn btn-primary">Cargar</button>

           </Form>
   </div> 
        )}
          
          </Formik>
    </div>
  )
}

export default NuevoProducto