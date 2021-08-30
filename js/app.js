'use strict';

// let the console know about Angela's core belief system
console.log('Flat earth is real - Angela Dzodzomoney')

// __________________________________ Global Variables __________________________________ 

// arrays of songs by question number
const questionNumber1 = [];
const questionNumber2 = [];
const questionNumber3 = [];
const questionNumber4 = [];
const questionNumber5 = [];
const questionNumber6 = [];

// final playlist recommendation
let recommendedPlayList = [];

// question element in html
const questionElem = document.getElementById('question')

// __________________________________ Constructor Functions  __________________________________ 

// create a song object, accept name, artist, album, and optional img artwork
function Song(name, artist, album, img=null) {
  this.name = name;
  this.artist = artist;
  this.album = album;
  this.img = img;
}

// __________________________________ Prototype Methods __________________________________ 

// __________________________________ Global Functions __________________________________ 

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

// return playlist from recommended array, append ul and li per song
function generatePlaylist() {
  let ulElem = document.createElement('ul')
  questionElem.appendChild(ulElem)
  for (let song of recommendedPlayList) {
    const liElem = document.createElement('li')
    liElem.textContent = `${song.name} by ${song.artist}. Album ${song.album}.`;
    ulElem.appendChild(liElem)
  }
}

// add song to recommended array
function addSongToPlayList(song) {
  recommendedPlayList.push(song);
}

// __________________________________ Event Listeners  __________________________________ 

// __________________________________ Calls __________________________________ 

// question 5

new Song ('STAY', 'The Kid LAROI & Justin Bieber', 'F*CK LOVE 3: OVER YOU',Insta)
new Song ('Low', 'Flo Rida & T-Pain', 'Mail on Sunday', Insta)
new Song ('Because You Move Me', 'Tinlicker & Helsloot', 'Because You Move ', Insta)
new Song('One Dance', 'Drake', 'single', Insta )
new Song('Bad Guy','Billie Eilish', 'When We All Fall Asleep, Where Do We Go', Insta)
new Song ('Butter', 'BTS','n/a',Twitter)
new Song ('Stronger', 'Kanye West','Graduation',Twitter)
new Song ('Crazy In Love', 'Beyonce (feat. Jay-Z)','Dangerously In LoveDrake',Twitter)
new Song ('Wants and Needs','Drake (feat. Lil Baby)','Scary Hours 2', Twitter)
new Song ('Fireworks(I\'m The One)','ATEEZ','ZERO: FEVER Part.2Fac',Twitter)
new Song ('Jail','Kanye West','Donda',Facebook)
new Song ('INDUSTRY BABY','Lil Nax X & Jack Harlow','INDUSTRY BABY (feat. Jack Harlows)',Facebook)
new Song ('Bad Habits','Ed Sheeran','Bad Habits',Facebook)
new Song ('Pepas','Farruko','Pepas',Facebook)
new Song ('good 4 u','Olivia Rodrigo','SOUR',Facebook)
new Song ('Bring It','Cobra Starship','While the City Sleeps, We Rule the Streets',Myspacmye)
new Song ('1985','bowling for Soup','A Hangover You Don\'t Deserve',Myspace)
new Song ('One Week','Barenaked Ladies','Stunt',Myspace)
new Song ('Misery Business','Paramore','Riot',Myspace)
new Song ('Facedown','The Red Jumpsuit Apparatus','Don\'t You Fake It',Myspace)
// question 1
// question 2
// question 3
// question 4





// question 6
new Song('my heart will go on', 'celine dion', 'titanic');
new Song('cornfield chase’, ‘hans zimmer’, ‘interstellar');
new Song('no time for caution', 'hans zimmer', 'interstellar');
new Song("you’re the one that I want", 'john travolta, olivia newton-john', 'grease');
new Song("hopelessly devoted to you", "john travolta, olivia newton-john", "grease");
new Song('lose yourself', 'eminem', '8 mile');
new Song("8 mile", "eminem", "8 mile");
new Song("you’ll be in my heart", 'phil collins', 'tarzan');
new Song("two worlds", "phil collins", "tarzan");
new Song('edge of seventeen', 'stevie nicks', 'school of rock');
new Song("iron man", "black sabbath", "school of rock");
new Song('dancing queen', 'abba', 'pulp fiction');
new Song("satisfied mind", "johnny cash", "pulp fiction");
new Song('mr. blue sky', 'electric light orchestra', 'guardians of the galaxy');
new Song("lake shore drive", "aliotta haynes jeremiah", "guardians of the galaxy");
new Song("don’t you (forget about me)", 'simple minds', 'the breakfast club');
new Song('shallow', 'lady gaga, bradley cooper', 'a star is born');
new Song("always remember us this way", "lady gaga, bradley cooper", "a star is born");

