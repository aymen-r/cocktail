import React, { useEffect, useState } from "react";
import axios from "axios";
import Ingredient from "./Ingredient";
import { useParams } from "react-router";
import "./Description.css";

const Description = () => {
  const drinkId = useParams();
  console.log(drinkId);
  const [description, setDescription] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId.id}`
      )
      .then((res) => setDescription(res.data.drinks));
  }, [drinkId]);
  console.log(description);
  return (
    <div>
      {description.map((drink) => {
        const { idDrink, strDrink, strDrinkThumb, strInstructions, strGlass } =
          drink;
        return (
          <div key={idDrink} className="desc">
            <div className="top">
              <div className="left">
                <h1>{strDrink}</h1>
                <div className="imgDrink">
                  <img src={strDrinkThumb} alt="" />
                </div>
              </div>

              <div className="right">
                <Ingredient drink={drink} />
              </div>
            </div>
            <div className="text">
              <h4>Instructions : </h4>
              <p>{strInstructions}</p>
              <h4>Serve : </h4>
              <p>{strGlass}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Description;
