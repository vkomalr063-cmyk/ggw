document.addEventListener("DOMContentLoaded", function () {

  const bgMusic = document.getElementById("bgMusic");
  bgMusic.volume = 0.5;

  const playMusicBtn = document.getElementById("playMusicBtn");
  const roseBtn = document.getElementById("roseBtn");
  const surpriseBtn = document.getElementById("surpriseBtn");
  const surpriseMessage = document.getElementById("surpriseMessage");

  function playMusic() {
    bgMusic.play().catch(e => console.log(e));
  }

  playMusicBtn.addEventListener("click", playMusic);
  roseBtn.addEventListener("click", playMusic);

  surpriseBtn.addEventListener("click", function () {
    surpriseMessage.classList.remove("hidden");
    surpriseMessage.classList.add("fade-in");
  });
});
