$(document).ready(function(){
	$('.img-div').click(function(){
	  $(this).addClass('active');
	  $(this).siblings().removeClass('active');
    var src_num = $(this).find('img').attr("src").match(/[1-3]/);
     $('.img-show').html("<img src = 'images/main_view/main-img"+src_num[0]+".png'>");
	});
	
	$(".dropdown dt a").click(function() {
	    $(".dropdown dt:eq(0)").toggleClass('backdrop');
      $(".dropdown dd ul.main").toggle();
  });
  
  $(".dropdown ul.main li#movie a:eq(0), .dropdown ul.main li#gaming a:eq(0), .dropdown ul.main li#books a:eq(0), .dropdown ul.main li#mt a:eq(0)").click(function() {
      var $current = $(this).parent();
      $current.find('div.list-show').toggle();
      $current.addClass('active');
      var $len = $current.find('.list-show').find('.show-left').width()+$current.find('.list-show').find('.show-right').width();
      $current.find('.list-show').css('width', $len);
  });
  
  $(document).bind('click', function(e) {
      var $clicked = $(e.target);
      if ($clicked.parent().siblings().hasClass("active")){
        $clicked.parent().siblings().removeClass("active");
        $clicked.parent().siblings().find('div.list-show').hide();
      }
  });
  
  $(document).bind('click', function(e) {
      var $clicked = $(e.target);
      if (! $clicked.parents().hasClass("dropdown")){
        $(".dropdown dd ul.main").hide();
        $(".dropdown ul.main").find("li.active").find('div.list-show').hide();
        if (! $clicked.parents().hasClass("backdrop"))
          $(".dropdown dt:eq(0)").removeClass('backdrop');
          $(".dropdown ul.main").find("li.active").removeClass('active');
      }
  });
});