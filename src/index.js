import './home.css';

import {placeCpuShips,cpuHits, cpuMiss,cpuSunk
} from './cpuControl';

import displayBoards from './DOMplay';

//Global value
const playerShipObjs = [];
const shipHeads = [];
// just for now
let axis = Math.round(Math.random()); // 0 = x, 1 = y;

// Console log purposes
const playerGameBoardArray = new Array(100).fill(0);

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
    const errorInvalidPosition = "can't place your ship here";
    let shipCounter = 1;

    const placeShip = value => {
        let playerShipArray = [];
        axis = Math.round(Math.random())
        if (shipCounter > 5) return "all ships placed"
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
            shipHeads.push(value);

            if (shipCounter > 5) {
                placeCpuShips();
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
            return `${coordinateVal} already recevied attack`
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
            
            if (endGameCheck(shipObjs)) {
                // stop player interaction code {


                //}
                return `Winner is ${currentTurn}`;
            }

           
        }
        return `${coordinateVal} got attacked`
    }


    const endGameCheck = shipObjs => {
        if (!(shipObjs.find(element => element.sunk === false))) return true; 
        else return false;
    }



    return {
        placeShip, 
        receiveAttack,
        endGameCheck
    }
})()



function validPlacement (lengthShip, value, playerShipArray) {
    
    if (!axis) {
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

gameBoard.placeShip(13)
gameBoard.placeShip(55)
gameBoard.placeShip(66)
gameBoard.placeShip(0)
gameBoard.placeShip(82)

displayBoards()


// gameBoard.receiveAttack(29, cpuGameBoardArray, cpuShipObjs, 'playerTurn')
// gameBoard.receiveAttack(42, cpuGameBoardArray, cpuShipObjs, 'playerTurn')
// gameBoard.receiveAttack(55, cpuGameBoardArray, cpuShipObjs, 'playerTurn')
// gameBoard.receiveAttack(25, cpuGameBoardArray, cpuShipObjs, 'playerTurn')
// gameBoard.receiveAttack(40, cpuGameBoardArray, cpuShipObjs, 'playerTurn')


// generateCpuAttack(playerGameBoardArray, playerShipObjs, 'cpuTurn')
// generateCpuAttack(playerGameBoardArray, playerShipObjs, 'cpuTurn')
// generateCpuAttack(playerGameBoardArray, playerShipObjs, 'cpuTurn')
// generateCpuAttack(playerGameBoardArray, playerShipObjs, 'cpuTurn')
// generateCpuAttack(playerGameBoardArray, playerShipObjs, 'cpuTurn')




console.log(playerGameBoardArray)


// console.log(gameBoard.receiveAttack(29))
// console.log(gameBoard.endGameCheck())



export {Ship, gameBoard, playerGameBoardArray, playerShipObjs, shipHeads}

