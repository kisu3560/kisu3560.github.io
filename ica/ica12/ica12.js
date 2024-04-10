const newQuoteButton = document.querySelector("#js-new-quote");
const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

async function getQuote() {
    const response = await fetch(endpoint);
    const code = await response.ok;

    if(response.ok) {
        const responseText = await response.json();
        console.log(responseText);
        displayQuote(responseText["question"], responseText["answer"]);
    } else {
        const errorMessage = await response.statusText;
        console.log(errorMessage);
        alert(errorMessage);
    }
}

function displayQuote(questionText, answerText) {
    const quoteTextField = document.querySelector("#js-quote-text");
    const answerTextField = document.querySelector("#js-answer-text");
    quoteTextField.textContent = questionText;
    answerTextField.textContent = answerText;
}

newQuoteButton.addEventListener("click", getQuote);
getQuote();