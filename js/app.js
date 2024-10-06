const Btn = document.querySelector(".nav_toggler");
const Menu = document.querySelector(".mobile_nav");

Btn.addEventListener("click", () => {
  Menu.classList.toggle("nav_toggle");
});
