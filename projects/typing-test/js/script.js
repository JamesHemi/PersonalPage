const textToType = document.getElementById('textToType').textContent;
const typingInput = document.getElementById('typingInput');
const resultEl = document.getElementById('result');

let startTime;
let finished = false;

function checkInput() {
    if (finished) return;

    const typed = typingInput.value;
    if (!startTime) startTime = new Date();

    let correctChars = 0;
    for (let i = 0; i < typed.length; i++) {
        if (typed[i] === textToType[i]) correctChars++;
    }

    const accuracy = ((correctChars / typed.length) * 100) || 100;
    const wordsTyped = typed.split(' ').length;
    const minutes = (new Date() - startTime) / 60000;
    const wpm = Math.round(wordsTyped / minutes);

    resultEl.textContent = `WPM: ${wpm || 0} | Accuracy: ${Math.round(accuracy)}%`;

    if (typed === textToType) finished = true;
}

function resetTest() {
    typingInput.value = '';
    resultEl.textContent = 'WPM: 0 | Accuracy: 100%';
    startTime = null;
    finished = false;
}
