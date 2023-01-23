import React from "react";
import { Fragment } from "react";
import Footer from "../../components/footer/Footer";
import Logout from "../../components/logout/Logout";
import HeaderLogout from "../../components/header/HeaderLogout";

function Account() {
  return (
    <Fragment>
      <HeaderLogout />
      <Logout />
      <Footer />
    </Fragment>
  );
}

export default Account;
