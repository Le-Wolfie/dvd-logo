const windowSection = document.querySelector("section");
const logo = document.querySelector(".logo");

windowSection.style.height = `${window.innerHeight}px`;
windowSection.style.width = `${window.innerWidth}px`;

// we have the height and width of the window, now we need to just move the logo within the window

let xPosition = 10;
let yPosition = 10;

let xSpeed = 4;
let ySpeed = 4;

function moveLogo() {
  logo.style.left = `${xPosition}px`;
  logo.style.top = `${yPosition}px`;
}

// we need to move the logo every 1000 ms
setInterval(() => {
  xPosition += xSpeed;
  yPosition += ySpeed;
  moveLogo();
  // if the logo hits the edge of the window , we need to reverse the direction
  // if it hits the left side of the window (a.k.a less than 0), reverse the direction
  if (xPosition + logo.clientWidth > window.innerWidth || xPosition <= 0) {
    xSpeed *= -1;
    changeColor();
  }
  if (yPosition + logo.clientHeight > window.innerHeight || yPosition <= 0) {
    ySpeed *= -1;
    changeColor();
  }
}, 1000 / 60); // 60 fps wow gaming

function changeColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  windowSection.style.backgroundColor = `#${randomColor}`;
}

// if window is resized reset it
window.addEventListener("resize", () => {
  xPosition = 10;
  yPosition = 10;
  windowSection.style.height = `${window.innerHeight}px`;
  windowSection.style.width = `${window.innerWidth}px`;
});
