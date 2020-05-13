$(function(){
  // SNSのボタンの色の変化
  // facebook
  $('.button-facebook').hover(function() {
    $(this).css('background', '#4871a9');
    $(this).css('color', '#fff');
  }, function() {
    $(this).css('background', '');
    $(this).css('color', '');
  });
  // twitter
  $('.button-twitter').hover(function() {
    $(this).css('background', '#70bdd3');
    $(this).css('color', '#fff');
  }, function() {
    $(this).css('background', '');
    $(this).css('color', '');
  });
  // hatena
  $('.button-hatena').hover(function() {
    $(this).css('background', '#2f9bcd');
    $(this).css('color', '#fff');
  }, function() {
    $(this).css('background', '');
    $(this).css('color', '');
  });
  // LINE
  $('.button-line').hover(function() {
    $(this).css('background', '#8ec09d');
    $(this).css('color', '#fff');
  }, function() {
    $(this).css('background', '');
    $(this).css('color', '');
  });

  // ページトップに戻るボタン
  $('.pageTop').click(function(){
  $('body,html').animate({scrollTop: 0},500);
  return false;
  });

  // メインのスライドショー
  var $setElm = $('.top-wrapper-1'),
    fadeSpeed = 1500,
    switchDelay = 5000;

    $setElm.each(function(){
        var targetObj = $(this);
        var findUl = targetObj.find('ul');
        var findLi = targetObj.find('li');
        var findLiFirst = targetObj.find('li:first');

        findLi.css({display:'block',opacity:'0'});
        findLiFirst.stop().animate({opacity:'1'},fadeSpeed);

        setInterval(function(){
            findUl.find('li:first-child').animate({opacity:'0'},fadeSpeed).next('li').animate({opacity:'1'},fadeSpeed).end().appendTo(findUl);
        },switchDelay);
    });

    var $nav   = $('#navArea');
    var $btn   = $('.toggle_btn');
    var $mask  = $('#mask');
    var open   = 'open'; // class
    // menu open close
    $btn.on( 'click', function() {
      if ( ! $nav.hasClass( open ) ) {
        $nav.addClass( open );
      } else {
        $nav.removeClass( open );
      }
    });
    // mask close
    $mask.on('click', function() {
      $nav.removeClass( open );
    });

});
