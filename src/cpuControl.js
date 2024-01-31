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

    cpuShipObjs.forEach((ship, shipIndex) => {
        let modifiedArray = [];
        // const axis = Math.round(Math.random()); // 0 = x, 1 = y
        
        cpuGameBoardArray.forEach((boardElement, boardIndex) => {
            if (boardElement === 0) modifiedArray.push(boardIndex);
        });

        
        for (let i = 1; i < ship.length; i++) {
            modifiedArray.pop()
        }


        let randomIndex = modifiedArray[Math.floor(Math.random() * modifiedArray.length)];

        let continueLoop = true
        while (continueLoop) {
            let validPlacement = true;
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
            } else {
                randomIndex = modifiedArray[Math.floor(Math.random() * modifiedArray.length)];
                // to continue loop
                continueLoop = true;
            } 
            
        }
        
        shipCounter++;

        

    // } else {
    //             const potentialY = availablePositions[randomIndex];
    //             isPlacementValid = cpuGameBoardArray
    //                 .slice(potentialY, potentialY + shipLength )
    //                 .every(value => value === 0);

            

    //         console.log(modifiedArray)

    //         const randomIndex = modifiedArray[Math.floor(Math.random()*modifiedArray.length - objElement.length)]; 

    //         for (let i = 0; i < objElement.length; i++) {
    //             cpuGameBoardArray[randomIndex + i] = objIndex + 1
    //         }
    //     }
 })
    console.log(cpuGameBoardArray)

    console.log(cpuShipObjs)
}


export default placeCpuShips