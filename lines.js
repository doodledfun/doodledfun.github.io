const sentences = [
  "I am not allowed to hold a bring your rock to school day",
  "I will not enroll the schools hampster in a Tai Chi class",
  "I must not organize a field trip to the moon",
  "I must not convince my classmates that I am a time traveler",
  "I will not change the schools fire alarm to recording of my laughter",
  "I must not squash the principles car then blame it aliens",
];

let currentSentence = "";

function generateRandomSentence() {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  currentSentence = sentences[randomIndex].toUpperCase();

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