import {Ship, gameBoard, playerGameBoardArray, playerShipObjs} from './index';

const cpuGameBoardArray = new Array(100).fill(0);
const cpuShipObjs = [];



const placeCpuShips = () => {
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
        console.log(axis)
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

                console.log(randomIndex)

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

                console.log(randomIndex)


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
    console.log(cpuGameBoardArray)

    console.log(cpuShipObjs)
}


export default placeCpuShips