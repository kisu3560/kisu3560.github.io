const body = document.querySelector("body");
var buttonStart = document.querySelector("#buttonStart");
buttonStart.addEventListener('mouseover', () => {
    buttonStart.style.background = "chartreuse";
});
buttonStart.addEventListener('mouseout', () => {
    buttonStart.style.background = "green";
});
buttonStart.addEventListener("click", startB);
const volumeDisplay = document.getElementById("volume");
const phraseDisplay = document.getElementById("phrase");
const imageDisplay = document.getElementById("image");

let x = true;
let loaded = false;
var video = 0;
var player;
var playerElement;

let videos = [
    "W31e9meX9S4", // The Bee Movie but everytime they say Bee it gets faster
    "o0u4M6vppCI", // Shia LaBeouf Live 
    "wnQC6aoHnoQ", // Bart hits homer with a chair but it's Despacito
    "5mGuCdlCcNM", // Bouncing DVD Logo 10 hours
    "mHtq-mlzY7s", // Doofenshmirtz Evil Incorporated variations
    "bZe5J8SVCYQ", // The Missile Knows Where It Is
    "RXJKdh1KZ0w", // Rockwell Retro Encabulator
    "Y82jDHRrswc", // The FitnessGram Pacer Test
    "wFCIZS2iQ6w", // HEYAEYAEYYAYA but subbed in Chinese??
    "MtN1YnoL46Q", // The Duck Song
    "EIyixC9NsLI", // Badgers
    "SaA_cs4WZHM", // The Kitty Cat Dance
    "vXU8JwnO0Xk", // ASDFMovie 1-14
    "tPEE9ZwTmy0", // The shortest video on youtube
    "on0VlCWGSKY", // Peanut Butter Jelly Time 1 hour
    "kpk2tdsPh0A", // Mario 64 half A-press
    "4O9uOMy8BfY", // Peep injection video
];

let phrases = [
    "The Bee Movie, what a classic! Could you understand what they were saying at the end?", // The Bee Movie but everytime they say Bee it gets faster
    "Wait, he still isn't dead! Shia surprise!", // Shia LaBeouf Live 
    "Yeah, I don't know Spanish either.", // Bart hits homer with a chair but it's Despacito
    "Did it hit the corner??", // Bouncing DVD Logo 10 hours
    "'Cause he's Per-ry! Per-ry the Platypus!", // Doofenshmirtz Evil Incorporated variations
    "The volume knows where it is because it also knows where it isn't.", // The Missile Knows Where It Is
    "Using the finest pre-combinated technology, we can determine the ideal volume for perfect georesonant synchronicitation.", // Rockwell Retro Encabulator
    "How was your workout?", // The FitnessGram Pacer Test
    "Do you even know who He is?", // HEYAEYAEYYAYA but subbed in Chinese??
    "No, I don't have any grapes - but I do have glue.", // The Duck Song
    "Yes, that's a picture of a real badger.", // Badgers
    "Meow", // The Kitty Cat Dance
    "JKL;", // ASDFMovie 1-14
    "Cat", // The shortest video on youtube
    "For those allergic to Peanut Butter, I'm sorry.", // Peanut Butter Jelly Time 1 hour
    "A percent is a percent. You can't say it's only a half.", // Mario 64 half A-press
    "You just met my cat Peep! Ain't he a cutie?", // Peep injection video
];

let images = [
    "MaleBee-bow&hat.png", // The Bee Movie but everytime they say Bee it gets faster
    "shia.jpg", // Shia LaBeouf Live 
    "bart_and_homer.webp", // Bart hits homer with a chair but it's Despacito
    "dvd_logo.png", // Bouncing DVD Logo 10 hours
    "perry.webp", // Doofenshmirtz Evil Incorporated variations
    "themissile.webp", // The Missile Knows Where It Is
    "rockwell.webp", // Rockwell Retro Encabulator
    "wiifit.webp", // The FitnessGram Pacer Test
    "him.webp", // HEYAEYAEYYAYA but subbed in Chinese??
    "glue.webp", // The Duck Song
    "mushroom_mushroom.jpg", // Badgers
    "pusheen_hi.jpg", // The Kitty Cat Dance
    "asdfmovie_guy.png", // ASDFMovie 1-14
    "cat.jpg", // The shortest video on youtube
    "skippy.jpg", // Peanut Butter Jelly Time 1 hour
    "tj_henry_yoshi.png", // Mario 64 half A-press
    "67673.jpeg", // Peep injection video
];


function pickVideo() {
    video = Math.floor(Math.random()*videos.length);
}

function stopB(force_volume) {
    if(playerElement) {
        playerElement.style.display = "none";
    }
    if(player) {
        player.stopVideo();
    }

    let watchRatio = player.getCurrentTime() / player.getDuration();
    console.log("Watched " + watchRatio + " = " + player.getCurrentTime() + "/" + player.getDuration());
    let volume = Math.floor(watchRatio * 100);
    if(volume > 100) {
        volume = 100;
    }
    if(force_volume) {
        volume = force_volume;
    }

    buttonStart.style.background = "green";
    buttonStart.textContent = "restart";
    volumeDisplay.textContent = "Your volume is " + volume;
    phraseDisplay.textContent = phrases[video];
    imageDisplay.src = "img/" + images[video];

    volumeDisplay.style.display = "block";
    volumeDisplay.style.visibility = "visible";
    phraseDisplay.style.display = "block";
    phraseDisplay.style.visibility = "visible";
    imageDisplay.style.display = "block";
    imageDisplay.style.visibility = "visible";

    buttonStart.addEventListener('mouseover', () => {
        buttonStart.style.background = "chartreuse";
    });
    buttonStart.addEventListener('mouseout', () => {
        buttonStart.style.background = "green";
    });

    x = !x;
}

function startB() {
    if(x) {
        loadVideo();
        phraseDisplay.textContent = "Click stop to set the volume";
        if(playerElement) {
            // Load and start video
            playerElement.style.display = "block";
        }
        if(player) {
            pickVideo();
            player.loadVideoById(videos[video]);
            player.playVideo();
        }
        buttonStart.textContent = "Stop";
        buttonStart.style.background = "red";
        volumeDisplay.style.display = "none";
        volumeDisplay.style.visibility = "none";
        phraseDisplay.style.visibility = "visible";
        imageDisplay.style.display = "none";
        imageDisplay.style.visibility = "none";

        buttonStart.addEventListener('mouseover', () => {
            buttonStart.style.background = "pink";
        });
        buttonStart.addEventListener('mouseout', () => {
            buttonStart.style.background = "red";
        });
        x = !x
    } else {
        stopB();
    }
}

function loadVideo() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

window.onYouTubeIframeAPIReady = function() {
    pickVideo();
    console.log("Picked video " + video);
    console.log("API Ready");
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: videos[video],
        playerVars: {
          'playsinline': 1,
          'controls': 0,
          'disablekb': 1
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
}

function onPlayerReady(event) {
    console.log("Player ready");
    playerElement = document.getElementById("player");
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    console.log("Player state change: " + event.data);
    if (event.data == YT.PlayerState.PLAYING) {
        //
    } else if((event.data == YT.PlayerState.PAUSED)) {

    } else if(event.data == YT.PlayerState.ENDED) {
        stopB(100);
    }
}

//go for annoying not tedious
//white screeeen black text, boring
