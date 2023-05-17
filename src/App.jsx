import React from "react";
import "./App.css";
import CurrentLocation from "./currentLocation";

function App() {
  return (
    <React.Fragment>
    <div className="container">
      <CurrentLocation/>
    </div>
    <div className="footer-info">
       Developed by{" "}
      <a target="_blank" href="https://carnage-portfolio.vercel.app/">
     Yash Harale 
      </a>{""}
     {""} | Copyright 2023. All Rights Reserved.
    </div>
  </React.Fragment>
  )
}

export default App;
