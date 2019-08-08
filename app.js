const container = document.querySelector("#div-container");
const boxes = document.querySelectorAll("#div-container");
const buttons = document.querySelectorAll('#buttons');

//variable to select color mode, 1 = white, 2 = random
let colorMode = 2;

// variable for the grid size, 16 is default
let gridSize = 16;

// function to reset the grid

function resetGrid() {
    let gridBox = document.querySelectorAll('.box');
    gridBox.forEach((div) => {
        div.parentNode.removeChild(div);
    });
}

// function to create the grid
function createGrid (n) {
    for (let i = 0; i < n * n; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        container.appendChild(div);
    }
    container.setAttribute('style', `grid: repeat(${n}, auto) / repeat (${n}, auto)`);
}

boxes.forEach((box) => {
    box.addEventListener('mouseover', (e) => {
        if (colorMode === 1) {
            e.target.setAttribute('style', `background: white; opacity: 1;`)
        } else if (colorMode === 2) {
            e.target.setAttribute('style', `background-color: ${randomColor()}; opacity: 1;`);
        } else if (colorMode === 3) {
            e.target.setAttribute('style', `background: black; opacity: 1;`)
        }
    });
});

// eventlisteners for the buttons to change color and create new grid
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.id === 'white') {
            colorMode = 1;
        } else if (e.target.id === 'random') {
            colorMode = 2;
        } else if (e.target.id === 'black') {
            colorMode = 3;
        } else if (e.target.id === 'new-grid') {
            gridSize = prompt("Enter grid size", '16');
            resetGrid();
            createGrid(gridSize);
        }
    });
});

createGrid(gridSize);