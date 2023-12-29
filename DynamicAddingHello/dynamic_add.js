var btn = document.querySelector("button")

btn.addEventListener("click",addhello)

function addhello()
{
    var body = document.querySelector("body")

    var hello = document.createElement("h2")

    body.appendChild(hello)

    hello.innerHTML = `HELLO`
}