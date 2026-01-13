// get rows, cols and store in a veriable
let rows = 40;
let cols = 40;
let cellHoverMode = "normal";

// func create grid cells

function createCells(rows = 16, cols = 16) {
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
    // cell.addEventListener("mouseout", cellNoHover);

    grid.append(cell);
  }
}

createCells(rows, cols);

function cellHover(e) {
  switch (cellHoverMode) {
    case "normal":
      e.target.className = "hover";
      break;
      case "random":
      e.target.style.backgroundColor = generateRandomColor()
  }
}
function cellNoHover(e) {
  e.target.className = "cell";
}

// func change grid row & col size
// display new grid
const resizeBtn = document.getElementById("change-grid-btn")

resizeBtn.addEventListener('click', resizeCells)
function resizeCells(){
    const grid = document.querySelector('.grid')
    grid.innerHTML = ""

    alert("enter new grid size max size 100")
    cols = prompt("enter cols size")
    rows = prompt("enter rows size")

    if(cols >= 100 || rows >= 100){
       return alert("cant be 100 or greater")
    }

    createCells(rows, cols)
}

// func change to random color cells
// generate random color for each cell

const randomColorBtn = document.getElementById('random-color-btn')
randomColorBtn.addEventListener('click', () => {
  cellHoverMode = "random"
})

function generateRandomColor(){
  const digits = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
  let hexCode = "#"

  while(hexCode.length < 7){
    hexCode += Math.floor(Math.random() * digits.length)
  }

  return hexCode

}

// func change to dark cells with that goes from light to dark
