/* ---------- Ambient Audio ---------- */
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

/* ---------- Theme Toggle ---------- */
const themeBtn = document.getElementById("theme-toggle");
const html = document.documentElement;

themeBtn.addEventListener("click", () => {
  const isNight = html.dataset.theme === "night";
  html.dataset.theme = isNight ? "day" : "night";
  themeBtn.textContent = isNight ? "Light Mode" : "Dark Mode";
  setTimeout(updateDiscordTheme, 50);
});

/* ---------- Collapsible About ---------- */
document.querySelectorAll(".collapse-toggle").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

/* ---------- Twitch Live Detection ---------- */
fetch("https://decapi.me/twitch/uptime/rhowyen")
  .then(res => res.text())
  .then(text => {
    const status = document.querySelector(".status");
    const banner = document.getElementById("offline-banner");
    const twitchBtn = document.getElementById("twitchBtn");
    const youtubeBtn = document.getElementById("youtubeBtn");

    const isLive = !text.toLowerCase().includes("offline");

    if (isLive) {
      status.dataset.live = "true";
      status.textContent = "🔴 Live on Twitch";
      banner.style.display = "none";

      [twitchBtn, youtubeBtn].forEach(btn => {
        if (btn) btn.classList.add("live-glow", "live-float");
      });
    }
  }).catch(() => console.warn("Twitch status check failed"));

/* ---------- Sparkle Trail ---------- */
document.addEventListener("mousemove", e => {
  if (window.innerWidth < 768) return;

  const sparkle = document.createElement("span");
  sparkle.classList.add("sparkle");
  sparkle.textContent = "✦";
  sparkle.style.color = "#86efac";
  sparkle.style.textShadow = "0 0 6px #4ade80, 0 0 12px #22c55e";
  sparkle.style.left = (e.clientX + 14) + "px";
  sparkle.style.top = (e.clientY + 14) + "px";
  sparkle.style.opacity = "1";

  document.body.appendChild(sparkle);

  requestAnimationFrame(() => {
    sparkle.style.opacity = "0";
    sparkle.style.transform = "translateY(-12px)";
  });

  setTimeout(() => sparkle.remove(), 600);
});

/* ---------- Discord Widget Toggle (Mobile) ---------- */
const discordToggle = document.querySelector(".discord-toggle");
const discordWidget = document.querySelector(".discord-widget");

discordToggle.addEventListener("click", () => {
  discordWidget.classList.toggle("open");
  discordToggle.textContent = discordWidget.classList.contains("open") ? " Hide Community" : " Join the Community";
});

/* ---------- Sync Discord Theme ---------- */
const discordIframe = document.getElementById("discord-iframe");

function updateDiscordTheme() {
  const theme = html.dataset.theme === "day" ? "light" : "dark";
  const baseSrc = "https://discord.com/widget?id=1219428215546712117";
  discordIframe.src = `${baseSrc}&theme=${theme}`;
}

updateDiscordTheme();


/* ---------- Blessing or Curse Buttons ---------- */
document.querySelectorAll(".blessing-curse-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const result = Math.random() < 0.5 ? "The heavens shine upon you, my darling ✨" : "oh damn cursed... better luck next time ⚡";
    alert(result);
  });
});




