const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pics = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const alttext = ["Honeycomb as a bee", "Katsuki on the bed", "Katsuki as a sushi", "Lily as a boba", "Lily as the world's cutest Broncos fan"];

/* Looping through images */
for (let i = 0; i < pics.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/" + pics[i]);
    newImage.setAttribute('alt', alttext[i]);
    thumbBar.appendChild(newImage);

    function setImage() {
        displayedImage.setAttribute('src', "images/" + pics[i]);
        displayedImage.setAttribute('alt', alttext[i]);
    }

    newImage.addEventListener("click", setImage);
}

/* Wiring up the Darken/Lighten button */
function buttonOverlay() {
    let text = btn.getAttribute("class");

    if (text == "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    }
    if (text == "light") {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
}

btn.addEventListener("click", buttonOverlay);