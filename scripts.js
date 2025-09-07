console.log("Welcome to Spotify - Let's Bang Bang...!");

// intialize the variables\
let songIndex = 0;
//let audioElement = new Audio('song/Die-with-a-smile.mp3');
let audioElement = new Audio(`song/${songIndex+1}.mp3`);
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
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


// const can't be used for function in JS
//Hence we use arrow function

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
}

    // Attach click events to all play buttons
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.addEventListener('click', (e) => {

            makeAllPlays();
            songIndex = parseInt(e.target.id); 
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src = `song/${songIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;

            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
        })
    })

    
    document.getElementById('next').addEventListener('click', () => {
        if (songIndex >= 6) {
            songIndex = 0
        }
        else {
            songIndex += 1;
        }
        audioElement.src = `song/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;

        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
    })
    document.getElementById('previous').addEventListener('click', () => {
        if (songIndex <= 0) {
            songIndex = 0
        }
        else {
            songIndex -= 1;
        }
        audioElement.src = `song/${songIndex-1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
    })