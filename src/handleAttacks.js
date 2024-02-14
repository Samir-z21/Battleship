import {gameBoard, playerGameBoardArray, playerShipObjs} from './index';
import {generateCpuAttack, cpuGameBoardArray, cpuShipObjs} from './cpuControl';
import {playerBoxDivs} from './DOMplay';

const mainContainer = document.querySelector('#mainContainer');

const declareWinner = document.createElement('div');
declareWinner.classList.add('declareWinner');

const playerName = 'Samir';



function handleAttacks (cpuBox, index) {
    if (gameBoard.receiveAttack(index,cpuGameBoardArray,cpuShipObjs, 'playerTurn')) {

        setTimeout(function () {
            if (cpuGameBoardArray[index] === 'miss') {
                cpuBox.classList.add('missedAttack');
            } else {
                cpuBox.classList.add('hit');
            }
        }, 1000)

         if (gameBoard.endGameCheck(cpuShipObjs)) {
            // code to remove everything within it

            declareWinner.textContent = ` Winner is General ${playerName}`;
         } else {
            setTimeout(function(){
                let cpuAttackValue = generateCpuAttack(playerGameBoardArray, playerShipObjs, 'cpuTurn');
                
                if (playerGameBoardArray[cpuAttackValue] === 'miss') {
                    playerBoxDivs[cpuAttackValue].classList.add('missedAttack')    
                } else {
                    playerBoxDivs[cpuAttackValue].classList.add('hit');
                }
            }, 2000); 

            if (gameBoard.endGameCheck(playerShipObjs)) {
                declareWinner.textContent = ` Winner is CPU`;
            }
        }
        
    }

}


export default handleAttacks