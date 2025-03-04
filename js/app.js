'use strict';

// __________________________________ Global Variables __________________________________ 

const questionNumber1 = [[],[],[],[]];
const questionNumber2 = [[],[],[],[]];
const questionNumber3 = [[],[],[],[],[]];
const questionNumber4 = [[],[],[]];
const questionNumber5 = [[],[],[],[]];
const questionNumber6 = [[],[],[],[],[],[],[],[],[],[]];

Song.recommendedPlayList = [];

const question1Elem = document.getElementById('question1');
const question2Elem = document.getElementById('question2');
const question3Elem = document.getElementById('question3');
const question4Elem = document.getElementById('question4');
const question5Elem = document.getElementById('question5');
const question6Elem = document.getElementById("question6");
const buttonElem = document.getElementById('submit')
const newListsElem = document.getElementById('savedLists')

let currentSong = null;
 
// __________________________________ Constructor Functions  __________________________________ 

function Song(name, artist, album, id) {
  this.name = name;
  this.artist = artist;
  this.album = album;
}

// __________________________________ Prototype Methods __________________________________ 

// __________________________________ Global Functions __________________________________ 

function randomArrayItem(array) {
  let index = Math.floor((Math.random() * array.length));
  return array[index];
}

function q1HandleClick() {

  switch(event.target.id) {
    case 'q1a1':
      currentSong = randomArrayItem(questionNumber1[0]);
      break;
    case 'q1a2':
      currentSong = randomArrayItem(questionNumber1[1]);
      break;
    case 'q1a3':
      currentSong = randomArrayItem(questionNumber1[2]);
      break;
    case 'q1a4':
      currentSong = randomArrayItem(questionNumber1[3]);
      break;
  }
  renderButtonPageOne();
}

function q2HandleClick() {
  
  switch(event.target.id) {
    case 'q2a1':
      currentSong = randomArrayItem(questionNumber2[0]);
      break;
    case 'q2a2':
      currentSong = randomArrayItem(questionNumber2[1]);
      break;
    case 'q2a3':
      currentSong = randomArrayItem(questionNumber2[2]);
      break;
    case 'q2a4':
      currentSong = randomArrayItem(questionNumber2[3]);
      break;
  }
  renderButtonPageTwo();
}

function q3HandleClick() {
  
  switch(event.target.id) {
    case 'q3a1':
      currentSong = randomArrayItem(questionNumber3[0]);
      break;
    case 'q3a2':
      currentSong = randomArrayItem(questionNumber3[1]);
      break;
    case 'q3a3':
      currentSong = randomArrayItem(questionNumber3[2]);
      break;
    case 'q3a4':
      currentSong = randomArrayItem(questionNumber3[3]);
      break;
    case 'q3a5':
      currentSong = randomArrayItem(questionNumber3[3]);
      break;
  }
  renderButtonPageThree();
}

function q4HandleClick() {

  switch (event.target.id) {
    case 'q4a1':
      currentSong = randomArrayItem(questionNumber4[0]);
      break;
    case 'q4a2':
      currentSong = randomArrayItem(questionNumber4[1]);
      break;
    case 'q4a3':
      currentSong = randomArrayItem(questionNumber4[2]);
      break;
  }
  renderButtonPageFour();
};

// question 5 handler
function q5HandleClick() {

  switch(event.target.id) {
    case 'q5a1':
      currentSong = randomArrayItem(questionNumber5[0]);
      break;
    case 'q5a2':
      currentSong = randomArrayItem(questionNumber5[1]);
      break;
    case 'q5a3':
      currentSong = randomArrayItem(questionNumber5[2]);
      break;
    case 'q5a4':
      currentSong = randomArrayItem(questionNumber5[3]);
      break;
  }
  renderButtonPageFive();
};

