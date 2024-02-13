import {Ship, gameBoard} from './index';

const cpuGameBoardArray = new Array(100).fill(0);
const cpuShipObjs = [];

const storedAttacks = Array.from({ length: 100}, () => 0);




function placeCpuShips () {

    const carrier = new Ship(5, 0, false);
    cpuShipObjs.push(carrier);
    
    const battleship = new Ship(4, 0, false);
    cpuShipObjs.push(battleship);
 
    const destroyer = new Ship(3, 0, false);
    cpuShipObjs.push(destroyer);

    const submarine = new Ship(3, 0, false);
    cpuShipObjs.push(submarine);

    const patrolBoat = new Ship(2, 0, false);
    cpuShipObjs.push(patrolBoat);
    
    let shipCounter = 1;

    cpuShipObjs.forEach(ship => {
        let modifiedArray = [];
        let continueLoop = true;
        const axis = Math.round(Math.random()); // 0 = x, 1 = y
        cpuGameBoardArray.forEach((boardElement, boardIndex) => {
            if (boardElement === 0) modifiedArray.push(boardIndex);
        });
        
        if (!axis) {
            while (continueLoop) {
                let validPlacement = true;

                const firstDigit = Math.floor(Math.random() * 9);
                const secondDigit = Math.floor(Math.random() * 9);

                let randomIndex = Number(firstDigit.toString() + secondDigit.toString());

                if (randomIndex + ship.length - 1 > firstDigit * 10 + 9) {
                    randomIndex = (firstDigit * 10 + 9) - ship.length + 1 
                }

                for (let i = 0; i < ship.length; i++) {
                    if (cpuGameBoardArray[randomIndex + i] !== 0) {
                        validPlacement = false;
                        break;
                    } 
                }
    
                if (validPlacement) {
                    for (let i = 0; i < ship.length; i++) {
                        cpuGameBoardArray[randomIndex + i] = shipCounter;
                        // to exit loop
                        continueLoop = false;
                    }
                }
            }
        } else {
            while (continueLoop) {
                let validPlacement = true;

                const firstDigit = Math.floor(Math.random() * 9);
                const secondDigit = Math.floor(Math.random() * 9);

                let randomIndex = Number(firstDigit.toString() + secondDigit.toString());

                if (randomIndex + ((ship.length -1) * 10) > 99 ) {
                    randomIndex = (99 - randomIndex);    
                }



                for (let i = 0; i < ship.length; i++) {
                    if (cpuGameBoardArray[randomIndex + (i*10)] !== 0) {
                        validPlacement = false;
                        break;
                    }
                }

                if (validPlacement) {
                    for (let i = 0; i < ship.length; i++) {
                        cpuGameBoardArray[randomIndex + (i*10)] = shipCounter;
                    }
                    // to exit while loop
                    continueLoop = false;
                } 
            }     
        }
    shipCounter++;
 })
//  console.log(cpuGameBoardArray)
 return cpuGameBoardArray
}




let originalValue = 100;
let bothMissedCounter = 0;
let ifMissed = false;

const  generateCpuAttack = (gameBoardArray, shipObjs, currentTurn) => {
    let attackValue;
    let foundHit;
    let indexHit; 
   
    if (ifMissed) {
        foundHit = true;
        indexHit = originalValue; 
    } else {
        foundHit = storedAttacks.find((shipBox) => shipBox === "hit");
        indexHit= storedAttacks.indexOf(foundHit);
    }

    if (foundHit && bothMissedCounter < 2) {
        if (storedAttacks[indexHit + 1] === 0 && indexHit + 1 <= 99) {
            attackValue = indexHit + 1;
        } else if (storedAttacks[indexHit - 1 ] === 0 && indexHit - 1 >= 0) {
            attackValue = indexHit - 1;
        }
        
    } else if (foundHit && bothMissedCounter >= 2) {
        if (storedAttacks[indexHit + 10 ] === 0 && indexHit + 10 <= 99) {
            attackValue = indexHit + 10;
        } else if (storedAttacks[indexHit - 10 ] === 0 && indexHit - 10 >= 0) {
            attackValue = indexHit - 10;
        }
    } else {
        let attackingArray = storedAttacks.map((spot, index) => (spot === 0 ? index : undefined))
        .filter(index => index !== undefined);        
        attackValue = attackingArray[Math.floor(Math.random()*attackingArray.length)];
    }
    
    gameBoard.receiveAttack(attackValue,gameBoardArray, shipObjs, currentTurn);
    console.log(storedAttacks)
    console.log(attackValue)
    return attackValue
}


const cpuHits = coordinateVal => {
    if (storedAttacks.indexOf('hit') !== -1) {
        storedAttacks[storedAttacks.indexOf('hit')] = 'hitten';
        storedAttacks[coordinateVal] = 'hit';
        ifMissed = false
    } else {
        storedAttacks[coordinateVal] = 'hit';
        originalValue = coordinateVal;
    }
}

const cpuMiss = coordinateVal => {
    storedAttacks[coordinateVal] = 'miss';
    if (!(originalValue === 100)) {
        ifMissed = true;
        bothMissedCounter++
    }
}

const cpuSunk = coordinateVal => {
    storedAttacks[coordinateVal] = 'sunked'; 
    originalValue = 100;
    bothMissedCounter = 0;
} 



export {
    placeCpuShips,
    generateCpuAttack,
    cpuHits, 
    cpuMiss,
    cpuSunk,
    cpuGameBoardArray,
    cpuShipObjs
}