"use Strict";
// selecting Variables

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const message = document.querySelector(".msg");
const images = document.querySelector(".images");

btn1.addEventListener("click", function () {
  message.innerHTML = "Button One is clicked";
  message.style.backgroundColor = "orange";
  images.src = "assets/image-1.avif";
});
btn2.addEventListener("click", function () {
  message.innerHTML = "Button Two is clicked";
  message.style.backgroundColor = "red";
  images.src = "assets/image-2.avif";
});
btn3.addEventListener("click", function () {
  message.innerHTML = "Button Three is clicked";
  message.style.backgroundColor = "green";
  images.src = "assets/image-3.jpeg";
});

let quaid = ["1"];
let tech = quaid;
let team = ["2"];
tech.push("3");
quaid.push("4");
team.push(quaid);
console.log(quaid.length, quaid, team, tech);

let x = true === [];
let y = true === ![];
console.log(x + y, x, y);
