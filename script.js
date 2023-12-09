// import data from "./data/songs.json" assert {type: 'json'}

// Some Important Id's
let song_name = document.getElementById("song_name");
let input_bar = document.getElementById("input_bar");
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
let nextSong = document.getElementById("next_song");
let prevSong = document.getElementById("previous_song");
// Heart Color Changes to Red When Clicked

heart.addEventListener("click", () => {
  heart.classList.toggle("heart");
});

function underDevelopment() {
  alert("Feature is Under Development");
}
footHomeIcon.addEventListener("click", underDevelopment);
footSearchIcon.addEventListener("click", underDevelopment);
footLibraryIcon.addEventListener("click", underDevelopment);

let songs = [
  {
    songName: "Heeriye",
    artistName: "Arijit Singh",
    songPath: "./assets/songs/one.mp3",
    imagePath: "https://i.ytimg.com/vi/Pn29xVZ0-cY/maxresdefault.jpg",
  },
  {
    songName: "Ashk",
    artistName: "Honey Singh",
    songPath: "./assets/songs/two.mp3",
    imagePath: "https://i.ytimg.com/vi/7b_-fxRJQtU/maxresdefault.jpg",
  },
  {
    songName: "Guli",
    artistName: "Shreya Ghoshal",
    songPath: "./assets/songs/three.mp3",
    imagePath:
      "https://m.media-amazon.com/images/I/51OHR2vPNNL._UXNaN_FMjpg_QL85_.jpg",
  },
  {
    songName: "Cheques",
    artistName: "Shubh",
    songPath: "./assets/songs/four.mp3",
    imagePath: "https://i1.sndcdn.com/artworks-fgQCI3pFN0to-0-t500x500.jpg",
  },
  {
    songName: "Kahani Suno 2.0",
    artistName: "Kaifi Khalil",
    songPath: "./assets/songs/five.mp3",
    imagePath:
      "https://c.saavncdn.com/464/Kahani-Suno-2-0-Urdu-2022-20230629194127-500x500.jpg",
  },
  {
    songName: "Khalasi",
    artistName: "Achint",
    songPath: "./assets/songs/six.mp3",
    imagePath: "https://i.ytimg.com/vi/BbngZwOzdmk/hqdefault.jpg",
  },
  {
    songName: "Maan Meri Jaan",
    artistName: "King",
    songPath: "./assets/songs/seven.mp3",
    imagePath:
      "https://m.media-amazon.com/images/I/516ZRaSCwcL._UXNaN_FMjpg_QL85_.jpg",
  },
  {
    songName: "Tere Hawaale",
    artistName: "Arijit Singh",
    songPath: "./assets/songs/eight.mp3",
    imagePath:
      "https://c.saavncdn.com/119/Tere-Hawaale-From-Laal-Singh-Chaddha-Hindi-2022-20220804093945-500x500.jpg",
  },
  {
    songName: "Mujhe Phir Kya Chaiye",
    artistName: "Arijit Singh",
    songPath: "./assets/songs/nine.mp3",
    imagePath:
      "https://i.scdn.co/image/ab67616d0000b273bf8097b2589277bd3d8f7a2d",
  },
];

// this does not work in firefox
//  let  songs = JSON.parse(JSON.stringify(data))

// fetch("./data/songs.json").then((response) => {
//     return response.json()
// }).then((data) => {
//  songs = JSON.parse(JSON.stringify(data))
// });

// Update Song Name and Artist Name
song_name_card.forEach((element, index) => {
  element.innerHTML = songs[index].songName;
  // Here We Set Artist Name in the Song Card
  artist_name_card[index].innerHTML = songs[index].artistName;
});
// background Image setter
song_card.forEach((element, index) => {
  element.style.background = `url('${songs[index].imagePath}')`;

  element.style.backgroundSize = "100% 15rem";
  element.style.backgroundRepeat = "no-repeat";
  // element.style.backgroundPosition = "center"
});
// To Play the Song
let music = new Audio("./assets/songs/welcome.wav");

let tempSong;
function pauseIcon() {
  play_btn.innerHTML = '<i class="ri-pause-circle-fill"></i>';
}
function playIcon() {
  play_btn.innerHTML = '<i class="ri-play-circle-line"></i>';
}

song_card_play_btn.forEach((element, index,allSong) => {


  function cardPauseIcon() {
    element.innerHTML = '<i class="ri-pause-circle-fill"></i>';
  }
  function cardPlayIcon() {
    element.innerHTML = '<i class="ri-play-circle-line"></i>';
  }
      
  element.addEventListener("click", () => {
   // this value should be update evertime to one for previous song 

    progress_bar.value = 0;
    tempSong = songs[index].songPath;
    if (music.paused || music.currentTime <= 0) {
      // To set all the elements icon to pause
      song_card_play_btn.forEach((element, index) => {
        element.innerHTML = '<i class="ri-play-circle-line"></i>';
      });
      music.src = `${tempSong}`;
      music.play();
      cardPauseIcon();
      pauseIcon();
      song_name.innerHTML = songs[index].songName;
      artist_name.innerHTML = songs[index].artistName;
    } else {
      progress_bar.value = 0;
      song_card_play_btn.forEach((element, index,) => {
        element.innerHTML = '<i class="ri-play-circle-line"></i>';
      });
      music.pause();
      //   music.play()
      playIcon();
      cardPlayIcon();
    }

    play_btn.addEventListener("click", () => {
        if (music.paused || music.currentTime <= 0) {


          music.play();
          pauseIcon();
          cardPauseIcon();
          // cardPauseIcon();
        } else {
          
          song_card_play_btn.forEach((element, index) => {
            element.innerHTML = '<i class="ri-play-circle-line"></i>';
          });
          music.pause();
         
          playIcon();
          // cardPlayIcon();
        }
      });

                     // To Play the Next Song 
                     let currentIndexSong = 1; // To maintain index of song for previous 
       prevSong.addEventListener("click", () => {
        
        console.log(currentIndexSong)
                  if(music.currentTime > 0 || music.paused || music.currentTime <= 0) {
                      
                      music.src = songs[index-currentIndexSong].songPath 
                      music.play()
                      song_name.innerHTML = songs[index-currentIndexSong].songName;
                     artist_name.innerHTML = songs[index-currentIndexSong].artistName;
                     song_card_play_btn.forEach((element, index) => {
                      element.innerHTML = '<i class="ri-play-circle-line"></i>';
                    });
                    allSong[index-currentIndexSong].innerHTML = '<i class="ri-pause-circle-fill"></i>';
                    currentIndexSong++;
                  console.log(currentIndexSong)
                    if(currentIndexSong >= index ) {
                      currentIndexSong = index;
                    }
                    pauseIcon();

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

// Search song Functionality

// function search() {
//     let input = input_bar.value;
//    input =   input.toLowerCase();
//     let songSearch = document.getElementsByClassName("song_name")
//     console.log(songSearch)
//     for(let i = 0; i<input.length;i++ ) {
//          if(!songSearch[i].innerHTML.toLowerCase().includes(input)) {
//              document.getElementsByClassName("song_card")[i].style.visibility = "hidden";
//          }
//          else {
//             document.getElementsByClassName("song_card")[i].style.visibility = "visible";
//          }
//     }
// }

// input_bar.addEventListener('keyup', search );
