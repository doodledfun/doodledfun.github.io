const sentenceStructures = [
  "I am not allowed to hold a bring your rock to school day",
  "I must refrain from organizing a chair spinning and paper airplane javelin classroom olympics",
  "I will not enroll the schools pet hampster in a Tai Chi class",
  "I must not challenge the physics teacher to a hotdog eating contest to prove my superior knowledge of the digestive system",
  "I will not organize a synchronized sneezing performance during the school choir concert",
  "I must resist the urge to wear a superhero cape and goggles while taking spelling tests",
  "I must not organize a water balloon fight during the school assembly",
  "I will not attempt teach the schools pet parrot to recite Shakespearean sonnets during quiet study time",
  "I must not organize a field trip to the moon",
  "I must not stick pencils in my ears and nose during math",
  "I must not convince my classmates that I am a time traveler",
  "I will not attempt to replace the schools fire alarm with a recording of my own laughter",
  "I must not vandalize the math teacher's car and blame it on a tyrannosaurus rex",
  "I will not declare myself the official school mascot and demand to be carried around on a golden throne"
  "I will not attempt to train the school's pet hamster to perform acrobatic stunts and enter it into a talent show"
];

let currentSentence = "";

function generateRandomSentence() {
  const randomStructure = sentenceStructures[Math.floor(Math.random() * sentenceStructures.length)];

  currentSentence = randomStructure
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
        charSpan.style.textDecoration = "none";
        charSpan.style.borderBottom = "2px solid transparent";
      } else {
        charSpan.style.color = "#FF0000"; // Red
        charSpan.style.textDecoration = "none";
        charSpan.style.borderBottom = "2px solid #FF0000"; // Red
      }
    } else {
      charSpan.style.color = "#D1D1D1"; // Light gray
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