import React from "react";
import "./ingredient.css";

const Ingredient = ({ drink }) => {
  let ing = [];
  for (let i = 1; i < 16; i++) {
    ing.push({
      name: drink[`strIngredient${i}`],
      measure: drink[`strMeasure${i}`],
    });
  }

  return (
    <div>
      <h1>Ingredients</h1>
      <div className="ingredients">
        {ing.map((el, i) => {
          if (el.name) {
            return (
              <div key={i}>
                <img
                  src={`https://www.thecocktaildb.com/images/ingredients/${el.name}-Medium.png`}
                  alt=""
                  style={{ width: "210px" }}
                />
                <p>
                  {el.measure} {el.name}
                </p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Ingredient;
