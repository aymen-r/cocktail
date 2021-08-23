import React from "react";
import "./intro.css";

const intro = () => {
  return (
    <div>
      <div className="intro">
        <div>
          <img
            src="https://www.thecocktaildb.com/images/cocktail_left.png"
            alt="img"
          />
        </div>
        <div>
          <h1>Welcome to TheCocktailDB</h1>
        </div>
        <div>
          <img
            src="https://www.thecocktaildb.com/images/cocktail_right.png"
            alt="img"
          />
        </div>
      </div>
      <img src="https://www.thecocktaildb.com/images/separator.jpg" alt="" />
    </div>
  );
};

export default intro;
