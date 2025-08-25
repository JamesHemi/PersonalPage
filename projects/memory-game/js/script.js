const board = document.getElementById('gameBoard');
let cards = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'];
let firstCard = null;
let secondCard = null;
let lockBoard = false;

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function createBoard() {
    board.innerHTML = '';
    shuffle(cards).forEach(value => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = value;
        card.addEventListener('click', flipCard);
        board.appendChild(card);
    });
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');
    this.textContent = this.dataset.value;

    if (!firstCard) {
        firstCard = this;
    } else {
        secondCard = this;
        checkMatch();
    }
}

function checkMatch() {
    if (firstCard.dataset.value === secondCard.dataset.value) {
        resetTurn();
    } else {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard.textContent = '';
            secondCard.textContent = '';
            resetTurn();
        }, 1000);
    }
}

function resetTurn() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

function resetGame() {
    firstCard = secondCard = null;
    lockBoard = false;
    createBoard();
}

// Initialize
createBoard();
