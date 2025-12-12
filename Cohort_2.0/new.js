const para = document.querySelector('p');

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const text = para.innerText;

let iteration = 0;

para.addEventListener("mouseenter", () => {

    setInterval(() => {

        const str = text.split("").map((char, index) => {
            if (index < iteration) {
                return text[index];
            }
            return characters.split("")[Math.floor(Math.random() * characters.length)];
        }).join("");

        para.innerText = str;
        iteration += 0.25;

    }, 50);

});
