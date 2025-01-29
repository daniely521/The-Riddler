const generalKnowledgeMode = document.getElementById('general-knowledge-mode');
const mathMode = document.getElementById('math-mode');
const logicMode = document.getElementById('logic-mode');
const gameArea = document.getElementById('game-area');
const riddleDiv = document.getElementById('riddle');
const answerInput = document.getElementById('answer');
const skipButton = document.getElementById('skip-button');
const timerDiv = document.getElementById('timer');
const scoreDiv = document.getElementById('score');

let score = 0;
scoreDiv.textContent = `Score: ${score}`;
let timeLeft = 20;
let currentMode = 'general-knowledge'; 
let currentRiddleIndex = 0;

const generalKnowledgeRiddles = [
    { riddle: "I have cities, but no houses; forests, but no trees; and water, but no fish. What am I?", answer: "A map" },
    { riddle: "I have no voice, but I can speak to you. I have no life, but I can flourish. What am I?", answer: "A book" },
    { riddle: "I am always coming, but never arrive. I always present, but never here. I always moving, but never a place. What am I?", answer: "Tomorrow" },
    
];

const mathRiddles = [
    { riddle: "What is the only even prime number?", answer: "2" },
    { riddle: "If I have 5 apples and I eat 3, how many apples do I have left?", answer: "2" },
    
];

const logicRiddles = [
    { riddle: "I have no life, but I can grow. I have no voice, but I can roar. What am I?", answer: "A fire" },
    { riddle: "I am tall when I am young, and short when I am old. What am I?", answer: "A candle" },
    
];

function showRiddle() {
    let currentRiddle;
    switch (currentMode) {
        case 'general-knowledge':
            currentRiddle = generalKnowledgeRiddles[currentRiddleIndex];
            break;
        case 'math':
            currentRiddle = mathRiddles[currentRiddleIndex];
            break;
        case 'logic':
            currentRiddle = logicRiddles[currentRiddleIndex];
            break;
    }

    riddleDiv.textContent = currentRiddle.riddle;
    answerInput.value = '';
    timeLeft = 20;
    timerDiv.textContent = `Time Remaining: ${timeLeft}`;
    startTimer();
    skipButton.style.display = 'block'; 
}

function startTimer() {
    const timerInterval = setInterval(() => {
        timeLeft--;
        timerDiv.textContent = `Time Remaining: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            showScoreScreen(); 
        }
    }, 1000);
}

function showScoreScreen() {
    riddleDiv.textContent = "";
    answerInput.style.display = "none";
    timerDiv.style.display = "none";
    scoreDiv.textContent = `Game Over! Your final score: ${score}`;

    const homeButton = document.createElement('button');
    homeButton.textContent = "Home";
    homeButton.addEventListener('click', () => {
        location.reload();
    });
    gameArea.appendChild(homeButton);
}

function checkAnswer() {
    let currentRiddle;
    switch (currentMode) {
        case 'general-knowledge':
            currentRiddle = generalKnowledgeRiddles[currentRiddleIndex];
            break;
        case 'math':
            currentRiddle = mathRiddles[currentRiddleIndex];
            break;
        case 'logic':
            currentRiddle = logicRiddles[currentRiddleIndex];
            break;
    }

    const userAnswer = answerInput.value.toLowerCase();

    if (userAnswer === currentRiddle.answer.toLowerCase()) {
        score++;
        alert("Correct!");
    } else {
        score--;
        alert("Incorrect!");
    }

    scoreDiv.textContent = `Score: ${score}`;
    currentRiddleIndex++;

    if (currentRiddleIndex < currentRiddle.length) {
        showRiddle();
    } else {
        alert("Game Over! Your final score: " + score);
        startButton.disabled = false;
    }
}

generalKnowledgeMode.addEventListener('click', () => {
    currentMode = 'general-knowledge';
    gameArea.style.display = 'block'; 
    currentRiddleIndex = 0;
    showRiddle(); 
});

mathMode.addEventListener('click', () => {
    currentMode = 'math';
    gameArea.style.display = 'block'; 
    currentRiddleIndex = 0; 
    showRiddle(); 
});

logicMode.addEventListener('click', () => {
    currentMode = 'logic';
    gameArea.style.display = 'block'; 
    currentRiddleIndex = 0;
    showRiddle(); 
});

answerInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});