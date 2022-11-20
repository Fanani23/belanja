import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Logo from "../../images/Logo.svg";
import { ReactComponent as SearchIcon } from "../../images/Search.svg";
import { ReactComponent as FilterIcon } from "../../images/Filter.svg";
import { ReactComponent as ShoppingIcon } from "../../images/Shopping.svg";
import { ReactComponent as NotifIcon } from "../../images/Bell.svg";
import { ReactComponent as MailIcon } from "../../images/Mail.svg";
import { ReactComponent as ProfileIcon } from "../../images/Profile.svg";
import { ReactComponent as Pdline } from "../../images/Pd-line.svg";
import axios from "axios";
import ColorPicker from "react-circle-color-picker";
import { useNavigate } from "react-router-dom";
import "./ProductDetail.css";
import "@fontsource/metropolis";

const ProductDetail = () => {
  // Handler data
  const [product_name, setProductName] = useState("");
  const [stock, setStock] = useState();
  const [price, setPrice] = useState();
  const [category_id, setCategoryId] = useState();
  const [photo, setPhoto] = useState();
  const { id } = useParams();
  // Navigate
  const navigate = useNavigate();
  // Fetch data
  const getProductById = async () => {
    let token = localStorage.getItem("token");
    const response = await axios.get(`http://localhost:3010/product/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setProductName(response.data.data[0].product_name);
    setStock(response.data.data[0].stock);
    setPrice(response.data.data[0].price);
    setCategoryId(response.data.data[0].category_id);
    setPhoto(response.data.data[0].photo);
    console.log(response.data.data[0].product_name);
  };

  useEffect(() => {
    getProductById();
  }, []);

  return (
    <div className="container-product">
      <div className="container-nav">
        <nav className="navbar navbar-box">
          <ul className="navbar-nav">
            <li>
              <img src={Logo} alt="Belanja" className="logo-home" />
            </li>
            <li className="nav-item active search-box">
              <div className="position-relative">
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search"
                  id="search-navbar"
                />
                <label className="search-icon" htmlFor="search-navbar">
                  <SearchIcon />
                </label>
              </div>
            </li>
            <li className="nav-item ">
              <button type="button" className="filter-box">
                <FilterIcon />
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="shopping-box"
                onClick={() => navigate("/bag")}
              >
                <ShoppingIcon />
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="notif-box">
                <NotifIcon />
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="mail-box">
                <MailIcon />
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="profile-box"
                onClick={() => navigate("/profile")}
              >
                <ProfileIcon />
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container-p-b">
        <div className="top-b mt-5">
          <div className="top-b-left">
            <img className="top-b-left-img" src={photo} alt="" />
          </div>
          <div className="top-b-right">
            <div>
              <p className="trb-name mb-1">{product_name}</p>
              <p className="trb-brand mb-0">Brand</p>
            </div>
            <div className="mt-4">
              <p className="trb-price mb-2">Price</p>
              <p className="price-val mb-0">Rp. {price}</p>
            </div>
            <div className="mt-4">
              <p className="trb-color">Color</p>
              <ColorPicker
                colors={[
                  { hex: "#1A1A1A" },
                  { hex: "#D84242" },
                  { hex: "#4290D8" },
                  { hex: "#42D86C" },
                ]}
              />
            </div>
            <div className="trb-sa-group mt-4">
              <div>
                <p className="trb-size">Size</p>
              </div>
              <div>
                <p className="trb-size">Ammount</p>
              </div>
            </div>
            <div className="trb-btn mt-5 pt-1">
              <button className="btn btn-outline-danger trb-btn-cht">
                Chat
              </button>
              <button className="btn btn-outline-danger trb-btn-addbag">
                Add bag
              </button>
              <button className="btn btn-outline-danger trb-btn-buy">
                Buy
              </button>
            </div>
          </div>
        </div>
        <div className="center-b">
          <div className="mt-5">
            <p className="center-b-1">Informasi produk</p>
          </div>
          <div>
            <p className="center-b-2a mb-1">Condition</p>
            <p className="center-b-2b">New</p>
          </div>
          <div>
            <p className="center-b-3a mb-1">Description</p>
            <p className="center-b-3b">Deskripsi produk</p>
          </div>
          <div>
            <p className="center-b-4a">Product review</p>
          </div>
          <div className="mt-5 pt-4">
            <Pdline />
          </div>
        </div>
        <div className="bottom-b mt-5">
          <div>
            <p className="bottom-b-1a mb-1">You can also like this</p>
            <p className="bottom-b-1b">You’ve never seen it before!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
