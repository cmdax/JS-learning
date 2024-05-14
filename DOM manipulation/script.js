// ADD EVERYTHING INSIDE THE CONTAINER DIV
let container = document.querySelector('#container');

// <p> with red text saying 'Hey I'm red"
let pRed = document.createElement('p');
pRed.style.color = 'red';
pRed.textContent = "Hey, I'm red!";

container.appendChild(pRed);
// <h3> blue text 'I'm blue h3!'
let h3Blue = document.createElement('h3');
h3Blue.style.color = 'blue';
h3Blue.textContent = "I'm blue h3!";

container.appendChild(h3Blue);

// <div>, black border, pink background
let divBlack = document.createElement('div');
divBlack.style.backgroundColor = 'pink';
divBlack.style.border = 'black solid 3px';

container.appendChild(divBlack);

    // <h1> 'I'm inside a div'
    
    // <p> 'ME TOO!'

    