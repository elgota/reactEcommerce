import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AddProductPage from "./pages/AddProductPage";
import MyProductsPage from "./components/dashboard/MyProducts";
import "boxicons";
import LogoutPage from "./pages/LogoutPage";
import ProfilePage from "./pages/ProfilePage";
import { AuthContextProvider } from "./contexts/authContext";
import PrivateRoute from "./components/router/PrivateRoute";
import PublicRoute from "./components/router/PublicRoute";
import {
  CART,
  HOME,
  ADD_PRODUCT,
  MY_PRODUCTS,
  SIGNUP,
  LOGIN,
  LOGOUT,
  PRIVATE,
  PROFILE,
} from "./config/routes/paths.js";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<HomePage />} />

          <Route path={HOME} element={<PublicRoute />}>
            <Route path={LOGIN} element={<LoginPage />} />
            <Route path={SIGNUP} element={<SignupPage />} />
          </Route>

          <Route path={PRIVATE} element={<PrivateRoute />}>
            <Route path={PROFILE} element={<ProfilePage />} />
            <Route path={MY_PRODUCTS} element={<MyProductsPage />} />
            <Route path={LOGOUT} element={<LogoutPage />} />
            <Route path={ADD_PRODUCT} element={<AddProductPage />} />
            <Route path={CART} element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
