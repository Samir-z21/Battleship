import './home.css';

import {placeCpuShips,cpuHits, cpuMiss,cpuSunk} from './cpuControl';
import {displayBoards} from './DOMplay';
import {showPersonalBoard, axisSelection} from './DOMintro';



const submitBtn = document.querySelector('#submitBtn');
const playerInput = document.querySelector('#playerName');

submitBtn.addEventListener('click', event => {
    event.preventDefault();
    let playerName = playerInput.value;
     showPersonalBoard(playerName)
})

//Global value
const playerShipObjs = [];
const playerHeads = [];
const playerGameBoardArray = new Array(100).fill(0);
let gameEnd = false


class Ship {
    constructor (length, hits, sunk) {
        this.length = length;
        this.hits = hits;
        this.sunk = false;
    }

    hit() {
        this.hits++;
    }

    isSunk () {
        if (this.hits === this.length) {
            this.sunk = true;
            return true
        } else return false
    }
}

const gameBoard = (() => {
    const errorInvalidPosition = false
    let shipCounter = 1;

    const placeShip = value => {
        let playerShipArray = [];
        if (shipCounter > 5) return false
        switch (shipCounter) {
            case 1:
                if (!validPlacement(5, value, playerShipArray, shipCounter)) {
                    playerShipArray = [];
                    return errorInvalidPosition
                } 
                const carrier = new Ship(5, 0, false);
                playerShipObjs.push(carrier)
            break;
                
            case 2:
                if (!validPlacement(4, value, playerShipArray, shipCounter)) {
                    playerShipArray = [];
                    return errorInvalidPosition
                } 
                const battleship = new Ship(4, 0, false);
                playerShipObjs.push(battleship)
            break;
            
            case 3:
                if (!validPlacement(3, value, playerShipArray, shipCounter)) {
                    playerShipArray = [];
                    return errorInvalidPosition
                } 
                const destroyer = new Ship(3, 0, false);
                playerShipObjs.push(destroyer)

            break;

            case 4: 
                if (!validPlacement(3, value, playerShipArray, shipCounter)) {
                    playerShipArray = [];
                    return errorInvalidPosition 
                } 
                const submarine = new Ship(3, 0, false);
                playerShipObjs.push(submarine)

            break;
            
            case 5: 
                if (!validPlacement(2, value, playerShipArray, shipCounter)) {
                    playerShipArray = [];
                    return errorInvalidPosition
                }
                const patrolBoat = new Ship(2, 0, false);
                playerShipObjs.push(patrolBoat)

            break;
        }

        
        // extra error handling
        if (playerShipArray === []) return errorInvalidPosition
        else {
            for (const element of playerShipArray ){
                if (playerGameBoardArray[element] !== 0) {
                    playerShipArray = [];
                    break
                } else playerGameBoardArray[element] = shipCounter; 
            }
            shipCounter++;
            playerHeads.push(value);

            if (shipCounter > 5) {
                placeCpuShips();
                displayBoards();
            }
        }

        return playerShipArray
    }
    
    const receiveAttack = (coordinateVal, gameBoardArray, shipObjs, currentTurn) => {

        if (!(gameBoardArray[coordinateVal] === 0 || 
            gameBoardArray[coordinateVal] === 1 || 
            gameBoardArray[coordinateVal] === 2 || 
            gameBoardArray[coordinateVal] === 3 || 
            gameBoardArray[coordinateVal] === 4 || 
            gameBoardArray[coordinateVal] === 5)
        ){
            return false
        } else {
            let cpuSunked = false;
            let playerSunked = false;
            if (gameBoardArray[coordinateVal] === 0) gameBoardArray[coordinateVal] = "miss";
            else {
                shipObjs[gameBoardArray[coordinateVal] - 1].hit();

                if (shipObjs[gameBoardArray[coordinateVal] - 1].isSunk() && currentTurn === 'cpuTurn') {
                    cpuSunked = true;
                };

                if (shipObjs[gameBoardArray[coordinateVal] - 1].isSunk() && currentTurn === 'playerTurn') {
                    playerSunked = true;
                };
                gameBoardArray[coordinateVal] = `${gameBoardArray[coordinateVal]} hit`;
            }

            if (gameBoardArray[coordinateVal] === 'miss' && currentTurn === 'cpuTurn'){
                cpuMiss(coordinateVal);
            } else if (gameBoardArray[coordinateVal].includes('hit')  && currentTurn === 'cpuTurn') {
                cpuHits(coordinateVal);
            } 

            if (cpuSunked) {
                cpuSunk(coordinateVal)
            }
        
           return true
        }
    }


    const endGameCheck = shipObjs => {
        if (!(shipObjs.find(element => element.sunk === false))) {
            return true;
        } else {
            return false;
        }

    }



    return {
        placeShip, 
        receiveAttack,
        endGameCheck
    }
})()



function validPlacement (lengthShip, value, playerShipArray) {
    
    if (axisSelection.textContent === "AXIS: X") {
        let findX = (Math.floor(value/10)*10) + 9; 
        for (let i = 0; i < lengthShip; i++) {
            if (playerGameBoardArray[value + i] !== 0 || 
                value + i > 99  ||
                value + i > findX)
                return false;
            else {
                playerShipArray.push(value + i); 
            }
            
            
        }
    } else {
        for (let i = 0; i < lengthShip; i++) {
            if (playerGameBoardArray[value + (i*10)] !== 0 || 
                value + (i*10) > 99) return false
            else {
                playerShipArray.push(value + (i*10)); 
            }
        }
    }

    return true
}


export {Ship, gameBoard, playerGameBoardArray, playerShipObjs, playerHeads}

