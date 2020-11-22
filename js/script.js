/* плавная прокрутка на 100vh */
(function () {
  'use strict';

  var btnScrollDown = document.querySelector('#scroll_down');

  function scrollDown() {

    var windowCoords = document.documentElement.clientHeight;

    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 5);
        setTimeout(scroll, 5);
      }
    })();
  }
  btnScrollDown.addEventListener('click', scrollDown);
})();
/* плавная прокрутка на 100vh */

/* плавный скрол для меню */
const anchors = document.querySelectorAll('a[href*="#"]')
anchors.forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    $('html, body').animate({
      scrollTop: $(document.getElementById(blockID)).offset().top
    }, 1000);
    stopScroll();
    closeMenu();
    scroll();
  })
})
/* плавный скрол для меню */

/* автозакрытие меню */
function closeMenu() {
  document.querySelector('#toggle').click();
}
/* автозакрытие меню */

/* запрет прокрутки */
var body = document.getElementById("body");

function stopScroll() {
  body.classList.toggle("stop-scroll");
}
/* запрет прокрутки */

/* включение прокрутки */
function scroll() {
  body.classList.toggle("scroll");
}
/* включение прокрутки */