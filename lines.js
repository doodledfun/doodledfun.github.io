const sentenceStructures = [
  "I will not {action} {object} during {class}",
  "I promise to keep my {pet} away from {object} in {class}",
  "I will not {action} {food} during {class}",
  "I promise to keep my {pet} away from {food} in {class}",
  "I will not {action} {food} during {class}",
  "I will not {action} {object} during {class}",
  "I will not throw {food} at the {class} teacher",
  "I will not throw {object} at the {class} teacher",
  "I will not throw my {pet} at the {class} teacher"
];

const objects = [
  "a pencil",
  "a cell phone",
  "homework",
  "a book",
  "a teacher",
  "a potato",
  "a notebook"
];

const classes = [
  "math",
  "english",
  "history",
  "science",
  "music"
];

const actions = [
  "throw",
  "eat",
  "break",
  "hide",
  "play with"
];

const foods = [
  "pizza",
  "chips",
  "a cookie",
  "ice cream",
  "a burger",
  "ramen"
];

const pets = [
  "cat",
  "dog",
  "hamster",
  "bird",
  "fish",
  "monkey"
];

let currentSentence = "";

function generateRandomSentence() {
  const randomStructure = sentenceStructures[Math.floor(Math.random() * sentenceStructures.length)];
  const randomObject = objects[Math.floor(Math.random() * objects.length)];
  const randomClass = classes[Math.floor(Math.random() * classes.length)];
  const randomAction = actions[Math.floor(Math.random() * actions.length)];
  const randomFood = foods[Math.floor(Math.random() * foods.length)];
  const randomPet = pets[Math.floor(Math.random() * pets.length)];

  currentSentence = randomStructure
    .replace("{object}", randomObject)
    .replace("{class}", randomClass)
    .replace("{action}", randomAction)
    .replace("{food}", randomFood)
    .replace("{pet}", randomPet)
    .toUpperCase();

  const textDiv = document.getElementById("text");
  textDiv.innerHTML = ""; // Clear previous content

  for (let i = 0; i < currentSentence.length; i++) {
    const charSpan = document.createElement("span");
    charSpan.textContent = currentSentence[i];
    textDiv.appendChild(charSpan);
  }
}

function handleKeyPress(event) {
  const inputText = event.target.value.toLowerCase();
  const textDiv = document.getElementById("text");
  const charSpans = textDiv.children;

  for (let i = 0; i < charSpans.length; i++) {
    const charSpan = charSpans[i];

    if (i < inputText.length) {
      if (inputText[i] === currentSentence[i].toLowerCase()) {
        charSpan.style.color = "black";
        charSpan.style.textDecoration = "none";
      } else {
        charSpan.style.color = "red";
        charSpan.style.textDecoration = "underline";
      }
    } else {
      charSpan.style.color = "#D1D1D1";
      charSpan.style.textDecoration = "none";
    }
  }
}

generateRandomSentence();

const inputElement = document.createElement("input");
inputElement.type = "text";
inputElement.style.display = "none"; // Hide the input box
inputElement.addEventListener("input", handleKeyPress);
document.getElementById("container").appendChild(inputElement);

let isCtrlKeyPressed = false;

document.addEventListener("keydown", function(event) {
  const key = event.key;
  const allowedKeys = /^[a-z\s]$/i; // Regular expression to match letters and space

  if (key.match(allowedKeys)) {
    if (isCtrlKeyPressed && key === "Backspace") {
      event.preventDefault();
      const words = inputElement.value.trim().split(" ");
      words.pop();
      inputElement.value = words.join(" ");
    } else if (key === "Backspace") {
      event.preventDefault();
      inputElement.value = inputElement.value.slice(0, -1);
    } else {
      inputElement.value += key;
    }
    handleKeyPress({ target: inputElement });
  } else if (key === "Control") {
    isCtrlKeyPressed = true;
  }
});

document.addEventListener("keyup", function(event) {
  if (event.key === "Control") {
    isCtrlKeyPressed = false;
  }
});

const watermarkText = "doodled.fun";
const watermarkLink = "https://doodled.fun";

const watermarkDiv = document.createElement("div");
watermarkDiv.textContent = watermarkText;
watermarkDiv.style.position = "fixed";
watermarkDiv.style.top = "10px";
watermarkDiv.style.left = "10px";
watermarkDiv.style.cursor = "pointer";
watermarkDiv.style.fontFamily = "doodles, Arial, sans-serif";
watermarkDiv.style.fontSize = "14px";
watermarkDiv.style.color = "#999999";
watermarkDiv.addEventListener("click", function() {
  window.location.href = watermarkLink;
});

document.body.appendChild(watermarkDiv);
