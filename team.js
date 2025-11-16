var arr = [
    {
        team: "KKR",
        primary: "purple",
        secondery: "gold",
        full:"Kolkata Night Rider",
        captain:"Ajinkya Rahane",
        trophy:"3-🏆"
    },
    {
        team: "CSK",
        primary: "yellow",
        secondery: "#333",
        full:"Chennai Super King",
        captain:"Ruturaj Gaikwad",
        trophy:"5-🏆",
    },
    {
        team: "MI",
        primary: "blue",
        secondery: "#0d0d0dff",
        full:"Mumbai Indians",
        captain:"Hardik Pandya",
        trophy:"5-🏆",
        
    },
    {
        team: "RCB",
        primary: "red",
        secondery: "black",
        full:"Royal Challengers Banglore",
        captain:"Fab Duplesi",
        trophy:"1-🏆"
    },
    {
        team: "RR",
        primary: "pink",
        secondery: "lightblue",
        full:"Rajstan Royalls",
        captain:"Sanju Samsang",
        trophy:"1-🏆"
    },
    {
        team: "SRH",
        primary: "orange",
        secondery: "#222222",
        full:" Sunrisers Hyderabad",
        captain:"Pat Cummnis",
        trophy:"1-🏆"
    },
    {
        team: "DC",
        primary: "red",
        secondery: "lightblue",
        full:"Delhi Capitals",
        captain:"Rishabh Panth",
        trophy:"0-🏆"
    },
    {
        team: "GT",
        primary: "darkblue",
        secondery: "lightpink",
        full:"Gujrat Titans",
        captain:"Shubman Gill",
        trophy:"1-🏆"
    },
    {
        team: "LSG",
        primary: "#1673e5ff",
        secondery: "darkblue",
        full:"Lucknow Super Giants",
        captain:"K.L Rahul",
        trophy:"0-🏆"
    },
      {
        team: "PBKS",
        primary: "red",
        secondery: "lightseablue",
        full:"Punjab Kings",
        captain:"Shreyas Iyer",
        trophy:"0-🏆"
    },
];

var btn = document.querySelector('button');
var h1 = document.querySelector('h1');
var h4 = document.querySelector('h4');
var h3 = document.querySelector('h3');
var h2 = document.querySelector('h2');
var  main =document.querySelector("main")
var sec = document.querySelector("section")

btn.addEventListener("click", function () {
    var winner =arr[Math.floor(Math.random()*arr.length)]

    h1.innerHTML = winner.team
    h3.innerHTML = winner.full
    h2.innerHTML = winner.trophy
    h4.innerHTML = winner.captain

    main.style.backgroundColor = winner.primary
    sec.style.backgroundColor =winner.secondery
    
});
