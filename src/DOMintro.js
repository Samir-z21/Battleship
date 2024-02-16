import { gameBoard } from "./index";

const mainContainer = document.querySelector('#mainContainer');
const playerInput = document.querySelector('#playerName');
const submitBtn = document.querySelector('#submitBtn');


const personalBoxesDiv = [];
let currentShip = 'carrier';
let checking = false;
let storedVal = [];

const axisSelection = document.createElement('button');
const placeMessageDiv = document.createElement('div');

function showPersonalBoard (playerName) {

    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild)
    }

    placeMessageDiv.textContent = `${playerName}, place your ${currentShip.charAt(0).toUpperCase() + currentShip.slice(1)}:`
    mainContainer.appendChild(placeMessageDiv);

    axisSelection.textContent = "AXIS: X";
    axisSelection.addEventListener('click', () => {
        if (axisSelection.textContent === "AXIS: X") axisSelection.textContent = "AXIS: Y";
        else  axisSelection.textContent = "AXIS: X" 
    })
    mainContainer.appendChild(axisSelection);

    const personalBoard = document.createElement('div');
    personalBoard.classList.add('personalBoard');

    for (let i = 0; i < 100; i++) {
        const personalBox = document.createElement('div');
        personalBox.classList.add('personalBox');
        personalBox.value = i;
        personalBox.addEventListener('mouseenter', () => {
            potentialPlacement(axisSelection, personalBox.value)
        });

      


        personalBox.addEventListener('mouseleave', () => {
        
            let loop = 0;
            switch (currentShip) {
            case 'carrier':
                loop = 5;
            break;
            
            case 'battleship': 
                loop = 4;
            break;
    
            case 'destroyer':
                loop = 3;
            break;
    
            case 'submarine':
                loop = 3;
            break;
    
            case 'patrolBoat':
                loop = 2;
            break;
    
        }

        for (let i = 0; i < 100; i++) {
            if (personalBox.value + i <= 99) {
                personalBoxesDiv[personalBox.value + i].classList.remove('selection')   
            }
        }
        })

        personalBox.addEventListener('click', () => {
            placeShip(personalBox.value, playerName)
        })
        personalBoxesDiv.push(personalBox);
        personalBoard.appendChild(personalBox);
    }

    mainContainer.appendChild(personalBoard);


}

function potentialPlacement (axisSelection, index) {
    let loop = 0;
    switch (currentShip) {
        case 'carrier':
            loop = 5;
        break;
        
        case 'battleship': 
            loop = 4;
        break;

        case 'destroyer':
            loop = 3;
        break;

        case 'submarine':
            loop = 3;
        break;

        case 'patrolBoat':
            loop = 2;
        break;
    }

    if (axisSelection.textContent === "AXIS: X") {
        let availableSpaces = true;
        let findX = (Math.floor(index/10)*10) + 9; 


        for (let i = 0; i < loop; i++) {
            if (index + i > 99 || 
                index + i > findX || 
                storedVal.find(val => val === index + i )) {
                availableSpaces = false;
            }
        }        

                
        for (let i = 0; i < loop; i++) {
            if (availableSpaces) {
                personalBoxesDiv[index + i].classList.remove('rejection');
                personalBoxesDiv[index + i].classList.add('selection');
                checking = true
            } else if (!availableSpaces) {
                if (index + i <= 99)
                personalBoxesDiv[index + i].classList.add('rejection');
            }
        }


    } else {

    }
}

function placeShip (value, playerName) {
    let counter = 0;
    let loop = 0;
    switch (currentShip) {
            case 'carrier':
                counter = 1;
                loop = 5;
            break;
            
            case 'battleship': 
                counter = 2;
                loop = 4;
            break;
    
            case 'destroyer':
                counter = 3;
                loop = 3;
            break;
    
            case 'submarine':
                counter = 4;
                loop = 3;
            break;
    
            case 'patrolBoat':
                counter = 5;
                loop = 2;
            break;
        }
    if (gameBoard.placeShip(value)) {
        if (checking) {
            if (counter === 1) {
                const carrierPic = createImg("carrier");
                personalBoxesDiv[value].appendChild(carrierPic);
                currentShip = 'battleship';

            } else if (counter === 2) {
                const battleshipPic = createImg("battleship");
                personalBoxesDiv[value].appendChild(battleshipPic);
                currentShip = 'destroyer';

            } else if (counter === 3) {
                const destroyerPic = createImg("destroyer");
                personalBoxesDiv[value].appendChild(destroyerPic);
                currentShip = 'submarine';

            } else if (counter === 4) {
                const submarinePic = createImg("submarine");
                personalBoxesDiv[value].appendChild(submarinePic);
                currentShip = 'patrolBoat';

            } else if (counter === 5) {
                const patrolBoatPic = createImg("patrolBoat");
                personalBoxesDiv[value].appendChild(patrolBoatPic);
                currentShip = '';
            }

            placeMessageDiv.textContent = `${playerName}, place your ${currentShip.charAt(0).toUpperCase() + currentShip.slice(1)}:`

            if (currentShip === 'patrolBoat') {
                placeMessageDiv.textContent = `${playerName}, place your Patrol Boat:`
            }

            for (let i = 0; i < loop; i++) {
                storedVal.push(value + i);
                personalBoxesDiv[value + i].classList.remove('selection')
            }
        } 
       
        
    }
}



function createImg (className) {
    const img = document.createElement('img');
    img.classList.add(className);
    img.src = `./shipsPic/${className}.png`;

    return img
}

export {showPersonalBoard, axisSelection}



