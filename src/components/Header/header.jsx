import React from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";

import SideNavigation from "./SideNav/side_nav";

import style from "./header.css";

const Header = props => {
  const navBar = () => (
    <div className={style.bars}>
      <FontAwesome
        name="bars"
        style={{ color: "#dfdfdf", padding: "10px", cursor: "pointer" }}
        onClick={() => props.onOpenNav()}
      />
    </div>
  );
  const logo = () => (
    <Link to="/" className={style.logo}>
      <img alt="NBA Logo" src="/images/nba_logo.png" />
    </Link>
  );
  return (
    <header className={style.header}>
      <SideNavigation {...props} />
      <div className={style.headerOpt}>
        {navBar()}
        {logo()}
      </div>
    </header>
  );
};

export default Header;
