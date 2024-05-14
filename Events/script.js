function alertFunction(){
    alert('You did it!');
}

;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    })
})
    