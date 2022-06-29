import React from "react";
import "../style.css";
import Nav from "./Nav";
import Journal from "./Journal";
import data from "./data";

const App = () => {
  const journal = data.map((item, index) => (
    <Journal key={index} item={item} />
  ));

  return (
    <div>
      <Nav />
      <div className="content"> {journal}</div>
    </div>
  );
};

export default App;
