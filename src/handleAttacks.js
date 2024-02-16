import {gameBoard, playerGameBoardArray, playerShipObjs} from './index';
import {generateCpuAttack, cpuGameBoardArray, cpuShipObjs} from './cpuControl';
import {playerBoxDivs, cpuShipPics, playerShipPics, messageBox, awaiting} from './DOMplay';

const mainContainer = document.querySelector('#mainContainer');

const shotFiredMp3 = document.querySelector('#shotFired')
const shotHitMp3 = document.querySelector('#shotHit')
const shotMissedMp3 = document.querySelector('#shotMissed')

 



const playerName = 'Samir';
let cpuFinished = false;
let oneTime = 0;
let oneTimer = 0
let message = '';
let extra = '';
let timer = 500


function handleAttacks (cpuBox, index) {

    const declareWinner = document.createElement('div');
    declareWinner.classList.add('declareWinner');

    if (oneTime !== 0) {
        timer = 200
    }

    oneTimer = 1

    setTimeout(function () {
    if (cpuFinished || oneTime !== 0) return
    if (gameBoard.receiveAttack(index,cpuGameBoardArray,cpuShipObjs, 'playerTurn')) {
        cpuFinished = true
        let attackedIndex = index
        messageBox.textContent = ''
        message = 'You fire a shot into enemy waters ...... ';

        for (let i = 0; i < message.length; i++) {
            setTimeout(function() {
                messageBox.textContent += (message.charAt(i));
            }, 30 * i);
        }

        shotFiredMp3.play();


        setTimeout(function () {
            if (cpuGameBoardArray[attackedIndex] === 'miss') {
                extra = ' and miss.'
                shotMissedMp3.play();
                cpuBox.classList.add('missedAttack');
            } else {
                extra = " and it's a hit!"
                cpuBox.classList.add('hit');
                shotHitMp3.play()
                cpuShipObjs.forEach((obj, index)=> {
                    if (obj.sunk && cpuGameBoardArray[attackedIndex].includes(index + 1)) {
                        cpuShipPics[index].classList.remove('hidden');
                        cpuShipPics[index].classList.add('show');
                        switch(index) {
                            case 0: extra = `You sunk their Carrier! `
                            break;
                            case 1: extra = `You sunk their BattleShip! `
                            break;
                            case 2: extra = `You sunk their Destroyer! `
                            break;
                            case 3: extra = `You sunk their Submarine! `
                            break;
                            case 4: extra = `You sunk their Patrol Boat! `
                            break; 
                        }
                    }
                })
            }

            for (let i = 0; i < extra.length; i++) {
                setTimeout(function() {
                    messageBox.textContent += (extra.charAt(i));
                }, 30 * i);
            }

        }, 1500)

         
            if (gameBoard.endGameCheck(cpuShipObjs)) {
            // code to remove everything within it
            setTimeout(function () { while (mainContainer.firstChild) {
                mainContainer.removeChild(mainContainer.firstChild);
            }
            mainContainer.appendChild(declareWinner);
            declareWinner.textContent = ` Winner is General ${playerName} !!`;
            }, 2200)
         } else {
            setTimeout(function () {
            messageBox.textContent = '';
            message = 'Your opponent is aiming ...... ';
            for (let i = 0; i < message.length; i++) {
                setTimeout(function() {
                    messageBox.textContent += (message.charAt(i));
                }, 30 * i);
            }
            }, 3000)

            setTimeout(function () {
                shotFiredMp3.play();
                message = 'The enemy fires a shot into your waters ...... '
                messageBox.textContent = '';
                for (let i = 0; i < message.length; i++) {
                    setTimeout(function() {
                        messageBox.textContent += (message.charAt(i));
                    }, 30 * i);
                }
            }, 5000);

            setTimeout(function(){
                
                let cpuAttackValue = generateCpuAttack(playerGameBoardArray, playerShipObjs, 'cpuTurn');
                
                if (playerGameBoardArray[cpuAttackValue] === 'miss') {
                    shotMissedMp3.play();
                    extra = ' and misses.'
                    playerBoxDivs[cpuAttackValue].classList.add('missedAttack')    
                } else {
                    shotHitMp3.play()
                    playerBoxDivs[cpuAttackValue].classList.add('hit');
                    extra = "it's a hit!" 
                    

                    playerShipObjs.forEach((obj, index)=> {
                        if (obj.sunk && playerGameBoardArray[cpuAttackValue].includes(index + 1)) {
                            playerShipPics[index].classList.add('show');
                            switch(index) {
                                case 0: extra = `they sunk your Carrier! `
                                break;
                                case 1: extra = `they sunk your BattleShip! `
                                break;
                                case 2: extra = `they sunk your Destroyer! `
                                break;
                                case 3: extra = `they sunk your Submarine! `
                                break;
                                case 4: extra = `they sunk your Patrol Boat! `
                                break; 
                            }
                        }

                        
                    })
                }

                

                setTimeout(function() {if (gameBoard.endGameCheck(playerShipObjs)) {
                    while (mainContainer.firstChild) {
                        mainContainer.removeChild(mainContainer.firstChild);
                    }
                    mainContainer.appendChild(declareWinner);
                    declareWinner.textContent = ` Winner is CPU`;
                }
            }, 2000)

                for (let i = 0; i < extra.length; i++) {
                    setTimeout(function() {
                        messageBox.textContent += (extra.charAt(i));
                    }, 30 * i);
                }

                setTimeout(function () {
                    cpuFinished = false;
                    oneTime = 0;
                }, 900)
            }, 7000); 
        }
        
    }
    }, timer)   
}



export {handleAttacks}