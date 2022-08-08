let header = document.querySelector('header');
let container = document.querySelector('.container');

function drawGrid(x = 16, y = 16) {
    let grid = document.createElement('div');
    grid.style.display = 'flex';
    grid.style.flexDirection = 'column';
    grid.style.border = 'solid #f9faf8';
    grid.style.flexBasis = '80%';
    grid.style.width = '60%';
    grid.style.backgroundColor = '#f9faf8';
    grid.className = 'grid';
    container.appendChild(grid);

    for (i = 0; i < x; i++) {
        let row = document.createElement('div');
        row.style.display = 'flex';
        row.className = 'row';
        row.id = 'row' + i;
        grid.appendChild(row);
        row.style.flexBasis = `${100 / x}%`;

        for (j = 0; j < y; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = 'cell' + j;
            row.appendChild(cell);
            cell.style.flexBasis = `${100 / y}%`;
        }
    }
}

function sketch() {
    let color = document.querySelector('.colorpicker');
    const cells = Array.from(document.querySelectorAll('.cell'));
    cells.forEach(cell => cell.addEventListener('mouseover', function handleMouseover() {
    cell.style.backgroundColor = `${color.value}`;
    }));
}

drawGrid()
sketch()


function clearSketchbook() {
    const cells = Array.from(document.querySelectorAll('.cell'));
    cells.forEach(cell => cell.style.backgroundColor = 'white');
}

function resetSketchbook() {
    let grid = document.querySelector('.grid');
    container.removeChild(grid);
    let input = prompt("enter the number of squares per side for the new grid (format = i x j) (the borders might not show up for grids with more than 2,500 squares)");
    const inputArray = input.split(" ");
    let x = inputArray[0];
    let y = inputArray[2];
    
    if (0 < x < 100  && 0 < y < 100) {
        drawGrid(x, y)
        sketch()
    }

    else {
        alert("invalid input! (the minimum amount of squares per side for the new grid is 1 and the maximum is 100)");
    }
}

function changeBorders() {
    const cells = Array.from(document.querySelectorAll('.cell'));
    let borders_btn = document.querySelector('.borders_btn');
    if (borders_btn.textContent == 'show borders') {
        borders_btn.textContent = 'hide borders'
        cells.forEach(cell => cell.classList.add('bordersShown'));
        
    }

    else {
        borders_btn.textContent = 'show borders'
        cells.forEach(cell => cell.classList.remove('bordersShown'));
    }
}

let clr_btn = document.querySelector('.clr_btn');
let rst_btn = document.querySelector('.rst_btn');
let borders_btn = document.querySelector('.borders_btn');
rst_btn.addEventListener('click', resetSketchbook);
clr_btn.addEventListener('click', clearSketchbook);
borders_btn.addEventListener('click', changeBorders);
