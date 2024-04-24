const body = document.querySelector("body");
var buttonStart = document.querySelector("#buttonStart");
buttonStart.addEventListener("click", startB);
const paragraph = document.querySelector("p");
console.log("YT Logic");
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
console.log("End YT logic");

let x = true;
let start;

function startB() {
    if(x) {
        start = Date.now();
        buttonStart.textContent = "Stop";
        buttonStart.style.background = "red";
        paragraph.textContent = "   ";
    } else {
        let elapsed = Date.now() - start;
        let volume = Math.floor(elapsed / (1000));
        if(volume > 100) {
            volume = 100;
        }

        body.style.background = "white";
        if(volume < 50) {
            paragraph.textContent = "Your volume is set to " + volume + "%. You want more? Wait longer next time!";
        } else if(volume > 50) {
            paragraph.textContent = "Your volume is set to " + volume + "%. Too loud? Too bad. You probably watched too long. Enjoy your seizure!";
        } else {
            paragraph.textContent = "Your volume is set to " + volume + "%. Congratulations! You got it to halfway! Who sets their volume to 50%?";
        }

        buttonStart.style.background = "green";
        buttonStart.textContent = "restart";
    }

    x = !x;
}
console.log("End fn");
var player;
function onYouTubeIframeAPIReady() {
    console.log("API Ready");
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        playerVars: {
          'playsinline': 1
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    console.log("Player ready");
    event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
    console.log("Player state change: " + event.data);
    if (event.data == YT.PlayerState.PLAYING && !done) {
        done = true;
    }
}
//randomation to change expetation like random numbers
//go for annoying not tedious
//white screeeen black text, boring
//movie
//% of time
console.log("End script");