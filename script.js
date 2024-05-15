let container = document.querySelector('#container');
let numberOfCells = 16;
generateGrid();

let btn = document.querySelector('button');
btn.addEventListener('click', function () {
    let userInput = +prompt('Pick cells per side (1 to 100)');

    if(userInput >= 1 && userInput <= 100) {
        numberOfCells = userInput;
    } else {
        alert('You can pick between 1 and 100.');
    }
    generateGrid();
});

function generateGrid() {
    container.innerHTML = '';
    for(i = 0; i < numberOfCells; i++) {
        let line = document.createElement('div');
        line.setAttribute('style', 'display: flex;');
    
        for(j = 0; j < numberOfCells; j++) {
            let cell = document.createElement('div');
            let cellWidth = `${600/numberOfCells}px`;
    
            cell.setAttribute('style', `width: ${cellWidth}; height: ${cellWidth}; border: 1px solid black;`);
            cell.addEventListener('mouseenter', () => cell.setAttribute('class', 'writtenCell'));
            line.appendChild(cell);
        }
        container.appendChild(line);
    }
}
