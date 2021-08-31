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

// add song to recommended array
function addSongToPlayList(song) {
  recommendedPlayList.push(song);
}

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



// // question 1
// new Song('Hotel California', 'The Eagles', 'Hotel California', roadTrip);
// new Song('Beast of Burden', 'The Rolling Stones', 'Some Girls', roadTrip);
// new Song('Dreams', 'Fleetwood Mac', 'Rumours', roadTrip);
// new Song('Easy', 'Commodores', 'Commodores', roadTrip);
// new Song('Here Comes the Sun', 'The Beatles', 'Abbey Road', roadTrip);
// new Song('Take me home, Country Roads', 'John Denver', 'Poems, Prayers & Promises', camp);
// new Song('Sunflower', 'Post Malone and Swae Lee', 'Spider-Man: Into the Spider-Verse', camp);
// new Song('Rhiannon', 'Fleetwood Mac', 'Life Becoming a Landslide', camp);
// new Song('Badmoon Rising', 'Creedence Clearwater Revival', 'Green River', camp);
// new Song("You've Got a Friend In Me", 'Randy Newman', 'Toy Story', camp);
// new Song('Controlla', 'Idealism', 'Rainy Evening', study);
// new Song('My New Love', 'Elijah Who', 'Gentle Boy', Study);
// new Song('Jazzy Afternoon', 'LoFi Waiter', 'A Night In Tokyo', study);
// new Song('Affection', 'Jinsang', 'Life', study);
// new Song('Aruarian dance', 'Nujabes', 'Samurai Champloo Music Record: Departure', study );
// new Song('We Found Love', 'Rihanna and Calvin Harris', 'Talk That Talk', party);
// new Song('I Gotta Feeling', 'Black Eyed Peas', 'The E.N.D.', party);
// new Song('Bad Romance', 'Lady Gaga', 'The Fame Monster', party);
// new Song("We Can't Stop", 'Miley Cyrus', 'Bangerz', party);
// // question 2

// new Song('Pumped Up Kicks', 'Foster The People', 'Pumped Up Kicks', ca);
// new Song('Californiacation', 'Red Hot Chili Peppers', 'Californiacation', ca);
// new Song('Santeria', 'Sublime', 'Gold', ca);
// new Song('Semi-Charmed Life', 'Third Eye Blind', 'Third Eye Blind', ca);
// new Song('Fly', 'Sugar Ray', 'Floored', ca);
// new Song('Rest of My Life', 'Parker McCollum', 'Rest of My Life', tx);
// new Song('No Vacancy', 'Treaty Oak Revival', 'No Vacancy', tx);
// new Song('Ride the Lightning', 'Warren Zeiders', 'Ride the Lightning', tx);
// new Song('Teasure', 'Laci Kaye Booth', 'Laci Kaye Booth', tx);
// new Song('Hell in a Handbag', 'Alyssa Micaela', 'Hell in a Handbag', il);
// new Song('Swervo', 'G Herbo, Southside', 'Swervo', il);
// new Song('All Night Longer', 'Sammy Adams', 'All Night Longer', li);
// new Song('Sorority Girl', 'Luke Brian', 'Spring Break... Here to Party', li);
// new Song('Doeses and Mimosas', 'Cherub', 'Year of the Caprese', li);
// new Song('Dead Presidents II', 'JAY-Z', 'Reasonable Doubt', ny);
// new Song('I Need a Girl Part II', 'Diddy', ' The Saga Continues', ny);
// new Song('Big Poppa', 'The Notorious B.I.G.', 'Ready to Die', ny);
// new Song('So Far Away', 'Carole King', 'In Concer', ny);
// new Song("If I Ain't Got You", 'Alicia Keys', 'The Diary of Alicia Keys', ny);

// // question 3
// //60's music
// new Song ('I Say A Little Prayer You', 'Aretha Franklin', 'Aretha Now',Facebook);
// new Song ('Creedence Clearwater Revival', 'Born on the Bayou', 'Live in Europe',Facebook)
// new Song ('My Girl', 'The Temptations', 'The Temptations Sing Smokey',Facebook )
// new Song ('What\’s New Pussycat?', 'Tom Jones', 'What\’s New Pussycat?', Facebook)
// new Song ('My Cherie Amour', 'Stevie Wonder', 'My Cherie Amour', Facebook)
// //70's music
// new Song ('Dreams', 'Fleetwood Mac', 'Rumours', Insta)
// new Song ('Sweet Emotion', 'Aerosmith', 'Toys in The Attic', Insta)
// new Song ('Changes', 'David Bowie', 'Hunky Dory', Insta)
// new Song ('What You Won’t Do For Love', 'Bobby Caldwell', 'Bobby Caldwell', Insta)
// new Song ('Let’s Get It On', 'Marvin Gaye', 'Let\’s Get It On', N/a)
// //80's music
// new Song ('Celebration', 'Kool & The Gang', 'Celebrate!', Insta)
// new Song ('Could You Be Loved', 'Bob Marley & The Wailers', 'Uprising', Insta)
// new Song ('Whip It', 'Devo', 'Freedom Of Choice', Insta)
// new Song ('Never Too Much', 'Luther Vandross', 'Never Too Much', Insta)
// new Song ('Waiting For A Girl Like You', 'Foreigner', '4', Insta)
// //90's music
// new Song ('Wannabe', 'Spice Girls', 'Spice', Insta)
// new Song ('Wonderwall', 'Oasis', 'What\’s the Story Morning Glory?', Insta)
// new Song ('Man in The Box', 'Alice in Chains', 'Facelift',Insta)
// new Song ('Creep', 'TLC', 'Ooooooohhh… On the TLC Tip', Insta)
// new Song ('California Love', 'Tupac Shakur', 'All Eyes on Me',N/a)
// //00's music
// new Song ('In Da Club', '50 Cent', 'Get Rich or Die Tryin’',Insta)
// new Song ('Party Up', 'DMX', '… And Then There Was X', Insta)
// new Song ('She Will Be Loved', 'Maroon 5', 'Songs About Jane', Insta)
// new Song ('Sugar, We’re Going Down', 'Fall Out Boy', 'From Under the Cork Tree', Insta)
// new Song ('Hott in Herre', 'Nelly', 'Nellyville', Insta)

