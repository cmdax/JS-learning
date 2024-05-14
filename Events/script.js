function alertFunction(){
    alert('You did it!');
}

const btn = document.querySelector("#btn");
btn.addEventListener('click', function (e){
    e.target.style.background = 'lightblue';
});