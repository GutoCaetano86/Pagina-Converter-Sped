const PLAYER_X_CLASS = 'x';
const PLAYER_O_CLASS = 'o';
const WINNING_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

// --- Elementos da UI ---
const modeSelectionElement = document.getElementById('mode-selection');
const pvcButton = document.getElementById('pvcButton');
const pvpButton = document.getElementById('pvpButton');
const gameContainerElement = document.getElementById('game-container');
const boardElement = document.getElementById('board');
const mainElement = document.querySelector('main');
const gameEndElement = document.getElementById('gameEndElement');
const gameEndMessageText = document.querySelector('[data-game-end-message]');
const restartButton = document.getElementById('restartButton'); // Botão no modal de fim de jogo
const changeModeButton = document.getElementById('changeModeButton'); // Botão no modal de fim de jogo
const gameTitle = document.getElementById('game-title');
const gameSubtitle = document.getElementById('game-subtitle');

// Controles Durante o Jogo
const inGameControls = document.getElementById('in-game-controls');
const inGameRestartButton = document.getElementById('inGameRestartButton');
const inGameChangeModeButton = document.getElementById('inGameChangeModeButton');

let gameMode; // 'pvc' ou 'pvp'
let isPlayerXTurn;
let cells = [];

// --- INICIALIZAÇÃO ---

// Garante que os controles do jogo comecem escondidos
inGameControls.classList.add('hide');

// Seleção de Modo
pvcButton.addEventListener('click', () => initGame('pvc'));
pvpButton.addEventListener('click', () => initGame('pvp'));

// Controles de Fim de Jogo
changeModeButton.addEventListener('click', showModeSelection);
restartButton.addEventListener('click', startGame);

// Controles Durante o Jogo
inGameRestartButton.addEventListener('click', startGame);
inGameChangeModeButton.addEventListener('click', showModeSelection);

/**
 * Esconde a seleção de modo e inicia o jogo.
 * @param {string} mode - O modo de jogo selecionado ('pvc' ou 'pvp').
 */
function initGame(mode) {
    gameMode = mode;
    modeSelectionElement.classList.add('hide');
    gameContainerElement.classList.remove('hide');
    inGameControls.classList.remove('hide'); // Mostra os controles durante o jogo
    startGame();
}

/**
 * Volta para a tela de seleção de modo.
 */
function showModeSelection() {
    gameContainerElement.classList.add('hide');
    inGameControls.classList.add('hide'); // Esconde os controles durante o jogo
    gameEndElement.classList.remove('show');
    mainElement.classList.remove('end');
    modeSelectionElement.classList.remove('hide');
}

/**
 * Prepara o tabuleiro para uma nova partida.
 */
function startGame() {
    isPlayerXTurn = true;
    gameEndElement.classList.remove('show');
    mainElement.classList.remove('end');
    boardElement.className = 'board x';

    if (gameMode === 'pvc') {
        gameTitle.innerText = 'Jogador vs. Computador';
        gameSubtitle.innerText = 'Você é o X. Boa sorte!';
    } else {
        gameTitle.innerText = 'Jogador vs. Jogador';
        gameSubtitle.innerText = "É a vez do X";
    }
    
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

/**
 * Lida com o clique do jogador.
 * @param {Event} e - O evento de clique.
 */
function handlePlayerClick(e) {
    const cell = e.target;
    if(cell.classList.contains(PLAYER_X_CLASS) || cell.classList.contains(PLAYER_O_CLASS)) {
        return;
    }
    
    const currentClass = isPlayerXTurn ? PLAYER_X_CLASS : PLAYER_O_CLASS;
    
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) return endGame(false, currentClass);
    if (isDraw()) return endGame(true);

    if (gameMode === 'pvc') {
        boardElement.classList.remove(PLAYER_X_CLASS);
        boardElement.style.pointerEvents = 'none';
        setTimeout(() => {
            computerMove();
            boardElement.style.pointerEvents = 'auto';
        }, 500);
    } else {
        swapTurns();
    }
}

/**
 * Executa a jogada do computador.
 */
function computerMove() {
    const bestMoveIndex = findBestMove();
    if (bestMoveIndex === -1) return;
    const cell = cells[bestMoveIndex];
    placeMark(cell, PLAYER_O_CLASS);
    if (checkWin(PLAYER_O_CLASS)) return endGame(false, PLAYER_O_CLASS);
    if (isDraw()) return endGame(true);
    boardElement.classList.add(PLAYER_X_CLASS);
}

/**
 * Troca o turno entre X e O no modo PvP.
 */
function swapTurns() {
    isPlayerXTurn = !isPlayerXTurn;
    boardElement.classList.toggle(PLAYER_X_CLASS, isPlayerXTurn);
    boardElement.classList.toggle(PLAYER_O_CLASS, !isPlayerXTurn);
    gameSubtitle.innerText = `É a vez do ${isPlayerXTurn ? 'X' : 'O'}`;
}

function placeMark(cell, classToPlace) {
    cell.classList.add(classToPlace);
    cell.removeEventListener('click', handlePlayerClick);
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => combination.every(index => cells[index].classList.contains(currentClass)));
}

function isDraw() {
    return [...cells].every(cell => cell.classList.contains(PLAYER_X_CLASS) || cell.classList.contains(PLAYER_O_CLASS));
}

function endGame(draw, winnerClass) {
    if (draw) {
        gameEndMessageText.innerText = 'Empate!';
    } else {
        if(gameMode === 'pvc') {
            gameEndMessageText.innerText = `${winnerClass === PLAYER_X_CLASS ? 'Você' : 'O Computador'} Venceu!`;
        } else {
            gameEndMessageText.innerText = `O jogador '${winnerClass.toUpperCase()}' Venceu!`;
        }
    }
    mainElement.classList.add('end');
    gameEndElement.classList.add('show');
}

function findBestMove() {
    const availableCells = cells.filter(c => !c.classList.contains(PLAYER_X_CLASS) && !c.classList.contains(PLAYER_O_CLASS));
    
    for (const player of [PLAYER_O_CLASS, PLAYER_X_CLASS]) {
        for (let cell of availableCells) {
            cell.classList.add(player);
            if (checkWin(player)) {
                cell.classList.remove(player);
                return parseInt(cell.dataset.index);
            }
            cell.classList.remove(player);
        }
    }
    
    const center = 4;
    if (!cells[center].classList.contains(PLAYER_X_CLASS) && !cells[center].classList.contains(PLAYER_O_CLASS)) return center;
    
    const corners = [0, 2, 6, 8].filter(i => !cells[i].classList.contains(PLAYER_X_CLASS) && !cells[i].classList.contains(PLAYER_O_CLASS));
    if (corners.length > 0) return corners[Math.floor(Math.random() * corners.length)];
    
    if (availableCells.length > 0) return parseInt(availableCells[Math.floor(Math.random() * availableCells.length)].dataset.index);
    
    return -1;
}
