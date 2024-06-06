var increase=document.querySelector(".IncreaseFont");
var Decrease=document.querySelector(".DecreaseFont");
var font=document.querySelector(".font");
function Inncrease(){

    font.classList.add("Increase");


}

function Deccrease(){

    font.classList.add("Decrease");
    
    
    }

    increase.onclick=Inncrease;
    Decrease.onclick=Deccrease;