// *Grab dom elements
const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")


const audio = new Audio("./bells.mp3")
// const currentTime = 0
// const playSound = () => new Audio("./bells.mp3");

playBtn.addEventListener("click", () => {
  // audio.currentTime
  audio.play()
})

pauseBtn.addEventListener("click", () => {
  audio.pause();
})

stopBtn.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0
})








// audio.play();
// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).
// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.
