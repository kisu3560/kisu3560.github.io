const body = document.querySelector("body");
var buttonStart = document.querySelector("#buttonStart");
buttonStart.addEventListener("click", startB);
const volumeDisplay = document.getElementById("volume");
const phraseDisplay = document.getElementById("phrase");

let x = true;
let loaded = false;
var video;
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
    "Now run, it's Shia LaBeouf!", // Shia LaBeouf Live 
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
]

let images = [
    "", // The Bee Movie but everytime they say Bee it gets faster
    "", // Shia LaBeouf Live 
    "", // Bart hits homer with a chair but it's Despacito
    "", // Bouncing DVD Logo 10 hours
    "", // Doofenshmirtz Evil Incorporated variations
    "", // The Missile Knows Where It Is
    "", // Rockwell Retro Encabulator
    "", // The FitnessGram Pacer Test
    "", // HEYAEYAEYYAYA but subbed in Chinese??
    "", // The Duck Song
    "", // Badgers
    "", // The Kitty Cat Dance
    "", // ASDFMovie 1-14
    "", // The shortest video on youtube
    "", // Peanut Butter Jelly Time 1 hour
    "", // Mario 64 half A-press
    "", // Peep injection video
]

function pickVideo() {
    video = Math.floor(Math.random()*videos.length);
}

function startB() {
    if(x) {
        loadVideo();
        if(playerElement) {
            // Load and start video
            playerElement.style.visibility = "visible"
        }
        if(player) {
            pickVideo();
            player.loadVideoById(videos[video]);
            player.playVideo();
        }
        buttonStart.textContent = "Stop";
        buttonStart.style.background = "red";
        volumeDisplay.textContent = "   ";
        phraseDisplay.textContent = "   ";
    } else {
        if(playerElement) {
            playerElement.style.visibility = "hidden";
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

        buttonStart.style.background = "green";
        buttonStart.textContent = "restart";
        volumeDisplay.textContent = "Your volume is " + volume;
        phraseDisplay.textContent = phrases[video];
    }

    x = !x;
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
    } else if((event.data == YT.PlayerState.PAUSED) ||
              (event.data == YT.PlayerState.ENDED)) {
    }
}

//go for annoying not tedious
//white screeeen black text, boring
