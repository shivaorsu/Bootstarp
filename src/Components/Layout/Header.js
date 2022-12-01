
    import React, { Fragment } from "react";

import classes from "./Header.module.css";
import { NavLink } from "react-bootstrap";

const Header = (props) => {
  return (
    <Fragment>

      <header className={classes.header}>
        <span>HOME</span>
        <span>STORE</span>
        <span>ABOUT</span>
        <NavLink to ="/home"><span>HOME</span></NavLink>
        <NavLink to ="/store"><span>STORE</span></NavLink>
        <NavLink to ="/about"><span>ABOUT</span></NavLink>


        <button className={classes.button} onClick={props.onShowCart}> Cart </button>
        <span> 0 </span>
        <span> 3 </span>
      </header>
      <h1 className={classes.h1}> The Generics </h1>

      <div>
        <h2 className={classes.music}> MUSIC </h2>
      </div>

    </Fragment>
  );
};
export default Header;