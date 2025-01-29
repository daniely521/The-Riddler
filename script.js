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
let time = 20;
let currentRiddle;
let currentAnswer;

const general = [
    { riddle: "I have cities, but no houses; forests, but no trees; and water, but no fish. What am I?", answer: "A map" },
    { riddle: "The more you take, the more you leave behind. What am I?", answer: "Footsteps" },
    { riddle: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?", answer: "An echo" },
    { riddle: "The person who makes it, sells it. The person who buys it never uses it. The person who uses it never knows they are using it. What is it?", answer: "A coffin" },
    { riddle: "What has to be broken before you can use it?", answer: "An egg" },
    { riddle: "What has one eye but can’t see?", answer: "A needle" },
    { riddle: "What has hands but can’t clap?", answer: "A clock" },
    { riddle: "I have keys but open no locks. I have space but no room. You can enter but not go outside. What am I?", answer: "A keyboard" },
    { riddle: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "The letter M" },
    { riddle: "I fly without wings. I cry without eyes. Wherever I go, darkness follows me. What am I?", answer: "A cloud" },
    { riddle: "The more you remove from me, the bigger I get. What am I?", answer: "A hole" },
    { riddle: "I have four legs in the morning, two in the afternoon, and three in the evening. What am I?", answer: "A human (as a baby crawls, then walks, then uses a cane)" },
    { riddle: "I can be cracked, made, told, and played. What am I?", answer: "A joke" },
    { riddle: "What can travel around the world while staying in the same spot?", answer: "A stamp" },
    { riddle: "What has a heart that doesn’t beat?", answer: "An artichoke" },
    { riddle: "What has many keys but can’t open a single lock?", answer: "A piano" },
    { riddle: "What is full of holes but still holds water?", answer: "A sponge" },
    { riddle: "What gets wetter the more it dries?", answer: "A towel" },
    { riddle: "I shave every day, but my beard stays the same. What am I?", answer: "A barber" },
    { riddle: "What runs but never walks, has a bed but never sleeps, and has a mouth but never talks?", answer: "A river" },
    { riddle: "What has words but never speaks?", answer: "A book" },
    { riddle: "What comes down but never goes up?", answer: "Rain" },
    { riddle: "What has an endless supply of letters?", answer: "A mailbox" },
    { riddle: "I have wings, I am able to fly, I’m not a bird yet I soar high. What am I?", answer: "An airplane" }
];


const math = [
    { riddle: "I am a three-digit number. My tens digit is five more than my ones digit, and my hundreds digit is eight less than my tens digit. What number am I?", answer: "194" },
    { riddle: "A farmer has 17 sheep, and all but 9 run away. How many sheep does he have left?", answer: "9" },
    { riddle: "I am a number. Multiply me by 4, then subtract 6, and you get 18. What number am I?", answer: "6" },
    { riddle: "How many sides does a circle have?", answer: "Two" },
    { riddle: "If two’s company and three’s a crowd, what are four and five?", answer: "Nine" },
    { riddle: "A basketball and a bat cost $110 in total. The bat costs $100 more than the ball. How much does the ball cost?", answer: "$5" },
    { riddle: "I am a number. Double me and add 6, and you get 14. What number am I?", answer: "4" },
    { riddle: "I am a number. Divide me by 5 and you get 9. What number am I?", answer: "45" },
    { riddle: "What number is next in this sequence: 1, 1, 2, 3, 5, 8, ?", answer: "13" },
    { riddle: "What is half of two plus two?", answer: "3" },
    { riddle: "If you multiply this number by any other number, the answer will always be the same. What number is it?", answer: "0" },
    { riddle: "I am a number that, when flipped upside down, remains the same. What number am I?", answer: "69" }
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
    time = 20;
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
    resultDisplay.textContent = `Your score was ${score}`;
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
    answer.value = '';
    riddleDisplay.textContent = currentRiddle;
}

submitbtn.addEventListener('click', () => {
    if (answer.value.trim().toLowerCase() === currentAnswer.trim().toLowerCase()) {
        console.log(answer.value.trim().toLowerCase());
        console.log(currentAnswer.trim().toLowerCase());
        score = score+1;
        console.log(score);
        scoreDisplay.textContent = `Score: ${score}`;
        questionIndex++;
    } else {
        if (score > 0) {
            console.log("incorrect");
            console.log(answer.value.trim().toLowerCase());
            console.log(currentAnswer.trim().toLowerCase());
            score--;
            scoreDisplay.textContent = `Score: ${score}`;
            questionIndex++;
        }
    }
    displayQuestion();

});

skipbtn.addEventListener('click', () => {
    questionIndex++;
    displayQuestion();
});