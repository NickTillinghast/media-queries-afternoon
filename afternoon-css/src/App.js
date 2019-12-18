import React from "react";
import Header from "./Components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="splash">
        <div className="container">
          <div className="body">
            <div className="first-line">Welcome To Our Studio!</div>
            <div className="second-line">It's Nice To Meet You</div>
            <button className="yellow-button">Tell Me More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
