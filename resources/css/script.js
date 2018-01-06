  // For the sticky navigation


  $('.js--features').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px;'
  });

  // Scroll on hero BUTTONS


  $('.js--scroll-to-plans').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
  });

  $('.js--scroll-to-start').click(function() {
    $('html, body').animate({scrollTop: $('.js--features').offset().top}, 1000)
  });

  // Navigation scroll


  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

    // Animations on scroll

    //get food fast, not fast food animation
    $('.js--wp-1').waypoint(function(direction) {
      $('.js--wp-1').addClass('animated fadeIn');
    }, {
      offset: '50%'
    });

    //iphone image
    $('.js--wp-2').waypoint(function(direction) {
      $('.js--wp-2').addClass('animated fadeInUp');
    }, {
      offset: '50%'
    });

    //cities animation
    $('.js--wp-3').waypoint(function(direction) {
      $('.js--wp-3').addClass('animated fadeIn');
    }, {
      offset: '50%'
    });

    //premium picebox animation
    $('.js--wp-4').waypoint(function(direction) {
      $('.js--wp-4').addClass('animated pulse');
    }, {
      offset: '50%'
    });

    // Mobile Nav -- this code allows the main nav to reappear when window is resized larger

    //can we find out why page reloads with mobile nav open?
            //Google for answer ----- SEE LINE 133 FOR ANSWER!!!!!
    //why does no menu appear from 767px to 784px?
            //See bookmarked answer --> https://www.udemy.com/design-and-develop-a-killer-website-with-html5-and-css3/learn/v4/questions/821648

    $('.js--nav-icon, .js--main-nav a, .logo-black').click(function(element){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        //Gets the class name of the element that triggered the event
        var clicked = element.target.className;


        //Exits the function if the menu is closed AND the logo-black element (logo image) was clicked
        if (icon.hasClass('ion-navicon-round') && clicked == 'logo-black')
            return;

        //Opens and closes the menu
        if ($('nav').css("float") == "none") {
            nav.slideToggle(200);

            //lock scroll of the screen below open mobile nav

              $('body').on ({
                'mousewheel' : function(e) {
                  if (e.target.className == 'ion-close-round') return;
                  e.preventDefault();
                  e.stopPropagation();
                }
              })
          };



        //Changes icon states of the menu button
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });


    $(window).resize(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        //WINDOW.INNERWIDTH WORKS WHERE TRACKING A CSS VARIABLE DIDN'T WORK AND WHERE MEASURING THE WINDOW WIDTH WAS INACCURATE
        //SEE http://ryanve.com/lab/dimensions/

          if (window.innerWidth > 767) {
          // if ($(window).width() > 767) {
          // if ($('nav').css("float") == "right"){
              nav.css("display", "block");
              // icon.addClass('ion-close-round');
              // icon.removeClass('ion-navicon-round');
          } else {
              nav.css("display", "none");
              // icon.addClass('ion-navicon-round');
              // icon.removeClass('ion-close-round');
          }
    });

    // $('.js--nav-icon, .js--main-nav a, .logo-black').click(function(element) {
    //   var nav = $('.js--main-nav');
    //   var icon = $('.js--nav-icon i');
    //
    //   //Gets the class name of the element that triggered the event
    //   var clicked = element.target.className;
    //
    //   //Exits the function if the menu is closed AND the logo-black element was clicked
    //   if (icon.hasClass('ion-navicon-round') && clicked == 'logo-black')
    //     return;
    //
    //   //Opens and closes the menu
    //   if ($(window).width() < 768) {
    //     nav.slideToggle(200);
    //
    //     //Changes icon states of the menu button
    //     if (icon.hasClass('ion-navicon-round')) {
    //       icon.addClass('ion-close-round');
    //       icon.removeClass('ion-navicon-round');
    //     } else {
    //       icon.addClass('ion-navicon-round');
    //       icon.removeClass('ion-close-round');
    //     }
    //   }
    //
    //
    // });
    //
    //   $(window).resize(function() {
    //     var nav = $('.js--main-nav');
    //     var icon = $('.js--nav-icon i');
    //
    //     if ($(window).width > 767) {
    //       nav.css("display", "block");
    //       icon.addClass('ion-close-round');
    //       icon.removeClass('ion-navicon-round');
    //     } else {
    //       nav.css("display", "inline-block");
    //       icon.addClass('ion-navicon-round');
    //       icon.removeClass('ion-close-round');
    //     }
    //   });


    //ORIGINAL CODE FOR MOBILE NAV

    // $('.js--nav-icon').click(function() {
    //   var nav = $('.js--main-nav');
    //   var icon = $('.js--nav-icon i');
    //   nav.slideToggle(200);
    //
    //   if (icon.hasClass('ion-navicon-round')) {
    //     icon.addClass('ion-close-round');
    //     icon.removeClass('ion-navicon-round');
    //   } else {
    //     icon.addClass('ion-navicon-round');
    //     icon.removeClass('ion-close-round');
    //   }
    //
    // });


  // var waypoint = new Waypoint({
  //   element: document.getElementById('px-offset-waypoint'),
  //   handler: function(direction) {
  //     notify('I am 20px from the top of the window')
  //   },
  //   offset: 20
  // })