function q6HandleClick() {

  switch(event.target.id) {
    case 'q6a1':
      currentSong = randomArrayItem(questionNumber6[0]);
      break;
    case 'q6a2':
      currentSong = randomArrayItem(questionNumber6[1]);
      break;
    case 'q6a3':
      currentSong = randomArrayItem(questionNumber6[2]);
      break;
    case 'q6a4':
      currentSong = randomArrayItem(questionNumber6[3]);
      break;
    case 'q6a5':
      currentSong = randomArrayItem(questionNumber6[4]);
      break;
    case 'q6a6':
      currentSong = randomArrayItem(questionNumber6[5]);
      break;
    case 'q6a7':
      currentSong = randomArrayItem(questionNumber6[6]);
      break;
    case 'q6a8':
      currentSong = randomArrayItem(questionNumber6[7]);
      break;
    case 'q6a9':
      currentSong = randomArrayItem(questionNumber6[8]);
      break;
    case 'q6a10':
      currentSong = randomArrayItem(questionNumber6[9]);
      break;      
  }
  renderButtonPageSix();
}

function handleSubmit() {
  Song.recommendedPlayList.push(currentSong)
  addToLocalStorage();
}

function addToLocalStorage() {
  const jsonAllItemsArray = JSON.stringify(Song.recommendedPlayList)
  localStorage.setItem('playlist', jsonAllItemsArray)
}

function getFromLocalStorage() {
  const fromStorage = localStorage.getItem('playlist')

  if (fromStorage !== null) {
    const normalizedArray = JSON.parse(fromStorage)

    for (let song of normalizedArray) {
      let tempSong = new Song(song.name, song.artist, song.album)
      Song.recommendedPlayList.push(tempSong)
    }
  }
}

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
  let newButton = _makeElem('button', aTagElem, 'Submit', 'id', 'submit');
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

