function Onload() {
  const audioSource = document.getElementById("myAudio");
  audioSource.play();
}

function Play() {
  const audioSource = document.getElementById("myAudio");
  audioSource.play();
}

function Pause() {
  const audioSource = document.getElementById("myAudio");
  audioSource.pause();
}

function TimeUpdate() {
  const audioSource = document.getElementById("myAudio");
  const t = Math.floor(audioSource.currentTime);
  document.getElementById("CurrentTime").innerHTML = t + " sec";
}
