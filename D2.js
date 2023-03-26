function fetchAlbum(string) {
    return fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + string)
    .then(response => response.json())
    .then(response =>response.data);
    
}
function search(){
    let ValRicerca = document.getElementById('searchField').value;
    console.log(ValRicerca);
    let resultRow = document.getElementById('resultsRow');
    let listaCanzoni = document.getElementById('canzoni');
    listaCanzoni.innerHTML = '';
    resultRow.innerHTML = '';
    fetchAlbum(ValRicerca)
    .then(songs=>{songs.forEach(song => {
      let card = createCard(song);
        resultRow.appendChild(card);
        let newCanzone = document.createElement('li');
        newCanzone.innerText = song.title;
        listaCanzoni.appendChild(newCanzone);
    })})
}
function createCard(song){
    console.log(song);
    let colSongs = document.createElement('div');
    colSongs.classList.add('col');
    let cardSong = document.createElement('div');
    cardSong.classList.add('card','mb-4');
    let imgSong = document.createElement('img');
    imgSong.src = song.album.cover_medium;
    imgSong.classList.add('img-fluid');
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body','bg-dark');
    let title = document.createElement('h6');
    title.classList.add('card-title','text-truncate');
    title.innerText = song.title;
    cardBody.appendChild(title)
    cardSong.append(imgSong, cardBody);
    colSongs.appendChild(cardSong);
    return colSongs;
}
function mostraTitoli(){
    let titoli = document.getElementsByClassName('modal-body');
}