import {gameBoard} from "./index";
import {placeCpuShips} from "./cpuControl";

// only one at a time
    // Player ship placements tests 

test.skip('getting ship location "x axis" ', () => {
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
    const cpuGameBoardArrayExample = placeCpuShips();
    
    const cpuCarrier = cpuGameBoardArrayExample
    .map((box, index) => box === 1 ? index : null) 
    .filter(index => index !== null);


    const cpuBattleship = cpuGameBoardArrayExample
    .map((box, index) => box === 2 ? index : null) 
    .filter(index => index !== null);


    const cpuDestroyer = cpuGameBoardArrayExample
    .map((box, index) => box === 3 ? index : null) 
    .filter(index => index !== null);


    const cpuSubmarine = cpuGameBoardArrayExample
    .map((box, index) => box === 4 ? index : null) 
    .filter(index => index !== null);


    const cpuPatrolBoat = cpuGameBoardArrayExample
    .map((box, index) => box === 5 ? index : null) 
    .filter(index => index !== null);

    const shipsArray = [cpuCarrier, cpuBattleship, cpuDestroyer, cpuSubmarine,cpuPatrolBoat]

test('all 17 placement have been done', () => {
    expect(cpuGameBoardArrayExample.filter(box => box !== 0).length).toBe(17);

    expect(cpuCarrier.length).toBe(5);
    expect(cpuBattleship.length).toBe(4);
    expect(cpuDestroyer.length).toBe(3);
    expect(cpuSubmarine.length).toBe(3);
    expect(cpuPatrolBoat.length).toBe(2);
})

    // const cpuCarrierDigit = cpuCarrier[0] <= 9 ? 0 : cpuCarrier[0].toString().chartAt(0); 
    // const battleshipDigit = cpuBattleship[0] <= 9 ? 0 : cpuBattleship[0].toString().chartAt(0);
    // const cpuDestroyerDigit = cpuDestroyer[0] <= 9 ? 0 : cpuDestroyer[0].toString().chartAt(0);
    // const cpuSubmarineDigit = cpuSubmarine[0] <= 9 ? 0 : cpuSubmarine[0].toString().chartAt(0);
    // const cpuPatrolBoatDigit = cpuSubmarine[0] <= 9 ? 0 : cpuPatrolBoat[0].toString().chartAt(0);
    

test('ships inline with regulations ', () => {
    let xAsixShips = 0;
    let yAsixShips = 0;



    shipsArray.forEach(ship => {   
        console.log(ship)
        if (ship[0] === ship[1] + 1) {
            const digit = ship[0] <= 9 ? 0 : ship[0].toString().charAt(0);
            if (digit + 10 > ship[ship.length -1]) xAsixShips++
        } else yAsixShips++
    })
    
    expect(cpuGameBoardArrayExample.find(box => box > 99 || box < 0)).toBeUndefined();
    expect(xAsixShips + yAsixShips ).toBe(5);
})






