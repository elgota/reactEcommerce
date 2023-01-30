import React, { Fragment } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import MyProducts from "../components/dashboard/MyProducts";

function MyProductsPage() {
  return (
    <Fragment>
      <Header />
      <MyProducts />
      <Footer />
    </Fragment>
  );
}

export default MyProductsPage;
