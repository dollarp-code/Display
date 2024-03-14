"use Strict";
// selecting Variables

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const message = document.querySelector(".msg");
const images = document.querySelector(".images");

btn1.addEventListener("click", function () {
  message.innerHTML = "Button One is clicked";
  message.style.backgroundColor = "orange";
  images.classList.remove("hidden");
  images.src = "assets/image-1.avif";
});
btn2.addEventListener("click", function () {
  message.innerHTML = "Button Two is clicked";
  message.style.backgroundColor = "red";
  images.classList.remove("hidden");
  images.src = "assets/image-2.avif";
});
btn3.addEventListener("click", function () {
  message.innerHTML = "Button Three is clicked";
  message.style.backgroundColor = "green";
  images.classList.remove("hidden");
  images.src = "assets/image-3.jpeg";
});
btn4.addEventListener("click", function () {
  message.innerHTML = "";
  images.classList.add("hidden");
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

function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  }
  let posCount = 0;
  let negSum = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      posCount++;
    } else {
      negSum += input[i];
    }
  }
  return [posCount, negSum];
}
console.log(countPositivesSumNegatives([]));
console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -5, -3, -9, -8, -12, -4, -17, -20, -17, 9,
    17,
  ])
);

const a = Number(prompt("Enter value a"));
const b = Number(prompt("Enter value b"));
const c = Number(prompt("Enter value c"));

const perimeter = a + b + c;
console.log(`The primeter is ${perimeter}`);
