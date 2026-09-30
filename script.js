let button = document.getElementById("song-button");
let nextBtn = document.getElementById("nextBtn");
let index = 0;

async function loadSongs() {
  let response = await fetch("https://student-data-api.ashantilemonia.workers.dev/api/v1/datasets/viral-50-usa/records?limit=10");
  console.log("Status: " + response.status);
  let data = await response.json();
  let songs = data.records;
  let song = songs[index];
  document.getElementById("track-name").textContent = song["Track Name"];
  document.getElementById("track-facts").textContent = "#" + song.Position + " — " + song.Artist;

  

}


button.addEventListener("click", function () {
  loadSongs();
});

nextBtn.addEventListener("click", function () {
  index = index + 1;
  loadSongs();
});