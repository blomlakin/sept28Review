console.log("We're in.");

// Control Flow: Conditional vs. Looping

// Coditional
name = "Guap";

if (name == "Colleen") {
  console.log("It's Colleen.");
} else if (name == "Patrick") {
  console.log("No, this is Patrick.");
} else {
  console.log("Could be anyone.");
}

// // Loops
// // For Loops vs. While Loops
// // While Loops: Continue WHILE some condition is true
let num = 0;
while (num <= 3) {
  console.log("The variable called num equals " + num + ".");
  num += 1;
}
// // For Loops: Continue UNTIL some condition is false
for (let i = 1; i < 10; i++) {
  console.log("This is my " + i + "th time through the loop.");
}

// // Array Methods

let animals = ["dog", "cat", "fish"];

animals.push("hamster");
console.log(animals);
animals.pop();
console.log(animals);

let numbers = [4, 7, 8, 9, 2];

console.log(Math.floor(5.77));

console.log(numbers[Math.floor(numbers.length / 2)]);
console.log(numbers[0]);

// // Looping through arrays
for (let i = 0; i < animals.length; i++) {
  console.log("Animal " + i + ": " + animals[i]);
}
console.log(animals.length);

let animals2 = ["snake", "cow", "fish"];
// //Nested loops
for (let i = 0; i < animals.length; i++) {
  for (let j = 0; j < animals2.length; j++) {
    if (animals[i] == animals2[j]) {
      console.log("They are equal");
    } else {
      console.log("Not the same");
    }
  }
}
