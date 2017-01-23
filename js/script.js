$(document).ready(function() {

function setHeiHeight() {

  var heightR = $(window).height();
  var height_menu = $(window).height();

  if ( $(window).width() >= 1003 ) {
      
      heightR = heightR;
      var topMargin = ( heightR - $('.home-block2-info').height() - 210 ) / 2;
      var topMargin_2 = ( heightR - $('.subscription').height() - $('.news').outerHeight(true)) / 2;
      $('.home-block2-info').css({'top': topMargin});
      $('#home-block3 .news').css({'top': topMargin_2});
      $('#header, #home-block2, #home-block3, #home-block4, #home-block5').css({'height':heightR});
      
  }

  if (( $(window).width() < 1003 ) & ( $(window).width() >= 743 )) {
      
      heightR = 1026;
      $('#header, #home-block2, #home-block3, #home-block4, #home-block5').css({'height':heightR});
  }

  if ( $(window).width() < 743 ) {

      $('#home-block2, #home-block3, #home-block4, #home-block5').css({'height':"auto"});
      $('#header').css({'height':height_menu});

  }

 
  $('.menu').css({'height':height_menu});

}  
setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
$(window).resize( setHeiHeight ); // обновляем при изменении размеров окна

//плавный скрол по странице до якоря
var lastId,
    topMenu = $(".navigation-page"),
    topMenuHeight = topMenu.outerHeight()+15,
    // Все элементы списка
    menuItems = topMenu.find("a"),
    // Якоря, соответствующие пункты меню
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// обработчик щелчка по пунктам меню
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 400);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});


// показ меню
$('.toggle').on('click',function() {
  $('nav.menu').css('right', '0%');
  $('.toggle').fadeOut(500);
  $('nav.menu > ul > li').fadeIn();

});

// скрыть меню
$('.toggle-close').on('click',function() {
  $('nav.menu').css('right', '-100%');
  $('.toggle').fadeIn(500);
  $('nav.menu > ul > li').fadeOut();
});

// подключение табов
$("ul.tabs").jTabs(
{
    content: ".tabs_content",
    animate: true,
    effect: "fade"
});











});