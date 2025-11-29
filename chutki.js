let main = document.querySelector('main');
let cursor = document.querySelector('#cursor');
let h1 = document.querySelector('h1')
let body =document.body.addEventListener('keydown',function(dets) {
  h1.innerHTML = dets.code
})
// let button = document.querySelector('button');

// body.addEventListener('mousemove', function (dets) {
//     cursor.style.left = dets.clientX + 'px';
//     cursor.style.top = dets.clientY + 'px';
// });


