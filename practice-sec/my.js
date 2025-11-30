let allbtn = document.querySelectorAll("button");

allbtn.forEach(function (elem) {
    (elem.addEventListener("click", function () {
        if (elem.innerText === "Follow") {
            elem.innerHTML = "Unfollow"
        } else {
            elem.innerHTML = "Follow"
        }
    }))
});