const PLAYER_X_CLASS = 'x';
const PLAYER_O_CLASS = 'o';
const WINNING_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

// --- Elementos da UI ---
const modeSelectionElement = document.getElementById('mode-selection');
const step1Element = document.getElementById('step1');
const step2Element = document.getElementById('step2');
const backButton = document.getElementById('backButton');
const chosenModeText = document.getElementById('chosen-mode-text');

const gameContainerElement = document.getElementById('game-container');
const boardElement = document.getElementById('board');
const mainElement = document.querySelector('main');
const gameEndElement = document.getElementById('gameEndElement');
const gameEndMessageText = document.querySelector('[data-game-end-message]');
const restartButton = document.getElementById('restartButton');
const changeModeButton = document.getElementById('changeModeButton');
const gameTitle = document.getElementById('game-title');
const gameSubtitle = document.getElementById('game-subtitle');
const inGameControls = document.getElementById('in-game-controls');
const inGameRestartButton = document.getElementById('inGameRestartButton');
const inGameChangeModeButton = document.getElementById('inGameChangeModeButton');

let gameModeType; // 'classic' ou 'infinite'
let opponentType; // 'pvc' ou 'pvp'
let isPlayerXTurn;
let cells = [];
let moveHistory = [];

// --- INICIALIZAÇÃO E SELEÇÃO DE MODO ---
inGameControls.classList.add('hide');

step1Element.querySelectorAll('.mode-button').forEach(button => {
    button.addEventListener('click', () => {
        gameModeType = button.dataset.modeType;
        chosenModeText.innerText = button.innerText;
        step1Element.classList.add('hide');
        step2Element.classList.remove('hide');
    });
});

step2Element.querySelectorAll('.mode-button').forEach(button => {
    button.addEventListener('click', () => {
        opponentType = button.dataset.opponent;
        initGame();
    });
});

backButton.addEventListener('click', () => {
    step2Element.classList.add('hide');
    step1Element.classList.remove('hide');
});

changeModeButton.addEventListener('click', showModeSelection);
restartButton.addEventListener('click', startGame);
inGameRestartButton.addEventListener('click', startGame);
inGameChangeModeButton.addEventListener('click', showModeSelection);

function initGame() {
    modeSelectionElement.classList.add('hide');
    gameContainerElement.classList.remove('hide');
    inGameControls.classList.remove('hide');
    startGame();
}

function showModeSelection() {
    gameContainerElement.classList.add('hide');
    inGameControls.classList.add('hide');
    gameEndElement.classList.remove('show');
    mainElement.classList.remove('end');
    step2Element.classList.add('hide');
    step1Element.classList.remove('hide');
    modeSelectionElement.classList.remove('hide');
}

function startGame() {
    isPlayerXTurn = true;
    moveHistory = [];
    gameEndElement.classList.remove('show');
    mainElement.classList.remove('end');
    boardElement.className = 'board x';

    // Definir Títulos
    if (gameModeType === 'classic') {
        gameTitle.innerText = 'Jogo da Velha Clássico';
        gameSubtitle.innerText = opponentType === 'pvc' ? 'Você é o X. Boa sorte!' : 'É a vez do X';
    } else {
        gameTitle.innerText = 'Jogo da Velha Infinito';
        gameSubtitle.innerText = opponentType === 'pvc' ? 'Você é o X. O jogo nunca empata!' : 'É a vez do X. O jogo nunca empata!';
    }
    
    // Criar Tabuleiro
    boardElement.innerHTML = '';
    cells = [];
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.addEventListener('click', handlePlayerClick, { once: true });
        boardElement.appendChild(cell);
        cells.push(cell);
    }
}

function handlePlayerClick(e) {
    const cell = e.target;
    if (cell.classList.contains(PLAYER_X_CLASS) || cell.classList.contains(PLAYER_O_CLASS)) {
        return;
    }
    
    const currentClass = isPlayerXTurn ? PLAYER_X_CLASS : PLAYER_O_CLASS;
    
    placeMark(cell, currentClass);
    if (gameModeType === 'infinite') {
        moveHistory.push(cell);
    }

    if (checkWin(currentClass)) {
        return endGame(false, currentClass);
    }
    
    if (isDraw()) {
        if (gameModeType === 'infinite') {
            handleInfiniteDraw();
        } else {
            return endGame(true);
        }
    }

    // Lógica de Oponente
    if (opponentType === 'pvc' && isPlayerXTurn) {
        // A jogada do jogador X acabou de acontecer, agora é a vez do computador
        swapTurns(); // Passa o turno visualmente para o O, mas a lógica da jogada do computador vem a seguir
        boardElement.style.pointerEvents = 'none';
        setTimeout(() => {
            computerMove();
            boardElement.style.pointerEvents = 'auto';
        }, 600);
    } else {
        swapTurns();
    }
}


