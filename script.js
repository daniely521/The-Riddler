const homebtn = document.getElementById('home-button');
const scoreDisplay = document.getElementById('score');
const modeSelectScreen = document.getElementById('mode-selection');
const selectG = document.getElementById('general-knowledge-mode');
const selectM = document.getElementById('math-mode');
const selectL = document.getElementById('logic-mode');

const gameScreen = document.getElementById('game-area');
const riddleDisplay = document.getElementById('riddle');
const answer = document.getElementById('answer');
const submitbtn = document.getElementById('submit-button');
const skipbtn = document.getElementById('skip-button');
const timer = document.getElementById('timer');
const feedback = document.getElementById('feedback');

const resultScreen = document.getElementById('results-area');
const resultDisplay = document.getElementById('result');

let score = 0;
let questionIndex = 0;
let mode;
let time = 3;
let currentRiddle;
let currentAnswer;

const general = [
    { riddle: "I have cities, but no houses; forests, but no trees; and water, but no fish. What am I?", answer: "A map" },
    { riddle: "I have no voice, but I can speak to you. I have no life, but I can flourish. What am I?", answer: "A book" },
    { riddle: "I am always coming, but never arrive. I always present, but never here. I always moving, but never a place. What am I?", answer: "Tomorrow" }
];

const math = [
    { riddle: "What is the only even prime number?", answer: "2" },
    { riddle: "If I have 5 apples and I eat 3, how many apples do I have left?", answer: "2" }
];

const logic = [
    { riddle: "I have no life, but I can grow. I have no voice, but I can roar. What am I?", answer: "A fire" },
    { riddle: "I am tall when I am young, and short when I am old. What am I?", answer: "A candle" }
];

homebtn.addEventListener('click', () => {
    gameScreen.classList.add("hidden");
    modeSelectScreen.classList.remove('hidden');
    resultScreen.classList.add('hidden');
    homebtn.classList.add('hidden');
    scoreDisplay.classList.add('hidden');
    resetGame();
});

function resetGame() {
    score = 0;
    questionIndex = 0;
    time = 3;
}

selectG.addEventListener('click', () => {
    resetGame();
    gameScreen.classList.remove('hidden');
    modeSelectScreen.classList.add('hidden');
    homebtn.classList.remove('hidden');
    scoreDisplay.classList.remove('hidden');
    mode = 'g';
    displayQuestion();
    startTimer();
});

selectL.addEventListener('click', () => {
    resetGame();
    gameScreen.classList.remove('hidden');
    modeSelectScreen.classList.add('hidden');
    homebtn.classList.remove('hidden');
    scoreDisplay.classList.remove('hidden');
    mode = 'l';
    displayQuestion();
    startTimer();
});

selectM.addEventListener('click', () => {
    resetGame();
    gameScreen.classList.remove('hidden');
    modeSelectScreen.classList.add('hidden');
    homebtn.classList.remove('hidden');
    scoreDisplay.classList.remove('hidden');
    mode = 'm';
    displayQuestion();
    startTimer();
});

function startTimer() {
    const timerInterval = setInterval(() => {
        time--;
        timer.textContent = `Time Remaining: ${time}`;

        if (time === 0) {
            clearInterval(timerInterval);
            resultScreen.classList.remove('hidden');
            gameScreen.classList.add('hidden'); 
            endScreen();
        }
    }, 1000);
}

function endScreen() {
    resultScreen.classList.remove('hidden');
    gameScreen.classList.add('hidden'); 
    resultDisplay.value = `Your score was ${score}`;
    homebtn.classList.remove('hidden');
}

function displayQuestion() {
    switch (mode) {
        case 'g' :
            currentRiddle = general[questionIndex].riddle;
            currentAnswer = general[questionIndex].answer;
            break;
        case 'm' :
            currentRiddle = math[questionIndex].riddle;
            currentAnswer = math[questionIndex].answer;
            break;
        case 'l' :
            currentRiddle = logic[questionIndex].riddle;
            currentAnswer = logic[questionIndex].answer;
            break;
    }

    riddleDisplay.textContent = currentRiddle;
}

submitbtn.addEventListener('click', () => {
    if (answer.value === currentAnswer) {
        score++;
        scoreDisplay.value = `Score: ${score}`;
    } else {
        if (score > 0) {
            score--;
            scoreDisplay.value = `Score: ${score}`;
        }
    }
    questionIndex++;
    displayQuestion();
});

skipbtn.addEventListener('click', () => {
    questionIndex++;
    displayQuestion();
});