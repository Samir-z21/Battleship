// code for removing all previous element in 
// 
// 
// 
// 
// 


import {gameBoard, playerGameBoardArray, playerShipObjs, playerHeads} from './index';
import {generateCpuAttack, cpuGameBoardArray, cpuShipObjs, cpuHeads} from './cpuControl';
import {handleAttacks} from './handleAttacks'

const mainContainer = document.querySelector('#mainContainer');
const messageBox = createDiv('messageBox');


const playerName = 'Samir'
const playerBoxDivs = [];
const cpuBoxDivs = [];
const playerShipPics = [];
const cpuShipPics = [];



function displayBoards () {
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild)
    }
    let message = `Awaiting orders, Admiral ${playerName}`;
    
    for (let i = 0; i < message.length; i++) {
        setTimeout(function() {
            messageBox.textContent += (message.charAt(i));
        }, 30 * i);
    }

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

    playerHeads.forEach(spot => {
        switch (playerGameBoardArray[spot]) {
            case 1: 
            const carrierPic = createImg("carrier");
            playerShipPics.push(carrierPic);
            playerBoxDivs[spot].appendChild(carrierPic);
            if (playerGameBoardArray[spot + 1] !== 1) carrierPic.classList.add('yAxis');
            break;

            case 2:
            const battleshipPic = createImg("battleship");
            playerShipPics.push(battleshipPic);
            playerBoxDivs[spot].appendChild(battleshipPic);
            if (playerGameBoardArray[spot + 1] !== 2) battleshipPic.classList.add('yAxis');
            break;

            case 3: 
            const destroyerPic = createImg("destroyer");
            playerShipPics.push(destroyerPic);
            playerBoxDivs[spot].appendChild(destroyerPic);
            if (playerGameBoardArray[spot + 1] !== 3) destroyerPic.classList.add('yAxis');
            break;

            case 4:
            const submarinePic = createImg("submarine");
            playerShipPics.push(submarinePic);
            playerBoxDivs[spot].appendChild(submarinePic);
            if (playerGameBoardArray[spot + 1] !== 4) submarinePic.classList.add('yAxis');
            break;

            case 5: 
            const patrolBoat = createImg("patrolBoat");
            playerShipPics.push(patrolBoat);
            playerBoxDivs[spot].appendChild(patrolBoat);
            if (playerGameBoardArray[spot + 1] !== 5) patrolBoat.classList.add('yAxis');
            break;
        }
    });


    const enemySection = createDiv('boardSection')
    const enemyBoardName = createDiv('boardName', 'ENEMY WATERS');
    const cpuDisplayBoard = createDiv('boardsDisplay');

    enemySection.appendChild(enemyBoardName);
    enemySection.appendChild(cpuDisplayBoard);    

    cpuGameBoardArray.forEach((box,index) => {
        const cpuBox = createDiv('boxDisplay', undefined, index);
        cpuBox.classList.add('enemyBoxes')
        cpuBoxDivs.push(cpuBox);
        cpuBox.addEventListener('click', () => {
            handleAttacks(cpuBox, index);
        });
        cpuDisplayBoard.appendChild(cpuBox);
    });

    cpuHeads.forEach(spot => {
        switch (cpuGameBoardArray[spot]) {
            case 1: 
            const carrierPic = createImg("carrier");
            carrierPic.classList.add('hidden');
            cpuShipPics.push(carrierPic);
            cpuBoxDivs[spot].appendChild(carrierPic);
            if (cpuGameBoardArray[spot + 1] !== 1) carrierPic.classList.add('yAxis');
            break;

            case 2:
            const battleshipPic = createImg("battleship");
            battleshipPic.classList.add('hidden');
            cpuShipPics.push(battleshipPic);
            cpuBoxDivs[spot].appendChild(battleshipPic);
            if (cpuGameBoardArray[spot + 1] !== 2) battleshipPic.classList.add('yAxis');
            break;

            case 3: 
            const destroyerPic = createImg("destroyer");
            destroyerPic.classList.add('hidden');
            cpuShipPics.push(destroyerPic);
            cpuBoxDivs[spot].appendChild(destroyerPic);
            if (cpuGameBoardArray[spot + 1] !== 3) destroyerPic.classList.add('yAxis');
            break;

            case 4:
            const submarinePic = createImg("submarine");
            submarinePic.classList.add('hidden');
            cpuShipPics.push(submarinePic);
            cpuBoxDivs[spot].appendChild(submarinePic);
            if (cpuGameBoardArray[spot + 1] !== 4) submarinePic.classList.add('yAxis');
            break;

            case 5: 
            const patrolBoat = createImg("patrolBoat");
            patrolBoat.classList.add('hidden');
            cpuShipPics.push(patrolBoat);
            cpuBoxDivs[spot].appendChild(patrolBoat);
            if (cpuGameBoardArray[spot + 1] !== 5) patrolBoat.classList.add('yAxis');
            break;
        }
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





export {displayBoards, playerBoxDivs, cpuShipPics, playerShipPics, messageBox}