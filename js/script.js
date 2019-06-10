//nav
$(function(){
  //menu btn click > menu opens
  $('.nav').click(function(){
    $('.nav_container')
      .addClass('menuOn');
  });
  // 닫기창
  $('.close_nav').click(function(){
    $('.nav_container')
      .removeClass('menuOn');
  });
  // 메뉴 닫기창2
    $('.gnb > li').click(function(){
      $('.nav_container')
        .removeClass('menuOn');
      });
});


//name text
$(function() {
  $('.intro').addClass('go');

  $('.reload').click(function() {
    $('.intro').removeClass('go').delay(200).queue(function(next) {
      $('.intro').addClass('go');
      next();
    });
  });
})


//nav_container menu
  var $menu = $('.gnb'),
    $item = $('.list-item'),
    w = $(window).width(), //window width
    h = $(window).height(); //window height

$(window).on('mousemove', function(e) {
  var offsetX = 0.5 - e.pageX / w, //cursor position X
      offsetY = 0.5 - e.pageY / h, //cursor position Y
      dy = e.pageY - h / 2, //@h/2 = center of poster
      dx = e.pageX - w / 2, //@w/2 = center of poster
      theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
      angle = theta * 180 / Math.PI - 90, //convert rad in degrees
      offsetPoster = $menu.data('offset'),
      transformPoster = 'translate3d(0, ' + -offsetX * offsetPoster + 'px, 0) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform
  //get angle between 0-360
  if (angle < 0) {
    angle = angle + 360;
  }
  //poster transform
  $menu.css('transform', transformPoster);
  //parallax for each layer
  $item.each(function() {
    var $this = $(this),
        offsetLayer = $this.data('offset') || 0,
        transformLayer = 'translate3d(' + offsetX * offsetLayer + 'px, ' + offsetY * offsetLayer + 'px, 20px)';

    $this.css('transform', transformLayer);
  });
});


//menu textfont
jQuery(document).ready(function($){
  var bArray = [];
  var sArray = [4,6,8,10];
  for (var i = 0; i < $('.bubbles').width(); i++) {
        bArray.push(i);
  }

  function randomValue(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  setInterval(function(){
    var size = randomValue(sArray);
  $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
  $('.individual-bubble' ).animate({
    'bottom': '100%',
    'opacity' : '-=0.7'}, 3000, function(){
      $(this).remove()
        });
      }, 350);
  });


  //scroll animation
    AOS.init({
      easing: 'ease-out-back',
      duration: 3000
    });

    hljs.initHighlightingOnLoad();

    $('.hero__scroll').on('click', function(e) {
      $('html, body').animate({
        scrollTop: $(window).height()
      }, 1200);
    });
