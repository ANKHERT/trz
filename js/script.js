"use strict"


let menu = document.querySelector("#menu-btn");
let navbarLinks = document.querySelector(".header .navbar .links");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbarLinks.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbarLinks.classList.remove("active");

  if (window.scrollY > 60) {
    document.querySelector(".header .navbar").classList.add("active");
  } else {
    document.querySelector(".header .navbar").classList.remove("active");
  }
};


// go to top

/**
 * BACK TO TOP BUTTON
 */

const backTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 800
    ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});




//accordion
document.querySelectorAll(".accordion").forEach((accordions) => {
  accordions.onclick = () => {
    accordions.classList.toggle("active");
  };
});

var swiper = new Swiper(".review-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1180: {
      slidesPerView: 3,
    },
  },
});


// contact;


const checkbox = document.querySelector('.my-form input[type="checkbox"]');
const btns = document.querySelectorAll(".my-form button");

checkbox.addEventListener("change", function () {
  const checked = this.checked;
  for (const btn of btns) {
    checked ? (btn.disabled = false) : (btn.disabled = true);
  }
});

