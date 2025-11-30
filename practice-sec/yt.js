const reels = [
  {
    username: "sagar_tech",
    likeCount: 1200,
    isLiked: false,
    commentCount: 145,
    caption: "Enjoying the weekend vibes! ✨",
    video: "reel11.mp4",
    userProfile: "https://i.pinimg.com/1200x/80/07/71/8007715a61195e549ee41ec16b397e77.jpg",
    shareCount: 30,
    isFollowed: true
  }, 
  {
    username: "travel_with_anu",
    likeCount: 980,
    isLiked: true,
    commentCount: 67,
    caption: "Sunset at Goa hits different 🌅",
    video: "reel2.mp4",
    userProfile: "https://i.pinimg.com/1200x/ea/d4/b6/ead4b6f0428e2379a5bd55d28a87c9c4.jpg",
    shareCount: 22,
    isFollowed: false
  },
  {
    username: "coder_ayush",
    likeCount: 2200,
    isLiked: false,
    commentCount: 310,
    caption: "JavaScript + Coffee = Perfect combo ☕💻",
    video: "reel3.mp4",
    userProfile: "https://i.pinimg.com/1200x/25/cd/4b/25cd4b2c78a0db7ae5074dde0b425cca.jpg",
    shareCount: 75,
    isFollowed: true
  },
  {
    username: "fitness_maniac",
    likeCount: 3400,
    isLiked: true,
    commentCount: 410,
    caption: "No pain, no gain 💪🔥",
    video: "reel4.mp4",
    userProfile: "https://i.pinimg.com/1200x/a4/7c/91/a47c911a6eb51a8ef0d86d1578300cb6.jpg",
    shareCount: 102,
    isFollowed: false
  },
  {
    username: "foodie_priya",
    likeCount: 760,
    isLiked: false,
    commentCount: 50,
    caption: "Trying out new street food! 😋",
    video: "reel5.mp4",
    userProfile: "https://i.pinimg.com/736x/b1/04/91/b10491f11d8d6b6ba89356683894af6b.jpg",
    shareCount: 12,
    isFollowed: true
  },
  {
    username: "gaming_legend",
    likeCount: 5000,
    isLiked: true,
    commentCount: 870,
    caption: "Clutch moment in BGMI 🏆🔥",
    video: "reel6.mp4",
    userProfile: "https://i.pinimg.com/1200x/72/4f/93/724f937d391086d1634f5609d02a49a8.jpg",
    shareCount: 150,
    isFollowed: false
  },
  {
    username: "style_diva",
    likeCount: 1300,
    isLiked: false,
    commentCount: 120,
    caption: "OOTD 💖✨",
    video: "reel7.mp4",
    userProfile: "https://i.pinimg.com/736x/8b/81/b3/8b81b3758f61f0cf2ca7ce8a5c8551ed.jpg",
    shareCount: 40,
    isFollowed: true
  },
  {
    username: "nature_baba",
    likeCount: 890,
    isLiked: false,
    commentCount: 80,
    caption: "Peace in every leaf 🍃",
    video: "reel8.mp4",
    userProfile: "https://i.pinimg.com/736x/89/d9/6b/89d96b00cb46a49d8c18b83b27b92db7.jpg",
    shareCount: 18,
    isFollowed: false
  },
  {
    username: "daily_motivation",
    likeCount: 2400,
    isLiked: true,
    commentCount: 190,
    caption: "Stay focused & keep grinding 🔥",
    video: "reel9.mp4",
    userProfile: "https://i.pinimg.com/736x/75/87/5c/75875c5d35c5c3f895b3b70e808aa723.jpg",
    
    shareCount: 60,
    isFollowed: true
  },
  {
    username: "pet_world",
    likeCount: 3100,
    isLiked: false,
    commentCount: 420,
    caption: "Cutest doggo ever 🐶❤️",
    video: "reel0.mp4",
    userProfile: "https://i.pinimg.com/736x/bd/eb/b4/bdebb4ac8f1c05c8b845f42faf4b5cd7.jpg",
    shareCount: 95,
    isFollowed: false
  }
];

var sum = "";
reels.forEach(function (elem) {
  sum += `
    <div class="reel">
        <video autoplay loop muted src="${elem.video}"></video>

        <div class="bottom">
            <div class="user">
                <img src="${elem.userProfile}" alt="">
                <h4>${elem.username}</h4>
                <button>${elem.isFollowed ? "Following" : "Follow"}</button>
            </div>

            <div>
               <h3>${elem.caption}</h3>
            </div>
        </div>

        <div class="right">
            <div class="like">
                <h4 class="like-icon icon"><i class="ri-thumb-up-line"></i></h4>
                <h6>${elem.likeCount}</h6>
            </div>

            <div class="comment">
                <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                <h6>${elem.commentCount}</h6>
            </div>

            <div class="share">
                <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                <h6>${elem.shareCount}</h6>
            </div>

            <div class="remix">
                <h4 class="remix-icon icon"><i class="ri-remix-line"></i></h4>
            </div>
        </div>

    </div>
    `;
});

document.querySelector(".allreels").innerHTML = sum;

// Adding event listeners for like, comment, share, and remix icons
document.querySelectorAll(".like-icon").forEach((likeBtn, index) => {
  likeBtn.addEventListener("click", () => {
    reels[index].isLiked = !reels[index].isLiked;
    reels[index].likeCount += reels[index].isLiked ? 1 : -1;
    likeBtn.nextElementSibling.textContent = reels[index].likeCount;
    likeBtn.innerHTML = reels[index].isLiked ? '<i class="ri-thumb-up-fill"></i>' : '<i class="ri-thumb-up-line"></i>';
  });
});

document.querySelectorAll(".comment-icon").forEach((commentBtn, index) => {
  commentBtn.addEventListener("click", () => {
    alert(`Comments for ${reels[index].username}'s reel: ${reels[index].commentCount}`);
  });
});   
document.querySelectorAll(".share-icon").forEach((shareBtn, index) => {
  shareBtn.addEventListener("click", () => {
    reels[index].shareCount += 1;
    shareBtn.nextElementSibling.textContent = reels[index].shareCount;
    alert(`You shared ${reels[index].username}'s reel!`);
  });
});

document.querySelectorAll(".remix-icon").forEach((remixBtn, index) => {
  remixBtn.addEventListener("click", () => {
    alert(`You remixed ${reels[index].username}'s reel!`);
  });
});   
