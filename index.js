// when someone clicks the hamburger menu
// if the menu is closed, open it
// if the menu is open, close it
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");

  if (visibility === "false") {
    nav.setAttribute("data-visible", "true");
  } else {
    nav.setAttribute("data-visible", "false");
  }
});
