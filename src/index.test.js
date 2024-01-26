import Ship from "./index"

test('Ship Obj', () => {
    const carrier = new Ship(5, 0, false)
    expect(carrier).toEqual({
        length: 5,
        hits:0,
        sunk:false
    });
});


