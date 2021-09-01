'use strict';

// let the console know about Angela's core belief system
console.log('Flat earth is real - Angela Dzodzomoney')
console.log('I hate WHITE - David Hecker')

// __________________________________ Global Variables __________________________________ 

// arrays of songs by question number

const questionNumber1 = [[],[],[],[]];
const questionNumber2 = [[],[],[],[]];
const questionNumber3 = [[],[],[],[],[]];
const questionNumber4 = [[],[],[]];
const questionNumber5 = [[],[],[],[]];
const questionNumber6 = [[],[],[],[],[],[],[],[],[],[]];

// final playlist recommendation
Song.recommendedPlayList = [];

// question element in html
const question1Elem = document.getElementById('question1');
const question2Elem = document.getElementById('question2');
const question3Elem = document.getElementById('question3');
const question4Elem = document.getElementById('question4');
const question5Elem = document.getElementById('question5');
const question6Elem = document.getElementById("question6");
const ulQuestionElem = document.getElementById('question_ul')
const buttonElem = document.getElementById('submit')
const newListsElem = document.getElementById('savedLists')

let currentSong = null;



// __________________________________ Constructor Functions  __________________________________ 

// create a song object, accept name, artist, album, and optional img artwork
function Song(name, artist, album, id) {
  this.name = name;
  this.artist = artist;
  this.album = album;
}

//render playlist
//hide the buttons
//enter name


// __________________________________ Prototype Methods __________________________________ 

// __________________________________ Global Functions __________________________________ 

// random item from array
function randomArrayItem(array) {
  let index = Math.floor((Math.random() * array.length));
  return array[index];
}

function q1HandleClick() {

  switch(event.target.id){
    case 'q1a1':
      currentSong = randomArrayItem(questionNumber1[0]);
      console.log(currentSong)
      break;
    case 'q1a2':
      currentSong = randomArrayItem(questionNumber1[1]);
      console.log(currentSong)
      break;
    case 'q1a3':
      currentSong = randomArrayItem(questionNumber1[2]);
      console.log(currentSong)
      break;
    case 'q1a4':
      currentSong = randomArrayItem(questionNumber1[3]);
      console.log(currentSong)
      break;
  }
  renderButtonPageOne();
}

function q2HandleClick() {
  
  switch(event.target.id){
    case 'q2a1':
      currentSong = randomArrayItem(questionNumber2[0]);
      console.log(currentSong)
      break;
    case 'q2a2':
      currentSong = randomArrayItem(questionNumber2[1])
      console.log(currentSong)
      break;
    case 'q2a3':
      currentSong = randomArrayItem(questionNumber2[2])
      console.log(currentSong)
      break;
    case 'q2a4':
      currentSong = randomArrayItem(questionNumber2[3])
      console.log(currentSong)
      break;
  }
  renderButtonPageTwo();
}
function q3HandleClick() {
  
  switch(event.target.id){
    case 'q3a1':
      currentSong = randomArrayItem(questionNumber3[0])
      console.log(currentSong)
      break;
    case 'q3a2':
      currentSong = randomArrayItem(questionNumber3[1])
      console.log(currentSong)
      break;
    case 'q3a3':
      currentSong = randomArrayItem(questionNumber3[2])
      console.log(currentSong)
      break;
    case 'q3a4':
      currentSong = randomArrayItem(questionNumber3[3])
      console.log(currentSong)
      break;
    case 'q3a5':
      currentSong = randomArrayItem(questionNumber3[3])
      console.log(currentSong)
      break;
  }
  renderButtonPageThree();
}

// question 4 handler

function q4HandleClick() {
  console.log(event.target.id)
  switch (event.target.id) {
    case 'q4a1':
      currentSong = randomArrayItem(questionNumber4[0]);
      console.log("added " + event.target.id);
      break;
    case 'q4a2':
      currentSong = randomArrayItem(questionNumber4[1]);
      console.log("added " + event.target.id);
      break;
    case 'q4a3':
      currentSong = randomArrayItem(questionNumber4[2]);
      console.log("added " + event.target.id);
      break;
  }
  console.log(currentSong)
  renderButtonPageFour();
}


