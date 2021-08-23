import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Description from "./components/home/Description";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";

function App() {
  const [letter, setLetter] = useState("");
  const handleSearchLetter = (x) => setLetter(x);

  const [name, setName] = useState("");
  const handleSearchName = (x) => {
    setName(x);
    // setName("");
  };

  return (
    <div className="App">
      <Navbar
        handleSearchLetter={handleSearchLetter}
        handleSearchName={handleSearchName}
      />

      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Home
              letter={letter}
              name={name}
              handleSearchLetter={handleSearchLetter}
            />
          )}
        />
        <Route path="/:name/:id" component={Description} />
      </Switch>
    </div>
  );
}

export default App;
