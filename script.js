const playlist = [
  { title: "Musique 1", url: "musique1.mp3" },
  { title: "Musique 2", url: "musique2.mp3" }
];

const audio = document.getElementById("audio");
const playlistElement = document.getElementById("playlist");

playlist.forEach((song, index) => {
  const li = document.createElement("li");
  li.textContent = song.title;
  li.addEventListener("click", () => {
    audio.src = song.url;
    audio.play();
  });
  playlistElement.appendChild(li);
});
