import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Drinks.css";
import { Link } from "react-router-dom";

const Drinks = ({ letter }) => {
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((res) => setDrinks(res.data.drinks))
      .catch((err) => console.log(err));
  }, [letter]);

  if (drinks) {
    return (
      <div className="page">
        <div className="drinkCard">
          {drinks.map((drink) => {
            return (
              <div key={drink.idDrink} className="oneDrink">
                <Link
                  to={`/${drink.strDrink}/${drink.idDrink}`}
                  style={{ textDecoration: "none" }}
                >
                  <img src={drink.strDrinkThumb} alt="" />
                  <h5>{drink.strDrink} </h5>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <h5>No Drinks found</h5>;
  }
};

export default Drinks;
