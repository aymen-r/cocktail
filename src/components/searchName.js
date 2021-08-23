import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home/Drinks.css";

const SearchName = ({ name }) => {
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
      .then((res) => setFilter(res.data.drinks))
      .catch((err) => console.log(err));
  }, [name]);
  console.log(filter);
  if (filter) {
    return (
      <div className="drinkCard">
        {filter.map((drink) => {
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
    );
  } else {
    return <h1>no drinks with this name</h1>;
  }
};

export default SearchName;
