// PSEUDOCODE (use as code guide and rework as comments later)
// Access DOM element node for the grid container
const gridContainer = document.querySelector(".grid-container");

// Function create grid
    // Pass In: div num
    // Action:
        // ACCESS DOM 
        // CREATE a grid of div elements inside the existing div container in the HTML using a loop
    // Pass Out: n/a
// Endfunction

function createGridDivs(num) {
    for (let i = 0; i < num*num; i++) {
        const gridDiv = document.createElement("div");
        gridContainer.appendChild(gridDiv);
    }
}

createGridDivs(16);

// Function change div colour
    // Pass In: n/a
    // Action: CHANGE the div colours when moused over using event listeners and DOM attributes
    // Pass Out: n/a
// Endfunction

// Function create new grid w/ user input
    // Pass In: div num
    // Action: 
        // OBTAIN user input
        // REMOVE existing grid of divs inside div container from DOM
        // CREATE new grid of divs using user input
        // ATTACH to event listener on button
    // Pass Out: n/a
// Endfunction