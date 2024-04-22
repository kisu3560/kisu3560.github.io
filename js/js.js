const body = document.querySelector("body");
var buttonStart = document.querySelector("#buttonStart");
buttonStart.addEventListener("click", startB);
const paragraph = document.querySelector("p");

let x = true;
let bk;
let start;

function startB() {
    if(x) {
        start = Date.now();
        bk = setInterval(bkColor, 100);
        buttonStart.textContent = "Stop";
        buttonStart.style.background = "red";
        x = !x;
    } else {
        let elapsed = Date.now() - start;
        let volume = Math.floor(elapsed / (60 * 1000));
        if(volume > 100) {
            volume = 100;
        }

        buttonStart.style.visibility = "hidden";
        buttonStart.disabled = true;

        clearTimeout(bk);
        body.style.background = "white";
        if(volume < 50) {
            paragraph.textContent = "Your volume is set to " + volume + "%. You want more? Wait longer next time!";
        } else if(volume > 50) {
            paragraph.textContent = "Your volume is set to " + volume + "%. Too loud? Too bad. You probably watched too long. Enjoy your seizure!";
        } else {
            paragraph.textContent = "Your volume is set to " + volume + "%. Congratulations! You got it to halfway! Who sets their volume to 50%?";
        }
    }
}

function bkColor() {
    body.style.background = "rgba(" + Math.random() * 255 + ", " + Math.random() * 255 + ", " + Math.random() * 255 + ")";
}