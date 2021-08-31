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
const questionNumber6 = [[], [], [], [], [], [], [], [], [], [],];

// final playlist recommendation
let recommendedPlayList = [];

// question element in html
const questionElem = document.getElementById('question')
const ulQuestionElem = document.getElementById('question_ul')

let questionSixSong = null;

// __________________________________ Constructor Functions  __________________________________ 

// create a song object, accept name, artist, album, and optional img artwork
function Song(name, artist, album, id) {
  this.name = name;
  this.artist = artist;
  this.album = album;
  this.id = id;
}

//ID organizer by question
//making question
//event handler
//buttons for the pages


// __________________________________ Prototype Methods __________________________________ 

// __________________________________ Global Functions __________________________________ 

// random item from array
function randomArrayItem(arra) {
  let index = Math.floor((Math.random() * arra.length));
  return arra[index];
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

// // add song to recommended array
// function addSongToPlayList(song) {
//   recommendedPlayList.push(song);
// }

// return a random song from the applicable array based on user click
function q6HandleClick() {

  switch(event.target.id) {
    case 'titanic':
      questionSixSong = randomArrayItem(questionNumber6[0])
      console.log(questionSixSong)
      break;
    case 'interstellar':
      questionSixSong = randomArrayItem(questionNumber6[1]);
      console.log(questionSixSong);
      break;
    case 'grease':
      questionSixSong = randomArrayItem(questionNumber6[2]);
      console.log(questionSixSong);
      break;
    case '8_mile':
      questionSixSong = randomArrayItem(questionNumber6[3]);
      console.log(questionSixSong);
      break;
    case 'tarzan':
      questionSixSong = randomArrayItem(questionNumber6[4]);
      console.log(questionSixSong);
      break;
    case 'school':
      questionSixSong = randomArrayItem(questionNumber6[5]);
      console.log(questionSixSong);
      break;
    case 'pulp_fiction':
      questionSixSong = randomArrayItem(questionNumber6[6]);
      console.log(questionSixSong);
      break;
    case 'guardians':
      questionSixSong = randomArrayItem(questionNumber6[7]);
      console.log(questionSixSong);
      break;
    case 'breakfast':
      questionSixSong = randomArrayItem(questionNumber6[8]);
      console.log(questionSixSong);
      break;
    case 'star':
      questionSixSong = randomArrayItem(questionNumber6[9]);
      console.log(questionSixSong);
      break;      
  }
}

// __________________________________ Event Listeners  __________________________________ 

ulQuestionElem.addEventListener('click', q6HandleClick)

// __________________________________ Calls __________________________________ 

// question 1
//Roadtrip
questionNumber1.push(new Song ('Hotel California', 'The Eagles', 'Hotel California', 1));
questionNumber1.push(new Song ('Beast of Burden', 'The Rolling Stones', 'Some Girls', 1));
questionNumber1.push(new Song ('Dreams', 'Fleetwood Mac', 'Rumours', 1));
questionNumber1.push(new Song ('Easy', 'Commodores', 'Commodores', 1));
questionNumber1.push(new Song ('Here Comes the Sun', 'The Beatles', 'Abbey Road', 1));
//Camping
questionNumber1.push(new Song ('Take me home, Country Roads', 'John Denver', 'Poems, Prayers & Promises', 2));
questionNumber1.push(new Song ('Sunflower', 'Post Malone and Swae Lee', 'Spider-Man: Into the Spider-Verse', 2));
questionNumber1.push(new Song ('Rhiannon', 'Fleetwood Mac', 'Life Becoming a Landslide', 2));
questionNumber1.push(new Song ('Badmoon Rising', 'Creedence Clearwater Revival', 'Green River', 2));
questionNumber1.push(new Song ("You've Got a Friend In Me", 'Randy Newman', 'Toy Story', 2));
//Studying
questionNumber1.push(new Song ('Controlla', 'Idealism', 'Rainy Evening', 3));
questionNumber1.push(new Song ('My New Love', 'Elijah Who', 'Gentle Boy', 3));
questionNumber1.push(new Song ('Jazzy Afternoon', 'LoFi Waiter', 'A Night In Tokyo', 3));
questionNumber1.push(new Song ('Affection', 'Jinsang', 'Life', 3));
questionNumber1.push(new Song ('Aruarian dance', 'Nujabes', 'Samurai Champloo Music Record: Departure', 3));
//Party
questionNumber1.push(new Song ('We Found Love', 'Rihanna and Calvin Harris', 'Talk That Talk', 4));//4 again lol
questionNumber1.push(new Song ('I Gotta Feeling', 'Black Eyed Peas', 'The E.N.D.', 4));
questionNumber1.push(new Song ('Bad Romance', 'Lady Gaga', 'The Fame Monster', 4));
questionNumber1.push(new Song ("We Can't Stop", 'Miley Cyrus', 'Bangerz', 4));
// question 2
//Cali
questionNumber2.push(new Song ('Pumped Up Kicks', 'Foster The People', 'Pumped Up Kicks', 1));
questionNumber2.push(new Song ('Californiacation', 'Red Hot Chili Peppers', 'Californiacation', 1));
questionNumber2.push(new Song ('Santeria', 'Sublime', 'Gold', 1));
questionNumber2.push(new Song ('Semi-Charmed Life', 'Third Eye Blind', 'Third Eye Blind', 1));
questionNumber2.push(new Song ('Fly', 'Sugar Ray', 'Floored', 1));
//Texas
questionNumber2.push(new Song ('Rest of My Life', 'Parker McCollum', 'Rest of My Life', 2));
questionNumber2.push(new Song ('No Vacancy', 'Treaty Oak Revival', 'No Vacancy', 2));
questionNumber2.push(new Song ('Ride the Lightning', 'Warren Zeiders', 'Ride the Lightning', 2));
questionNumber2.push(new Song ('Teasure', 'Laci Kaye Booth', 'Laci Kaye Booth', 2));
//Illinois
questionNumber2.push(new Song ('Hell in a Handbag', 'Alyssa Micaela', 'Hell in a Handbag', 3));
questionNumber2.push(new Song ('Swervo', 'G Herbo, Southside', 'Swervo', 3));
questionNumber2.push(new Song ('All Night Longer', 'Sammy Adams', 'All Night Longer', 3));
questionNumber2.push(new Song ('Sorority Girl', 'Luke Brian', 'Spring Break... Here to Party', 3));
questionNumber2.push(new Song ('Doeses and Mimosas', 'Cherub', 'Year of the Caprese', 3));
//New York
questionNumber2.push(new Song ('Dead Presidents II', 'JAY-Z', 'Reasonable Doubt', 4));
questionNumber2.push(new Song ('I Need a Girl Part II', 'Diddy', ' The Saga Continues', 4));
questionNumber2.push(new Song ('Big Poppa', 'The Notorious B.I.G.', 'Ready to Die', 4));
questionNumber2.push(new Song ('So Far Away', 'Carole King', 'In Concer', 4));
questionNumber2.push(new Song ('If I Ain\'t Got You', 'Alicia Keys', 'The Diary of Alicia Keys', 4));

// question 3
//60's music
questionNumber3.push(new Song ('I Say A Little Prayer You', 'Aretha Franklin', 'Aretha Now', 1));
questionNumber3.push(new Song ('Creedence Clearwater Revival', 'Born on the Bayou', 'Live in Europe', 1));
questionNumber3.push(new Song ('My Girl', 'The Temptations', 'The Temptations Sing Smokey', 1));
questionNumber3.push(new Song ('What\’s New Pussycat?', 'Tom Jones', 'What\’s New Pussycat?',  1));
questionNumber3.push(new Song ('My Cherie Amour', 'Stevie Wonder', 'My Cherie Amour',  1));
//70's music
questionNumber3.push(new Song ('Dreams', 'Fleetwood Mac', 'Rumours', 2));
questionNumber3.push(new Song ('Sweet Emotion', 'Aerosmith', 'Toys in The Attic', 2));
questionNumber3.push(new Song ('Changes', 'David Bowie', 'Hunky Dory', 2));
questionNumber3.push(new Song ('What You Won’t Do For Love', 'Bobby Caldwell', 'Bobby Caldwell', 2));
questionNumber3.push(new Song ('Let’s Get It On', 'Marvin Gaye', 'Let\’s Get It On', 2));
//80's music
questionNumber3.push(new Song ('Celebration', 'Kool & The Gang', 'Celebrate!', 3));
questionNumber3.push(new Song ('Could You Be Loved', 'Bob Marley & The Wailers', 'Uprising', 3));
questionNumber3.push(new Song ('Whip It', 'Devo', 'Freedom Of Choice', 3));
questionNumber3.push(new Song ('Never Too Much', 'Luther Vandross', 'Never Too Much', 3));
questionNumber3.push(new Song ('Waiting For A Girl Like You', 'Foreigner', '4', 3));
//90's music
questionNumber3.push(new Song ('Wannabe', 'Spice Girls', 'Spice', 4));
questionNumber3.push(new Song ('Wonderwall', 'Oasis', 'What\’s the Story Morning Glory?', 4));
questionNumber3.push(new Song ('Man in The Box', 'Alice in Chains', 'Facelift',4));
questionNumber3.push(new Song ('Creep', 'TLC', 'Ooooooohhh… On the TLC Tip', 4));
questionNumber3.push(new Song ('California Love', 'Tupac Shakur', 'All Eyes on Me', 4));
//00's music
questionNumber3.push(new Song ('In Da Club', '50 Cent', 'Get Rich or Die Tryin’',5));
questionNumber3.push(new Song ('Party Up', 'DMX', '… And Then There Was X', 5));
questionNumber3.push(new Song ('She Will Be Loved', 'Maroon 5', 'Songs About Jane', 5));
questionNumber3.push(new Song ('Sugar, We’re Going Down', 'Fall Out Boy', 'From Under the Cork Tree', 5));
questionNumber3.push(new Song ('Hott in Herre', 'Nelly', 'Nellyville', 5));

// question 4
//Fall/Winter
questionNumber4.push(new Song ('If I Could Fly', 'One Direction', 'Made in the A.M.', 1));
questionNumber4.push(new Song ('September', 'Earth, Wind & Fire', 'The Best of Earth, Wind & Fire, Vol. 1', 1));
questionNumber4.push(new Song ('Only Exception', 'Paramore', 'Brand New Eyes', 1));
questionNumber4.push(new Song ('Maps', 'Yeah Yeah Yeahs', 'Fever to Tell', 1));
questionNumber4.push(new Song ('Ho Hey', 'Lumineers', 'The Lumineers', 1));
//Spring
questionNumber4.push(new Song ('Hey There Delilah', 'Plain White T\’s', 'All That We Needed and Every Second Counts', 2));
questionNumber4.push(new Song ('OTW', 'Khalid', 'OTW', 2));
questionNumber4.push(new Song ('What Do You Mean', 'Justin Bieber', 'Purpose', 2));
questionNumber4.push(new Song ('Infinity Guitars', 'Sleigh Bells', 'Treats', 2));
questionNumber4.push(new Song ('Closer', 'The Chainsmokers, Halsey', 'Collage', 2)) ;
//Summer
questionNumber4.push(new Song ('Shape Of You', 'Ed Sheeran', '+', 3));
questionNumber4.push(new Song ('This is What You Came For', 'Calvin Harris', 'This is What You Came For', 3));
questionNumber4.push(new Song ('Zanzibar', 'Kamaliza', 'Zanzibar', 3));
questionNumber4.push(new Song ('Essence', 'WizKid', 'Made in Lagos', 3));
questionNumber4.push(new Song ('BeatBox', 'SpotemGottem', 'Beat Box', 3));
//

// question 5
//Facebook
questionNumber5.push(new Song ('STAY', 'The Kid LAROI & Justin Bieber', 'F*CK LOVE 3: OVER YOU',1));
questionNumber5.push(new Song ('Low', 'Flo Rida & T-Pain', 'Mail on Sunday', 1));
questionNumber5.push(new Song ('Because You Move Me', 'Tinlicker & Helsloot', 'Because You Move ', 1));
questionNumber5.push(new Song ('One Dance', 'Drake', 'single', 1 ));
questionNumber5.push(new Song ('Bad Guy','Billie Eilish', 'When We All Fall Asleep, Where Do We Go', 1));
//Instagram
questionNumber5.push(new Song ('Butter', 'BTS','n/a', 2));
questionNumber5.push(new Song ('Stronger', 'Kanye West','Graduation', 2));
questionNumber5.push(new Song ('Crazy In Love', 'Beyonce & Jay-Z','Dangerously In LoveDrake', 2));
questionNumber5.push(new Song ('Wants and Needs','Drake & Lil Baby','Scary Hours 2', 2));
questionNumber5.push(new Song ('Fireworks','ATEEZ','ZERO: FEVER Part.2Fac', 2));
//Twitter
questionNumber5.push(new Song ('Jail','Kanye West','Donda', 3));
questionNumber5.push(new Song ('INDUSTRY BABY','Lil Nax X & Jack Harlow','INDUSTRY BABY & Jack Harlows', 3));
questionNumber5.push(new Song ('Bad Habits','Ed Sheeran','Bad Habits', 3));
questionNumber5.push(new Song ('Pepas','Farruko','Pepas', 3));
questionNumber5.push(new Song ('good 4 u','Olivia Rodrigo','SOUR', 3));
//Myspace
questionNumber5.push(new Song ('Bring It','Cobra Starship','While the City Sleeps, We Rule the Streets', 4));
questionNumber5.push(new Song ('1985','bowling for Soup','A Hangover You Don\'t Deserve', 4));
questionNumber5.push(new Song ('One Week','Barenaked Ladies','Stunt', 4));
questionNumber5.push(new Song ('Misery Business','Paramore','Riot', 4));
questionNumber5.push(new Song ('Facedown','The Red Jumpsuit Apparatus','Don\'t You Fake It', 4));


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