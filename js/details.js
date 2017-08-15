        function id(id){
	return document.getElementById(id);
}    
var oDeng=window.localStorage.getItem('deng');
var oShu=id('shuxie');
var oValue=id('text_into');
var oInf=id('input_inf');//这是提示框
var loc=window.localStorage;
var oExit=id('exit');//这是退出
oValue.value='';
id('fa').addEventListener('click',function(){
	if(loc.deng){
			    if(oValue.value==""){
				    oInf.innerHTML='请填写内容';
				    oInf.style.color='red';	
				}
			     else {
			     	if(loc.name){
			     		
			     		loc.name+='/'+oDeng;
			     	}
			     	else{
			     		loc.name=oDeng;
			     	}
			     	if(loc.zhi){
			     		
			     		loc.zhi+='/'+oValue.value;
			     	}
			     	else{
			     		loc.zhi=oValue.value;
			     	}
			     	hou();
			     };
	}
	else{
		oInf.innerHTML='请先登陆';
		oInf.style.color='red';
	}
	remove(oInf);
	oValue.value='';
});
//这是退出登录

//这是留言板功能
if(loc.name){
app();
}
function app(){
	var oname=window.localStorage.getItem('name').split('/');
	var ozhi=window.localStorage.getItem('zhi').split('/');
	for(var i=0;i<oname.length;i++){
	      var oP1=document.createElement('div');
				oShu.appendChild(oP1);
				oP1.innerHTML=oname[i]+":";
				oP1.style.color='green';
				var oP2=document.createElement('p');
				oP1.appendChild(oP2);
				oP2.innerHTML=ozhi[i];
				oP2.style.color='black';
			}
};



function hou(){
	var oname=window.localStorage.getItem('name').split('/');
	var ozhi=window.localStorage.getItem('zhi').split('/');
	var i=oname.length-1;
	 var oP1=document.createElement('div');
				oShu.appendChild(oP1);
				oP1.innerHTML=oname[i]+":";
				oP1.style.color='green';
				var oP2=document.createElement('p');
				oP1.appendChild(oP2);
				oP2.innerHTML=ozhi[i];
				oP2.style.color='black';
}
//这是留言板功能结束
oExit.addEventListener('click',function(){
   if(loc.deng){
   	  window.localStorage.removeItem('deng');
     oInf.innerHTML='退出成功';
	oInf.style.color='red';	
    oExit.style.backgroundColor='red';
  }
   else{
   	oInf.innerHTML='请先登陆';
		oInf.style.color='red';
   }
   remove(oInf);
});
// 这是一个封装好的删除提示值的函数
  function remove(obj){
    setTimeout(function(){
    	obj.innerHTML='';
    },2000);
    };
 // 这是一个封装好的删除提示值结束的函   



//
//这是页数选择按钮函数
$('#select_active').click(function(){
	$('#page').fadeToggle();
});
var b=0;
$('#next_page').click(function(){
//	for(var i=0;i<=4;i++){
//	$('#xia_box a').eq(i).className='';
//	}
	 b++;
	 if(b>=4){
	 	b=4;
	 }
	$('#xia_box a').eq(b).addClass('active').siblings().removeClass('active');
	
});


$('#all_page').click(function(){
	
	
});


//页数选择按钮结束


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









