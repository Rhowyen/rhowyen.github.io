/* Fairy cursor (Navi) */
let mouseX = 0;
let mouseY = 0;

const sparkles = [];

const cursor = document.createElement("div");
cursor.classList.add("fairy-cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Move cursor
  cursor.style.left = mouseX + "px";
  cursor.style.top = mouseY + "px";

  // Create sparkle
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = mouseX + "px";
  sparkle.style.top = mouseY + "px";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 950);
});

/* Blessing */
const blessings=[
"You gain radiant forest luck.",
"A hidden ally appears.",
"Your energy is restored.",
"Your next stream will be unexpectedly successful."
];

const curses=[
"A shadow lingers.",
"You misplace something small.",
"Minor chaos approaches.",
"You will stub your toe in 57 hours."
];

const blessingBtn=document.getElementById("blessing-btn");
const bcModal=document.getElementById("bc-modal");
const bcResult=document.getElementById("bc-result");
const bcClose=document.getElementById("bc-close");

blessingBtn.onclick=()=>{
const pool=Math.random()<0.5?blessings:curses;
bcResult.textContent=pool[Math.floor(Math.random()*pool.length)];
bcModal.style.display="flex";
};

bcClose.onclick=()=>bcModal.style.display="none";

/* Theme */
const themeBtn=document.getElementById("theme-toggle");
themeBtn.onclick=()=>{
const html=document.documentElement;
html.dataset.theme=html.dataset.theme==="day"?"night":"day";
};

/* Audio */
const audio=document.getElementById("forest-audio");
audio.volume=0.3;
document.getElementById("audio-toggle").onclick=()=>{
audio.paused?audio.play():audio.pause();
};

/* Discord Theme Sync */

const discordFrame = document.querySelector(".discord-container iframe");

function updateDiscordTheme(){
  const theme = document.documentElement.dataset.theme === "day" ? "light" : "dark";
  const serverID = "1219428215546712117";

  discordFrame.src = `https://discord.com/widget?id=${serverID}&theme=${theme}`;
}

updateDiscordTheme();

document.getElementById("theme-toggle").addEventListener("click", () => {
  setTimeout(updateDiscordTheme, 100);
});

// Twitch Live Detection

document.addEventListener("DOMContentLoaded", function () {

  const statusText = document.querySelector(".status");
  const offlineBanner = document.getElementById("offline-banner");
  const twitchContainer = document.getElementById("twitch-embed");

  if (!statusText || !offlineBanner || !twitchContainer) return;

  // Load Twitch Embed Script
  const twitchScript = document.createElement("script");
  twitchScript.src = "https://embed.twitch.tv/embed/v1.js";
  twitchScript.onload = initTwitch;
  document.body.appendChild(twitchScript);

  function initTwitch() {

    const embed = new Twitch.Embed("twitch-embed", {
      width: "100%",
      height: 480,
      channel: "dango_rangus",
      layout: "video",
      autoplay: false,
      muted: true,
      parent: ["rhowyen.github.io"]
    });

    embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
      const player = embed.getPlayer();

      // When stream actually starts playing → assume LIVE
      player.addEventListener(Twitch.Player.PLAY, () => {
        goLive();
      });

      // If stream stops → assume OFFLINE
      player.addEventListener(Twitch.Player.ENDED, () => {
        goOffline();
      });
    });
  }

  function goLive() {
    offlineBanner.style.display = "none";
    twitchContainer.style.display = "block";
    statusText.textContent = "Currently: Live";
    statusText.dataset.live = "true";
  }

  function goOffline() {
    twitchContainer.style.display = "none";
    offlineBanner.style.display = "block";
    statusText.textContent = "Currently: Offline";
    statusText.dataset.live = "false";
  }

});








