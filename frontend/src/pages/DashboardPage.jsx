import React, { Fragment } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Dashboard from "../components/dashboard/Dashboard";

function AddProductPage() {
  return (
    <Fragment>
      <Header />
      <Dashboard />
      <Footer />
    </Fragment>
  );
}

export default AddProductPage;
