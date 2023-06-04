const sentenceStructures = [
    "I will not {action} the {object} during {class}.",
    "I promise to keep my {pet} away from my {object} in {class}.",
    "I will not {action} the {food} during {class}.",
    "I promise to keep my {pet} away from the {food} in {class}.",
    "I will not {action} {food} during {class}.",
    "I will not {action} {object} during {class}."
];

const objects = [
    "pencil",
    "cell phone",
    "homework",
    "book",
    "teacher",
    "potato",
    "notebook"
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
    "sandwich",
    "cookie",
    "ice cream"
];

const pets = [
    "cat",
    "dog",
    "hamster",
    "bird",
    "fish"
];

let currentSentence = "";
let currentIndex = 0;

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

function handleKeyDown(event) {
    const typedChar = event.key.toUpperCase();
    const textDiv = document.getElementById("text");
    const charSpans = textDiv.children;
    
    if (currentIndex < currentSentence.length) {
        const currentCharSpan = charSpans[currentIndex];
        
        if (typedChar === currentSentence[currentIndex]) {
            currentCharSpan.style.color = "black";
        } else {
            currentCharSpan.style.color = "red";
        }
        
        currentIndex++;
    }
    
    if (currentIndex === currentSentence.length) {
        currentIndex = 0;
        setTimeout(generateRandomSentence, 1000);
    }
}

generateRandomSentence();
document.addEventListener("keydown", handleKeyDown);