// question 5 handler
function q5HandleClick() {
  console.log(event.target.id)
  switch(event.target.id) {
    case 'q5a1':
      currentSong = randomArrayItem(questionNumber5[0])
      console.log('added '+ event.target.id);
      break;
    case 'q5a2':
      currentSong = randomArrayItem(questionNumber5[1]);
      console.log("added " + event.target.id);
      break;
    case 'q5a3':
      currentSong = randomArrayItem(questionNumber5[2]);
      console.log("added " + event.target.id);
      break;
    case 'q5a4':
      currentSong = randomArrayItem(questionNumber5[3]);
      console.log("added " + event.target.id);
      break;
    }
    console.log("current song is" + currentSong)
    renderButtonPageFive();
}

// question 6 handler
function q6HandleClick() {
  // debugger;
  switch(event.target.id) {
    case 'q6a1':
      currentSong = randomArrayItem(questionNumber6[0])
      console.log("case 1 current song is" + currentSong)
      break;
    case 'q6a2':
      currentSong = randomArrayItem(questionNumber6[1]);
      console.log("case 2 current song is" + currentSong);
      break;
    case 'q6a3':
      currentSong = randomArrayItem(questionNumber6[2]);
      console.log("case 3 current song is" + currentSong);
      break;
    case 'q6a4':
      currentSong = randomArrayItem(questionNumber6[3]);
      console.log("case 4 current song is" + currentSong);
      break;
    case 'q6a5':
      currentSong = randomArrayItem(questionNumber6[4]);
      console.log("case 5 current song is" + currentSong);
      break;
    case 'q6a6':
      currentSong = randomArrayItem(questionNumber6[5]);
      console.log("case 6 current song is" + currentSong);
      break;
    case 'q6a7':
      currentSong = randomArrayItem(questionNumber6[6]);
      console.log("case 7 current song is" + currentSong);
      break;
    case 'q6a8':
      currentSong = randomArrayItem(questionNumber6[7]);
      console.log("case 8 current song is" + currentSong);
      break;
    case 'q6a9':
      currentSong = randomArrayItem(questionNumber6[8]);
      console.log("case 9 current song is" + currentSong);
      break;
    case 'q6a10':
      currentSong = randomArrayItem(questionNumber6[9]);
      console.log("case 10 current song is" + currentSong);
      break;      
  }
  renderButtonPageSix();
}
function handleSubmit(){
  // console.log('it works!')
  Song.recommendedPlayList.push(currentSong)
  addToLocalStorage();
  // console.log(recommendedPlayList)
}

function addToLocalStorage() {
  const jsonAllItemsArray = JSON.stringify(Song.recommendedPlayList)
  localStorage.setItem('playlist', jsonAllItemsArray)
}

function getFromLocalStorage() {
  const fromStorage = localStorage.getItem('playlist')
    console.log(fromStorage)
  if (fromStorage !== null) {
    const normalizedArray = JSON.parse(fromStorage)
    console.log( "normalized array is ")
    console.log(normalizedArray)
    for (let song of normalizedArray) {
      console.log(song)
      let tempSong = new Song(song.name, song.artist, song.album)
      Song.recommendedPlayList.push(tempSong)
      console.log('rec playlist is')
      console.log(Song.recommendedPlayList)
    }
  }
}


// make an html elem, can insert text and/or attribute
function _makeElem(tag, parent, text=null, attribute=null, attributeValue=null) {
  let Elem = document.createElement(tag);
  parent.appendChild(Elem);
  if (text) {
    Elem.textContent = text;
  }
  if (attribute) {
    Elem.setAttribute(attribute, attributeValue);
  }
  return Elem;
}