function highlightImg() {
  
  let imgProp = {
    'padding': '10px',
    'backgroundColor': '#ffa260',
    'borderSize': '10px',
    'borderStyle': 'solid',
    'borderColor': '#ffa260',
  };
  
  let allimgs = document.getElementsByTagName('img');
  let nrallimgs = allimgs.length;
        
  for( let i = 0; i < nrallimgs; i++ ) {

    allimgs[i].onclick=function() {

      if ( this.style.borderStyle == imgProp.borderStyle ) {
        this.style.padding = 'auto';
        this.style.background = 'none';
        this.style.border = 'none';
      } else {
        this.style.padding = imgProp.padding;
        this.style.backgroundColor = imgProp.backgroundColor;
        this.style.borderSize = imgProp.borderSize;
        this.style.borderStyle = imgProp.borderStyle;
        this.style.borderColor = imgProp.borderColor;
      }
    }
  }
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

questionNumber1[0].push(
    new Song ('Hotel California', 'The Eagles', 'Hotel California'),
    new Song ('Beast of Burden', 'The Rolling Stones', 'Some Girls'),
    new Song ('Dreams', 'Fleetwood Mac', 'Rumours'),
    new Song ('Easy', 'Commodores', 'Commodores'),
    new Song ('Here Comes the Sun', 'The Beatles', 'Abbey Road'),
    new Song ('Your Love', 'The Outfield', 'Super Hits'),
    new Song ('Panama', 'Van Halen', '1984'),
    new Song ('Running on Empty', 'Jackson Browne', 'Running on Empty'),
    new Song ('Take It On the Run', 'REO Speedwagon', 'Hi Infidelity'),
    new Song ('Oh Sherrie', 'Steve Perry', 'Street Talk'),
);

questionNumber1[1].push(
    new Song ('Take me home, Country Roads', 'John Denver', 'Poems, Prayers & Promises'),
    new Song ('Sunflower', 'Post Malone and Swae Lee', 'Spider-Man: Into the Spider-Verse'),
    new Song ('Rhiannon', 'Fleetwood Mac', 'Life Becoming a Landslide'),
    new Song ('Badmoon Rising', 'Creedence Clearwater Revival', 'Green River'),
    new Song ("You've Got a Friend In Me", 'Randy Newman', 'Toy Story'),
    new Song ("Tiny Dancer", 'Elton John', 'Madman Across The Water'),
    new Song ("Have You Ever Seen The Rain", 'Creedance Clearwater Revival', 'Pendulum'),
    new Song ("Maggie May", 'Rod Stewart', 'Every Picture Tells A Story'),
    new Song ("Rock'n Me", 'Steve Miller Band', 'Fly Like An Eagle'),
    new Song ("Take It Easy", 'Eagles', 'Eagles'),
);

questionNumber1[2].push(
  new Song ('Controlla', 'Idealism', 'Rainy Evening'),
  new Song ('My New Love', 'Elijah Who', 'Gentle Boy'),
  new Song ('Jazzy Afternoon', 'LoFi Waiter', 'A Night In Tokyo'),
  new Song ('Affection', 'Jinsang', 'Life'),
  new Song ('Aruarian dance', 'Nujabes', 'Samurai Champloo Music Record: Departure'),
  new Song ('Le Jardin de Monsieur Monet', 'Stephan Moccio', 'Le Jardin de Monsieur Monet'),
  new Song ('A Recurring Theme', 'Cyril Mathews', 'A Recurring Theme'),
  new Song ('Bubbles', 'Michel Jean', 'Bubbles'),
  new Song ('Seine', 'Rosa Leoni', 'Moonray'),
  new Song ('Nordic Dream', 'Anders Linros', 'Nordic Dream'),
);
  
questionNumber1[3].push(
  new Song ('We Found Love', 'Rihanna and Calvin Harris', 'Talk That Talk'),
  new Song ('I Gotta Feeling', 'Black Eyed Peas', 'The E.N.D.'),
  new Song ('Bad Romance', 'Lady Gaga', 'The Fame Monster'),
  new Song ("We Can't Stop", 'Miley Cyrus', 'Bangerz'),
  new Song ("Despacito", 'Luis Fonsi, Daddy Yankee', 'Despacito'),
  new Song ("Uptown Funk", 'Bruno Mars', 'Uptown Special'),
  new Song ("Dynamite", 'BTS', 'Dynamite'),
  new Song ("Dance Monkey", 'Tones And I', 'Dance Monkey'),
  new Song ("Sugar", 'Maroon 5', 'V'),
);

questionNumber2[0].push(
  new Song ('Pumped Up Kicks', 'Foster The People', 'Pumped Up Kicks'),
  new Song ('Californiacation', 'Red Hot Chili Peppers', 'Californiacation'),
  new Song ('Santeria', 'Sublime', 'Gold'),
  new Song ('Semi-Charmed Life', 'Third Eye Blind', 'Third Eye Blind'),
  new Song ('Fly', 'Sugar Ray', 'Floored'),
  new Song ('California', 'Tchad Blake Mix', 'The Guest'),
  new Song ('River', 'Leon Bridges', 'Coming Home'),
  new Song ('Hold On', 'Alabama Shakes', 'Boys & Girls'),
  new Song ('Champagne Supernova', 'Oasis', 'Morning Glory'),
  new Song ('When You Were Young', 'The Killers', 'Hot Fuss'),
);

questionNumber2[1].push(
  new Song ('Rest of My Life', 'Parker McCollum', 'Rest of My Life'),
  new Song ('No Vacancy', 'Treaty Oak Revival', 'No Vacancy'),
  new Song ('Ride the Lightning', 'Warren Zeiders', 'Ride the Lightning'),
  new Song ('Teasure', 'Laci Kaye Booth', 'Laci Kaye Booth'),
  new Song ('Smile', 'ScarFace, Johnny P, 2Pac', 'Greatest Hits'),
  new Song ('Damn It Feels Good to Be a Gangsta', 'Geto Boys', 'Uncut Dope'),
  new Song ('Turn It Up', 'Chamillionaire, Lil Flip', 'The Sound of Revenge'),
  new Song ('Pocket Full of Stones', 'UGK', 'Best of UGK'),
  new Song ('Back Then', 'Mike Jones', 'Who Is Mike Jones?'),
);

questionNumber2[2].push(
  new Song ('Hell in a Handbag', 'Alyssa Micaela', 'Hell in a Handbag'),
  new Song ('Swervo', 'G Herbo, Southside', 'Swervo'),
  new Song ('All Night Longer', 'Sammy Adams', 'All Night Longer'),
  new Song ('Sorority Girl', 'Luke Brian', 'Spring Break... Here to Party'),
  new Song ('Doeses and Mimosas', 'Cherub', 'Year of the Caprese'),
  new Song ('What a Fool Believes', 'The Doobie Brothers', 'Minute By Minute'),
  new Song ('What You Thought You Need', 'Jack Johnson', 'Sleep Through The Static'),
  new Song ('Breathe', 'Pink FLoyd', 'The Dark Side of the Moon'),
  new Song ('Wake Me', 'Watchhouse', 'Haste Make/ Hard Hearted Stranger'),
  new Song ('Glimmer', 'Mako Road', 'The Green Superintendent'),
);
  
questionNumber2[3].push(
  new Song ('Dead Presidents II', 'JAY-Z', 'Reasonable Doubt'),
  new Song ('I Need a Girl Part II', 'Diddy', ' The Saga Continues'),
  new Song ('Big Poppa', 'The Notorious B.I.G.', 'Ready to Die'),
  new Song ('So Far Away', 'Carole King', 'In Concer'),
  new Song ('If I Ain\'t Got You', 'Alicia Keys', 'The Diary of Alicia Keys'),
  new Song ('Empire State Of Mind', 'Alicia Keys', 'The Blueprint 3'),
  new Song ('No Sleep Till Brooklyn', 'Beastie Boys', 'License To Ill'),
  new Song ('Welcome To New York', 'Taylor Swift', '1989'),
  new Song ('Back To Manhattan', 'Norah Jones', 'The Fall'),
  new Song ('I Love New York', 'Madonna', 'Confessions on a Dance Floor'),
);

questionNumber3[0].push(
  new Song ('I Say A Little Prayer You', 'Aretha Franklin', 'Aretha Now'),
  new Song ('Creedence Clearwater Revival', 'Born on the Bayou', 'Live in Europe'),
  new Song ('My Girl', 'The Temptations', 'The Temptations Sing Smokey'),
  new Song ('What\’s New Pussycat?', 'Tom Jones', 'What\’s New Pussycat?'),
  new Song ('My Cherie Amour', 'Stevie Wonder', 'My Cherie Amour'),
  new Song ('The Twist', 'Chubby Checker', 'Twist With Chubby Checker'),
  new Song ('Light My Fire', 'The Doors', 'The Doors'),
  new Song ('It\'s Now or Never', 'Elvis Presley With the Jordans', 'Elvis Is Back!'),
  new Song ('Margic Carpet Ride', 'Steppenwolf', 'The Second'),
  new Song ('Try A Little Tenderness', 'Otis Redding', 'Try A Little Tenderness'),
);

questionNumber3[1].push(
  new Song ('Dreams', 'Fleetwood Mac', 'Rumours'),
  new Song ('Sweet Emotion', 'Aerosmith', 'Toys in The Attic'),
  new Song ('Changes', 'David Bowie', 'Hunky Dory'),
  new Song ('What You Won’t Do For Love', 'Bobby Caldwell', 'Bobby Caldwell'),
  new Song ('Let’s Get It On', 'Marvin Gaye', 'Let\’s Get It On'),
  new Song ('Don\'t Stop \'til You Get Enough', 'Michael Jackson', 'Off The Wall'),
  new Song ('We Will Rock You', 'Queen', 'News of the World'),
  new Song ('Move On Up', 'Curtis Mayfield','Curtis'),
  new Song ('Y.M.C.A', 'Village People', 'Cruisin\''),
  new Song ('Lean on Me', 'Bill Withers', 'Still Bill'),
);

questionNumber3[2].push(
  new Song ('Celebration', 'Kool & The Gang', 'Celebrate!'),
  new Song ('Could You Be Loved', 'Bob Marley & The Wailers', 'Uprising'),
  new Song ('Whip It', 'Devo', 'Freedom Of Choice'),
  new Song ('Never Too Much', 'Luther Vandross', 'Never Too Much'),
  new Song ('Waiting For A Girl Like You', 'Foreigner', '4'),
  new Song ('Take Me On', 'a-ha', 'Hunting High and Low'),
  new Song ('Don\'t Stop Believin\'', 'Journey', 'Escape'),
  new Song ('Walk Like an Egyptian', 'The Bangles', 'Different Light'),
  new Song ('Sweet Dreams (Are Made of This)', 'Eurythmics', 'Sweet Dreams (Are Made of This)'),
  new Song ('Here I Go Again', 'Whitesnake', 'Saints & Sinners'),
);

questionNumber3[3].push(
  new Song ('Wannabe', 'Spice Girls', 'Spice',),
  new Song ('Wonderwall', 'Oasis', 'What\’s the Story Morning Glory?',),
  new Song ('Man in The Box', 'Alice in Chains', 'Facelift'),
  new Song ('Creep', 'TLC', 'Ooooooohhh… On the TLC Tip',),
  new Song ('California Love', 'Tupac Shakur', 'All Eyes on Me',),
  new Song ('Smells Like Teen Spirit', 'Nirvana', 'Nevermnind'),
  new Song ('Creep', 'Radiohead', 'Creep'),
  new Song ('I Want It That Way', 'Backstreet Boys', 'Millennium'),
  new Song ('This Is How We Do It', 'Montell Jordan', 'This Is How We Do It'),
  new Song ('Enter The Sandman', 'Metallica', 'Metallica'),
);

questionNumber3[4].push(
  new Song ('In Da Club', '50 Cent', 'Get Rich or Die Tryin’',),
  new Song ('Party Up', 'DMX', '… And Then There Was X', ),
  new Song ('She Will Be Loved', 'Maroon 5', 'Songs About Jane', ),
  new Song ('Sugar, We’re Going Down', 'Fall Out Boy', 'From Under the Cork Tree', ),
  new Song ('Hott in Herre', 'Nelly', 'Nellyville', ),
  new Song ('Toxic', 'Britney Spears', 'In The Zone'),
  new Song ('Lose Control', 'Missy Elliot', 'The Cookbook'),
  new Song ('Drop It Like It\'s Hot', 'Snoop Dogg', 'R&G (Rhythm & Gangsta): The Masterpiece'),
  new Song ('Ms. Jackson', 'Outcast', 'Ms. Jackson / Sole Sunday'),
  new Song ('Electric Feel', 'MGMT', 'Ocular Spectacular'),
);

questionNumber4[0].push(
  new Song ('If I Could Fly', 'One Direction', 'Made in the A.M.'),
  new Song ('September', 'Earth, Wind & Fire', 'The Best of Earth, Wind & Fire, Vol'),
  new Song ('Only Exception', 'Paramore', 'Brand New Eyes'),
  new Song ('Maps', 'Yeah Yeah Yeahs', 'Fever to Tell'),
  new Song ('Ho Hey', 'Lumineers', 'The Lumineers'),
  new Song ('Hello', 'Adele', '25'),
  new Song ('Gone Til November', 'Wyclef Jean', 'Wyclef Jean Presents The Carnival'),
  new Song ('Harvest Moon', 'Neil Young', 'Harvest Moon'),
  new Song ('November Rain', 'Guns N\' Roses', 'Use Your Illusion I'),
  new Song ('L\'autunno violin concerto', 'Antonio Vivaldi', 'The Four Seasons'),
);

questionNumber4[1].push(
  new Song ('Hey There Delilah', 'Plain White T\’s', 'All That We Needed and Every Second Counts'),
  new Song ('OTW', 'Khalid', 'OTW'),
  new Song ('What Do You Mean', 'Justin Bieber', 'Purpose'),
  new Song ('Infinity Guitars', 'Sleigh Bells', 'Treats'),
  new Song ('Closer', 'The Chainsmokers, Halsey', 'Collage'),
  new Song ('Beautiful Day', 'U2', 'All That You Can\'t Leave Behind'),
  new Song ('All Star', 'Smash Mouth', 'Astro Lounge'),
  new Song ('Happy', 'Pharrell Williams', 'Happy'),
  new Song ('It Might As Well Be Spring', 'Frank Sinatra', 'It Might As Well Be Spring'),
  new Song ('Here Comes The Sun', 'The Beatles', 'Abbey Road'),
);

questionNumber4[2].push(
  new Song ('Shape Of You', 'Ed Sheeran', '+'),
  new Song ('This is What You Came For', 'Calvin Harris', 'This is What You Came For'),
  new Song ('Zanzibar', 'Kamaliza', 'Zanzibar'),
  new Song ('Essence', 'WizKid', 'Made in Lagos'),
  new Song ('BeatBox', 'SpotemGottem', 'Beat Box'),
  new Song ('Despacito', 'Luis Fonsi', 'Despacito'),
  new Song ('Say So', 'Doja Cat', 'Hot Pink'),
  new Song ('One Dance', 'Drake', 'Views'),
  new Song ('Lovely Day', 'Bill Withers', 'Menagerie'),
  new Song ('All The Small Things', 'Blink 180', 'Enema Of The State'),
);

questionNumber5[0].push(
  new Song ('STAY', 'The Kid LAROI, Justin Bieber', 'F*CK LOVE 3: OVER YOU'),
  new Song ('Low', 'Flo Rida, T-Pain', 'Mail on Sunday'),
  new Song ('Because You Move Me', 'Tinlicker, Helsloot', 'Because You Move'),
  new Song ('One Dance', 'Drake', 'One Dance'),
  new Song ('Bad Guy','Billie Eilish', 'When We All Fall Asleep, Where Do We Go'),
  new Song ('My Ex\'s Best Friend', 'Machine Gun Kelly, blackbear', 'Ticket\'s To My DownFall'),
  new Song ('See You Again', 'Wiz Khalifa, Charlie Puth', 'See You Again'),
  new Song ('Leave the Door Open', 'Silk Sonic', 'Uptown Special'),
  new Song ('Gangnam Style', 'PSY', 'Gangnam Style'),
  new Song ('Roar','Katy Perry', 'Prism'),
);

questionNumber5[1].push(
  new Song ('Butter', 'BTS','n/a'),
  new Song ('Stronger', 'Kanye West','Graduation'),
  new Song ('Crazy In Love', 'Beyonce & Jay-Z','Dangerously In LoveDrake'),
  new Song ('Wants and Needs','Drake & Lil Baby','Scary Hours 2'),
  new Song ('Fireworks','ATEEZ','ZERO: FEVER Part.2Fac'),
  new Song ('GIRL', 'Marren Morris', 'Girl'),
  new Song ('Love Me Like You Do', 'Ellie Goulding', 'Delirium'),
  new Song ('Earned It', 'The Weeknd', 'Beauty Behind The Madness'),
  new Song ('Need To Know', 'Doja Cat', 'Planet Her'),
  new Song ('Invincible','Pop Smoke', 'Meet The Woo 2'),
);

questionNumber5[2].push(
  new Song ('Jail','Kanye West','Donda'),
  new Song ('INDUSTRY BABY','Lil Nax X, Jack Harlow','INDUSTRY BABY & Jack Harlows'),
  new Song ('Bad Habits','Ed Sheeran','Bad Habits'),
  new Song ('Pepas','Farruko','Pepas'),
  new Song ('good 4 u','Olivia Rodrigo','SOUR'),
  new Song ('Montero', 'Lil Nas X', 'Montero(Call Me By Your Name)'),
  new Song ('Astronaut In The Ocean', 'Masked Wolf', 'Astronaut In The Ocean'),
  new Song ('Back In Blood', 'Pooh Shiesty, Lil Durk', 'Back In Blood'),
  new Song ('Drivers License', 'Olivia Rodrigo', 'Sour'),
  new Song ('Up','Cardi B', 'Up'),
);

questionNumber5[3].push(
  new Song ('Bring It','Cobra Starship','While the City Sleeps, We Rule the Streets'),
  new Song ('1985','bowling for Soup','A Hangover You Don\'t Deserve'),
  new Song ('One Week','Barenaked Ladies','Stunt'),
  new Song ('Misery Business','Paramore','Riot'),
  new Song ('Facedown','The Red Jumpsuit Apparatus','Don\'t You Fake It'),
  new Song ('All the Small Things', 'blink-182', 'Enema of the State'),
  new Song ('Ocean Avenue', 'Yellow Card', 'Ocean Avenue'),
  new Song ('Teenagers', 'My Chemical Romance', 'The Black Parade'),
  new Song ('Swing Swing', 'The All-American Rejects', 'The All-American Rejects'),
  new Song ('In the End','Linkin Park', 'Hybrid Theory'),
);

questionNumber6[0].push(
  new Song("My Heart Will Go On", "Celine Dion", "Titanic"),
  new Song("Hymn to The Sea", "James Hornes", "Titanic"),
  new Song("My Heart Will Go On", "Celine Dion", "Titanic"),
);
  
questionNumber6[1].push(
  new Song("Cornfield Chase’, ‘Hans Zimmer’, ‘Interstellar"),
  new Song("No Time for Caution", "Hans Zimmer", "Interstellar"),
  new Song("S.T.A.Y.", "Hans Zimmer", "Interstellar"),
  new Song("Mountains", "Hans Zimmer", "Interstellar"),
  new Song("Dreaming of the Crash", "Hans Zimmer", "Interstellar")
);
  
questionNumber6[2].push(
  new Song(
    "You’re the One That I Want",
    "John Travolta, Olivia Newton-John",
    "Grease"
  ),
  new Song(
    "Hopelessly Devoted to You",
    "John Travolta, Olivia Newton-John",
    "Grease"
  ),
  new Song(
    "Summer Nights",
    "John Travolta, Olivia Newton-John",
    "Grease"
  )
);
  
questionNumber6[3].push(
  new Song("Lose Yourself", "Eminem", "8 Mile"),
  new Song("8 Mile", "Eminem", "8 Mile"),
  new Song("Rap Game", "D12", "8 Mile"),
  new Song("Wanksta", "50 Cent", "8 Mile"),
  new Song("Rabbit Run", "Eminem", "8 Mile")
);
  
questionNumber6[4].push(
  new Song("You’ll be in my Heart", "Phil Collins", "Tarzan"),
  new Song("Two Worlds", "Phil Collins", "Tarzan"),
  new Song("Strangers Like Me", "Phil Collins", "Tarzan"),
);
  
questionNumber6[5].push(
  new Song("Edge of Seventeen", "Stevie Nicks", "School of Rock"),
  new Song("Iron Man", "Black Sabbath", "School of Rock"),
  new Song("Back in Black", "AC/DC", "School of Rock"),
  new Song("Highway to Hell", "AC/DC", "School of Rock"),
  new Song("Touch Me", "The Doors", "School of Rock")
);
  
questionNumber6[6].push(
  new Song("You Never Can Tell", "Chuck Berry", "Pulp Fiction"),
  new Song("Dancing Queen", "ABBA", "Pulp Fiction"),
  new Song("Satisfied Mind", "Johnny Cash", "Pulp Fiction"),
  new Song("You Never Can Tell", "Chuck Berry", "Pulp Fiction"),
  new Song("For What it's Worth", "Buffalo Springfield", "Pulp Fiction"),
  new Song("California Dreamin'", "The Mamas & The Papas", "Pulp Fiction"),
);
  
questionNumber6[7].push(
  new Song(
    "Mr. Blue Sky",
    "Electric Light Orchestra",
    "Guardians of the Galaxy"
  ),
  new Song(
    "Lake Shore Drive",
    "Aliotta Haynes Jeremiah",
    "Guardians of the Galaxy"
  ),
  new Song("The Chain", "Fleetwood Mac", "Guardians of the Galaxy"),
  new Song("Fox on the Run", "Sweet", "Guardians of the Galaxy"),
  new Song("Cherry Bomb", "The Runaways", "Guardians of the Galaxy"),
  new Song(
    "Ain't No Mountain High Enough",
    "Marvin Gaye, Tammi Terrel",
    "Guardians of the Galaxy"
  ),
  new Song(
    "Come a Little Bit Closer",
    "Jay & The Americans",
    "Guardians of the Galaxy"
  ),
  new Song("Wham Bam Shang-A-Lang", "Silver", "Guardians of the Galaxy"),
  new Song("Flash Light", "Parliament", "Guardians of the Galaxy"),
  new Song(
    "Hooked on a Feeling",
    "Blue Swede, Bjorn Skifs",
    "Guardians of the Galaxy"
  ),
  new Song("O-o-h Child", "The Five Stairsteps", "Guardians of the Galaxy"),
);
  
questionNumber6[8].push(
  new Song("Don’t You (Forget About Me)", "Simple Minds", "The Breakfast Club"),
  new Song("We Are Not Alone", "Karla Devito", "The Breakfast Club"),
  new Song("Fire in the Twilight", "Wang Chung", "The Breakfast Club"),
  new Song("Waiting", "E.G. Daily", "The Breakfast Club")
);
  
questionNumber6[9].push(
  new Song('Shallow', 'Lady Gaga, Bradley Cooper', 'A Star is Born'),
  new Song("Always Remember Us This Way", "Lady Gaga, Bradley Cooper", "A Star is Born"),
  new Song("Black Eyes", "Bradley Cooper", "A Star is Born"),
  new Song("La Vie En Rose", "lady gaga", "A Star is Born"),
  new Song('Shallow', 'Lady Gaga, Bradley Cooper', 'A Star is Born'),
);

getFromLocalStorage();
highlightImg();