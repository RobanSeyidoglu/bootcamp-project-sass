// Some Functions In The Nav
let toggleMenu = document.querySelector(".icon");
let menu = document.querySelector("ul");
let body = document.body;
if (getComputedStyle(toggleMenu).display !== "none") {
  toggleMenu.onclick = function () {
    if (menu.classList.contains("ul-hide")) {
      toggleMenu.style.transition = "all 0.2s";
      toggleMenu.style.outlineWidth = "3px";
      menu.classList.remove("ul-hide");
      menu.classList.add("ul-show");
    } else {
      menu.classList.add("ul-hide");
      menu.classList.remove("ul-show");
      toggleMenu.style.transition = "all 0.2s";
      toggleMenu.style.outlineWidth = "1px";
    }
  };
  document.addEventListener("click", function (event) {
    let targetElement = event.target;
    let isClickedInsideMenu = toggleMenu.contains(targetElement);
    if (
      !isClickedInsideMenu &&
      !(getComputedStyle(toggleMenu).display === "none")
    ) {
      console.log(toggleMenu.style.display);
      menu.classList.add("ul-hide");
      menu.classList.remove("ul-show");
      toggleMenu.style.transition = "all 0.2s";
      toggleMenu.style.outlineWidth = "1px";
    }
  });
} else if (toggleMenu.style.display === "none") {
  menu.classList.remove("ul-hide");
  menu.classList.add("ul-show");
  toggleMenu.style.transition = "all 0.2s";
  toggleMenu.style.outlineWidth = "3px";
}
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("ul li a");

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      link.style.color = "white";

      links.forEach(function (otherLink) {
        if (otherLink !== link) {
          otherLink.style.color = "";
        }
      });
    });
  });
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// End Nav
