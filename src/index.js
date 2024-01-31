import './home.css';
import placeCpuShips from './cpuControl';

//Global value
let axis = "x";
const playerShipObjs = [];

// Console log purposes
const playerGameBoardArray = new Array(100).fill(0);

class Ship {
    constructor (length, hits, sunk) {
        this.length = length;
        this.hits = hits;
        this.sunk = false;
    }

    hit() {
        this.hits++
    }

    isSunk () {
        if (this.hits >= this.length) 
        this.sunk = true;
    }
}

const gameBoard = (() => {
    const errorInvalidPosition = "can't place your ship here";
    let shipCounter = 1;

    const placeShip = value => {
        let playerShipArray = [];
        switch (shipCounter) {
            case 1:
                if (!validPlacement(5, value, playerGameBoardArray, playerShipArray, shipCounter)) {
                    playerShipArray = [];
                    return errorInvalidPosition
                } 
                const carrier = new Ship(5, 0, false);
                shipObjs.push(carrier)
            break;
                
            case 2:
                if (!validPlacement(4, value, playerGameBoardArray, playerShipArray, shipCounter)) {
                    playerShipArray = [];
                    return errorInvalidPosition
                } 
                const battleship = new Ship(4, 0, false);
                shipObjs.push(battleship)
            break;
            
            case 3:
                if (!validPlacement(3, value, playerGameBoardArray, playerShipArray, shipCounter)) {
                    playerShipArray = [];
                    return errorInvalidPosition
                } 
                const destroyer = new Ship(3, 0, false);
                shipObjs.push(destroyer)

            break;

            case 4: 
                if (!validPlacement(3, value, playerGameBoardArray, playerShipArray, shipCounter)) {
                    playerShipArray = [];
                    return errorInvalidPosition 
                } 
                const submarine = new Ship(3, 0, false);
                shipObjs.push(submarine)

            break;
            
            case 5: 
                if (!validPlacement(2, value, playerGameBoardArray, playerShipArray, shipCounter)) {
                    playerShipArray = [];
                    return errorInvalidPosition
                }
                const patrolBoat = new Ship(2, 0, false);
                shipObjs.push(patrolBoat)

            break;
        }
        
        // extra error handling
        if (playerShipArray === []) return errorInvalidPosition
        else {
            for (const element of playerShipArray ){
                if (gameBoardArray[element] !== 0) {
                    playerShipArray = [];
                    break
                } else gameBoardArray[element] = shipCounter; 
            }
            shipCounter++
        }
        
        // test purposes
        return playerShipArray
    }
    
    const receiveAttack = (coordinateVal, gameBoardArray, shipObjs) => {
        if (!(gameBoardArray[coordinateVal] === 0 || 
            gameBoardArray[coordinateVal] === 1 || 
            gameBoardArray[coordinateVal] === 2 || 
            gameBoardArray[coordinateVal] === 3 || 
            gameBoardArray[coordinateVal] === 4 || 
            gameBoardArray[coordinateVal] === 5
        )) {
            return `${coordinateVal} already recevied attack`
        } else {
            switch (gameBoardArray[coordinateVal]) {
                case 0 :
                    gameBoardArray[coordinateVal] = "miss";
                break
    
                case 1: 
                    shipObjs[0].hit();
                    shipObjs[0].isSunk();
                    gameBoardArray[coordinateVal] = '1 hit';
                break
    
                case 2: 
                    shipObjs[1].hit();
                    shipObjs[1].isSunk();
                    gameBoardArray[coordinateVal] = '2 hit';
                break 
    
                case 3: 
                    shipObjs[2].hit();
                    shipObjs[2].isSunk();
                    gameBoardArray[coordinateVal] = '3 hit';
                break
    
                case 4: 
                    shipObjs[3].hit();
                    shipObjs[3].isSunk();
                    gameBoardArray[coordinateVal] = '4 hit';
                break
    
                case 5: 
                    shipObjs[4].hit();
                    shipObjs[4].isSunk();
                    gameBoardArray[coordinateVal] = '5 hit';
                break
            } 

            endGameCheck(shipObjs)
        }
    }


    const endGameCheck = shipObjs => {
        if (!(shipObjs.find(element => element.sunk === false))) return "All ships have sunk"; 
        else return "Not all ships have sunk"
    }



    return {
        placeShip, 
        receiveAttack,
        endGameCheck
    }
})()



function validPlacement (lengthShip, value, gameBoardArray, playerShipArray) {
    if (axis === 'x') {
        for (let i = 0; i < lengthShip; i++) {
            if (gameBoardArray[value + i] !== 0 || gameBoardArray[value + i] > 99 ) return false;
            else {
                playerShipArray.push(value + i); 
            }
        }
    } else if (axis === 'y') {
        for (let i = 0; i < lengthShip; i++) {
            if (gameBoardArray[value + (i*10)] !== 0 || gameBoardArray[value + i] > 99) return false
            else {
                playerShipArray.push(value + (i*10)); 
            }
        }
    }

    return true
}

// gameBoard.placeShip(13)
// gameBoard.placeShip(88)
// gameBoard.placeShip(95)
// gameBoard.placeShip(0)
// gameBoard.placeShip(84)


// gameBoard.receiveAttack(29)
// gameBoard.receiveAttack(14)
// gameBoard.receiveAttack(74)
// gameBoard.receiveAttack(21)
// gameBoard.receiveAttack(85)
// gameBoard.receiveAttack(84)


// console.log(gameBoardArray)
// console.log(shipObjs)
// console.log(gameBoard.receiveAttack(29))
// console.log(gameBoard.endGameCheck())

placeCpuShips()

export {Ship, gameBoard, playerGameBoardArray, playerShipObjs}
