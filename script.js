/*
const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());
*/
const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};

const closeNavOnClickOutside = (event) => {
  if (
    !navbar.contains(event.target) && // Click is outside the menubar
    !mobileNav.contains(event.target) && // Click is outside the hamburger icon
    navbar.classList.contains("active") // Menu is currently open
  ) {
    navbar.classList.remove("active");
    mobileNav.classList.remove("hamburger-active");
  }
};

const closeNavOnScroll = () => {
  if (navbar.classList.contains("active")) { // Menu is currently open
    navbar.classList.remove("active");
    mobileNav.classList.remove("hamburger-active");
  }
};

mobileNav.addEventListener("click", () => toggleNav());
document.addEventListener("click", (event) => closeNavOnClickOutside(event));
window.addEventListener("scroll", () => closeNavOnScroll());
