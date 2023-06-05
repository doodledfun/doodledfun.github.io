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
        charSpan.style.borderBottom = "2px solid transparent";
      } else {
        charSpan.style.color = "red";
        charSpan.style.textDecoration = "none";
        charSpan.style.borderBottom = "2px solid red";
      }
    } else {
      charSpan.style.color = "#D1D1D1";
      charSpan.style.textDecoration = "none";
      charSpan.style.borderBottom = "2px solid transparent";
    }
  }
}

generateRandomSentence();

const inputElement = document.createElement("input");
inputElement.type = "text";
inputElement.style.display = "none"; // Hide the input box
inputElement.addEventListener("input", handleKeyPress);
document.getElementById("container").appendChild(inputElement);

document.addEventListener("keydown", function(event) {
  const key = event.key;

  if (key === "Backspace") {
    event.preventDefault();
    inputElement.value = inputElement.value.slice(0, -1);
    handleKeyPress({ target: inputElement });
  } else if (/^[a-z\s]$/i.test(key)) {
    inputElement.value += key;
    handleKeyPress({ target: inputElement });
  }
});
