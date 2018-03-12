
$(function() {

  // smooth scroll from nav
  $('.business_nav').click(function() {
    $('html, body').animate({
      scrollTop: $("#business").offset().top
    }, 1000);

    return false;
  })

  //open & close mobile nav
  $('.mobile_nav').click(function(e) {
    e.preventDefault();
    $('.navbar').addClass('open');
  });

  $('.close_close_btn').click(function(e) { 
    e.preventDefault();
    $('.navbar').removeClass('open');
  });


  //
  $('.team_nav').click(function() {
    $('html, body').animate({
      scrollTop: $("#team").offset().top
    }, 1000);

    return false;
  })



  //pulsating dots on hero
  for (var i = 0; i < 13; i++) {

    $('.hero:not(".industry_specific, .pricing")').append('<span class="pulse_dot" style="top:' + (Math.floor(Math.random() * 90) + 10) + '%; right:' + (Math.floor(Math.random() * 85) + 5) + '%"></span>');

  };

  //pulsating dots on map
  for (var i = 0; i < 10; i++) {

    $('.dot_wrap').append('<span class="pulse_dot" style="top:' + (Math.floor(Math.random() * 100)) + '%; right:' + (Math.floor(Math.random() * 100)) + '%"></span>');

  };


  //first section icon // CREATE
  var $one_form = $('.dummy_forms').html();

  for (var i = 0; i < 2; i++) {
    $('.dummy_forms').append($one_form);
  }


  // fixed header background on scroll
  $(window).scroll(function () {
  
    var b = $('.mobile_summary').offset().top;
    var a = $(window).scrollTop();

    var c = $('.lappy').offset().top;

    var d = $('.close_forms').offset().top;

    var e = $('.collect_feature').offset().top;
    var f = $('.lappy').offset().top;

    // sticky header //spread forms
    if ( a > b) {
      $('body').addClass('scrolled');
      $('.dummy_forms').addClass('spread');
      $('.logo > img').attr("src", 'img/mobile_logo_dark.svg');
      $('header').addClass('animated slideInDown');
    } else {
      $('body').removeClass('scrolled');
      $('.logo > img').attr("src", 'img/mobile_logo.svg');
      $('header').removeClass('animated slideInDown');

      $('.dummy_forms').removeClass('spread');
    }

    // fold forms
    if (a > d) {
      $('.dummy_forms').addClass('wrap_forms');
    } else {
      $('.dummy_forms').removeClass('wrap_forms');
    }

    // laptop section
    if (a > (f-100)) {
      $('.pie, .chart').addClass('animated zoomIn');
      
      $('.laptop_wrap').animate({
        "right": "-10%"
      }, 2000);

    } else {
      $('.pie, .chart').removeClass('animated zoomIn');



      // $('.laptop_wrap').css("right": "-30%");

    }

    // phone check tags
    if (a > (e-100)) {

      $this = $('.dummy_check');

      function checkBox(check) {
        $(check).removeClass('color_gray ion-android-checkbox-blank').addClass('ion-android-checkbox-outline color_green animated zoomIn');
      }

      var i = 0;
      setInterval(function() {
          var m = $this[i++];
          checkBox(m);

          if(i >= $this.length) i = 0;
      }, 500); 
  
    } else {
      $('.dummy_check').removeClass('ion-android-checkbox-outline color_green').addClass('color_gray ion-android-checkbox-blank');
    }

  });






});

