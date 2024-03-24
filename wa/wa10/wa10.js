const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit today. :inserty: was the place to be. Yet somehow, and nobody knows why, :insertx: suddenly :insertz: on Bob. Everyone was shocked, but then they realized that they shouldn't be surprised. :insertx: was just that kind of person!";

const insertX = ["Donald Trump", "Anthony Pinter", "Derek Zoolander", "Josh Hutcherson", "Hosh Jutcherson"];
const insertY = ["Farrand Field", "On stage at the Gershwin Theatre", "The runway at RuPaul's Drag Race", "The runway", "Freddy Fazbear's Pizzeria"];
const insertZ = ["peed", "pooped", "hurled", "dougied", "danced", "sat", "jumped"];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14);
    const temperature =  Math.round((94 - 32) * (5 / 9));

    newStory = newStory.replace("94 fahrenheit", temperature + " celsius");
    newStory = newStory.replace("300 pounds", weight + " stone");
  }

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);
  newStory = newStory.replace(":insertx:", xItem);

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

result();