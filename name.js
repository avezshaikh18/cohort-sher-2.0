var btn = document.querySelector("button");
var main = document.querySelector("main");

var arr = [
  'Hey I am Avez',
  'Student At Sheryians Coding School',
  'I am son of a farmer',
  'I am completing BSc'
];

btn.addEventListener("click", function () {
  var h1 = document.createElement('h1');
  var x =Math.random()*80
  var y =Math.random()*80
  var scl =Math.random()*3
  var rot =Math.random()*360

  var a = Math.floor(Math.random() * arr.length);

  h1.innerHTML = arr[a]; // FIXED
  h1.style.position = 'absolute';
  h1.style.left = x+'%'
  h1.style.top = y+'%'
  h1.style.rotate = rot+'deg'
  h1.style.scale = scl
  main.appendChild(h1);
});

