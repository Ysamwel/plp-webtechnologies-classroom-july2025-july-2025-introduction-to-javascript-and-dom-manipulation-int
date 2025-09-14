
// Part 1: Basics - Variables & Conditionals
let age = 18;
if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You are too young cant vote.");
}

// Part 2: Functions
function calculateTotal(price, quantity) {
  return price * quantity;
}

function greetUser(name) {
  console.log("Hello, " + name + "!");
}

console.log("Total: " + calculateTotal(10, 3));
greetUser("Yvonne");

// -------------------------------------
// Part 3: Loops
// -------------------------------------
// Example 1: for loop
let fruits = ["apple", "banana", "mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit: " + fruits[i]);
}

// Example 2: while loop
let countdown = 5;
while (countdown > 0) {
  console.log("Countdown: " + countdown);
  countdown--;
}

// -------------------------------------
// Part 4: DOM Manipulation
// -------------------------------------
const intro = document.getElementById("intro");
const changeTextBtn = document.getElementById("changeTextBtn");
const toggleColorBtn = document.getElementById("toggleColorBtn");
const addItemBtn = document.getElementById("addItemBtn");
const itemList = document.getElementById("itemList");

// 1. Change text on button click
changeTextBtn.addEventListener("click", () => {
  intro.textContent = "🎉 The text has been changed!";
});

// 2. Toggle color mode
toggleColorBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 3. Add new item to list
addItemBtn.addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = "New Item " + (itemList.children.length + 1);
  itemList.appendChild(li);
});
