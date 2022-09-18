const display = document.querySelector(".boundary example");
const border = document.querySelector(".boundary");
const start = document.getElementById("start")

const collision = (value) =>{
    if(value == 'boundary') alert("You lose!") 
    border.style.backgroundColor = red;
    if(value == '#end') alert("You win!") 
    }

window.addEventListener("mousemove", (e) =>{
    let check = e.target.classList.value;
    collision(check);
})
