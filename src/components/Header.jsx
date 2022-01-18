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
        <a href="https://github.com/zren45" target="_blank">
          Github
        </a>
        <a href="https://www.zhixiangren.com/" target="_blank">
          My website
        </a>
      </div>
    </div>
  );
}

export default Header;