// // question 5
// new Song ('STAY', 'The Kid LAROI & Justin Bieber', 'F*CK LOVE 3: OVER YOU',Insta)
// new Song ('Low', 'Flo Rida & T-Pain', 'Mail on Sunday', Insta)
// new Song ('Because You Move Me', 'Tinlicker & Helsloot', 'Because You Move ', Insta)
// new Song('One Dance', 'Drake', 'single', Insta )
// new Song('Bad Guy','Billie Eilish', 'When We All Fall Asleep, Where Do We Go', Insta)
// new Song ('Butter', 'BTS','n/a',Twitter)
// new Song ('Stronger', 'Kanye West','Graduation',Twitter)
// new Song ('Crazy In Love', 'Beyonce (feat. Jay-Z)','Dangerously In LoveDrake',Twitter)
// new Song ('Wants and Needs','Drake (feat. Lil Baby)','Scary Hours 2', Twitter)
// new Song ('Fireworks(I\'m The One)','ATEEZ','ZERO: FEVER Part.2Fac',Twitter)
// new Song ('Jail','Kanye West','Donda',Facebook)
// new Song ('INDUSTRY BABY','Lil Nax X & Jack Harlow','INDUSTRY BABY (feat. Jack Harlows)',Facebook)
// new Song ('Bad Habits','Ed Sheeran','Bad Habits',Facebook)
// new Song ('Pepas','Farruko','Pepas',Facebook)
// new Song ('good 4 u','Olivia Rodrigo','SOUR',Facebook)
// new Song ('Bring It','Cobra Starship','While the City Sleeps, We Rule the Streets',Myspacmye)
// new Song ('1985','bowling for Soup','A Hangover You Don\'t Deserve',Myspace)
// new Song ('One Week','Barenaked Ladies','Stunt',Myspace)
// new Song ('Misery Business','Paramore','Riot',Myspace)
// new Song ('Facedown','The Red Jumpsuit Apparatus','Don\'t You Fake It',Myspace)


// // question 4
// //Fall/Winter
// new Song ('If I Could Fly', 'One Direction', 'Made in the A.M.', Insta)
// new Song ('September', 'Earth, Wind & Fire', 'The Best of Earth, Wind & Fire, Vol. 1', Insta)
// new Song ('Only Exception', 'Paramore', 'Brand New Eyes', Insta)
// new Song ('Maps', 'Yeah Yeah Yeahs', 'Fever to Tell', Insta)
// new Song ('Ho Hey', 'Lumineers', 'The Lumineers', Insta)
// //Spring
// new Song ('Hey There Delilah', 'Plain White T\’s', 'All That We Needed and Every Second Counts', Insta)
// new Song ('OTW', 'Khalid', 'OTW', Insta)
// new Song ('What Do You Mean', 'Justin Bieber', 'Purpose', Insta)
// new Song ('Infinity Guitars', 'Sleigh Bells', 'Treats', Insta)
// new Song ('Closer', 'The Chainsmokers, Halsey', 'Collage', Insta) 
// //Summer
// new Song ('Shape Of You', 'Ed Sheeran', '+', Insta)
// new Song ('This is What You Came For', 'Calvin Harris', 'This is What You Came For', Insta)
// new Song ('Zanzibar', 'Kamaliza', 'Zanzibar', Insta)
// new Song ('Essence', 'WizKid', 'Made in Lagos', Insta)
// new Song ('BeatBox', 'SpotemGottem', 'Beat Box', Insta)
// //




// question 6
questionNumber6[0].push(
  new Song('my heart will go on', 'celine dion', 'titanic')
)

questionNumber6[1].push(
  new Song('cornfield chase’, ‘hans zimmer’, ‘interstellar'),
  new Song('no time for caution', 'hans zimmer', 'interstellar')
)

questionNumber6[2].push(
  new Song("you’re the one that I want", 'john travolta, olivia newton-john', 'grease'),
  new Song("hopelessly devoted to you", "john travolta, olivia newton-john", "grease")
)

questionNumber6[3].push(
  new Song('lose yourself', 'eminem', '8 mile'),
  new Song("8 mile", "eminem", "8 mile")
)

questionNumber6[4].push(
  new Song("you’ll be in my heart", 'phil collins', 'tarzan'),
  new Song("two worlds", "phil collins", "tarzan")
)

questionNumber6[5].push(
  new Song('edge of seventeen', 'stevie nicks', 'school of rock'),
  new Song("iron man", "black sabbath", "school of rock")
)

questionNumber6[6].push(
  new Song('dancing queen', 'abba', 'pulp fiction'),
  new Song("satisfied mind", "johnny cash", "pulp fiction")
)

questionNumber6[7].push(
  new Song('mr. blue sky', 'electric light orchestra', 'guardians of the galaxy'),
  new Song("lake shore drive", "aliotta haynes jeremiah", "guardians of the galaxy")
)

questionNumber6[8].push(
  new Song("don’t you (forget about me)", 'simple minds', 'the breakfast club')
)

questionNumber6[9].push(
  new Song('shallow', 'lady gaga, bradley cooper', 'a star is born'),
  new Song("always remember us this way", "lady gaga, bradley cooper", "a star is born")
)
  
console.log(questionNumber6)
