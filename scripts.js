// Add html structure

const containerWrapper = document.createElement('section');
containerWrapper.setAttribute('id', 'container-wrapper');
const wrapperStyle = {
    position : 'absolute',
    backgroundImage : 'url(https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)',
    top : '0',
    left : '0',
    right : '0',
    bottom : '0',
};
Object.assign(containerWrapper.style, wrapperStyle);
document.body.prepend(containerWrapper);

const container = document.createElement('div');
const containerStyle = {
    border: '6px solid grey',
    display: 'grid',
    margin: '20px auto',
    height: '450px',
    width: '450px',
    borderRadius : '6px', 
    boxShadow: '3px 3px 10px 0px rgba(92, 98, 116, 1)',
    background : 'white'
};
Object.assign(container.style, containerStyle);
container.setAttribute('id', 'container');
containerWrapper.appendChild(container);

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

// Functions

function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (i=0; i<(size**2); i++) {
        const cell = document.createElement('b');
        cell.classList.add('cells');
        container.appendChild(cell);
    }
}

function userDefinedGrid() {

    clear();

    let input = prompt('Enter the size of the new grid: ');

    if (input === null) {
        return;
    } else if (input < 1 || isNaN(input)) {
        do {
            input = Number(prompt('Please enter a valid size'));
        } while (input < 1 || isNaN(input));
    }

    createGrid(input);
    color();
}

function color () {
    const cells = document.querySelectorAll('.cells');

    cells.forEach(cell => {
        cell.addEventListener('mouseover', e => {
            cell.style.backgroundColor = 'rgba(92, 98, 116, 0.5)';
        });
    });
}

function clear () {
    const cells = document.querySelectorAll('.cells');

    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
}

// Event listeners

createGrid(16);
reloadButton.addEventListener('click', userDefinedGrid);
color();
