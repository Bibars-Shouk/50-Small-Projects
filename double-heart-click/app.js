const loveMe = document.querySelector(".loveMe");
const likesCounter = document.querySelector("#times");

let numberOfLikes = 0;

loveMe.addEventListener("dblclick", (e) => {
  likesCounter.innerText = ++numberOfLikes;

  const mouseX = e.offsetX;
  const mouseY = e.offsetY;

  const heartEl = document.createElement("li");
  heartEl.classList.add("fas");
  heartEl.classList.add("fa-heart");

  heartEl.style.top = `${mouseY}px`;
  heartEl.style.left = `${mouseX}px`;

  loveMe.appendChild(heartEl);

  setTimeout(() => {
    heartEl.remove();
  }, 610);
});
