import React from "react";
import "./Home.css";
import Intro from "./home/intro";
import Drinks from "./home/Drinks";
import SearchLetter from "./searchLetter";
import SearchName from "./searchName";

const Home = ({ letter, name, handleSearchLetter }) => {
  if (letter !== "") {
    return (
      <div>
        <h1>Browse Cocktails</h1> <Drinks letter={letter} />
        <SearchLetter handleSearchLetter={handleSearchLetter} />
      </div>
    );
  } else if (name !== "") {
    return (
      <div>
        <h1>Browse Cocktails</h1>
        <SearchName name={name} />
        <SearchLetter handleSearchLetter={handleSearchLetter} />
      </div>
    );
  } else {
    return (
      <div>
        <Intro />
        <SearchLetter handleSearchLetter={handleSearchLetter} />
      </div>
    );
  }
  // return (
  //   <div className="home">
  //     {letter !== "" && name !== "" ? (
  //       <div>
  //         <h1>Browse Cocktails</h1> <Drinks letter={letter} />{" "}
  //         <SearchName name={name} />
  //       </div>
  //     ) : (
  //       <Intro />
  //     )}
  //     <SearchLetter handleSearchLetter={handleSearchLetter} />
  //   </div>
  // );
};

export default Home;
