var burger = document.querySelector(".nav__burger");
var menu = document.querySelector(".nav__menues");

burger.addEventListener("click", function () {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});
