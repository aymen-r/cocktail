import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = ({ handleSearchLetter, handleSearchName }) => {
  const [word, setWord] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchName(word);
    handleSearchLetter("");
    setWord("");
  };
  console.log(word);
  return (
    <div className="navbar1">
      <div>
        <img src="https://www.thecocktaildb.com/images/logo.png" alt="logo" />
      </div>

      <div>
        <Link to="/">
          <button
            className="btn btn-outline-danger m-3"
            onClick={() => {
              handleSearchLetter("");
              handleSearchName("");
            }}
          >
            Home
          </button>
        </Link>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control m-3"
            type="text"
            placeholder="search"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default NavBar;
