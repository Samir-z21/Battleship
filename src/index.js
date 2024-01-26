import './home.css';

console.log("Hello World");
//Global value
const axis = 'x';

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
    const gameBoardArray = new Array(100).fill(0);
    let shipCounter = 1;
    let shipArray = [];
    const placeShip = (value) => {
        switch (shipCounter) {
            case 1:
                const carrier = new Ship(5, 0, false);
                shipArray = getCoordinates(carrier,value)
                break;
                
            case 2: 
                const battleship = new Ship(4, 0, false);
                shipArray = getCoordinates(battleship,value)
                break;
            
            case 3:
                const destroyer = new Ship(3, 0, false);
                shipArray = getCoordinates(destroyer,value)
                break;

            case 4: 
                const submarine = new Ship(3, 0, false);
                shipArray = getCoordinates(submarine,value)
                break;
            
            case 5: 
                const patrolBoat = new Ship(2, 0, false);
                shipArray = getCoordinates(patrolBoat,value)
                break;
        }


        shipCounter++

        return shipArray 
    } 

    return {
        placeShip, 

    }
})()

function getCoordinates (ship, value) {
    const shipArray = [];
    if (axis === 'x') {
        for (let i = 0; i < ship.length; i++) {
            shipArray.push(value + i);
        }
    } else {
        for (let i = 0; i < ship.length; i += 10) {
            shipArray.push(value + i);
        }
    }

    return shipArray
    
}

export { Ship, gameBoard}

