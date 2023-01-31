import React, { Fragment } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Profile from "../components/dashboard/Profile";

function ProfilePage() {
  return (
    <Fragment>
      <Header />
      <Profile />
      <Footer />
    </Fragment>
  );
}

export default ProfilePage;
