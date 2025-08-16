let btn = document.getElementById("btn");

let colors =["lightblue","palegoldenrod","lavender"];

let clickCount = 0;

btn.addEventListener("click", function(){
    document.body.style.backgroundColor=colors[clickCount%colors.length];
    clickCount++;
})