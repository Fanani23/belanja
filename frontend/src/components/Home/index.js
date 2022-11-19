import React, { useState } from "react";
import Modal from "react-modal";
import Logo from "../../images/Logo.svg";
import { ReactComponent as SearchIcon } from "../../images/Search.svg";
import { ReactComponent as FilterIcon } from "../../images/Filter.svg";
import { ReactComponent as ShoppingIcon } from "../../images/Shopping.svg";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import ColorPicker from "react-circle-color-picker";
import "@fontsource/metropolis";
import "./Home.css";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  // Modal
  const [openFilter, setOpenFilter] = useState(false);
  const closeFilterModal = () => setOpenFilter(false);
  const openFilterModal = () => setOpenFilter(true);

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

  const modalStyle = {
    content: {
      width: "30%",
      height: "80%",
      top: "28%",
      left: "40%",
      right: "auto",
      bottom: "auto",
      marginRight: "-20%",
      transform: "translate(-20%, -20%)",
    },
  };

  const navigate = useNavigate();

  return (
    <div className="container-home">
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
              <button
                type="button"
                className="filter-box"
                onClick={openFilterModal}
              >
                <FilterIcon />
              </button>
              <Modal
                isOpen={openFilter}
                onRequestClose={closeFilterModal}
                style={modalStyle}
              >
                <div className="top-modal">
                  <h2 className="items-center">Filter</h2>
                  <button onClick={closeFilterModal}>Close</button>
                </div>
                <div>
                  <p>Colors</p>
                  <div>
                    <ColorPicker
                      colors={[
                        { hex: "#020202" },
                        { hex: "#FFFFFF" },
                        { hex: "#B82222" },
                        { hex: "#BEA9A9" },
                        { hex: "#E2BB8D" },
                        { hex: "#151867" },
                      ]}
                    />
                  </div>
                </div>
                <div className="pt-2">
                  <p>Sizes</p>
                  <div className="md-size-box">
                    <div>
                      <input
                        type="radio"
                        name="xs"
                        id="xs"
                        className="btn-check"
                      />
                      <label className="btn btn-outline-danger" for="xs">
                        <p className="md-size-list mb-2">XS</p>
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="s"
                        id="s"
                        className="btn-check"
                      />
                      <label className="btn btn-outline-danger" for="s">
                        <p className="md-size-list mb-2">S</p>
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="m"
                        id="m"
                        className="btn-check"
                      />
                      <label className="btn btn-outline-danger" for="m">
                        <p className="md-size-list mb-2">M</p>
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="l"
                        id="l"
                        className="btn-check"
                      />
                      <label className="btn btn-outline-danger" for="l">
                        <p className="md-size-list mb-2">L</p>
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="xl"
                        id="xl"
                        className="btn-check"
                      />
                      <label className="btn btn-outline-danger" for="xl">
                        <p className="md-size-list mb-2">XL</p>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="pt-2">
                  <p>Category</p>
                  <div className="md-size-box">
                    <div>
                      <input
                        type="radio"
                        name="all"
                        id="all"
                        className="btn-check"
                      />
                      <label className="btn btn-outline-danger" for="all">
                        <p className="md-category-list mb-2">All</p>
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="women"
                        id="women"
                        className="btn-check"
                      />
                      <label className="btn btn-outline-danger" for="women">
                        <p className="md-category-list mb-2">Women</p>
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="men"
                        id="men"
                        className="btn-check"
                      />
                      <label className="btn btn-outline-danger" for="men">
                        <p className="md-category-list mb-2">Men</p>
                      </label>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="md-size-box">
                      <div>
                        <input
                          type="radio"
                          name="boys"
                          id="boys"
                          className="btn-check"
                        />
                        <label className="btn btn-outline-danger" for="boys">
                          <p className="md-category-list mb-2">Boys</p>
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="girls"
                          id="girls"
                          className="btn-check"
                        />
                        <label className="btn btn-outline-danger" for="girls">
                          <p className="md-category-list mb-2">Girls</p>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2">
                    <select name="brand" id="brand" className="form-select">
                      <option selected>Brand</option>
                      <option value="zalora">Zalora</option>
                    </select>
                  </div>
                  <div className="pt-2">
                    <div className="md-size-box">
                      <div>
                        <input
                          type="radio"
                          name="discard"
                          id="discard"
                          className="btn-check"
                        />
                        <label className="btn btn-outline-danger" for="discard">
                          <p className="md-submit-list mb-2">Discard</p>
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="apply"
                          id="apply"
                          className="btn-check"
                        />
                        <label className="btn btn-outline-danger" for="apply">
                          <p className="md-submit-list mb-2">Apply</p>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
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
              <button
                type="button"
                className="btn btn-outline-danger login-box btn-login"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-outline-danger signup-box btn-signup"
                onClick={() => navigate("/signup")}
              >
                Sign Up
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
        <div className="mt-5 head-new">
          <p className="cat-new mb-1">New</p>
          <p className="new-info mb-1">What are you currently looking for</p>
        </div>
        <div className="mt-4 card-box">
          <div className="card-items">
            <Card className="card-product">
              <Card.Img
                variant="top"
                src={require("../../images/Product.png")}
              />
              <Card.Body className="card-body">
                <Card.Title className="card-title">
                  Men's formal suit - Black & White
                </Card.Title>
                <Card.Text className="card-price">$ 40.0</Card.Text>
                <Card.Text className="card-store">Zalora Cloth</Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-product">
              <Card.Img
                variant="top"
                src={require("../../images/Product.png")}
              />
              <Card.Body className="card-body">
                <Card.Title className="card-title">
                  Men's formal suit - Black & White
                </Card.Title>
                <Card.Text className="card-price">$ 40.0</Card.Text>
                <Card.Text className="card-store">Zalora Cloth</Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-product">
              <Card.Img
                variant="top"
                src={require("../../images/Product.png")}
              />
              <Card.Body className="card-body">
                <Card.Title className="card-title">
                  Men's formal suit - Black & White
                </Card.Title>
                <Card.Text className="card-price">$ 40.0</Card.Text>
                <Card.Text className="card-store">Zalora Cloth</Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-product">
              <Card.Img
                variant="top"
                src={require("../../images/Product.png")}
              />
              <Card.Body className="card-body">
                <Card.Title className="card-title">
                  Men's formal suit - Black & White
                </Card.Title>
                <Card.Text className="card-price">$ 40.0</Card.Text>
                <Card.Text className="card-store">Zalora Cloth</Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-product">
              <Card.Img
                variant="top"
                src={require("../../images/Product.png")}
              />
              <Card.Body className="card-body">
                <Card.Title className="card-title">
                  Men's formal suit - Black & White
                </Card.Title>
                <Card.Text className="card-price">$ 40.0</Card.Text>
                <Card.Text className="card-store">Zalora Cloth</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="mt-4 card-items">
            <Card className="card-product">
              <Card.Img
                variant="top"
                src={require("../../images/Product.png")}
              />
              <Card.Body className="card-body">
                <Card.Title className="card-title">
                  Men's formal suit - Black & White
                </Card.Title>
                <Card.Text className="card-price">$ 40.0</Card.Text>
                <Card.Text className="card-store">Zalora Cloth</Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-product">
              <Card.Img
                variant="top"
                src={require("../../images/Product.png")}
              />
              <Card.Body className="card-body">
                <Card.Title className="card-title">
                  Men's formal suit - Black & White
                </Card.Title>
                <Card.Text className="card-price">$ 40.0</Card.Text>
                <Card.Text className="card-store">Zalora Cloth</Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-product">
              <Card.Img
                variant="top"
                src={require("../../images/Product.png")}
              />
              <Card.Body className="card-body">
                <Card.Title className="card-title">
                  Men's formal suit - Black & White
                </Card.Title>
                <Card.Text className="card-price">$ 40.0</Card.Text>
                <Card.Text className="card-store">Zalora Cloth</Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-product">
              <Card.Img
                variant="top"
                src={require("../../images/Product.png")}
              />
              <Card.Body className="card-body">
                <Card.Title className="card-title">
                  Men's formal suit - Black & White
                </Card.Title>
                <Card.Text className="card-price">$ 40.0</Card.Text>
                <Card.Text className="card-store">Zalora Cloth</Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-product">
              <Card.Img
                variant="top"
                src={require("../../images/Product.png")}
              />
              <Card.Body className="card-body">
                <Card.Title className="card-title">
                  Men's formal suit - Black & White
                </Card.Title>
                <Card.Text className="card-price">$ 40.0</Card.Text>
                <Card.Text className="card-store">Zalora Cloth</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="mt-5 head-new">
          <p className="cat-new mb-1">Popular</p>
          <p className="new-pop mb-1">
            Find clothes that are trending recently
          </p>
        </div>
        <div className="mt-4 mb-5 card-box">
          <div className="card-items">
            <Card className="card-product">
              <Card.Img
                variant="top"
                src={require("../../images/Product.png")}
              />
              <Card.Body className="card-body">
                <Card.Title className="card-title">
                  Men's formal suit - Black & White
                </Card.Title>
                <Card.Text className="card-price">$ 40.0</Card.Text>
                <Card.Text className="card-store">Zalora Cloth</Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-product">
              <Card.Img
                variant="top"
                src={require("../../images/Product.png")}
              />
              <Card.Body className="card-body">
                <Card.Title className="card-title">
                  Men's formal suit - Black & White
                </Card.Title>
                <Card.Text className="card-price">$ 40.0</Card.Text>
                <Card.Text className="card-store">Zalora Cloth</Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-product">
              <Card.Img
                variant="top"
                src={require("../../images/Product.png")}
              />
              <Card.Body className="card-body">
                <Card.Title className="card-title">
                  Men's formal suit - Black & White
                </Card.Title>
                <Card.Text className="card-price">$ 40.0</Card.Text>
                <Card.Text className="card-store">Zalora Cloth</Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-product">
              <Card.Img
                variant="top"
                src={require("../../images/Product.png")}
              />
              <Card.Body className="card-body">
                <Card.Title className="card-title">
                  Men's formal suit - Black & White
                </Card.Title>
                <Card.Text className="card-price">$ 40.0</Card.Text>
                <Card.Text className="card-store">Zalora Cloth</Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-product">
              <Card.Img
                variant="top"
                src={require("../../images/Product.png")}
              />
              <Card.Body className="card-body">
                <Card.Title className="card-title">
                  Men's formal suit - Black & White
                </Card.Title>
                <Card.Text className="card-price">$ 40.0</Card.Text>
                <Card.Text className="card-store">Zalora Cloth</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="mt-4 card-items">
            <Card className="card-product">
              <Card.Img
                variant="top"
                src={require("../../images/Product.png")}
              />
              <Card.Body className="card-body">
                <Card.Title className="card-title">
                  Men's formal suit - Black & White
                </Card.Title>
                <Card.Text className="card-price">$ 40.0</Card.Text>
                <Card.Text className="card-store">Zalora Cloth</Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-product">
              <Card.Img
                variant="top"
                src={require("../../images/Product.png")}
              />
              <Card.Body className="card-body">
                <Card.Title className="card-title">
                  Men's formal suit - Black & White
                </Card.Title>
                <Card.Text className="card-price">$ 40.0</Card.Text>
                <Card.Text className="card-store">Zalora Cloth</Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-product">
              <Card.Img
                variant="top"
                src={require("../../images/Product.png")}
              />
              <Card.Body className="card-body">
                <Card.Title className="card-title">
                  Men's formal suit - Black & White
                </Card.Title>
                <Card.Text className="card-price">$ 40.0</Card.Text>
                <Card.Text className="card-store">Zalora Cloth</Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-product">
              <Card.Img
                variant="top"
                src={require("../../images/Product.png")}
              />
              <Card.Body className="card-body">
                <Card.Title className="card-title">
                  Men's formal suit - Black & White
                </Card.Title>
                <Card.Text className="card-price">$ 40.0</Card.Text>
                <Card.Text className="card-store">Zalora Cloth</Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-product">
              <Card.Img
                variant="top"
                src={require("../../images/Product.png")}
              />
              <Card.Body className="card-body">
                <Card.Title className="card-title">
                  Men's formal suit - Black & White
                </Card.Title>
                <Card.Text className="card-price">$ 40.0</Card.Text>
                <Card.Text className="card-store">Zalora Cloth</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