function handleInfiniteDraw() {
    const oldestCell = moveHistory.shift();
    if (!oldestCell) return;

    oldestCell.classList.remove(PLAYER_X_CLASS, PLAYER_O_CLASS);
    oldestCell.addEventListener('click', handlePlayerClick, { once: true });

    oldestCell.classList.add('removed');
    setTimeout(() => {
        oldestCell.classList.remove('removed');
    }, 700);
}

function computerMove() {
    const bestMoveIndex = findBestMove();
    if (bestMoveIndex === -1) return;
    
    const cell = cells[bestMoveIndex];
    placeMark(cell, PLAYER_O_CLASS);
    
    if (gameModeType === 'infinite') {
        moveHistory.push(cell);
    }

    if (checkWin(PLAYER_O_CLASS)) return endGame(false, PLAYER_O_CLASS);
    
    if (isDraw() && gameModeType === 'infinite') {
        handleInfiniteDraw();
    }
    
    swapTurns(); // Devolve o turno para o jogador
}

function swapTurns() {
    isPlayerXTurn = !isPlayerXTurn;
    boardElement.classList.toggle('x', isPlayerXTurn);
    boardElement.classList.toggle('o', !isPlayerXTurn);
    const nextPlayer = isPlayerXTurn ? 'X' : 'O';
    
    // Atualiza a legenda apenas quando for a vez de um jogador humano
    if (opponentType === 'pvp' || (opponentType === 'pvc' && isPlayerXTurn)) {
        if(gameModeType === 'infinite'){
            gameSubtitle.innerText = `O jogo nunca empata. É a vez do ${nextPlayer}!`;
        } else {
            gameSubtitle.innerText = `É a vez do ${nextPlayer}`;
        }
    }
}

function placeMark(cell, classToPlace) {
    cell.classList.add(classToPlace);
    cell.removeEventListener('click', handlePlayerClick);
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => combination.every(index => cells[index].classList.contains(currentClass)));
}

function isDraw() {
    return cells.every(cell => cell.classList.contains(PLAYER_X_CLASS) || cell.classList.contains(PLAYER_O_CLASS));
}

function endGame(draw, winnerClass) {
    if (draw) {
        gameEndMessageText.innerText = 'Empate!';
    } else {
        let winnerName;
        if (opponentType === 'pvc') {
            winnerName = winnerClass === PLAYER_X_CLASS ? 'Você' : 'O Computador';
        } else {
            winnerName = `O jogador '${winnerClass.toUpperCase()}'`;
        }
        gameEndMessageText.innerText = `${winnerName} Venceu!`;
    }
    mainElement.classList.add('end');
    gameEndElement.classList.add('show');
}

function findBestMove() {
    const availableCells = cells.filter(c => !c.classList.contains(PLAYER_X_CLASS) && !c.classList.contains(PLAYER_O_CLASS));
    
    // 1. Tenta vencer
    for (let cell of availableCells) {
        cell.classList.add(PLAYER_O_CLASS);
        if (checkWin(PLAYER_O_CLASS)) {
            cell.classList.remove(PLAYER_O_CLASS);
            return parseInt(cell.dataset.index);
        }
        cell.classList.remove(PLAYER_O_CLASS);
    }

    // 2. Tenta bloquear o jogador
    for (let cell of availableCells) {
        cell.classList.add(PLAYER_X_CLASS);
        if (checkWin(PLAYER_X_CLASS)) {
            cell.classList.remove(PLAYER_X_CLASS);
            return parseInt(cell.dataset.index);
        }
        cell.classList.remove(PLAYER_X_CLASS);
    }
    
    const center = 4;
    if (!cells[center].classList.contains(PLAYER_X_CLASS) && !cells[center].classList.contains(PLAYER_O_CLASS)) return center;
    
    const corners = [0, 2, 6, 8].filter(i => !cells[i].classList.contains(PLAYER_X_CLASS) && !cells[i].classList.contains(PLAYER_O_CLASS));
    if (corners.length > 0) return corners[Math.floor(Math.random() * corners.length)];
    
    if (availableCells.length > 0) return parseInt(availableCells[Math.floor(Math.random() * availableCells.length)].dataset.index);
    
    return -1;
}
