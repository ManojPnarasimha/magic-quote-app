import { useState } from "react";
import { quotes } from "./constants"; // Relative path within `src`
import "./App.css";
import Navbar from "./Navbar";

const App = () => {
  const [randomIndex, setRandomIndex] = useState(
    Math.floor(Math.random() * quotes.length)
  );

  const handleRefresh = () => {
    setRandomIndex(Math.floor(Math.random() * quotes.length));
  };

  const randomQuote = quotes[randomIndex];

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="app-heading">
          <h1>Magic Quote App  </h1>
          <h2 className="random-quote">{randomQuote.quote}</h2>
          <button  onClick={handleRefresh}>Refresh Quote</button>
          {/* <span className="auther-name">- {randomQuote.author || "Unknown"}</span> */}
        </div>
      </div>
    </>
  );
};

export default App;
