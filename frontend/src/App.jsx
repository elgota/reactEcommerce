import React from "react";
import "./App.css";
import "boxicons";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage";
import MyProductsPage from "./pages/MyProductsPage";
import DashboardPage from "./pages/DashboardPage";
import LogoutPage from "./pages/LogoutPage";
import ProfilePage from "./pages/ProfilePage";
import Cart from "./components/cart/Cart";
import { AuthContextProvider } from "./contexts/authContext";
import PrivateRoute from "./components/router/PrivateRoute";
import PublicRoute from "./components/router/PublicRoute";
import {
  CART,
  HOME,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DASHBOARD,
  MY_PRODUCTS,
  SIGNUP,
  LOGIN,
  LOGOUT,
  PRIVATE,
  PROFILE,
} from "./config/routes/paths.js";

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
            <Route path={EDIT_PRODUCT} element={<EditProductPage />} />
            <Route path={CART} element={<Cart />} />
            <Route path={DASHBOARD} element={<DashboardPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
