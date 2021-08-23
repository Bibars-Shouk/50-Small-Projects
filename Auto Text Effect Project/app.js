const textEl = document.querySelector(".text span");
const speedController = document.querySelector("#speedController");

const slogans = [
  "I am a programmer.",
  "I do NOT get enough sleep.",
  "I work really hard.",
  "Do NOT ask me to fix your computer.",
];
let charNdx = 0;
let sloganNdx = 0;
let speed = 1;
playEffect();

speedController.addEventListener("input", (e) => {
  speed = +e.target.value;
});

function playEffect() {
  setTimeout(() => {
    if (charNdx !== slogans[sloganNdx].length) {
      textEl.innerHTML += pushChar();
      charNdx++;
    } else {
      textEl.innerHTML = popChar(textEl.innerText);
    }
    playEffect();
  }, 200 / speed);
}

function pushChar() {
  return slogans[sloganNdx][charNdx];
}

function popChar(text) {
  if (text.length === 0) {
    charNdx = 0;
    sloganNdx++;
    if (sloganNdx > slogans.length - 1) {
      sloganNdx = 0;
    }
  }
  return text.slice(0, text.length - 1);
}
