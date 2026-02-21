/* fairy cursor */
const fairy = document.createElement("div");
fairy.className = "fairy-cursor";
document.body.appendChild(fairy);

document.addEventListener("mousemove", e => {
  if (window.innerWidth < 768) return;

  fairy.style.left = e.clientX + "px";
  fairy.style.top = e.clientY + "px";

  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = e.clientX + "px";
  sparkle.style.top = e.clientY + "px";
  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 600);
});

/* blessing or curse */

const blessingBtn = document.getElementById("blessing-btn");
const bcModal = document.getElementById("bc-modal");
const bcResult = document.getElementById("bc-result");
const bcClose = document.getElementById("bc-close");

const blessings = [
  "You will find a hidden opportunity soon.",
  "Your next stream will attract someone important.",
  "A creative idea will bloom unexpectedly."
];

const curses = [
  "Your tea will go cold before you sip it.",
  "A minor inconvenience will test your patience.",
  "You will forget why you entered a room."
];

blessingBtn.addEventListener("click", () => {
  const isBlessing = Math.random() < 0.5;
  const result = isBlessing
    ? blessings[Math.floor(Math.random() * blessings.length)]
    : curses[Math.floor(Math.random() * curses.length)];

  bcResult.textContent = result;
  bcModal.classList.add("active");
});

bcClose.addEventListener("click", () => {
  bcModal.classList.remove("active");
});

 /* theme toggle */

const themeBtn = document.getElementById("theme-toggle");
const html = document.documentElement;

themeBtn.addEventListener("click", () => {
  const current = html.dataset.theme;
  const newTheme = current === "day" ? "night" : "day";

  html.dataset.theme = newTheme;

  themeBtn.textContent = newTheme === "day" ? "☀️" : "🌙";
});


/* ambient audio */

const audio = document.getElementById("forest-audio");
const audioBtn = document.getElementById("audio-toggle");

audio.volume = 0.3;

audioBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    audioBtn.textContent = "🔇";
  } else {
    audio.pause();
    audioBtn.textContent = "🔊";
  }
});


