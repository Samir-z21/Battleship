import './home.css';

console.log("Hello World")

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

export default Ship

