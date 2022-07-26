$(document).ready(() => {
  const burger = $('.header__burger');
  const menu = $('.menu')
  const menuClose = $('.menu__close');
  const menuItem = $('.menu a, .menu .btn')
  const active = 'active';

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
    if (!$('body').hasClass('no-swipe')) {
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
    }
  };

  function handleTouchMove(evt) {
    if (!$('body').hasClass('no-swipe')) {
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
  }

  xDown = null;
  yDown = null;

  scrollHeader()
  $(window).scroll(function () {
    scrollHeader()
  });
  function scrollHeader() {
    var height = $(window).scrollTop();
    if (height > 50) {
      $('header').addClass('header-bg');
    } else {
      $('header').removeClass('header-bg');
    }
  }

  function elementInViewport(el) {
    var bounds = el.getBoundingClientRect();
    return (
      (bounds.top + bounds.height > 0) && // Елемент ниже верхней границы
      (window.innerHeight - bounds.top > 0) && // Выше нижней
      (bounds.left + bounds.width > 0) && // Правее левой
      (window.innerWidth - bounds.left > 0)// Левее правой
    );
  }


  document.addEventListener("scroll", (e) => {
    var el = document.querySelector(".price-game");
    var el2 = document.querySelector(".price");
    var inViewport = elementInViewport(el);
    var inViewport2 = elementInViewport(el2);
    if (inViewport || inViewport2) {
      $('body').addClass('no-swipe')
    } else {
      $('body').removeClass('no-swipe')
    }
  })

})
