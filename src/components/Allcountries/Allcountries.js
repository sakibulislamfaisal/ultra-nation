import React, { useState, useEffect } from "react";
import Country from "../Country/Country";
import Cart from "../Cart/Cart";

const Allcountries = () => {
  const [country, setCountry] = useState([]);
  const [cart, setCart] = useState([]);

  //Data load using
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountry(data))
      .catch((err) => console.log(err));
  }, []);
  //country count

  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
    // console.log("country added", country);
  };

  return (
    <div className="country-information">
      <h4>Total Country:{country.length} </h4>
      <h3>Item Select : {cart.length}</h3>
      <Cart cart={cart}></Cart>
      {country.map((country) => (
        <Country
          key={country.alpha3Code}
          handleAdd={handleAddCountry}
          countries={country}
        ></Country>
      ))}
    </div>
  );
};

export default Allcountries;
