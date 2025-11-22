var btn = document.querySelector("button");
var main = document.querySelector("main")



btn.addEventListener("click", function(){
   var div = document.createElement('div')
   var x =Math.floor(Math.random()*100)
   var y =Math.floor(Math.random()*100)
   var r =Math.floor(Math.random()*360)
   var c1 = Math.floor(Math.random()*256)
   var c2 = Math.floor(Math.random()*256)
   var c3 = Math.floor(Math.random()*256)

   div.style.height = "6rem"
   div.style.width = "6rem"
   div.style.backgroundColor = `rgb(${c1},${c2},${c3})`
   div.style.position = 'absolute'

   div.style.top = x+'%'
   div.style.left = y+'%'
   div.style.rotate = r+'deg'
   

   main.appendChild(div)
})