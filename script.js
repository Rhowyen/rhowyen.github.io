document.addEventListener("DOMContentLoaded", () => {

  // ---------------- Blessing & Curse ----------------
  const blessings = [
    "You gain radiant forest luck. Your next quest succeeds.",
    "A hidden ally reveals themselves soon.",
    "Your energy is restored by unseen forces."
  ];

  const curses = [
    "A minor inconvenience stalks your week.",
    "You will misplace something small but important.",
    "A shadow lingers in your next decision.",
    "Sucks to suck yo"
  ];

  const blessingBtn = document.getElementById("blessing-btn");
  const modal = document.getElementById("bc-modal");
  const result = document.getElementById("bc-result");
  const closeBtn = document.getElementById("bc-close");

  blessingBtn?.addEventListener("click", () => {
    const list = Math.random() < 0.5 ? blessings : curses;
    result.textContent = list[Math.floor(Math.random() * list.length)];
    modal.classList.add("active");
  });

  closeBtn?.addEventListener("click", () => modal.classList.remove("active"));
  modal?.addEventListener("click", e => { if(e.target===modal) modal.classList.remove("active"); });

  // ---------------- Theme Toggle ----------------
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle?.addEventListener("click", () => {
    const html = document.documentElement;
    const isDay = html.dataset.theme === "day";
    html.dataset.theme = isDay ? "night" : "day";
    themeToggle.textContent = isDay ? "🌙" : "☀️";
  });

  // ---------------- Audio Toggle ----------------
  const audio = document.getElementById("forest-audio");
  const audioToggle = document.getElementById("audio-toggle");
  audioToggle?.addEventListener("click", async () => {
    if(audio.paused){ await audio.play(); audioToggle.textContent="🔇"; }
    else{ audio.pause(); audioToggle.textContent="🔊"; }
  });

  // ---------------- Fairy Cursor ----------------
  const cursor = document.createElement("img");
  cursor.src = "assets/pics/cursor.png";
  cursor.style.position="fixed";
  cursor.style.pointerEvents="none";
  cursor.style.width="40px";
  cursor.style.zIndex="3000";
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    const sparkle = document.createElement("div");
    sparkle.style.position="fixed";
    sparkle.style.left = e.clientX+"px";
    sparkle.style.top = e.clientY+"px";
    sparkle.style.width = "6px";
    sparkle.style.height = "6px";
    sparkle.style.background="#9ad47f";
    sparkle.style.borderRadius="50%";
    sparkle.style.opacity="1";
    sparkle.style.pointerEvents="none";
    sparkle.style.transition="0.6s ease";
    document.body.appendChild(sparkle);

    setTimeout(()=>{ sparkle.style.opacity="0"; sparkle.remove(); },600);
  });

  // ---------------- Fireflies ----------------
  const canvas = document.getElementById("fireflies");
  const ctx = canvas.getContext("2d");

  function resize(){ canvas.width=window.innerWidth; canvas.height=window.innerHeight; }
  resize();
  window.addEventListener("resize", resize);

  const fireflies = Array.from({length:40}).map(()=>({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*2+1,
    dx:(Math.random()-0.5)*0.5,
    dy:(Math.random()-0.5)*0.5
  }));

  function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    fireflies.forEach(f=>{
      f.x+=f.dx; f.y+=f.dy;
      ctx.beginPath();
      ctx.arc(f.x,f.y,f.r,0,Math.PI*2);
      ctx.fillStyle="rgba(154,212,127,0.7)";
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  animate();
});
