
  $('body').removeClass('no-js');

  // $('a.blog-button').click(function() {
  //   panelTransitions();
  //   showBlog();
  // });
  // $('a.photos-button').click(function() {
  //   panelTransitions();
  //   showPhotos();
  // });

  function panelTransitions() {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    currentWidth = $('.panel-cover').width();
    console.log('blog button click');
    if (currentWidth < 960) {
      slideDetailPanel();
    } else {
      $('.panel-cover').css('max-width',currentWidth);
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function() {} );
    }
  }

  var areas= ['#blog','#gallery','#bio'];

  if (window.location.hash && $.inArray(window.location.hash, areas)!==-1) {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  function showSections() {
    if (window.location.hash && window.location.hash=='#gallery'){
      showPhotos();
    }
  }
  

  if (window.location.pathname.substring(0, 5) == "/tag/") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  $('.btn-mobile-menu').click(function() {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  $('.navigation-wrapper .blog-button').click(function() {
    $('.navigation-wrapper').toggleClass('visible');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  showSections();

function showPhotos() {
    slideDetailPanel();
    $('#body').hide();
    $('#photos').show();
  }
  function showBlog() {
    setTimeout(slideDetailPanel, 50);
    $('#body').show();
    $('#photos').hide();
  }
function slideDetailPanel() {
  

  $('.panel-cover').addClass('panel-cover--collapsed');
  $('.content-wrapper').addClass('animated slideInRight');
  setTimeout(removeAnimatedClasses, 1000); 

}

function removeAnimatedClasses() {
  $('.content-wrapper').removeClass('slideInRight');
  // $('.content-wrapper').removeClass('animated');
}

function loadJS(file) {
    // DOM: Create the script element
    var jsElm = document.createElement("script");
    // set the type attribute
    jsElm.type = "application/javascript";
    // make the script element load file
    jsElm.src = file;
    // finally insert the element to the body element in order to load the script
    document.body.appendChild(jsElm);
}