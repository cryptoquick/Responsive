$(function() {
  tabCount = 1;
  $('.home-nav').each(function(index){
      $(this).addClass('onState_'+tabCount);
      tabCount++;
  });

  buildAccordion();

  $(window).bind("load", function(){
      adjustContent();
  });

  $('[class*=onState_] .tabs li').hover(function() {
      var selected_tab = $(this).find('a').attr('data-ref');
      var onState =  $(this).parent().parent().parent().attr('class');
      var className = onState.split(" ");
      var finalName = className.pop();

      $('.'+finalName+' .tabs li').removeClass('js-active');
      $(this).addClass('js-active');

      if ($(window).width() > mediumBreakPoint) {
          $('.'+finalName+' .home-nav-content').hide();
          $('.'+finalName+' '+selected_tab).show();
      } else {
          $('.'+finalName+' .home-nav-content').slideUp();
          $(this).next().slideDown();
      }

      return false;
  });

  $(window).resize(function() {
     adjustContent();
  });
});

function adjustContent() {
  if ($(window).width() < mediumBreakPoint) {
      $('[class*=onState_] .tabs ul').find('li.js-active').next('div').show();
  } else {
      $('.cloned').hide();
      $('[class*=onState_]').each(function(index){
          var onState =  $(this).attr('class');
          var className = onState.split(" ");
          var finalName = className.pop();
          var toShow = $('.'+finalName+' .js-active a').attr('data-ref');
          $('.'+finalName+' .home-nav-content-container').find(toShow).show();
      });
  }
}

function buildAccordion(){
  $('.home-nav .tabs ul li').each(function(){
      id = $(this).find('a').attr('data-ref');
      $(id).clone().removeAttr('id').addClass('cloned').insertAfter($(this)).hide();

      if ($(window).width() < mediumBreakPoint && $(this).hasClass('js-active')) {
          $(id).clone().removeAttr('id').addClass('cloned').insertAfter($(this)).show();
      }
  });
}
