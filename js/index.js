const burger = document.querySelector(".header__burger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeButton = document.querySelector(".close-button");
const body = document.body;
const html = document.documentElement;

// Функция закрытия меню
function closeMenu() {
  mobileMenu.classList.remove("active");
  body.classList.remove("lock");
  html.classList.remove("lock");
}

// Открытие меню
if (burger) {
  burger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    body.classList.add("lock");
    html.classList.add("lock");
  });
}

// Закрытие через кнопку
if (closeButton) {
  closeButton.addEventListener("click", closeMenu);
}

// Закрытие при клике на ссылки
document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Меняем фон хедера при скролле
let ticking = false;
let lastScrollY = 0;

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      const header = document.querySelector(".header");

      // Плавное добавление/удаление класса с небольшой задержкой
      if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        header.classList.add("header-scrolled");
      } else if (currentScrollY <= 50) {
        header.classList.remove("header-scrolled");
      }

      lastScrollY = currentScrollY;
      ticking = false;
    });
    ticking = true;
  }
});
