console.log("Welcome to Spotify - Let's Bang Bang...!");

// intialize the variables\
let songIndex = 0;
//let audioElement = new Audio('song/Die-with-a-smile.mp3');
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Die-with-a-smile", filePath: "song/1.mp3", coverPath: "assets/img/1.jpg" },
    { songName: "Marshmello & Anne-Marie - FRIENDS", filePath: "song/2.mp3", coverPath: "assets/img/2.jpg" },
    { songName: "Na-ja", filePath: "song/3.mp3", coverPath: "assets/img/3.jpg" },
    { songName: "Shape-of-you", filePath: "song/4.mp3", coverPath: "assets/img/3.jpg" },
    { songName: "Despacito ft. Daddy Yankee", filePath: "song/5.mp3", coverPath: "assets/img/3.jpg" },
    { songName: "Sad gaana", filePath: "song/6.mp3", coverPath: "assets/img/3.jpg" },
    { songName: "Love dose", filePath: "song/7.mp3", coverPath: "assets/img/3.jpg" }
]

songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

});

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
})

//Listen to events
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

