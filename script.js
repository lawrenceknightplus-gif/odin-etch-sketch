// get rows, cols and store in a veriable
let rows = 40;
let cols = 40;
let cellHoverMode = "normal";

// func create grid cells

function createCells(rows, cols) {
  // get grid element
  const grid = document.querySelector(".grid");
  let gridSize = grid.clientWidth + grid.clientHeight;
  // for rows * cols increment and make new cells
  for (let i = 0; i < rows * cols; i++) {
    // create new div el
    let cell = document.createElement("div");
    // display new grid to user on webpage
    cell.style.width = `${gridSize / cols}px`;
    cell.style.height = `${gridSize / rows}px`;
    cell.addEventListener("mouseover", cellHover);
    cell.addEventListener("mouseout", cellNoHover);

    grid.append(cell);
  }
}

createCells(rows, cols);

function cellHover(e) {
  switch (cellHoverMode) {
    case "normal":
      e.target.className = "hover";
      break;
  }
}
function cellNoHover(e) {
  e.target.className = "cell";
}

// func change grid row & col size
// display new grid

// func change to random color cells
// generate random color for each cell

// func change to dark cells with that goes from light to dark
