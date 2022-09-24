/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The man under my bed", "My computer", "The Dishwasher", "My Cat"];
let action = ["ate", "broke", "lost", "swallowed"];
let what = ["my shoes", "my keys", "the broken vase", "my essay"];
let when = [
  "last night",
  "when I was sleeping",
  "during my shower",
  "on the way here"
];

function pullexcuse(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

window.onload = function() {
  //write your code here

  // = values[Math.floor]

  document.getElementById("excuse").innerHTML = pullexcuse(who);
  console.log();
};
