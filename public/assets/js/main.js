// fixed header
window.addEventListener("scroll", function () {
  const header = document.querySelector("nav");
  const scrollPosition = window.scrollY;
  const triggerPoint = 20;

  if (scrollPosition > triggerPoint) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }
});

// Nevigation-menu
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = document.getElementById("menuIcon");
  const closeIcon = document.getElementById("closeIcon");
  const menuItems = mobileMenu.querySelectorAll("a");
  let isOpen = false;
  function updateMenuTop() {
    if (window.scrollY > 0) {
      mobileMenu.style.top = "0";
    } else {
      mobileMenu.style.top = "43px";
    }
  }
  function openMenu() {
    updateMenuTop();
    mobileMenu.classList.remove("-translate-x-full");
    document.body.style.overflow = "hidden";
    menuIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
    isOpen = true;
  }
  function closeMenu() {
    mobileMenu.classList.add("-translate-x-full");
    document.body.style.overflow = "";
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
    isOpen = false;
  }
  window.addEventListener("scroll", () => {
    if (!isOpen) updateMenuTop();
  });
  updateMenuTop();
  menuButton.addEventListener("click", (e) => {
    e.stopPropagation();
    isOpen ? closeMenu() : openMenu();
  });
  mobileMenu.addEventListener("click", (e) => {
    e.stopPropagation();
  });
  document.addEventListener("click", () => {
    if (isOpen) closeMenu();
  });
  menuItems.forEach((item) => {
    item.addEventListener("click", closeMenu);
  });
});

// swiper-team-member
document.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".team-member", {
    loop: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
});

// swiper-testomonial
document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".testomonial", {
    loop: false,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      1240: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});

// our-brands
document.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".brands", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 2100,
      disableOnInteraction: false,
    },
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
});

//our-commitment
document.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".our-commitment-slider", {
    loop: true,
    autoplay: {
      delay: 2100,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});

// our-history years
const years = document.querySelectorAll(".year");
const contents = document.querySelectorAll(".history-content");
const dot = document.getElementById("timelineDot");
const yearsWrapper = document.getElementById("timelineYears");
function moveDotToYear(year) {
  const dotParent = dot.offsetParent;
  const yearRect = year.getBoundingClientRect();
  const parentRect = dotParent.getBoundingClientRect();
  const left =
    yearRect.left - parentRect.left + yearRect.width / 2 - dot.offsetWidth / 2;
  dot.style.left = `${left}px`;
}
function activateYear(year) {
  const target = year.dataset.target;
  years.forEach((y) => {
    y.classList.remove("text-red-600");
    y.classList.add("text-gray-500");
  });
  year.classList.add("text-red-600");
  contents.forEach((c) => c.classList.add("hidden"));
  document
    .querySelector(`[data-content="${target}"]`)
    .classList.remove("hidden");
  moveDotToYear(year);
}
years.forEach((year) => {
  year.addEventListener("click", () => activateYear(year));
});
document.addEventListener("DOMContentLoaded", () => {
  activateYear(years[0]);
});
window.addEventListener("resize", () => {
  const activeYear = document.querySelector(".year.text-red-600");
  if (activeYear) moveDotToYear(activeYear);
});
