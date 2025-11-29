// Select all keys
let keys = document.querySelectorAll(".key");

// CLICK event for each key
keys.forEach(key => {
  key.addEventListener("click", function () {
    let sound = key.getAttribute("data-sound");
    let audio = new Audio(sound);
    audio.play();
  });
});

// KEYBOARD PRESS event
document.addEventListener("keydown", function (e) {
  keys.forEach(key => {
    if (key.getAttribute("data-key") === e.code) {
      let sound = key.getAttribute("data-sound");
      let audio = new Audio(sound);
      audio.play();
    }
  });
});
