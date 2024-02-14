// code for removing all previous element in 
// 
// 
// 
// 
// 


import {gameBoard, playerGameBoardArray, playerShipObjs, shipHeads} from './index';
import {generateCpuAttack, cpuGameBoardArray, cpuShipObjs} from './cpuControl';
import handleAttacks from './handleAttacks'

const mainContainer = document.querySelector('#mainContainer');

const playerName = 'Samir'
const playerBoxDivs = [];


function displayBoards () {

    const messageBox = createDiv('messageBox', `Awaiting orders, Admiral ${playerName}`);
    mainContainer.appendChild(messageBox);

    const playerSection = createDiv('boardSection');  
    const playerBoardName = createDiv('boardName', 'FRIENDLY WATERS');
    const playerDisplayBoard = createDiv('boardsDisplay');

    playerSection.appendChild(playerBoardName);
    playerSection.appendChild(playerDisplayBoard);


    playerGameBoardArray.forEach(index => {
        const playerBox = createDiv('boxDisplay', undefined, index);
        playerBoxDivs.push(playerBox);
        playerDisplayBoard.appendChild(playerBox);
    });

    shipHeads.forEach(spot => {
        switch (playerGameBoardArray[spot]) {
            case 1: 
            const carrierPic = createImg("carrier");
            playerBoxDivs[spot].appendChild(carrierPic);
            if (playerGameBoardArray[spot + 1] !== 1) carrierPic.classList.add('yAxis');
            break;

            case 2:
            const battleshipPic = createImg("battleship");
            playerBoxDivs[spot].appendChild(battleshipPic);
            if (playerGameBoardArray[spot + 1] !== 2) battleshipPic.classList.add('yAxis');
            break;

            case 3: 
            const destroyerPic = createImg("destroyer");
            playerBoxDivs[spot].appendChild(destroyerPic);
            if (playerGameBoardArray[spot + 1] !== 3) destroyerPic.classList.add('yAxis');
            break;

            case 4:
            const submarinePic = createImg("submarine");
            playerBoxDivs[spot].appendChild(submarinePic);
            if (playerGameBoardArray[spot + 1] !== 4) submarinePic.classList.add('yAxis');
            break;

            case 5: 
            const patrolBoat = createImg("patrolBoat");
            playerBoxDivs[spot].appendChild(patrolBoat);
            if (playerGameBoardArray[spot + 1] !== 5) patrolBoat.classList.add('yAxis');
            break;
        }
    })


    const enemySection = createDiv('boardSection')
    const enemyBoardName = createDiv('boardName', 'ENEMY WATERS');
    const cpuDisplayBoard = createDiv('boardsDisplay');

    enemySection.appendChild(enemyBoardName);
    enemySection.appendChild(cpuDisplayBoard);    

    cpuGameBoardArray.forEach((box,index) => {
        const cpuBox = createDiv('boxDisplay', box, index)
        cpuBox.addEventListener('click', () => {
            handleAttacks(cpuBox, index);
        });
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

function createImg (className) {
    const img = document.createElement('img');
    img.classList.add(className);
    img.src = `./shipsPic/${className}.png`;

    return img
}



export {displayBoards, playerBoxDivs}