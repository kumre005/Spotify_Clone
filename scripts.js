console.log("Welcome to Spotify - Let's Bang Bang...!");

// intialize the variables\
let songIndex = 0;
//let audioElement = new Audio('song/Die-with-a-smile.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
    {songName: "song/Die-with-a-smile.mp3", coverPath: "covers/1.jpg"},
    {songName: "song/Die-with-a-smile.mp3", coverPath: "covers/1.jpg"},
    {songName: "song/Die-with-a-smile.mp3", coverPath: "covers/1.jpg"},
    {songName: "song/Die-with-a-smile.mp3", coverPath: "covers/1.jpg"},
    {songName: "song/Die-with-a-smile.mp3", coverPath: "covers/1.jpg"},
    {songName: "song/Die-with-a-smile.mp3", coverPath: "covers/1.jpg"},
    {songName: "song/Die-with-a-smile.mp3", coverPath: "covers/1.jpg"}
]

let audioElement = new Audio('songs/Die-with-a-smile.mp3');
// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');

    }
})

//Listen to events
audioElement.addEventListener('timeupdate', ()=> {
    console.log('timeupdate');
    //update seekbar

})

