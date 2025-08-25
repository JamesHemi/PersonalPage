const questions = [
    { q: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
    { q: "What is the capital of France?", options: ["Berlin", "Paris", "Rome"], answer: "Paris" },
    { q: "Which language is used for web pages?", options: ["Python", "HTML", "C++"], answer: "HTML" }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const scoreContainer = document.getElementById('scoreContainer');

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.q;
    optionsEl.innerHTML = '';
    q.options.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option;
        li.onclick = () => selectOption(option);
        optionsEl.appendChild(li);
    });
}

function selectOption(selected) {
    const correct = questions[currentQuestion].answer;
    if (selected === correct) score++;
    optionsEl.querySelectorAll('li').forEach(li => li.style.pointerEvents = 'none');
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        questionEl.textContent = "Quiz Complete!";
        optionsEl.innerHTML = '';
        scoreContainer.textContent = `Your Score: ${score} / ${questions.length}`;
    }
}

// Initialize first question
loadQuestion();
