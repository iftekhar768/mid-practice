function myFunction(){
      var hour = parseInt(prompt("Enter the hour (0-23):"), 10);
    var greeting;
    if (hour <18){
        greeting="Good Day";
    }
    else if(hour>20){
        greeting="Good Night";
    }
    else{
        greeting="Good Evening"
    }
    document.getElementById("p1").innerHTML=greeting;
}