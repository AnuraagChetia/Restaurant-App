import React, { Fragment, useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from './Components/Layout/Header'
import Meals from './Components/Meals/Meals'
function App() {
  const [showCart,setShowCart] = useState(false);
  const cartShowHandler = () =>{
    setShowCart(true);
  }
  const cartCloseHandler = ()=>{
    setShowCart(false);
  }
  return (
    <Fragment>
      {showCart && <Cart onCloseClick={cartCloseHandler}></Cart>}
      <Header onCartClick={cartShowHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;
