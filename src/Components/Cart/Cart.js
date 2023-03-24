import React from "react";
import classes from './Cart.module.css'
const Cart = (props) => {
  return <button className={classes.cart}>Your Cart <span className={classes.counter}>0</span></button>
};
export default Cart;
