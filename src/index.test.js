import {gameBoard, playerGameBoardArray, playerShipObjs} from "./index";
import {cpuGameBoardArray, cpuShipObjs, generateCpuAttack} from "./cpuControl";

// Player ship placements tests 
    // test with .only !!!

test('getting ship location "x axis" ', () => {
    expect(gameBoard.placeShip(88)).toEqual("can't place your ship here");
    expect(gameBoard.placeShip(95)).toEqual([95,96,97,98,99]);
    expect(gameBoard.placeShip(78)).toEqual("can't place your ship here");
    expect(gameBoard.placeShip(12)).toEqual([12,13,14,15]);
    expect(gameBoard.placeShip(95)).toEqual("can't place your ship here");
    expect(gameBoard.placeShip(7)).toEqual([7,8,9]);
    expect(gameBoard.placeShip(54)).toEqual([54,55,56]);
    expect(gameBoard.placeShip(55)).toEqual("can't place your ship here");
    expect(gameBoard.placeShip(88)).toEqual([88,89]);
    expect(gameBoard.placeShip(0)).toEqual("all ships placed");
});


test.skip('getting ship location "y axis" ', () => {
    expect(gameBoard.placeShip(88)).toEqual("can't place your ship here");
    expect(gameBoard.placeShip(13)).toEqual([13,23,33,43,53]);
    expect(gameBoard.placeShip(3)).toEqual("can't place your ship here");
    expect(gameBoard.placeShip(53)).toEqual("can't place your ship here");
    expect(gameBoard.placeShip(67)).toEqual([67,77,87,97]);
    expect(gameBoard.placeShip(78)).toEqual([78, 88,98]);
    expect(gameBoard.placeShip(58)).toEqual("can't place your ship here");
    expect(gameBoard.placeShip(0)).toEqual([0,10,20]);
    expect(gameBoard.placeShip(58)).toEqual([58,68]);
    expect(gameBoard.placeShip(26)).toEqual("all ships placed");
});


// Cpu Ship placements test


test('all 17 placement have been done', () => {
    expect(cpuGameBoardArray.filter(box => box !== 0).length).toBe(17);

    const cpuCarrier = cpuGameBoardArray
    .map((box, index) => box === 1 ? index : null) 
    .filter(index => index !== null);
    

    const cpuBattleship = cpuGameBoardArray
    .map((box, index) => box === 2 ? index : null) 
    .filter(index => index !== null);


    const cpuDestroyer = cpuGameBoardArray
    .map((box, index) => box === 3 ? index : null) 
    .filter(index => index !== null);


    const cpuSubmarine = cpuGameBoardArray
    .map((box, index) => box === 4 ? index : null) 
    .filter(index => index !== null);


    const cpuPatrolBoat = cpuGameBoardArray
    .map((box, index) => box === 5 ? index : null) 
    .filter(index => index !== null);

    const shipsArray = [ cpuBattleship, cpuDestroyer, cpuSubmarine,cpuPatrolBoat];

    // second phase

    let xAsixCheck = true;
    let yAsixCheck = true;

    shipsArray.forEach(ship => {   
        if (ship[0] + 1  === ship[1]) {
            const digit = ship[0] <= 9 ? 0 : ship[0].toString().charAt(0);
            if (!(digit + 10 > ship[ship.length -1])) xAsixCheck = false;
        } else {
            if (!(ship[0] + 10 === ship[1])) yAsixCheck = false;
        }
    })

    expect(cpuCarrier.length).toBe(5);
    expect(cpuBattleship.length).toBe(4);
    expect(cpuDestroyer.length).toBe(3);
    expect(cpuSubmarine.length).toBe(3);
    expect(cpuPatrolBoat.length).toBe(2);

    expect(cpuGameBoardArray.find(box => box > 99 || box < 0)).toBeUndefined();
    expect(xAsixCheck).toBe(true);
    expect(yAsixCheck).toBe(true);

    
});


// Player Attacks Tests    

test('player attacks', () => {
   
    function attacks (value) {
        return typeof cpuGameBoardArray[value] === 'number' ? `${value} got attacked` : `${value} already recevied attack`;
    }


const cpuAttack = attacks(29)
expect(gameBoard.receiveAttack(29, cpuGameBoardArray, cpuShipObjs, 'playerTurn'))
.toBe(cpuAttack);


const attackTwo = attacks(29)
expect(gameBoard.receiveAttack(29, cpuGameBoardArray, cpuShipObjs, 'playerTurn'))
.toBe(attackTwo);


const attackThree = attacks(48)
expect(gameBoard.receiveAttack(48, cpuGameBoardArray, cpuShipObjs, 'playerTurn'))
.toBe(attackThree);

const attackFour = attacks(0)
expect(gameBoard.receiveAttack(0, cpuGameBoardArray, cpuShipObjs, 'playerTurn'))
.toBe(attackFour);

const attackFive = attacks(48)
expect(gameBoard.receiveAttack(48, cpuGameBoardArray, cpuShipObjs, 'playerTurn'))
.toBe(attackFive);

});


// CPU Attack Tests    

test('cpu attacks', () => {

    const firstAttack = generateCpuAttack(playerGameBoardArray, playerShipObjs, 'cpuTurn');
    let attackArray = playerGameBoardArray.slice();
    let indexFound = 0;

    function findAttacks () {
        if (indexFound === 0) {
            indexFound++
            return playerGameBoardArray.findIndex(spot => typeof spot !== 'number')
        } else {
            for (let i = 0; i < playerGameBoardArray.length; i++) {
                if (attackArray[i] !== playerGameBoardArray[i]) {
                   indexFound = i;  
                } 

            }
        }

        attackArray = playerGameBoardArray.slice();
        return indexFound
    }

    expect(firstAttack).toBe(findAttacks());
    expect(generateCpuAttack(playerGameBoardArray, playerShipObjs, 'cpuTurn')).toBe(findAttacks());
    expect(generateCpuAttack(playerGameBoardArray, playerShipObjs, 'cpuTurn')).toBe(findAttacks());
    expect(generateCpuAttack(playerGameBoardArray, playerShipObjs, 'cpuTurn')).toBe(findAttacks());
    expect(generateCpuAttack(playerGameBoardArray, playerShipObjs, 'cpuTurn')).toBe(findAttacks());
    expect(generateCpuAttack(playerGameBoardArray, playerShipObjs, 'cpuTurn')).toBe(findAttacks());
})


