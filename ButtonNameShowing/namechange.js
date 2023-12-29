var sameer_btn = document.querySelector("#sameer")
var nagarjuna_btn = document.querySelector("#naga")
var raja_btn = document.querySelector("#raja")
var naveen_btn = document.querySelector("#naveen")
var h1 = document.querySelector("#name")
sameer_btn.addEventListener("click",names)
nagarjuna_btn.addEventListener("click",names)
raja_btn.addEventListener("click",names)
naveen_btn.addEventListener("click",names)

// Event is a object that have information about that particular element(in this example is have button element)

function names(event)
{
    h1.innerHTML = event.target.innerHTML
}
