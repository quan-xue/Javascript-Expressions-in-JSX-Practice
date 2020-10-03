//Create a react app from scratch.

import React from "react";
import ReactDOM from "react-dom";

const fName = "Quan";
const lName = "Xue";
const date = new Date();
const year = date.getFullYear();

//It should display 2 paragraph HTML elements.

ReactDOM.render(
  <div>
    <p>Created by {fName + " " + lName}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);

//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
