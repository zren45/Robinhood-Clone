import React from "react";
import Logo from "../images/robinhood.svg";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header__wrapper">
      {/*logo */}
      <div className="header__logo">
        <img src={Logo} width={25} alt="logo" />
      </div>
      {/*searchbar */}
      <div className="header__search">
        <div className="header__searchContainer">
          <div className="header__searchIcon">
            <SearchIcon />
          </div>

          <input placeholder="Search" type="text" />
        </div>
      </div>
      {/* menuitem*/}
      <div className="header__menuItems">
        <a href="#">Rewards</a>
        <a href="#">Portfolio</a>
        <a href="#">Cash</a>
        <a href="#">Messages</a>
        <a href="#">Account</a>
      </div>
    </div>
  );
}
