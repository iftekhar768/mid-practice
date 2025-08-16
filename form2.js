let FirstName = document.getElementById("FirstName");
let firstnameErr = document.getElementById("firstnameErr");

let LastName = document.getElementById("LastName");
let lastnameErr = document.getElementById("lastnameErr");


let isValidated = false;

function validationForm(){
    if(FirstName.value.trim().length>2){
        isValidated = true;
    }
    else{
        isValidated = false;
        firstnameErr.innerHTML = "Please enter your first name";
        firstnameErr.style.color = "red";
    }
    if(LastName.value.trim().length>2){
        isValidated = isValidated && true;
    }
    else{
        isValidated = false;
        lastnameErr.innerHTML = "Please enter your last name";
        lastnameErr.style.color = "red";
    }
    if(isValidated){
        alert("First Name: " + FirstName.value + " Last Name: " + LastName.value);
        return true;
    }
    else{
        return false;
    }
    
}
