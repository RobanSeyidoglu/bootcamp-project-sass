// Some Functions In The Header
let toggleMenu = document.querySelector(".icon");
let menu = document.querySelector("ul");
let body = document.body;
if (getComputedStyle(toggleMenu).display !== "none") {
  toggleMenu.onclick = function () {
    if (getComputedStyle(menu).display === "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
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
      menu.style.display = "none";
    }
  });
} else if (toggleMenu.style.display === "none") {
  menu.style.display = "flex";
}
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("ul li a");

  // Add a click event listener to each link
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Prevent the default behavior of the link
      event.preventDefault();

      // Change the text color to white for the clicked link
      link.style.color = "white";

      // Revert the text color to its original color for all other links
      links.forEach(function (otherLink) {
        if (otherLink !== link) {
          otherLink.style.color = ""; // Empty string to revert to default color
        }
      });
    });
  });
});

// End Header
