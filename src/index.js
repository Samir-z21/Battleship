import './home.css';
import placeCpuShips from './cpuControl';

//Global value
let axis = "y";
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
            shipCounter++
        }
        
        // test purposes
        return playerShipArray
    }
    
    const receiveAttack = coordinateVal => {
        if (!(playerGameBoardArray[coordinateVal] === 0 || 
            playerGameBoardArray[coordinateVal] === 1 || 
            playerGameBoardArray[coordinateVal] === 2 || 
            playerGameBoardArray[coordinateVal] === 3 || 
            playerGameBoardArray[coordinateVal] === 4 || 
            playerGameBoardArray[coordinateVal] === 5
        )) {
            return `${coordinateVal} already recevied attack`
        } else {
            switch (playerGameBoardArray[coordinateVal]) {
                case 0 :
                    playerGameBoardArray[coordinateVal] = "miss";
                break
    
                case 1: 
                    playerShipObjs[0].hit();
                    playerShipObjs[0].isSunk();
                    playerGameBoardArray[coordinateVal] = '1 hit';
                break
    
                case 2: 
                    playerShipObjs[1].hit();
                    playerShipObjs[1].isSunk();
                    playerGameBoardArray[coordinateVal] = '2 hit';
                break 
    
                case 3: 
                    playerShipObjs[2].hit();
                    playerShipObjs[2].isSunk();
                    playerGameBoardArray[coordinateVal] = '3 hit';
                break
    
                case 4: 
                    playerShipObjs[3].hit();
                    playerShipObjs[3].isSunk();
                    playerGameBoardArray[coordinateVal] = '4 hit';
                break
    
                case 5: 
                    playerShipObjs[4].hit();
                    playerShipObjs[4].isSunk();
                    playerGameBoardArray[coordinateVal] = '5 hit';
                break
            } 

            endGameCheck()
        }
    }


    const endGameCheck = () => {
        if (!(playerShipObjs.find(element => element.sunk === false))) return "All ships have sunk"; 
        else return "Not all ships have sunk"
    }



    return {
        placeShip, 
        receiveAttack,
        endGameCheck
    }
})()



function validPlacement (lengthShip, value, playerShipArray) {
    
    if (axis === 'x') {
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
    } else if (axis === 'y') {
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

// console.log(gameBoard.placeShip(13))
// console.log(gameBoard.placeShip(88))
// console.log(gameBoard.placeShip(95))
// console.log(gameBoard.placeShip(0))
// console.log(gameBoard.placeShip(84))


// gameBoard.receiveAttack(29)
// gameBoard.receiveAttack(14)
// gameBoard.receiveAttack(74)
// gameBoard.receiveAttack(21)
// gameBoard.receiveAttack(85)
// gameBoard.receiveAttack(84)


// console.log(playerGameBoardArray)
// console.log(playerShipObjs)
// console.log(gameBoard.receiveAttack(29))
// console.log(gameBoard.endGameCheck())

placeCpuShips()

export {Ship, gameBoard, playerGameBoardArray, playerShipObjs}

