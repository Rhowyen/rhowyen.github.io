/* audio toggle */
const audio = document.getElementById("forest-audio");
const audioBtn = document.getElementById("audio-toggle");

audioBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.volume = 0.3;
    audio.play();
    audioBtn.textContent = " ambience: on";
  } else {
    audio.pause();
    audioBtn.textContent = " ambience: off";
  }
});

/* theme toggle */
const themeBtn = document.getElementById("theme-toggle");
const html = document.documentElement;

themeBtn.addEventListener("click", () => {
  const isNight = html.dataset.theme === "night";
  html.dataset.theme = isNight ? "day" : "night";
  themeBtn.textContent = isNight ? "Dark Mode" : "Light Mode";

  setTimeout(updateDiscordTheme, 50);
});

/* discord theme */
const discordIframe = document.getElementById("discord-iframe");
function updateDiscordTheme() {
  const theme = html.dataset.theme === "day" ? "light" : "dark";
  const baseSrc = "https://discord.com/widget?id=1219428215546712117";
  discordIframe.src = `${baseSrc}&theme=${theme}`;
}

/* collapse sections */
document.querySelectorAll(".collapse-toggle").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.classList.toggle("active");
  });
});

/* ---------- Blessing or Curse Buttons ---------- */
document.querySelectorAll(".blessing-curse-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const result = Math.random() < 0.5 ? "The heavens shine upon you, my darling ✨" : "oh damn cursed... better luck next time ⚡";
    alert(result);
    const blessings = [
      "A gentle fortune finds you.",
      "The forest protects you.",
      "Your creativity burns bright."
    ];

    const curses = [
      "The lantern flickers ominously.",
      "A whisper follows you home.",
      "Something watches from the trees."
    ];

    const result = Math.random() < 0.5
      ? blessings[Math.floor(Math.random() * blessings.length)]
      : curses[Math.floor(Math.random() * curses.length)];

    document.getElementById("bc-result").textContent = result;
    modal.classList.add("active");
  });
});

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

