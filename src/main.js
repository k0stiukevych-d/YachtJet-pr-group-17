document.addEventListener('DOMContentLoaded', function() {
  var menuOpenBtn = document.querySelector('.menu-open-btn');
  var mobMenu = document.querySelector('.mob-menu');
    var mobMenuExt = document.querySelector('.menu-exit-btn');
    mobMenuExt.addEventListener('click', function () {
        mobMenu.classList.remove('is-open-mob-menu');
    });
  menuOpenBtn.addEventListener('click', function() {
    mobMenu.classList.add('is-open-mob-menu');
  });
});

const menuLinks = document.querySelectorAll('.mob-nav-item');

// Додаємо обробник подій для кожного посилання
menuLinks.forEach(link => {
  link.addEventListener('click', event => {
    // Забороняємо стандартну поведінку посилання
    event.preventDefault();

    // Отримуємо значення атрибута href
    const targetId = link.getAttribute('href');

    // Знаходимо відповідну секцію за її id
    const targetSection = document.querySelector(targetId);

    // Перевіряємо, чи існує така секція та чи вона відображена
    if (targetSection && targetSection.offsetParent !== null) {
      // Прокручуємо до цієї секції
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth', // Зробити прокрутку плавною
      });

      // Закриваємо мобільне меню
      closeMobileMenu();
    }
  });
});

// Функція для закриття мобільного меню
function closeMobileMenu() {
  // Отримуємо кнопку для закриття меню
  const closeButton = document.querySelector('.menu-exit-btn');

  // Симулюємо клік на кнопку для закриття меню
  closeButton.click();
}