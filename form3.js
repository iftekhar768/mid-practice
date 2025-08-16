const inputField= document.querySelector("#UserName");
inputField.addEventListener('input',function(){
    inputField.value=inputField.value.toUpperCase();
})