function renderButtonPageOne() {
  let buttonDiv = document.getElementById('button_div');
  buttonDiv.innerHTML = '';
  let aTagElem = _makeElem("a", buttonDiv, null, "href", "../html/question2.html");
  let newButton = _makeElem('button', aTagElem, 'Submit', 'id', 'submit')
  newButton.addEventListener('click', handleSubmit);
}

function renderButtonPageTwo() {
  let buttonDiv = document.getElementById("button_div");
  buttonDiv.innerHTML = "";
  let aTagElem = _makeElem("a", buttonDiv, null, "href", "../html/question3.html");
  let newButton = _makeElem("button", aTagElem, "Submit", "id", "submit");
  newButton.addEventListener("click", handleSubmit);
}

function renderButtonPageThree() {
  let buttonDiv = document.getElementById("button_div");
  buttonDiv.innerHTML = "";
  let aTagElem = _makeElem("a", buttonDiv, null, "href", "../html/question4.html");
  let newButton = _makeElem("button", aTagElem, "Submit", "id", "submit");
  newButton.addEventListener("click", handleSubmit);
}

function renderButtonPageFour() {
  let buttonDiv = document.getElementById("button_div");
  buttonDiv.innerHTML = "";
  let aTagElem = _makeElem("a", buttonDiv, null, "href", "../html/question5.html");
  let newButton = _makeElem("button", aTagElem, "Submit", "id", "submit");
  newButton.addEventListener("click", handleSubmit);
}

function renderButtonPageFive() {
  let buttonDiv = document.getElementById("button_div");
  buttonDiv.innerHTML = "";
  let aTagElem = _makeElem("a", buttonDiv, null, "href", "../html/question6.html");
  let newButton = _makeElem("button", aTagElem, "Submit", "id", "submit");
  newButton.addEventListener("click", handleSubmit);
}

function renderButtonPageSix() {
  let buttonDiv = document.getElementById("button_div");
  buttonDiv.innerHTML = "";
  let aTagElem = _makeElem("a", buttonDiv, null, "href", "../html/profile.html");
  let newButton = _makeElem("button", aTagElem, "Submit", "id", "submit");
  newButton.addEventListener("click", handleSubmit);
}

// __________________________________ Event Listeners  __________________________________ 

if(question1Elem) {
  question1Elem.addEventListener('click', q1HandleClick);
}

if(question2Elem) {
  question2Elem.addEventListener('click', q2HandleClick);
}

if (question3Elem) {
  question3Elem.addEventListener('click', q3HandleClick);
}

if (question4Elem) {
  question4Elem.addEventListener('click', q4HandleClick);
}

if (question5Elem) {
  question5Elem.addEventListener('click', q5HandleClick);
}

if (question6Elem) {
  question6Elem.addEventListener("click", q6HandleClick);
}

// __________________________________ Calls __________________________________ 

