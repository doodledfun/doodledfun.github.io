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
        .replace("{pet}", randomPet);
    
    document.getElementById("text").textContent = currentSentence;
}

function handleKeyPress(event) {
    const inputText = event.target.value;
    const textDiv = document.getElementById("text");
    
    for (let i = 0; i < currentSentence.length; i++) {
        if (inputText[i]) {
            if (inputText[i] === currentSentence[i]) {
                textDiv.children[i].style.color = "black";
            } else {
                textDiv.children[i].style.color = "red";
            }
        } else {
            textDiv.children[i].style.color = "black";
        }
    }
}

generateRandomSentence();

const inputElement = document.createElement("input");
inputElement.type = "text";
inputElement.addEventListener("input", handleKeyPress);
document.getElementById("container").appendChild(inputElement);
