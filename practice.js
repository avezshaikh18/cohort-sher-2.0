const users = [
    {
        fullName: "Elon Musk",
        image: "https://i.pinimg.com/1200x/88/94/52/8894528940b3d7eb88a241e3c34f4e25.jpg",
        profession: "Entrepreneur & CEO",
        description: "CEO of Tesla and SpaceX, known for innovation in electric vehicles, space travel, and AI.",
        tags: ["Business", "Innovation", "Technology"]
    },
    {
        fullName: "Emma Watson",
        image: "https://i.pinimg.com/736x/dd/86/b6/dd86b635382fd8047919b6c32188b096.jpg",
        profession: "Actress & Activist",
        description: "British actress and UN Women Goodwill Ambassador known for her humanitarian work.",
        tags: ["Acting", "Women Empowerment", "UN Ambassador"]
    },
    {
        fullName: "Virat Kohli",
        image: "https://i.pinimg.com/736x/f6/6f/73/f66f735d6ee61626a0aca5c9f31f3452.jpg",
        profession: "Cricketer",
        description: "One of the world's best batsmen and former captain of the Indian cricket team.",
        tags: ["Sports", "Cricket", "Fitness"]
    },
    {
        fullName: "Taylor Swift",
        image: "https://i.pinimg.com/1200x/52/24/2f/52242f7d66ddc55edba1568e91774224.jpg",
        profession: "Singer & Songwriter",
        description: "Global music icon known for her storytelling, vocals, and blockbuster tours.",
        tags: ["Music", "Pop", "Songwriting"]
    }
];

var sum = '';
users.forEach(function(elem){
    sum = sum + `<div class="card">,
            <img id="img" src="${elem.image}">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <h5>${elem.tags}</h5>
            <p>${elem.description}</p>
        </div> `  
    
})
var main = document.querySelector('main')
main.innerHTML = sum