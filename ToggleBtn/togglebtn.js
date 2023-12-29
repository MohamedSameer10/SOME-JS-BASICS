var out = document.querySelector(".outside-box")
var heading= document.querySelector("h1")


out.addEventListener("click",function(){
var on = out.classList.toggle("move")

    if(on)
    {
        heading.innerText = "Hi welcome to the dark mode"
        document.body.style.backgroundColor = "black"
        heading.style.color = "white"
        out.style.backgroundColor = "green"
    }
    else{
        heading.innerText = "Hi turn on to the dark mode"
        heading.style.color = "black"
        out.style.backgroundColor = "grey"
        document.body.style.backgroundColor = "white"
    }
})



