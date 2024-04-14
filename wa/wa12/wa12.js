
const newQuoteButton = document.querySelector("#js-new-quote");
const inspoQ = "https://type.fit/api/quotes";
const pic = "https://picsum.photos/200/300";

async function getQuote() {
    const response = await fetch(inspoQ);
    const code = await response.ok;
    const num = Math.floor(Math.random()*16)

    if(response.ok) {
        const responseText = await response.json();
        console.log(responseText);
        displayQuote(responseText[num]["text"]);
    } else {
        const errorMessage = await response.statusText;
        console.log(errorMessage);
        alert(errorMessage);
    }
}

async function getPic() {
    const response = await fetch(pic);
    const code = await response.ok;

    if(response.ok) {
        console.log(response);
        const responseText = await response.blob();
        console.log(responseText);
        displayPic(responseText);
    } else {
        const errorMessage = await response.statusText;
        console.log(errorMessage);
        alert(errorMessage);
    }
}

function displayQuote(questionText) {
    const quoteTextField = document.querySelector("#js-quote-text");
    quoteTextField.textContent = questionText;
}

function displayPic(imageData) {
    const imageField = document.querySelector("#js-image");
    const objectURL = URL.createObjectURL(imageData)
    imageField.src = objectURL;
}

newQuoteButton.addEventListener("click", () => {getQuote(); getPic();});
getQuote();
getPic();