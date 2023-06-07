const sentences = [
  "I must not hold a bring your pet rock to school day",
  "I will not enroll the school hamster in a Tai Chi class",
  "I must not organize a field trip to the moon",
  "I must not convince my classmates I am a time traveler",
  "I will not change the school fire alarm to a recording of my laughter",
  "I will not squash the principals car then blame it on aliens",
  "I must not wear a hat taller than the school on crazy hat day",
  "I will not replace all the desks with trampolines",
  "I must not implement policies such as mandatory pizza for lunch",
  "I must not sit on a beanbag during class then take random naps",
  "I will not set up a bouncy castle during chemistry",
  "I must not turn the school cafeteria into a disco",
  "I will not replace all the textbooks with coloring books",
  "I must not teach squirrels calculus",
  "I will not place a cactus on the teachers chair",
  "I will not declare the school library a no read zone",
  "I must not replace the water fountain with a chocolate milk dispenser",
  "I will not replace all textbooks with comics",
  "I will not replace all pencils with giant lollipops",
  "I must not organize a whistling performance during assembly",
  "I will not attempt to turn the school bus into a pirate ship",
  "I must not lock my fellow classmates in a cage"
];  

let currentSentence = "";
let isTyped = false;

function generateRandomSentence() {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  currentSentence = sentences[randomIndex].toUpperCase();

  const textDiv = document.getElementById("text");
  textDiv.innerHTML = ""; // Clear previous content

  for (let i = 0; i < currentSentence.length; i++) {
    const charSpan = document.createElement("span");
    charSpan.textContent = currentSentence[i];
    charSpan.style.fontSize = "36px"; // Increase the text size to 36 pixels
    textDiv.appendChild(charSpan);
  }
}

function handleKeyPress(event) {
  const inputText = event.target.value.toLowerCase().trim();
  
  // Check if the inputText starts with "https://" or "http://"
  if (!inputText.startsWith("https://") && !inputText.startsWith("http://")) {
    event.target.value = "https://" + inputText; // Add "https://" to the beginning
  }
}

function handleKeyPress(event) {
  const inputText = event.target.value.toLowerCase();
  const textDiv = document.getElementById("text");
  const charSpans = textDiv.children;

  if (!isTyped && inputText.length > 0) {
    // Scroll up the text when the first letter is typed
    textDiv.style.animation = "scroll-up 1s forwards";
    isTyped = true;
  }

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
