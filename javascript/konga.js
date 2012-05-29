$(document).ready(function(){
	$('.img-div').click(function(){
	  $(this).addClass('active');
	  $(this).siblings().removeClass('active');
    var src_num = $(this).find('img').attr("src").match(/[1-3]/);
     $('.img-show').html("<img src = 'images/main_view/main-img"+src_num[0]+".png'>");
	});
});