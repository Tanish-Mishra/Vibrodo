// Some Important Id's
let song_name = document.getElementById("song_name");
let artist_name = document.getElementById("artist_name");
let play_btn = document.getElementById("play_btn");
let heart = document.getElementById("heart");
let songs_container = document.querySelectorAll(".songs_container");
let song_card_play_btn = document.querySelectorAll(".play_icon");
let song_name_card = document.querySelectorAll(".song_name");
let artist_name_card = document.querySelectorAll(".song_artist");
let song_card = document.querySelectorAll(".song_card");
let progress_bar = document.getElementById("progress_bar");
let footHomeIcon = document.querySelector(".foot_home_icon");
let footSearchIcon = document.querySelector(".foot_search_icon");
let footLibraryIcon = document.querySelector(".foot_yourlib");
let nextSong = document.getElementById("next_song")
let prevSong = document.getElementById("previous_song")
// Heart Color Changes to Red When Clicked

heart.addEventListener("click", () => {
  heart.classList.toggle("heart");
});

function underDevelopment() {
  alert("This Feature is Under Development");
}
footHomeIcon.addEventListener("click", underDevelopment);
footSearchIcon.addEventListener("click", underDevelopment);
footLibraryIcon.addEventListener("click", underDevelopment);

let songs = [
  {
    songName: "Lag Ja Gale",
    artistName: "Lata Mageshkar",
    songPath: "./assets/songs/one.mp3",
    imagePath:
      "https://images.unsplash.com/photo-1683009427041-d810728a7cb6?q=80&w=3086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    songName: "two",
    artistName: "One Direction",
    songPath: "./assets/songs/one.mp3",
    imagePath:
      "https://images.unsplash.com/photo-1701696602513-1bd43bee7c6d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    songName: "three",
    artistName: "One Directdion",
    songPath: "./assets/songs/one.mp3",
    imagePath:
      "https://images.unsplash.com/photo-1701792719690-277632fe24c4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
  },
  {
    songName: "four",
    artistName: "One Direcdtion",
    songPath: "./assets/songs/one.mp3",
    imagePath:
      "https://plus.unsplash.com/premium_photo-1700727327215-d29fdfcbb3f7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
  },
];
// To set all the values

//    song_name_card.forEach((element, index) => {
//     element.innerHTML = songs[index].songName
//     // Here We Set Artist Name in the Song Card
//     artist_name_card[index].innerHTML = songs[index].artistName
// })
// To Play the Song
let music = new Audio("https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav");
// song_card_play_btn[0].addEventListener('click', () => {
//      music.play()
//      song_name.innerHTML = songs[0].songName
//     artist_name.innerHTML = songs[0].artistName
// })



function pauseIcon() {
  play_btn.innerHTML = '<i class="ri-pause-circle-fill"></i>';
}
function playIcon() {
  play_btn.innerHTML = '<i class="ri-play-circle-line"></i>';
}

song_card_play_btn.forEach((element, index,arr) => {
  function cardPauseIcon() {
    element.innerHTML = '<i class="ri-pause-circle-fill"></i>';
  }
  function cardPlayIcon() {
    element.innerHTML = '<i class="ri-play-circle-line"></i>';
  }

  element.addEventListener("click", () => {
     
    if (music.paused || music.currentTime <= 0) {
        music.src = "https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav";
      music.play();
      cardPauseIcon();
      pauseIcon();
      song_name.innerHTML = songs[index].songName;
      artist_name.innerHTML = songs[index].artistName;
    } else {
      music.pause();
      playIcon();
      cardPlayIcon();
    }

    play_btn.addEventListener("click", () => {
        if (music.paused || music.currentTime <= 0) {
          music.play();
          pauseIcon();
          cardPauseIcon();
        } else {
           music.pause();
           playIcon();
           cardPlayIcon();
        }
      });
    
  });

  
});

 

// To Update the Progress Bar current time is in percentage
music.addEventListener("timeupdate", () => {
  let currentValue = parseInt((music.currentTime / music.duration) * 100);
  progress_bar.value = currentValue;
});

// To move the song as we move the progress bar  now the value of current time is in seconds

progress_bar.addEventListener("change", () => {
  music.currentTime = (progress_bar.value * music.duration) / 100;
});

//   song_card[0].style.background = "url()"

//    To Update the Song Name and Artist
