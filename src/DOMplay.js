// code for removing all previous element in 
// 
// 
// 
// 
// 


import {gameBoard, playerGameBoardArray, playerShipObjs} from './index';
import {generateCpuAttack, cpuGameBoardArray, cpuShipObjs} from './cpuControl';

const mainContainer = document.querySelector('#mainContainer');

const playerName = 'Samir'

function displayBoards () {

    const messageBox = createDiv('messageBox', `Awaiting orders, Admiral ${playerName}`);
    mainContainer.appendChild(messageBox);

    const playerSection = createDiv('boardSection');  
    const playerBoardName = createDiv('boardName', 'FRIENDLY WATERS');
    const playerDisplayBoard = createDiv('boardsDisplay');

    playerSection.appendChild(playerBoardName);
    playerSection.appendChild(playerDisplayBoard);


    playerGameBoardArray.forEach((box,index) => {
        const playerBox = createDiv('boxDisplay', box, index)
        playerDisplayBoard.appendChild(playerBox);
    });

    const enemySection = createDiv('boardSection')
    const enemyBoardName = createDiv('boardName', 'ENEMY WATERS');
    const cpuDisplayBoard = createDiv('boardsDisplay');

    enemySection.appendChild(enemyBoardName);
    enemySection.appendChild(cpuDisplayBoard);    

    cpuGameBoardArray.forEach((box,index) => {
        const cpuBox = createDiv('boxDisplay', box, index)
        cpuDisplayBoard.appendChild(cpuBox);
    });

    const boardsContainer = createDiv('boardsContainer');
    boardsContainer.appendChild(playerSection);
    boardsContainer.appendChild(enemySection);

    mainContainer.appendChild(boardsContainer);

    //
};


function createDiv (className, text, valueAmount) {
    const div = document.createElement('div');
    div.classList.add(className);
    div.textContent = text;
    div.value = valueAmount;

    return div
} 




export default displayBoards