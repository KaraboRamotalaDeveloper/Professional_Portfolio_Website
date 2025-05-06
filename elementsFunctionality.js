const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");
const navLinks = document.getElementById("nav-links");

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "fa fa-bars");
});


menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");

  menuBtnIcon.setAttribute("class", isOpen ? "fa fa-times" : "fa fa-bars");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".skill__content .section__subheader", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".skill__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".skill__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".skill__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".skill__card", {
  duration: 1000,
  interval: 500,
  delay: 2000,
});

const portfolio = document.querySelector(".portfolio__image");

const portfolioContent = Array.from(portfolio.children);

portfolioContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  portfolio.appendChild(duplicateNode);
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
});