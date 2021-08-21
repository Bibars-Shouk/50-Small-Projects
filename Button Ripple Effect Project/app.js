const buttons = document.querySelectorAll(".ripple");

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const mouseLocationX = e.clientX;
    const mouseLocationY = e.clientY;

    const buttonLocationX = e.target.offsetLeft;
    const buttonLocationY = e.target.offsetTop;

    const xInside = mouseLocationX - buttonLocationX;
    const yInside = mouseLocationY - buttonLocationY;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    this.appendChild(circle);
    setTimeout(() => {
      circle.remove();
    }, 500);
  });
});
