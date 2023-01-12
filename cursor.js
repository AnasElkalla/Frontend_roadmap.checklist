"use strict";
const cursor = document.querySelector(".cursor");
const cursorBg = document.querySelector(".bg");
let dots = [];
let mouse = {
  x: 0,
  y: 0,
};

const tags = ["<p>", "<a>", "<h1>", "<div>", "<td>", "<ul>", "<li>"];
class Trail {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.node = (function () {
      const div = document.createElement("div");
      div.classList.add("trailer");
      const textNode = document.createTextNode("");
      div.appendChild(textNode);
      document.body.appendChild(div);
      return div;
    })();
  }
  draw() {
    this.node.style.left = `${this.x + 20}px`;
    this.node.style.top = `${this.y + 20}px`;
  }
}
for (let i = 0; i < 12; i++) {
  let circle = new Trail();
  dots.push(circle);
  const random = Math.floor(Math.random() * tags.length);
  circle.node.textContent = `${tags[random]}`;
}
const trailCursor = function () {
  let x = mouse.x;
  let y = mouse.y;
  dots.forEach((ele, i, arr) => {
    let nextele = arr[i + 1] || arr[0];

    ele.x = x;
    ele.y = y;
    ele.draw();
    x += (nextele.x - ele.x) * 0.9;
    y += (nextele.y - ele.y) * 0.9;
  });
};
function bg() {
  const colors = [randomColoring(), randomColoring()];
  cursorBg.style.background = `radial-gradient(${colors[0]},${colors[0]} 40%,${colors[1]} `;
  cursorBg.style.borderColor = randomColoring();
}
const mouseStop = function () {
  dots.forEach((ele) => {
    ele.node.classList.remove("move");
    bg();
  });
};
const mouseHere = function () {
  cursorBg.classList.add("animate");
};
document.addEventListener("mousemove", function (e) {
  cursor.style.left = `${e.clientX + 3}px`;
  cursor.style.top = `${e.clientY + 3}px`;
  cursor.style.display = "block";

  cursorBg.classList.remove("animate");
  mouse.x = e.pageX;
  mouse.y = e.pageY;
  dots.forEach((ele) => {
    ele.node.classList.add("move");
  });
  trailCursor();
  setTimeout(mouseStop, 3000);
});
setInterval(mouseHere, 20000);
document.addEventListener("mouseleave", function () {
  cursor.style.display = "none";
});
document.addEventListener("mousedown", function () {
  cursorBg.classList.remove("animate");
});

const randomColoring = function () {
  const randomColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`;
  return randomColor;
};
console.log(randomColoring());

const animate = function () {
  //   setTimeout(trailCursor, 1000);
  trailCursor();
  requestAnimationFrame(animate);
};
animate();
const nav = document.querySelector("nav");
const clicker = document.querySelector(".clicker");
clicker.addEventListener("click", function (e) {
  nav.classList.toggle("openMenu");
  console.log("clicked");
});
clicker.addEventListener("mouseover", function () {
  cursor.classList.add("hovering");
});
clicker.addEventListener("mouseleave", function () {
  cursor.classList.remove("hovering");
});
const up = document.querySelector(".scrollUp");
container.addEventListener("scroll", function (e) {
  console.log(container.scrollTop);
  if (container.scrollTop > 500) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
});
