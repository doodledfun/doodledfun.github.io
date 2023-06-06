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
    charSpan.style.fontSize = "48px"; // Increase the text size to 48 pixels
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
        charSpan.style.color = "#000000"; // Black
        charSpan.style.backgroundColor = "transparent"; // Reset background color
      } else {
        charSpan.style.color = "#000000"; // Black
        charSpan.style.backgroundColor = "#FF0000"; // Highlight incorrect character in red
      }
    } else {
      charSpan.style.color = "#D1D1D1"; // Light gray
      charSpan.style.backgroundColor = "transparent"; // Reset background color
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

  if (key === "Backspace") {
    event.preventDefault();
    const isCtrlPressed = event.ctrlKey || event.metaKey; // Check if Ctrl key is pressed
    if (isCtrlPressed) {
      const words = inputElement.value.trim().split(" ");
      if (words.length > 1) {
        words.pop(); // Remove the last word
        inputElement.value = words.join(" ") + " "; // Add space after removing the word
      } else {
        inputElement.value = ""; // Clear the input if only one word is present
      }
    } else {
      inputElement.value = inputElement.value.slice(0, -1);
    }
    handleKeyPress({ target: inputElement });
  } else if (/^[a-z\s]$/i.test(key)) {
    inputElement.value += key;
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
