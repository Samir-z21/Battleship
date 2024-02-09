// code for removing all previous element in 
// 
// 
// 
// 
// 


import {gameBoard, playerGameBoardArray, playerShipObjs} from './index';
import {generateCpuAttack, cpuGameBoardArray, cpuShipObjs} from './cpuControl';

const mainContainer = document.querySelector('#mainContainer');
console.log(mainContainer)

function displayBoards () {
    const playerDisplayBoard = document.createElement('div');

    playerGameBoardArray.forEach(box => {
        const playerBox = document.createElement('div');
        playerBox.value = box;
        playerBox.textContent = box;
        playerDisplayBoard.appendChild(playerBox);
    });

    mainContainer.appendChild(playerDisplayBoard);
}


export default displayBoards