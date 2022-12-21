import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Account from "./pages/account/Account";
import Dashboard from "./pages/dashboard/Dashboard";
import Footer from "./pages/footer/Footer";
import Header from "./pages/header/Header";
import Login from "./pages/login/Login";
import AddCategory from "./pages/products/AddCategory";
import AddProduct from "./pages/products/AddProduct";
import Products from "./pages/products/Products";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isLoginLocal, setIsLoginLocal] = useState(localStorage.getItem("login"));

  useEffect(() => {
    axios
      .get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("data", JSON.stringify(response.data));
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <Header
        logout={() => {
          setIsLoggedIn(() => false);
          localStorage.removeItem("login");
        }}
        isLoggedIn={isLoggedIn}
      />
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <Dashboard /> : <Navigate to="/login"></Navigate>
          }
        ></Route>
        <Route
          path="/products"
          element={
            isLoggedIn ? (
              <Products to="/products" />
            ) : (
              <Navigate to="/login"></Navigate>
            )
          }
        ></Route>
        <Route
          path="/account"
          element={
            isLoggedIn ? (
              <Account to="/account" />
            ) : (
              <Navigate to="/login"></Navigate>
            )
          }
        ></Route>
        <Route
          path="/login"
          element={
            <Login
              onLogin={(loginStatus) => {
                setIsLoggedIn(() => loginStatus);
                localStorage.setItem("login", true);
              }}
            ></Login>
          }
        ></Route>
        <Route
          path="/add-product"
          element={
            isLoggedIn ? <AddProduct /> : <Navigate to="/login"></Navigate>
          }
        ></Route>
        <Route
          path="/add-category"
          element={
            isLoggedIn ? <AddCategory /> : <Navigate to="/login"></Navigate>
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
