import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  console.log(cart);
  // let total = 0;
  // for (let i = 0; i < cart.length; i++) {
  //   const country = cart[i];
  //   total = total + country.population;
  // }
  const total = cart.reduce((sum, item) => sum + item.population, 0);

  return (
    <div>
      <h2>Cart Item Order : {cart.length}</h2>
      <h5>Population : {Number(total)}</h5>
    </div>
  );
};

export default Cart;
