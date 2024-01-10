const navs = document.getElementById("nav-links");
const closeBtn = document.getElementById("close-btn");
const openBtn = document.getElementById("open-btn");
const container = document.querySelector(".container");
const navbar = document.querySelector(".navbar");
const a = document.querySelectorAll("a");

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 0) {
    container.style.background = "blueviolet";
    navbar.style.maxWidth = "1200px";
    navs.style.background = "blueviolet";
    navs.style.color = "#fff";
    closeBtn.style.color = "#fff";
    openBtn.style.color = "#fff";
    a.forEach((item) => {
      item.style.color = "#fff";
    });
  } else {
    container.style.background = "#fff";
    navbar.style.maxWidth = "1300px";
    closeBtn.style.color = "#000";
    openBtn.style.color = "#000";
    navs.style.background = "#fff";
    a.forEach((item) => {
      item.style.color = "#000";
    });
  }
});

openBtn.addEventListener("click", () => {
  navs.classList.add("open");
  openBtn.style.display = "none";
});
closeBtn.addEventListener("click", () => {
  navs.classList.remove("open");
  openBtn.style.display = "block";
});
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
