
// var h1 = document.querySelector('h1');
// var btn = document.querySelector('button');

// btn.addEventListener('click', function (){
//     h1.innerHTML = "Not  Your Type";
//     h1.style.color ="pink";
//     h1.style.backgroundColor = "lightblue"
//     h1.style.fontSize = "50px"
// })

var h2 = document.querySelector('h2');
var btninc = document.querySelector('.inc')
var decinc = document.querySelector('.dec')
var a = 0;

btninc.addEventListener("click", function(){
    a++;
    h2.innerHTML = a;
})

decinc.addEventListener("click", function(){
    a--;
    h2.innerHTML = a;
})