let UserAge = document.getElementById("UserAge");
let UserAgeErr = document.getElementById("UserAgeErr");
let message = document.getElementById("message");

UserAge.addEventListener("input", function () {
    const age = parseInt(UserAge.value);

    if (isNaN(age)) {
        message.textContent = "";
        message.style.color = "";
        return;
    }

    if (age < 40) {
        message.textContent = 'To be a part of the community, you need to at least 40';
        message.style.color = "";
    }
    else if (age >= 40 && age <= 50) {
        message.textContent = 'You are the youngsters of this community';
        message.style.color = "";
    }
    else if (age > 50) {
        message.textContent = 'Top level members of the group';
        message.style.color = "red";
    }
});