// question 1
//Roadtrip
questionNumber1[0].push(
    new Song ('Hotel California', 'The Eagles', 'Hotel California'),
    new Song ('Beast of Burden', 'The Rolling Stones', 'Some Girls'),
    new Song ('Dreams', 'Fleetwood Mac', 'Rumours'),
    new Song ('Easy', 'Commodores', 'Commodores'),
    new Song ('Here Comes the Sun', 'The Beatles', 'Abbey Road'),
),
//Camping
questionNumber1[1].push(
    new Song ('Take me home, Country Roads', 'John Denver', 'Poems, Prayers & Promises'),
    new Song ('Sunflower', 'Post Malone and Swae Lee', 'Spider-Man: Into the Spider-Verse'),
    new Song ('Rhiannon', 'Fleetwood Mac', 'Life Becoming a Landslide'),
    new Song ('Badmoon Rising', 'Creedence Clearwater Revival', 'Green River'),
    new Song ("You've Got a Friend In Me", 'Randy Newman', 'Toy Story'),
),
//Studying
questionNumber1[2].push(
  new Song ('Controlla', 'Idealism', 'Rainy Evening'),
  new Song ('My New Love', 'Elijah Who', 'Gentle Boy'),
  new Song ('Jazzy Afternoon', 'LoFi Waiter', 'A Night In Tokyo'),
  new Song ('Affection', 'Jinsang', 'Life'),
  new Song ('Aruarian dance', 'Nujabes', 'Samurai Champloo Music Record: Departure'),
),
//Party
questionNumber1[3].push(
  new Song ('We Found Love', 'Rihanna and Calvin Harris', 'Talk That Talk'),//4 again lol
  new Song ('I Gotta Feeling', 'Black Eyed Peas', 'The E.N.D.',),
  new Song ('Bad Romance', 'Lady Gaga', 'The Fame Monster',),
  new Song ("We Can't Stop", 'Miley Cyrus', 'Bangerz',),
),
// question 2
//Cali
questionNumber2[0].push(
  new Song ('Pumped Up Kicks', 'Foster The People', 'Pumped Up Kicks'),
  new Song ('Californiacation', 'Red Hot Chili Peppers', 'Californiacation'),
  new Song ('Santeria', 'Sublime', 'Gold'),
  new Song ('Semi-Charmed Life', 'Third Eye Blind', 'Third Eye Blind'),
  new Song ('Fly', 'Sugar Ray', 'Floored'),
)
//Texas
questionNumber2[1].push(
  new Song ('Rest of My Life', 'Parker McCollum', 'Rest of My Life'),
  new Song ('No Vacancy', 'Treaty Oak Revival', 'No Vacancy'),
  new Song ('Ride the Lightning', 'Warren Zeiders', 'Ride the Lightning'),
  new Song ('Teasure', 'Laci Kaye Booth', 'Laci Kaye Booth'),
)
//Illinois
questionNumber2[2].push(
  new Song ('Hell in a Handbag', 'Alyssa Micaela', 'Hell in a Handbag'),
  new Song ('Swervo', 'G Herbo, Southside', 'Swervo'),
  new Song ('All Night Longer', 'Sammy Adams', 'All Night Longer'),
  new Song ('Sorority Girl', 'Luke Brian', 'Spring Break... Here to Party'),
  new Song ('Doeses and Mimosas', 'Cherub', 'Year of the Caprese'),
)
//New York
questionNumber2[3].push(
  new Song ('Dead Presidents II', 'JAY-Z', 'Reasonable Doubt',),
  new Song ('I Need a Girl Part II', 'Diddy', ' The Saga Continues',),
  new Song ('Big Poppa', 'The Notorious B.I.G.', 'Ready to Die',),
  new Song ('So Far Away', 'Carole King', 'In Concer',),
  new Song ('If I Ain\'t Got You', 'Alicia Keys', 'The Diary of Alicia Keys',),
)
// question 3
//60's music
questionNumber3[0].push(
  new Song ('I Say A Little Prayer You', 'Aretha Franklin', 'Aretha Now'),
  new Song ('Creedence Clearwater Revival', 'Born on the Bayou', 'Live in Europe'),
  new Song ('My Girl', 'The Temptations', 'The Temptations Sing Smokey'),
  new Song ('What\’s New Pussycat?', 'Tom Jones', 'What\’s New Pussycat?'),
  new Song ('My Cherie Amour', 'Stevie Wonder', 'My Cherie Amour'),
)
//70's music
questionNumber3[1].push(
  new Song ('Dreams', 'Fleetwood Mac', 'Rumours'),
  new Song ('Sweet Emotion', 'Aerosmith', 'Toys in The Attic'),
  new Song ('Changes', 'David Bowie', 'Hunky Dory'),
  new Song ('What You Won’t Do For Love', 'Bobby Caldwell', 'Bobby Caldwell'),
  new Song ('Let’s Get It On', 'Marvin Gaye', 'Let\’s Get It On'),
)
//80's music
questionNumber3[2].push(
  new Song ('Celebration', 'Kool & The Gang', 'Celebrate!'),
  new Song ('Could You Be Loved', 'Bob Marley & The Wailers', 'Uprising'),
  new Song ('Whip It', 'Devo', 'Freedom Of Choice'),
  new Song ('Never Too Much', 'Luther Vandross', 'Never Too Much'),
  new Song ('Waiting For A Girl Like You', 'Foreigner', '4'),
)
//90's music
questionNumber3[3].push(
  new Song ('Wannabe', 'Spice Girls', 'Spice',),
  new Song ('Wonderwall', 'Oasis', 'What\’s the Story Morning Glory?',),
  new Song ('Man in The Box', 'Alice in Chains', 'Facelift'),
  new Song ('Creep', 'TLC', 'Ooooooohhh… On the TLC Tip',),
  new Song ('California Love', 'Tupac Shakur', 'All Eyes on Me',),
)
//00's music
questionNumber3[4].push(
  new Song ('In Da Club', '50 Cent', 'Get Rich or Die Tryin’',),
  new Song ('Party Up', 'DMX', '… And Then There Was X', ),
  new Song ('She Will Be Loved', 'Maroon 5', 'Songs About Jane', ),
  new Song ('Sugar, We’re Going Down', 'Fall Out Boy', 'From Under the Cork Tree', ),
  new Song ('Hott in Herre', 'Nelly', 'Nellyville', ),
)
// question 4
//Fall/Winter
questionNumber4[0].push(
  new Song ('If I Could Fly', 'One Direction', 'Made in the A.M.'),
  new Song ('September', 'Earth, Wind & Fire', 'The Best of Earth, Wind & Fire, Vol'),
  new Song ('Only Exception', 'Paramore', 'Brand New Eyes'),
  new Song ('Maps', 'Yeah Yeah Yeahs', 'Fever to Tell'),
  new Song ('Ho Hey', 'Lumineers', 'The Lumineers'),
);
//Spring
questionNumber4[1].push(
  new Song ('Hey There Delilah', 'Plain White T\’s', 'All That We Needed and Every Second Counts'),
  new Song ('OTW', 'Khalid', 'OTW'),
  new Song ('What Do You Mean', 'Justin Bieber', 'Purpose'),
  new Song ('Infinity Guitars', 'Sleigh Bells', 'Treats'),
  new Song ('Closer', 'The Chainsmokers, Halsey', 'Collage'),
);
//Summer
questionNumber4[2].push(
  new Song ('Shape Of You', 'Ed Sheeran', '+'),
  new Song ('This is What You Came For', 'Calvin Harris', 'This is What You Came For'),
  new Song ('Zanzibar', 'Kamaliza', 'Zanzibar'),
  new Song ('Essence', 'WizKid', 'Made in Lagos'),
  new Song ('BeatBox', 'SpotemGottem', 'Beat Box'),
);
// question 5
//Facebook
questionNumber5[0].push(
  new Song ('STAY', 'The Kid LAROI & Justin Bieber', 'F*CK LOVE 3: OVER YOU'),
  new Song ('Low', 'Flo Rida & T-Pain', 'Mail on Sunday'),
  new Song ('Because You Move Me', 'Tinlicker & Helsloot', 'Because You Move '),
  new Song ('One Dance', 'Drake', 'single'),
  new Song ('Bad Guy','Billie Eilish', 'When We All Fall Asleep, Where Do We Go'),
);

