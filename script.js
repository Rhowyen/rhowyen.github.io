/* theme toggle */

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const newTheme = current === "day" ? "night" : "day";
  document.documentElement.setAttribute("data-theme", newTheme);
});

/* audio toggle */

const audio = document.getElementById("forest-audio");
const audioBtn = document.getElementById("audio-toggle");

audioBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    audioBtn.textContent = "ambience: on";
  } else {
    audio.pause();
    audioBtn.textContent = "ambience: off";
  }
});

/* blessing system */

const modal = document.createElement("div");
modal.id = "bc-modal";

modal.innerHTML = `
  <div class="modal-content">
    <h2 id="bc-result"></h2>
    <button id="bc-close">close</button>
  </div>
`;

document.body.appendChild(modal);

document.querySelectorAll(".blessing-curse-btn").forEach(btn => {
  btn.addEventListener("click", () => {
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

/* modal close */

document.addEventListener("click", e => {
  if (e.target.id === "bc-close" || e.target.id === "bc-modal") {
    modal.classList.remove("active");
  }
});

/* streams collapse */

const streamsToggle = document.querySelector(".streams-toggle");
const streamsContent = document.querySelector(".streams-content");

streamsToggle.addEventListener("click", () => {
  streamsContent.classList.toggle("active");
});

/* fairy cursor movement */

const fairy = document.querySelector(".fairy-cursor");

document.addEventListener("mousemove", (e) => {
  fairy.style.left = e.clientX + "px";
  fairy.style.top = e.clientY + "px";

  createSparkle(e.clientX, e.clientY);
});

function createSparkle(x, y) {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = x + "px";
  sparkle.style.top = y + "px";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 600);
}



