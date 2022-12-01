




import React, { Fragment, useContext } from "react";
import classes from "./Product.module.css";

import CartContext from "../../Store/CartContext";

const Product = (props) => {
    const CartCtx=useContext(CartContext)

    const addItemToCart = (event) =>{
        event.preventDefault()
        CartCtx.addItem({ ...props.item });
        console.log(CartCtx);
    }
  
  return (
    <Fragment>
        <li className={classes.list}>
        <div>
            <h3>{props.title}</h3>
            <img src={props.image} alt="some images"></img>
            <h1>{props.price}</h1>
            <button>Add To Cart</button>
          <h3>{props.title}</h3>
          <img src={props.image} alt="some images"></img>
          <span>
            <h1>${props.price}</h1>
            <button className={classes.button1} onClick={addItemToCart}>
              Add To Cart
            </button>
          </span>
        </div>
    </li>

      
    </Fragment>
 );
};

export default Product;