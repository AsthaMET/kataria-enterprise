// fixed header
window.addEventListener('scroll', function() {
  const header = document.querySelector('nav');
  const scrollPosition = window.scrollY;
  const triggerPoint = 20;

  if (scrollPosition > triggerPoint) {
    header.classList.add('fixed-header');
  } else {
    header.classList.remove('fixed-header');
  }
});

// menu
document.addEventListener("DOMContentLoaded", () => {
  const btn = menuButton;
  const menu = mobileMenu;
  const open = menuIcon;
  const close = closeIcon;

  const toggleMenu = (isOpen) => {
    menu.classList.toggle("-translate-x-full", !isOpen);
    menu.classList.toggle("translate-x-0", isOpen);

    open.classList.toggle("hidden", isOpen);
    close.classList.toggle("hidden", !isOpen);
  };

  btn.onclick = (e) => {
    e.stopPropagation();
    toggleMenu(menu.classList.contains("-translate-x-full"));
  };

  document.onclick = (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      toggleMenu(false);
    }
  };

  menu
    .querySelectorAll("a")
    .forEach((a) => (a.onclick = () => toggleMenu(false)));
});
