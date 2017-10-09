$(function(){
  

$('.nav-li h5').hover(function(){
        var ini = $('.nav-li h5').each(function(i){
              $(this).removeClass('clicked');
          });//每一次都将类名初始化
          $(this).addClass('clicked');//增加  clicked 类名  
        var index = $('h5').index(this);
        $('.nav-li .nav-list').each(function(i){
            $(this).hide();
        });
        $('.nav-li .nav-list').eq(index).show();
});

  // 轮播图s
  var banImg = $('#ban-con a');//获取 轮播图的图片
  for(var i = 0; i<banImg.length ; i++){
      $('#pager').append("<span></span>");
  }

   $('#ban-con').cycle({
     fx : 'shuffle',
     timeout : 2000,
     prev : '.pre-btn',
     next : '.next-btn',
     pause:1,
     pager : '#banner',//鼠标指向大盒子的时候 停止播放
     pagerEvent :'mouseover',
     pauseOnPagerHover:1
   });





});
