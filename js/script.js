/* begin Scroll Down Button */
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
 /* end Scroll Down Button */