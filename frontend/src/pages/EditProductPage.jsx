import React, { Fragment } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import EditProduct from "../components/dashboard/EditProduct";

function EditProductPage() {
  return (
    <Fragment>
      <Header />
      <EditProduct />
      <Footer />
    </Fragment>
  )
}

export default EditProductPage