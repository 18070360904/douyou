//右侧登录界面
var saveLeft=$('.box').css('left');
$('.image').css('top',$('.myZoe .image').height()+'%');
$('#logo_ge').on('click',function(){
	$('.myZoe').css('display','block');
	$('.bg').animate({'opacity':'0.7'},500);
	$('.box').animate({'left':'0'},500);
})
$('.myZoe .bg').on('click',function(){
	$('.box').animate({'left':saveLeft},500);
	$('.bg').animate({'opacity':0},500,function(){
		$('.myZoe').css('display','none');
	});
	  window.location.reload();
});
//判断是否登录 执行不同的点击操作
var oDeng=window.localStorage.getItem('deng');
var loc=window.localStorage;
if(loc.deng){
	$('.tx img').attr('src','./img/animal032.jpg');
	$('.tx .name').html(loc.deng);
	$('.tx').on('touchstart',function(){
		$('.image').animate({'top':0},800);
	});
	$('.image li img').on('click',function(){
		window.localStorage.setItem('img',this.src);
		$('#logo_ge').attr('src',this.src);
		$('.tx img').attr('src',this.src);
		$('.enters img').attr('src',this.src);
		$('.image').animate({'top':$('.myZoe .image').height()+'%'},800);
	});
	var aImg=window.localStorage.getItem('img')
		$('#logo_ge img').attr('src',aImg);
		$('.tx img').attr('src',aImg);
		$('.enters img').attr('src',aImg);
}else{
	$('.tx').on('click',function(){
		window.localStorage.setItem('saveHref',location.href);	
		location.href="zhuce.html";
	})
	$('#logo_ge ').attr('src','img/touxiang.png');
	$('.tx img').attr('src','img/touxiang.png');
}
//退出登录
$('.outUser').on('click',function(){
	$('.box').animate({'left':saveLeft},500);
	$('.bg').animate({'opacity':0},500,function(){
		$('.myZoe').css('display','none');
	});
	 window.localStorage.removeItem('deng');
	$('#logo_ge').attr('src','img/touxiang.png');
	$('.tx img').attr('src','img/touxiang.png');
	window.location.reload();
});

$('.header a').on('click',function(){
	$('.image').animate({'top':$('.myZoe .image').height()+'%'},800);
});