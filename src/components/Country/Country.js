import React from "react";
import "./Country.css";

const Country = (props) => {
  //console.log(props);
  const { name, flag, population, capital } = props.countries;
  // const handleAdd = props.handleAddCountry;
  //const country = props.country;

  return (
    <div className="country">
      <div className="country-flag">
        <img src={flag} alt="" />
      </div>
      <div className="country-info">
        <h4>Country Name : {name}</h4>
        <h4>Country Population : {population}</h4>
        <h4>Country Capitals : {capital}</h4>
        <button onClick={() => props.handleAdd(props)} className="main-button">
          Add Country
        </button>
      </div>
    </div>
  );
};

export default Country;
