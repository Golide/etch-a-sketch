// Create container div, give it an id of "container-wrapper" and position in.

const containerWrapper = document.createElement('section');
containerWrapper.setAttribute('id', 'container-wrapper');
const wrapperStyle = {
    position : 'absolute',
    top : '0',
    left : '0',
    right : '0',
    bottom : '0'
};
Object.assign(containerWrapper.style, wrapperStyle);
document.body.appendChild(containerWrapper);

let size = 16; // Set the initial size of the grid

// Create another container, which will also act as the border for the board.

const container = document.createElement('div');
const containerStyle = {
    border: '6px solid grey',
    display: 'grid',
    margin: '20px auto',
    height: '450px',
    width: '450px',
    borderRadius : '6px', 
    boxShadow: '3px 3px 10px 0px rgba(92, 98, 116, 1)',
    gridTemplateColumns : `repeat(${size}, 1fr)`,
    gridTemplateRows: `repeat(${size}, 1fr)`
};
Object.assign(container.style, containerStyle);
container.setAttribute('id', 'container');
containerWrapper.appendChild(container);

// Fill the grid with 'b' tags so they can be coloured individually. Add event listener "mouseover" to color each cell.

for (i=0; i<(size**2); i++) {
    const cell = document.createElement('b');
    cell.classList.add('cells');
    cell.addEventListener('mouseover', function (e) {
        e.target.style.backgroundColor = 'rgba(92, 98, 116, 0.1)';
    });
    container.appendChild(cell);
}

// Create the reload button. Place it on top of the document with "prepend".

const reloadButton = document.createElement('button');
reloadButton.textContent = 'Reload';
const reloadButtonStyle = {
    backgroundColor : 'rgba(92, 98, 116, 1',
    textAlign : 'center',
    display : 'block',
    margin : '10px auto',
    fontFamily: 'Roboto, sans-serif',
    fontSize : '16px',
    fontWeight : 'bold',
    color : 'white',
    border: '2px solid grey',
    borderRadius : '6px', 
    padding : '6px 14px',
    boxShadow: '3px 3px 10px 0px rgba(92, 98, 116, 0.6)'
}
Object.assign(reloadButton.style, reloadButtonStyle);
containerWrapper.prepend(reloadButton);

// Make the reload button clear the grid.

const gridCells = document.querySelectorAll('.cells');
console.log(gridCells);

reloadButton.addEventListener('click', function() {
    for (i = 0; i < (size**2); i++) {
        gridCells[i].style.backgroundColor = 'white';
    }
});
