// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Burger
const burgerBtn = document.querySelector(".mobile-nav");
const header = document.querySelector(".header");
burgerBtn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

//smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) =>
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (link.classList.contains("main-nav__link"))
      header.classList.toggle("nav-open");
  })
);
// Sticky nav
const bodyEl = document.querySelector("body");
const sectionHeroEL = document.querySelector(".hero__section");

const observer = new IntersectionObserver(
  function (ent) {
    if (!ent[0].isIntersecting) {
      bodyEl.classList.add("sticky-nav");
    } else {
      bodyEl.classList.remove("sticky-nav");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEL);
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
checkFlexGap = function () {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
};
checkFlexGap();
