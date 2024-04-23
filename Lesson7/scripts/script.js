// Global Variable
let guessedNumber = document.getElementById("guessedNumber");
let answerEl = document.getElementById("answer");
let guessBtn = document.getElementById("guessBtn");
let generatedNumberEl = document.getElementById("generatedNumbers");
let isDiv = false;
let random1 = 0;
let random2 = 0;
let answers = [];

NewGame();

// Functions
function OnSubmit() {
    let userName = document.getElementById("userName").value;
    console.log(userName);
}

function Sum2Numbers(num1, num2) {
    return num1 + num2;
}

function Div2Numbers(num1, num2) {
    return num1 - num2;
}

function GenerateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function NewGame() {
    random1 = GenerateRandomNumber(1, 11);
    random2 = GenerateRandomNumber(1, 11);
    isDiv = GenerateRandomNumber(1, 3) == 1;
    generatedNumberEl.innerHTML = `${random1} ${isDiv ? "-" : "+"} ${random2} `;

    // Reset Style
    guessedNumber.classList.remove("wrong");
    guessedNumber.classList.remove("correct");
    guessedNumber.disabled = false;
    guessedNumber.value = "";
    answerEl.innerHTML = "X";    
}

function GuessNumber() {
    let correctAnsw = isDiv ? Div2Numbers(random1, random2) : Sum2Numbers(random1, random2);
    guessedNumber.disabled = true;
    guessBtn.disabled = true;
    if (guessedNumber.value == correctAnsw) {
        guessedNumber.classList.remove("wrong");
        guessedNumber.classList.add("correct");
    } else {
        answerEl.innerHTML = correctAnsw;
        guessedNumber.classList.remove("correct");
        guessedNumber.classList.add("wrong");
    }

    answers.push({
        "PlayerAnswer": guessedNumber.value,
        "IsCorrect": guessedNumber.value == correctAnsw,
        "CorrectAnwer": correctAnsw,
        "Equasion": (generatedNumberEl.innerHTML + "= " + correctAnsw)
    });

    console.log(answers);
}

function GuessChanged() {
    if (guessedNumber.value == "") {
        answerEl.innerHTML = "X";
        guessBtn.disabled = true;
    } else {
        answerEl.innerHTML = guessedNumber.value;
        guessBtn.disabled = false;
    }
}

function Restart() {
    NewGame();
}

// Anda kasutajale valik kas ainult liitmised voi ainult lahutamised?