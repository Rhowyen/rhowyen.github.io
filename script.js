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
  }, 400);
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
  const serverID = "YOUR_SERVER_ID";

  discordFrame.src = `https://discord.com/widget?id=${serverID}&theme=${theme}`;
}

updateDiscordTheme();

document.getElementById("theme-toggle").addEventListener("click", () => {
  setTimeout(updateDiscordTheme, 100);
});




