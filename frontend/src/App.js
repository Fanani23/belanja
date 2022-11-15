import "./App.css";
import { useState } from "react";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Seller from "./components/Seller";
import ForgotPassword from "./components/ForgotPassword";
import RequestPassword from "./components/RequestPassword";
import ConfirmationPassword from "./components/ConfirmationPassword";
import Bag from "./components/Bag";
import HomeLogin from "./components/HomeLogin";
import Profile from "./components/Profile";
import MyProduct from "./components/Profile/MyProduct";
import EditProduct from "./components/Profile/MyProduct/EditProduct";

function App() {
  const [title, setTitle] = useState("E-Commerce");
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/login">
            <Route index element={<Login />} />
          </Route>
          <Route path="/signup">
            <Route index element={<Signup />} />
          </Route>
          <Route path="/seller">
            <Route index element={<Seller />} />
          </Route>
          <Route path="/forgot-password">
            <Route index element={<ForgotPassword />} />
          </Route>
          <Route path="/req-password">
            <Route index element={<RequestPassword />} />
          </Route>
          <Route path="/new-password">
            <Route index element={<ConfirmationPassword />} />
          </Route>
          <Route path="/bag">
            <Route index element={<Bag />} />
          </Route>
          <Route path="/home-login">
            <Route index element={<HomeLogin />} />
          </Route>
          <Route path="/profile">
            <Route index element={<Profile />} />
          </Route>
          <Route path="/my-product">
            <Route index element={<MyProduct />} />
          </Route>
          <Route path="/edit/:id">
            <Route index element={<EditProduct />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
