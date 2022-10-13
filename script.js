"use strict";

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log("Im being clicked");
  btn.style.backgroundColor = "red";
});
