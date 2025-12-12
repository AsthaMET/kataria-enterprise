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

// Nevigation menu
document.addEventListener("DOMContentLoaded", () => {
  const btn = menuButton;
  const menu = mobileMenu;
  const open = menuIcon;
  const close = closeIcon;

  const toggleMenu = (isOpen) => {
    if (isOpen) {
      menu.classList.add("-translate-x-full");
      requestAnimationFrame(() => {
        menu.classList.remove("-translate-x-full");
      });
    } else {
      menu.classList.add("-translate-x-full");
    }

    open.classList.toggle("hidden", isOpen);
    close.classList.toggle("hidden", !isOpen);
  };

  btn.onclick = (e) => {
    e.stopPropagation();
    const isClosed = menu.classList.contains("-translate-x-full");
    toggleMenu(isClosed);
  };

  document.onclick = (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      toggleMenu(false);
    }
  };

  menu.querySelectorAll("a").forEach((a) => {
    a.onclick = () => toggleMenu(false);
  });
});

// body overflow when menu is open
const menuButton = document.getElementById("menuButton");
const myMenu = document.getElementById("mobileMenu");
const menuItems = myMenu.querySelectorAll("a");

menuButton.addEventListener("click", () => {
  const isMenuOpen = mobileMenu.style.display === "block";
  if (isMenuOpen) {
    mobileMenu.style.display = "none";
    document.body.style.overflow = "";
  } else {
    mobileMenu.style.display = "block";
    document.body.style.overflow = "hidden";
  }
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    mobileMenu.style.display = "none";
    document.body.style.overflow = "";
  });
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const menu = document.getElementById("mobileMenu");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    menu.style.top = "0";
  } else {
    menu.style.top = "43px";
  }
}

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
      640: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
    },
  });
});
