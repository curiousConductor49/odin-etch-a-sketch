// Access DOM element nodes for the grid container and button
const gridContainer = document.querySelector(".grid-container");
const newGridBtn = document.querySelector(".new-grid-btn");

function createGridDivs(dimension) {
    for (let i = 0; i < dimension*dimension; i++) {
        const gridDiv = document.createElement("div");
        gridContainer.appendChild(gridDiv);
        gridDiv.style.width = `calc(100% / ${dimension})`;
        gridDiv.style.height = `calc(100% / ${dimension})`;
        gridDiv.addEventListener("mouseenter", () => {changeDivColour(gridDiv)});
    }
}

function deleteGridDivs() {
    const gridChildren = [...gridContainer.querySelectorAll("div")];
    gridChildren.map((child) => {gridContainer.removeChild(child)});
}

function changeDivColour(el) {
    el.style.backgroundColor = "#06D6A0";
}

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