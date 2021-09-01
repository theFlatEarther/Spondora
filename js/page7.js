'use strict';
function generatePlayList() {
    const ulEle = document.getElementById('savedLists')
    ulEle.innerHTML = '';
    for (let song of Song.recommendedPlayList) {
      const liEle = document.createElement('li')
      liEle.textContent = `${song.name} by ${song.artist}. Album ${song.album}.`;
      console.log()
      ulEle.appendChild(liEle);
    }
  }

  generatePlayList()