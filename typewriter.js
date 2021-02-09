"use strict";
let nthChar = 0;
let text = null;
let textLength = null;
document.querySelector("#typewriter").classList.add("hidden");
document.querySelector("button").addEventListener("click", init);

function init() {
  document.querySelector("#typewriter").classList.remove("hidden");
  text = document.querySelector(".typewritten").textContent;
  text = text.trim();
  document.querySelector(".typewritten").textContent = "";
  loop();
}

function loop() {
  const container = document.querySelector(".typewritten");
  const textLength = text.substring().length;
  container.textContent = text.substring(0, nthChar + 1);

  if (nthChar + 1 < textLength) {
    nthChar++;
    rndTimer();
  } else if (textLength == text.length) {
    document.querySelector("#typelast").play();
    setTimeout(timeoutRestart, 600);
  }
  rndSound();
}

function rndTimer() {
  const rndTime = Math.floor(Math.random() * 3 + 3) * 80;
  setTimeout(loop, rndTime);
  console.log(rndTime);
}

function rndSound() {
  const rndSound = Math.floor(Math.random() * 2) + 1;
  const spaceIdentifier = text.substring().charAt(nthChar);
  let sound = null;
  if (spaceIdentifier === " ") {
    sound = document.querySelector("#typespace");
  } else {
    sound = document.querySelector("#typekey" + rndSound);
  }

  sound.play();
  sound.currentTime = 0;
  sound.volume = 0.1;
}

function timeoutRestart() {
  setTimeout(restartTypewriter, 600);
}

function restartTypewriter() {
  nthChar = 0;
  text = null;
  textLength = null;
  document.querySelector("#typewriter").classList.add("hidden");
  document.querySelector("button").addEventListener("click", init);
}
