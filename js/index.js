/**
 * 
 * @param {Object} obj 拖动滚动的目标
 * @param {Object} child 目标的子级
 * @param {Object} index	变化颜色的小点
 * @param {Object} className  小点要添加的类名
 */
function moveBanner(obj,child,index,className){
	var oStart=0;
	var saveStrat=0;
	var endX=0;
	var moveX=0;
	var iNow=0;
	var timer;
		$(obj).on('touchstart',function(ev){
			clearInterval(timer);
			oStart=ev.originalEvent.changedTouches[0].pageX;
			saveStrat=endX;
			});
		$(obj).on('touchmove',function(ev){
			moveX=ev.originalEvent.changedTouches[0].pageX-oStart;
			endX=moveX+saveStrat;
			$(obj).css('left',endX);
		});
		$(obj).on('touchend',function(ev){
			
			if(child){
				var dis=ev.originalEvent.changedTouches[0].pageX-oStart;
				var iNew=Math.round(dis/window.screen.width);
				iNow-=iNew;
				
				if(iNow<0){
					iNow=0
				}
				if(className){
					$(index).removeClass(className);
					if(iNow>=$(child).size()-1){
						$(index).eq(0).addClass(className);
					}else{
						$(index).eq(iNow).addClass(className);
					}
				}
				endX=-iNow*window.screen.width;
				
			}else{
				if($(obj).offset().left>0){
					endX=0;
				}else if($(obj).offset().left<-($(obj).outerWidth()-window.screen.width)){
					endX=-($(obj).outerWidth()-window.screen.width);
				}
			}
				$(obj).animate({'left':endX},200,function(){
					if(iNow==$(child).size()-1){
					iNow=0;
					endX=-iNow*window.screen.width;
					$(obj).css('left',endX);
				}
				});
				auto();
		});
		function auto(){
			timer=setInterval(function(){
			iNow++
			if(iNow<0){
					iNow=0
				}
			$(index).removeClass(className);
			if(iNow>=$(child).size()-1){
					$(index).eq(0).addClass(className);
			}else{
				$(index).eq(iNow).addClass(className);
			}
				endX=-iNow*window.screen.width;
		
			$(obj).animate({'left':endX},200,function(){
					if(iNow==$(child).size()-1){
					iNow=0;
					endX=-iNow*window.screen.width;
					$(obj).css('left',endX);
				}
				});
			},2000);
		};
		auto();
	}
 moveBanner('.banner_box','.banner_box li','.xdd li','active');
 

//这是回到顶部的函数
function id(id){
	return document.getElementById(id);
};
var oArr=id('arrow');
document.addEventListener('scroll',function(){
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				
			if(scrollTop>400){
			   oArr.style.display='block';
			}
			else if(scrollTop<400){
				 oArr.style.display='none';
			}
        
})
oArr.addEventListener('touchstart',function(){

	 document.body.scrollTop=0;
});



//这是机器人的开始
var Jiqi=id('jiqi');
var Roubt=id('ji');
var Cha=id('cha');
Jiqi.addEventListener('touchstart',function(){
Roubt.style.left=0;
	
});
Cha.addEventListener('touchstart',function(){
Roubt.style.left=100+'%';
	
});







//这是机器人的结束