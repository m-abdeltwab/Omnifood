let nav = document.querySelector(".nav");
let navbarToggler = document.querySelector(".nav__toggler");
let navbarList = document.querySelector(".nav__list");
let header = document.querySelector("header");

navbarToggler.addEventListener("click", function () {
  navbarList.classList.add("activated");

  let isExpanded = JSON.parse(navbarToggler.getAttribute("aria-expanded"));
  navbarToggler.setAttribute("aria-expanded", !isExpanded);
});

//INTERSECTION OBSERVER

let navObserver = new IntersectionObserver(
  (entries) => {
    nav.classList.toggle("active", !entries[0].isIntersecting);
  },
  { threshold: 0.7 }
);
navObserver.observe(header);
