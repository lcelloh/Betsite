const button = document.getElementById("btn");
const span = document.querySelectorAll("span")

button.addEventListener("click", function (){buttonEvent()});

function buttonEvent(){
    button.classList.toggle("btn--clicked")
    span.forEach((element) =>{
        element.classList.add("expanded");
    })

    setTimeout(() =>{moveTo();}, 1200)
}

const moveTo = function moveTo(){
    window.location.href='home.html'
}