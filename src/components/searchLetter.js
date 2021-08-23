import React from "react";

const Search = ({ handleSearchLetter }) => {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const handleClick = (e) => {
    handleSearchLetter(e);
  };
  return (
    <div className="search">
      <h5>Browse Drinks</h5>
      {alphabet.map((el) =>
        el === "Z" ? (
          <a href="#" onClick={() => handleClick(el)}>
            {el}{" "}
          </a>
        ) : (
          <span>
            <a href="#" onClick={() => handleClick(el)}>
              {el}
            </a>
            {"  "}/{"  "}
          </span>
        )
      )}
      <a></a>
    </div>
  );
};

export default Search;
