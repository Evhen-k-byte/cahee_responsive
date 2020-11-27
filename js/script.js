/* плавная прокрутка на 100vh */
'use strict';

(function () {

  // надо почитать, шо воно таке
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }
  // надо почитать, шо воно таке

  let btnScrollDown = document.querySelector('#scroll_down');

  function scrollDown() {

    let windowCoords = document.documentElement.clientHeight;

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

/* автозакрытие меню */
function closeMenu() {
  document.querySelector('#toggle').click();
}
/* автозакрытие меню */

/* запрет прокрутки */
let body = document.getElementById("body");
function stopScroll() {
  body.classList.toggle("stop-scroll");
}
/* запрет прокрутки */

/* включение прокрутки */
function scroll() {
  body.classList.toggle("scroll");
}
/* включение прокрутки */

/* плавный скрол для меню */
let isBurger = true;
const anchors = document.querySelectorAll('a[href*="#"]')
anchors.forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    $('html, body').animate({
      scrollTop: $(document.getElementById(blockID)).offset().top
    }, 1000);
    if (isBurger) {
      closeMenu();
      scroll();
    }
    else {
      closeNav();
      toggleLeft.classList.remove("animation-target__splat");
      scroll();
      isMenuShow = true;
    }

  })
})
/* плавный скрол для меню */

/* манипуляции с переключателем меню */
let changer = document.getElementById("changer");
let toggleContainer = document.getElementById("toggleContainer");
let toggleLeft = document.getElementById("toggle-left");



function Rotate() {
  changer.classList.toggle("animation-target__rotate");
  toggleContainer.classList.toggle("toggler-change");
  toggleLeft.classList.toggle("toggle-left-visible");

  function removeRotate() {
    changer.classList.remove("animation-target__rotate");
  }
  setTimeout(removeRotate, 1200);
}

/* открыть/закрыть боковое меню */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  isBurger = false;
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  isBurger = true;
}
/* открыть/закрыть боковое меню */

/* следить за кликами*/
let isMenuShow = true;
toggleLeft.addEventListener("click", function () {
  toggleLeft.classList.toggle("animation-target__splat");
  if (isMenuShow) {
    openNav();
    stopScroll();
    isMenuShow = false;
  }
  else {
    closeNav();
    scroll();
    isMenuShow = true;
  }
});
/* следить за кликами*/

/* манипуляции с переключателем меню */