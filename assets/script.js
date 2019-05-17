// SCROLLSPY
$('body').scrollspy({ target: '#toc' })

// SmartMenus init
$(function() {
    $('#main-menu').smartmenus({
      subMenusSubOffsetX: 1,
      subMenusSubOffsetY: -8
    });
  });
  
  // Set proper max-height for sub menus in desktop view
  $('#main-menu').bind('beforeshow.smapi', function(e, menu) {
    var $sub = $(menu),
      hasSubMenus = $sub.find('ul').length && !$sub.hasClass('mega-menu');
    // if the sub doesn't have any deeper sub menus, apply max-height
    if (!hasSubMenus) {
      var obj = $(this).data('smartmenus');
      if (obj.isCollapsible()) {
        $sub.css({
          'overflow-y': '',
          'max-height': ''
        });
      } else {
        var $a = $sub.dataSM('parent-a'),
          $li = $a.closest('li'),
          $ul = $li.parent(),
          level = $sub.dataSM('level'),
          $win = $(window),
          winH = $win.height(),
          winY = $win.scrollTop(),
          subY = winY;
        // if the parent menu is horizontal
        if ($ul.parent().is('[data-sm-horizontal-sub]') || level == 2 && !$ul.hasClass('sm-vertical')) {
          var itemY = $a.offset().top,
            itemH = obj.getHeight($a),
            subOffsetY = level == 2 ? obj.opts.mainMenuSubOffsetY : obj.opts.subMenusSubOffsetY,
            subY = itemY + itemH + subOffsetY;
        }
        $sub.css({
          'max-height': winH + winY - subY
        });
      }
    }
  });
  
  // Set overflow-y: auto for sub menus in desktop view
  // this needs to be done on the 'show.smapi' event because the script resets overflow on menu show
  $('#main-menu').bind('show.smapi', function(e, menu) {
    var $sub = $(menu),
      hasSubMenus = $sub.find('ul').length && !$sub.hasClass('mega-menu');
    // if the sub doesn't have any deeper sub menus, apply overflow-y: auto
    if (!hasSubMenus) {
      var obj = $(this).data('smartmenus');
      if (!obj.isCollapsible()) {
        $sub.css('overflow-y', 'auto');
      }
    }
  });
  
  // SCROLL

  var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);

/* ACTIVE NAVBAR */

// $(document).ready(function() {
//   $('li.active').removeClass('active');
//   $('a[href="' + location.pathname + '"]').closest('li').addClass('active'); 
// });

$(document).click(function(e) {
$('.navbar-nav li a').removeClass('active'); {
  var $this = $(this);
  if (!$this.hasClass('active')) {
    $this.addClass('active');
  }
  e.preventDefault();
});
}); 
  
//   $('.navbar-nav li nav-link').click(function(){
//     $('.navbar-nav li nav-link').removeClass('active');
//     $(this).addClass('active');
// })


// $(document).ready(function () {
//   $('.navbar-nav li a').click(function (e) {
//       $('.navbar-nav li a').removeClass('active');
//       $(this).addClass('active');                
//   });            
// });