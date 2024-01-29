import {Ship, gameBoard} from "./index";

const carrier = new Ship(5, 0, false);

carrier.hit();
carrier.hit();
carrier.hit();



test('Ship Obj', () => {
    expect(carrier.isSunk()).toBe(false);
});


test('getting ship location "x axis" ', () => {
    expect(gameBoard.placeShip(13)).toEqual([13,14,15,16,17]);
    expect(gameBoard.placeShip(88)).toEqual([88,89,90,91]);
    expect(gameBoard.placeShip(95)).toEqual([95,96,97]);
    expect(gameBoard.placeShip(0)).toEqual([0,1,2]);
    expect(gameBoard.placeShip(84)).toEqual([84,85]);
});

test.skip('getting ship location "y axis" ', () => {
    expect(gameBoard.placeShip(13)).toEqual([13,23,33,43,53]);
    expect(gameBoard.placeShip(28)).toEqual([28,38,48,58]);
    expect(gameBoard.placeShip(45)).toEqual([45,55,65]);
    expect(gameBoard.placeShip(0)).toEqual([0,10,20]);
    expect(gameBoard.placeShip(72)).toEqual([72,82]);
});