//Instagram
questionNumber5[1].push(
  new Song ('Butter', 'BTS','n/a'),
  new Song ('Stronger', 'Kanye West','Graduation'),
  new Song ('Crazy In Love', 'Beyonce & Jay-Z','Dangerously In LoveDrake'),
  new Song ('Wants and Needs','Drake & Lil Baby','Scary Hours 2'),
  new Song ('Fireworks','ATEEZ','ZERO: FEVER Part.2Fac'),
);
//Twitter
questionNumber5[2].push(
  new Song ('Jail','Kanye West','Donda'),
  new Song ('INDUSTRY BABY','Lil Nax X & Jack Harlow','INDUSTRY BABY & Jack Harlows'),
  new Song ('Bad Habits','Ed Sheeran','Bad Habits'),
  new Song ('Pepas','Farruko','Pepas'),
  new Song ('good 4 u','Olivia Rodrigo','SOUR'),
);
//Myspace
questionNumber5[3].push(
  new Song ('Bring It','Cobra Starship','While the City Sleeps, We Rule the Streets'),
  new Song ('1985','bowling for Soup','A Hangover You Don\'t Deserve'),
  new Song ('One Week','Barenaked Ladies','Stunt'),
  new Song ('Misery Business','Paramore','Riot'),
  new Song ('Facedown','The Red Jumpsuit Apparatus','Don\'t You Fake It'),
);
// question 6
questionNumber6[0].push(
  new Song("my heart will go on", "celine dion", "titanic"),
  new Song("hymn to the sea", "james hornes", "titanic"),
  new Song("my heart will go on", "celine dion", "titanic"),
);
questionNumber6[1].push(
  new Song("cornfield chase’, ‘hans zimmer’, ‘interstellar"),
  new Song("no time for caution", "hans zimmer", "interstellar"),
  new Song("S.T.A.Y.", "hans zimmer", "interstellar"),
  new Song("mountains", "hans zimmer", "interstellar"),
  new Song("dreaming of the crash", "hans zimmer", "interstellar")
);
questionNumber6[2].push(
  new Song("you’re the one that I want", 'john travolta, olivia newton-john', 'grease'),
  new Song("hopelessly devoted to you", "john travolta, olivia newton-john", "grease")
);
questionNumber6[3].push(
  new Song("lose yourself", "eminem", "8 mile"),
  new Song("8 mile", "eminem", "8 mile"),
  new Song("rap game", "D12", "8 mile")
);
questionNumber6[4].push(
  new Song("you’ll be in my heart", 'phil collins', 'tarzan'),
  new Song("two worlds", "phil collins", "tarzan")
);
questionNumber6[5].push(
  new Song('edge of seventeen', 'stevie nicks', 'school of rock'),
  new Song("iron man", "black sabbath", "school of rock")
);
questionNumber6[6].push(
  new Song("you never can tell", "chuck berry", "pulp fiction"),
  new Song("dancing queen", "abba", "pulp fiction"),
  new Song("satisfied mind", "johnny cash", "pulp fiction"),
  new Song("you never can tell", "chuck berry", "pulp fiction")
);
questionNumber6[7].push(
  new Song('mr. blue sky', 'electric light orchestra', 'guardians of the galaxy'),
  new Song("lake shore drive", "aliotta haynes jeremiah", "guardians of the galaxy"),
  new Song("the chain", "fleetwood mac", "guardians of the galaxy"),
  new Song("fox on the run", "sweet", "guardians of the galaxy"),
  new Song("cherry bomb", "the runaways", "guardians of the galaxy"),
  new Song("ain't no mountain high enough", "marvin gaye, tammi terrel", "guardians of the galaxy"),
);
questionNumber6[8].push(
  new Song("don’t you (forget about me)", 'simple minds', 'the breakfast club'),
  new Song("we are not alone", 'karla devito', 'the breakfast club')
);
questionNumber6[9].push(
  new Song('shallow', 'lady gaga, bradley cooper', 'a star is born'),
  new Song("always remember us this way", "lady gaga, bradley cooper", "a star is born"),
  new Song("black eyes", "bradley cooper", "a star is born"),
  new Song("La Vie En Rose", "lady gaga", "a star is born"),
  new Song('shallow', 'lady gaga, bradley cooper', 'a star is born'),
);

getFromLocalStorage();
// generatePlayList();