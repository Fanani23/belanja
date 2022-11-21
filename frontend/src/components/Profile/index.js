import React, { useState } from "react";
import Logo from "../../images/Logo.svg";
import { ReactComponent as SearchIcon } from "../../images/Search.svg";
import { ReactComponent as FilterIcon } from "../../images/Filter.svg";
import { ReactComponent as ShoppingIcon } from "../../images/Shopping.svg";
import { ReactComponent as NotifIcon } from "../../images/Bell.svg";
import { ReactComponent as MailIcon } from "../../images/Mail.svg";
import { ReactComponent as ProfileIcon } from "../../images/Profile.svg";
import { ReactComponent as MyProfileIcon } from "../../images/MyProfile.svg";
import { ReactComponent as NameTagIcon } from "../../images/NameTag.svg";
import { ReactComponent as SideHomeIcon } from "../../images/SideHome.svg";
import { ReactComponent as SidePackageIcon } from "../../images/SidePackage.svg";
import { ReactComponent as SideShoppingIcon } from "../../images/SideShopping.svg";
import { ReactComponent as LineTop } from "../../images/LineTop.svg";
import { ReactComponent as LineBot } from "../../images/LineBot.svg";
import { ReactComponent as BotProfile } from "../../images/BotProfile.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "@fontsource/metropolis";
import "./Profile.css";

const Profile = () => {
  const logout = () => {
    localStorage.clear();
    window.location.reload(false);
  };

  const navigate = useNavigate();
  return (
    <div className="container-home-profile">
      <div className="container-navbar">
        <nav className="navbar navbar-box">
          <ul className="navbar-nav">
            <li>
              <Link to={`/home-login`} style={{ textDecoration: "none" }}>
                <img src={Logo} alt="Belanja" className="logo-home" />
              </Link>
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
              <button type="button" className="shopping-box">
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
              <Dropdown className="profile-box">
                <Dropdown.Toggle className="dropdown" variant="secondary">
                  <ProfileIcon />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/profile">My Profile</Dropdown.Item>
                  <Dropdown.Item onClick={() => logout()} href="/">
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container-body-profile">
        <div className="left-container">
          <div className="left-body">
            <div className="left-item my-profile">
              <div>
                <MyProfileIcon />
              </div>
              <div>
                <NameTagIcon />
              </div>
            </div>
            <div className="side-home">
              <button className="btn-round-home">
                <SideHomeIcon />
              </button>
              <Dropdown>
                <Dropdown.Toggle className="dropdown">Store</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/profile">Store Profile</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="side-package">
              <button className="btn-round-package">
                <SidePackageIcon />
              </button>
              <Dropdown>
                <Dropdown.Toggle className="dropdown" variant="warning">
                  Product
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/my-product">My Product</Dropdown.Item>
                  <Dropdown.Item href="/selling-product">
                    Selling Product
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="side-shop">
              <button className="btn-round-shop">
                <SideShoppingIcon />
              </button>
              <Dropdown>
                <Dropdown.Toggle className="dropdown" variant="danger">
                  Order
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/my-order">My Order</Dropdown.Item>
                  <Dropdown.Item href="/order-cancel">
                    Order Cancel
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="right-body">
            <div className="top-right">
              <div>
                <p className="top-right-a mb-1 pb-0">My profile store</p>
              </div>
              <div>
                <p className="top-right-b mb-0 pb-1">
                  Manage your profile information
                </p>
              </div>
            </div>
            <div className="line-top">
              <LineTop />
            </div>
            <div className="bot-right">
              <div className="left-rb">
                <p>Name</p>
                <p>Email</p>
                <p>Phone Number</p>
                <p>Store Description</p>
              </div>
              <div className="center-rb">
                <div>
                  <input
                    type="text"
                    className="form-control input-rb"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control input-rb"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control input-rb"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input type="text" className="form-control input-rbr" />
                </div>
                <div>
                  <button className="btn-sv">Save</button>
                </div>
              </div>
              <div className="line-rb">
                <LineBot />
              </div>
              <div className="right-rb">
                <BotProfile />
                <button className="btn-img">Select Image</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
