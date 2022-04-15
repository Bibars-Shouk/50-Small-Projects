const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const decreaseBtn = document.querySelector("#decrease");
const increaseBtn = document.querySelector("#increase");
const sizeEl = document.querySelector("#size");
const colorInput = document.querySelector("#color");
const clearBtn = document.querySelector("#clear");

let size = 20;
let isPressed = false;
let color = "black";
let x;
let y;

colorInput.addEventListener("input", (e) => {
  color = e.target.value;
});

decreaseBtn.addEventListener("click", (e) => {
  size -= 5;
  if (size <= 5) {
    size = 5;
  }
  sizeEl.innerText = size;
});

increaseBtn.addEventListener("click", (e) => {
  size += 5;
  if (size >= 20) {
    size = 20;
  }
  sizeEl.innerText = size;
});

clearBtn.addEventListener("click", (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
