import React, { Fragment } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import AddProduct from "../components/dashboard/AddProduct";

function AddProductPage() {
  return (
    <Fragment>
      <Header />
      <AddProduct />
      <Footer />
    </Fragment>
  );
}

export default AddProductPage;
