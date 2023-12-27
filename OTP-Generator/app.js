let otp ;

//rander number generator
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//changing value on click by button
function changeValue() {
    otp = rand(100000, 999999);
    document.getElementById("otp").value = otp;
}

let btn = document.getElementById("btn");
btn.addEventListener("click", changeValue );