import { gameBoard } from "./index";

const mainContainer = document.querySelector('#mainContainer');
const playerInput = document.querySelector('#playerName');
const submitBtn = document.querySelector('#submitBtn');


const personalBoxesDiv = [];
let currentShip = 'carrier';
let checking = false;
let storedVal = [];

const axisSelection = document.createElement('button');
axisSelection.classList.add('axisSelection');
const placeMessageDiv = document.createElement('div');

function showPersonalBoard (playerName) {

    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild)
    }

    placeMessageDiv.textContent = `${playerName}, place your ${currentShip.charAt(0).toUpperCase() + currentShip.slice(1)}:`
    placeMessageDiv.classList.add('placeMessageDiv')
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
            placeShip(personalBox.value, playerName, axisSelection)
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

    let availableSpaces = true;
    if (axisSelection.textContent === "AXIS: X") {
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
        for (let i = 0; i < loop; i++) {
            if (index + i*10 > 99 || 
                storedVal.find(val => val === index + i*10 )) {
                availableSpaces = false;
            }
        }        

        for (let i = 0; i < loop; i++) {
            if (availableSpaces) {
                personalBoxesDiv[index + i*10].classList.remove('rejection');
                personalBoxesDiv[index + i*10].classList.add('selection');
                checking = true
            } else if (!availableSpaces) {
                if (index + i*10 <= 99)
                personalBoxesDiv[index + i*10].classList.add('rejection');
            }
        }
    }
}

function placeShip (value, playerName, axisSelection) {
    let counter = 0;
    let loop = 0;
    let chosenShip;
    if (gameBoard.placeShip(value)) {
        if (checking) {
            switch (currentShip) {
                case 'carrier':
                counter = 1;
                loop = 5;
                const carrierPic = createImg("carrier");
                chosenShip = carrierPic
                personalBoxesDiv[value].appendChild(carrierPic);
                currentShip = 'battleship';
            break;
            
            case 'battleship': 
                counter = 2;
                loop = 4;
                const battleshipPic = createImg("battleship");
                chosenShip = battleshipPic;
                personalBoxesDiv[value].appendChild(battleshipPic);
                currentShip = 'destroyer';
            break;
    
            case 'destroyer':
                counter = 3;
                loop = 3;
                const destroyerPic = createImg("destroyer");
                chosenShip = destroyerPic;
                personalBoxesDiv[value].appendChild(destroyerPic);
                currentShip = 'submarine';
            break;
    
            case 'submarine':
                counter = 4;
                loop = 3;
                const submarinePic = createImg("submarine");
                chosenShip = submarinePic;
                personalBoxesDiv[value].appendChild(submarinePic);
                currentShip = 'patrolBoat';
            break;
    
            case 'patrolBoat':
                counter = 5;
                loop = 2;
                const patrolBoatPic = createImg("patrolBoat");
                chosenShip = patrolBoatPic;
                personalBoxesDiv[value].appendChild(patrolBoatPic);
                currentShip = '';
            break;
        }

        
        if (axisSelection.textContent === "AXIS: Y") {
            chosenShip.classList.add('yAxis') 
        }

            placeMessageDiv.textContent = `${playerName}, place your ${currentShip.charAt(0).toUpperCase() + currentShip.slice(1)}:`

            if (currentShip === 'patrolBoat') {
                placeMessageDiv.textContent = `${playerName}, place your Patrol Boat:`
            }

            for (let i = 0; i < loop; i++) {
                if (axisSelection.textContent === "AXIS: X") {
                    storedVal.push(value + i);
                    personalBoxesDiv[value + i].classList.remove('selection')
                } else {
                    storedVal.push(value + i*10);
                    personalBoxesDiv[value + i*10].classList.remove('selection')
                }
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



