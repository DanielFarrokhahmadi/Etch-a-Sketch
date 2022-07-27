let body = document.querySelector('body');

function generateGrid(x = 16, y = 16) {
    let grid = document.createElement('div');
    grid.style.display = 'flex';
    grid.style.flexDirection = 'column';
    grid.style.minHeight = '90%';
    grid.className = 'grid';
    body.appendChild(grid);

    for (i = 0; i < x; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        row.id = 'row' + i;
        row.style.display = 'flex';
        grid.appendChild(row);
        row.style.minHeight = `${100 / x}%`;

        for (j = 0; j < y; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.classList.add('default');
            cell.id = 'cell' + i;
            row.appendChild(cell);
            cell.style.flexBasis = `${100 / y}%`;
        }
    }
}

generateGrid()

const cells = Array.from(document.querySelectorAll('.cell'));
cells.forEach(cell => cell.addEventListener('mouseover', function handleMouseover(){
    cell.classList.add('hovered-Over');
}))