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