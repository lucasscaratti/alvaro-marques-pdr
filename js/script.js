function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  let overlay = document.getElementById("overlay");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "/img/menu-icon.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "/img/menu-close.svg";
    overlay.style.display = "block";
  }
}

function closeMenu() {
  let overlay = document.getElementById("overlay");
  let menuMobile = document.querySelector(".mobile-menu");

  overlay.style.display = "none";
  menuMobile.classList.remove("open");
  document.querySelector(".icon").src = "/img/menu-icon.svg";
}

overlay.addEventListener("click", closeMenu);

function scrollToSection(sectionId, event) {
  event.preventDefault();
  var sectionOffset = document.querySelector(sectionId).offsetTop;
  var headerHeight = document.querySelector("header").offsetHeight;
  var scrollToPosition = sectionOffset - headerHeight;

  window.scrollTo({
    top: scrollToPosition,
  });

  setTimeout(closeMenu, 100);
}

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 400;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
