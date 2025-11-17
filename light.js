let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");

btn1.addEventListener("click", function () {
    red.style.backgroundColor = "red";
    yellow.style.backgroundColor = "#333";
    green.style.backgroundColor = "#333";
});

btn2.addEventListener("click", function () {
    red.style.backgroundColor = "#333";
    yellow.style.backgroundColor = "yellow";
    green.style.backgroundColor = "#333";
});

btn3.addEventListener("click", function () {
    red.style.backgroundColor = "#333";
    yellow.style.backgroundColor = "#333";
    green.style.backgroundColor = "green";
});
