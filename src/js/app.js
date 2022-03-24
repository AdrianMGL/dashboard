/**
 *
 *
 */

const sideMenu = document.querySelector("aside"),
   menuBtn = document.querySelector("#menu-btn"),
   closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener("click", () => {
   sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
   sideMenu.style.display = "none";
});
