// Access DOM element nodes for the grid container and button
const gridContainer = document.querySelector(".grid-container");
const newGridBtn = document.querySelector(".new-grid-btn");

// Create a function to create divs inside grid container
function createGridDivs(dimension) {
    for (let i = 0; i < dimension*dimension; i++) {
        const gridDiv = document.createElement("div");
        gridContainer.appendChild(gridDiv);
        gridDiv.style.width = `calc(100% / ${dimension})`;
        gridDiv.style.height = `calc(100% / ${dimension})`;
        gridDiv.addEventListener("mouseenter", () => {changeDivColour(gridDiv)});
    }
}

// Create a function to delete divs inside grid container
function deleteGridDivs() {
    const gridChildren = [...gridContainer.querySelectorAll("div")];
    gridChildren.map((child) => {gridContainer.removeChild(child)});
}

// Create a function to change background colours of divs inside grid container
function changeDivColour(el) {
    el.style.backgroundColor = "#06D6A0";
}

// Create a function to create a new grid
function createNewGrid() {
    let gridSize = prompt("Enter the number of squares per side (between 1 and 100): ");
    while (gridSize <= 0 || gridSize > 100) {
        gridSize = prompt("Please enter a number between 1 and 100: ");
    }
    deleteGridDivs();
    createGridDivs(gridSize);
}

createGridDivs(16);
newGridBtn.addEventListener("click", () => createNewGrid());