const ham = document.getElementById("hamburger");
const links = document.getElementById("navLinks");
const actions = document.getElementById("navActions");

ham.addEventListener("click", () => {
  links.classList.toggle("open");
  actions.classList.toggle("open");
});
