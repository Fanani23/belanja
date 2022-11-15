import React, { useState } from "react";
import Logo from "../../images/Logo.svg";
import { ReactComponent as SearchIcon } from "../../images/Search.svg";
import { ReactComponent as FilterIcon } from "../../images/Filter.svg";
import { ReactComponent as ShoppingIcon } from "../../images/Shopping.svg";
import { ReactComponent as NotifIcon } from "../../images/Bell.svg";
import { ReactComponent as MailIcon } from "../../images/Mail.svg";
import { ReactComponent as ProfileIcon } from "../../images/Profile.svg";
import { useNavigate } from "react-router-dom";
import "@fontsource/metropolis";
import "./Bag.css";

const Bag = () => {
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
              <button type="button" className="profile-box">
                <ProfileIcon />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Bag;
