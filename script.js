let container = document.querySelector('#container');
let numberOfCells = 16;

for(i = 0; i < numberOfCells; i++) {
    let line = document.createElement('div');
    line.setAttribute('style', 'display: flex;');

    for(j = 0; j < numberOfCells; j++) {
        let cell = document.createElement('div');
        let cellWidth = `${600/numberOfCells}px`;

        cell.setAttribute('style', `width: ${cellWidth}; height: ${cellWidth}; border: 1px solid black;`);
        line.appendChild(cell);
    }
    container.appendChild(line);
}