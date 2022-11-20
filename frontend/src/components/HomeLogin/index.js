import React, { useState, useEffect } from "react";
import Logo from "../../images/Logo.svg";
import { ReactComponent as SearchIcon } from "../../images/Search.svg";
import { ReactComponent as FilterIcon } from "../../images/Filter.svg";
import { ReactComponent as ShoppingIcon } from "../../images/Shopping.svg";
import { ReactComponent as NotifIcon } from "../../images/Bell.svg";
import { ReactComponent as MailIcon } from "../../images/Mail.svg";
import { ReactComponent as ProfileIcon } from "../../images/Profile.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Carousel from "react-multi-carousel";
import Card from "react-bootstrap/Card";
import "@fontsource/metropolis";
import "./HomeLogin.css";
import "react-multi-carousel/lib/styles.css";

const HomeLogin = () => {
  // Modal
  const [openFilter, setOpenFilter] = useState(false);
  const closeFilterModal = () => setOpenFilter(false);
  const openFilterModal = () => setOpenFilter(true);
  // Navigate
  const navigate = useNavigate();
  // Handle data
  const [product, setProduct] = useState([]);
  // Fetch data
  const getProduct = async () => {
    let token = localStorage.getItem("token");
    console.log("My token", token);
    try {
      const response = await axios.get(`http://localhost:3010/product`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProduct(response.data.result);
      console.log(response.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  const responsiveTopCarousel = {
    dekstop: {
      breakpoint: { max: 2566, min: 1366 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const responsiveBotCarousel = {
    dekstop: {
      breakpoint: { max: 2566, min: 1366 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container-home-login">
      <div className="container-navbar">
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
      <div className="container-body">
        <div className="carousel-top">
          <Carousel
            className="w-100"
            responsive={responsiveTopCarousel}
            arrows={true}
            showDots={true}
            autoPlay={true}
          >
            <div className="carousel-items">
              <img
                className="carousel-img"
                src={require("../../images/Carou1.png")}
                alt="Carou 1"
              />
            </div>
            <div className="carousel-items">
              <img
                className="carousel-img"
                src={require("../../images/Carou2.png")}
                alt="Carou 2"
              />
            </div>
            <div className="carousel-items">
              <img
                className="carousel-img"
                src={require("../../images/Carou1.png")}
                alt="Carou 3"
              />
            </div>
            <div className="carousel-items">
              <img
                className="carousel-img"
                src={require("../../images/Carou2.png")}
                alt="Carou 4"
              />
            </div>
          </Carousel>
        </div>
        <div className="mt-5 head-category">
          <p className="cat-category mb-1">Category</p>
          <p className="cat-info mb-1">What are you currently looking for</p>
        </div>
        <div className="mt-4 carousel-bot">
          <Carousel
            className="w-100"
            responsive={responsiveBotCarousel}
            arrows={true}
            showDots={true}
            autoPlay={true}
          >
            <div className="carousel-items">
              <img
                className="carousel-img"
                src={require("../../images/T-Shirts.png")}
                alt="Carou 1"
              />
            </div>
            <div className="carousel-items">
              <img
                className="carousel-img"
                src={require("../../images/Shorts.png")}
                alt="Carou 2"
              />
            </div>
            <div className="carousel-items">
              <img
                className="carousel-img"
                src={require("../../images/Jackets.png")}
                alt="Carou 3"
              />
            </div>
            <div className="carousel-items">
              <img
                className="carousel-img"
                src={require("../../images/Pants.png")}
                alt="Carou 4"
              />
            </div>
            <div className="carousel-items">
              <img
                className="carousel-img"
                src={require("../../images/Shoes.png")}
                alt="Carou 5"
              />
            </div>
            <div className="carousel-items">
              <img
                className="carousel-img"
                src={require("../../images/T-Shirts.png")}
                alt="Carou 6"
              />
            </div>
            <div className="carousel-items">
              <img
                className="carousel-img"
                src={require("../../images/Shorts.png")}
                alt="Carou 7"
              />
            </div>
            <div className="carousel-items">
              <img
                className="carousel-img"
                src={require("../../images/Jackets.png")}
                alt="Carou 8"
              />
            </div>
            <div className="carousel-items">
              <img
                className="carousel-img"
                src={require("../../images/Pants.png")}
                alt="Carou 9"
              />
            </div>
            <div className="carousel-items">
              <img
                className="carousel-img"
                src={require("../../images/Shoes.png")}
                alt="Carou 10"
              />
            </div>
          </Carousel>
        </div>
        <section>
          <div className="mt-5 head-new">
            <p className="cat-new mb-1">New</p>
            <p className="new-info mb-1">What are you currently looking for</p>
          </div>
          <div className="mt-4 card-box">
            <div className="card-items">
              {product ? (
                product.map((item) => (
                  <Card className="card-product">
                    <Link to={`/product-detail/${item.id}`}>
                      <Card.Img variant="top" src={item.photo} />
                      <Card.Body className="card-body">
                        <Card.Title className="card-title">
                          {item.product_name}
                        </Card.Title>
                        <Card.Text className="card-price">
                          Rp. {item.price}
                        </Card.Text>
                        <Card.Text className="card-store">
                          Zalora Cloth
                        </Card.Text>
                      </Card.Body>
                    </Link>
                  </Card>
                ))
              ) : (
                <h2>...Loading</h2>
              )}
            </div>
          </div>
        </section>

        <section>
          <div className="mt-5 head-new">
            <p className="cat-new mb-1">Popular</p>
            <p className="new-pop mb-1">
              Find clothes that are trending recently
            </p>
          </div>
          <div className="mt-4 card-box">
            <div className="card-items">
              {product ? (
                product.map((item) => (
                  <Card className="card-product">
                    <Card.Img variant="top" src={item.photo} />
                    <Card.Body className="card-body">
                      <Card.Title className="card-title">
                        {item.product_name}
                      </Card.Title>
                      <Card.Text className="card-price">
                        Rp. {item.price}
                      </Card.Text>
                      <Card.Text className="card-store">Zalora Cloth</Card.Text>
                    </Card.Body>
                  </Card>
                ))
              ) : (
                <h2>...Loading</h2>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeLogin;
