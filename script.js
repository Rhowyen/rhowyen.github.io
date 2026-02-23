/* Fairy cursor (Navi) */
const cursor = document.createElement("div");
cursor.className = "fairy-cursor"; 
document.body.appendChild(cursor);

const sparkles = []; // array to hold sparkles

// handle mouse position
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

document.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // create a new sparkle
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = mouseX + "px";
  sparkle.style.top = mouseY + "px";
  document.body.appendChild(sparkle);
  sparkles.push(sparkle);

  // remove sparkle after 0.5s
  setTimeout(() => {
    sparkle.remove();
    sparkles.shift();
  }, 500);
});

// animate cursor
function animateCursor() {
  cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  requestAnimationFrame(animateCursor);
}

animateCursor();

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

function resize(){canvas.width=innerWidth;canvas.height=innerHeight;}
resize();
window.onresize=resize;

let flies=Array.from({length:30},()=>({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2+1,
dx:(Math.random()-0.5)*0.3,
dy:(Math.random()-0.5)*0.3
}));

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
flies.forEach(f=>{
f.x+=f.dx;
f.y+=f.dy;
ctx.beginPath();
ctx.arc(f.x,f.y,f.r,0,Math.PI*2);
ctx.fillStyle="rgba(255,255,180,0.8)";
ctx.fill();
});
requestAnimationFrame(animate);
}
animate();

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

