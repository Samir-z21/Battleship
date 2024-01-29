import './home.css';

//Global value
let axis = "x";

const gameBoardArray = new Array(100).fill(0);
let shipCounter = 1;

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
        if (this.hits >= this.length) return true;
        else return false;
    }
}

const gameBoard = (() => {
    const errorInvalidPosition = "can't place your ship here"
    const placeShip = value => {
        let shipArray = [];
        switch (shipCounter) {
            case 1:
                if (!validPlacement(5, value, gameBoardArray, shipArray, shipCounter)) {
                    shipArray = [];
                    return errorInvalidPosition
                } 
                const carrier = new Ship(5, 0, false);
            break;
                
            case 2:
                if (!validPlacement(4, value, gameBoardArray, shipArray, shipCounter)) {
                    shipArray = [];
                    return errorInvalidPosition
                } 
                const battleship = new Ship(4, 0, false);
            break;
            
            case 3:
                if (!validPlacement(3, value, gameBoardArray, shipArray, shipCounter)) {
                    shipArray = [];
                    return errorInvalidPosition
                } 
                const destroyer = new Ship(3, 0, false);
            break;

            case 4: 
                if (!validPlacement(3, value, gameBoardArray, shipArray, shipCounter)) {
                    shipArray = [];
                    return errorInvalidPosition 
                } 
                const submarine = new Ship(3, 0, false);
            break;
            
            case 5: 
                if (!validPlacement(2, value, gameBoardArray, shipArray, shipCounter)) {
                    shipArray = [];
                    return errorInvalidPosition
                }
                const patrolBoat = new Ship(2, 0, false);
            break;
        }
        
        console.log(shipArray)

        // extra error handling
        if (shipArray === []) return errorInvalidPosition
        else {
            for (const element of shipArray ){
                if (gameBoardArray[element] !== 0) {
                    shipArray = [];
                    break
                } else gameBoardArray[element] = shipCounter; 
            }
            shipCounter++
        }
        

        

      
        console.log(gameBoardArray);
        
    
        return shipArray 
    } 

    return {
        placeShip, 

    }
})()



function validPlacement (lengthShip, value, gameBoardArray, shipArray) {
    if (axis === 'x') {
        for (let i = 0; i < lengthShip; i++) {
            if (gameBoardArray[value + i] !== 0) return false;
            else {
                shipArray.push(value + i); 
            }
        }
    } else if (axis === 'y') {
        for (let i = 0; i < lengthShip; i++) {
            if (gameBoardArray[value + (i*10)] !== 0) return false
            else {
                shipArray.push(value + (i*10)); 
            }
        }
    }

    return true
}



export { Ship, gameBoard}

