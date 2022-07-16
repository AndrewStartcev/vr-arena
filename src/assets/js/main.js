$(document).ready(() => {
  const burger = $('.header__burger');
  const menu = $('.menu')
  const menuClose = $('.menu__close');
  const menuItem = $('.menu a, .menu .btn')
  const active = 'active'

  burger.click(() => {
    menu.addClass(active);
  });

  menuClose.click(() => {
    menu.removeClass(active);
  });
  menuItem.click(() => {
    menu.removeClass(active);
  });

  $(document).click((e) => {
    if (!$(e.target).closest(menu).length && !$(e.target).closest(burger).length) {
      menu.removeClass(active);
    }
    e.stopPropagation();
  });

  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchmove', handleTouchMove, false);
  var xDown = null;
  var yDown = null;

  function getTouches(evt) {
    return evt.touches
  };

  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        menu.addClass(active);
      } else {
        menu.removeClass(active);
      };
    }
  }
  xDown = null;
  yDown = null;

})
