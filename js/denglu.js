        function id(id){
	return document.getElementById(id);
}    
            
                var oUser=document.getElementById('username');
				var oPwd=document.getElementById('password');
                var oCodeoff=false;
				var oBtn=document.getElementById('btn');
				var oBtn_inf=document.getElementById('btn_inf');
				
			//验证码
var oCode=id('code_input');
var oYAn=id('code');//这是验证码
var oC_inf=id('code_inf');
var verifyCode = new GVerify("code");
oCode.onblur=function(){
     	var res = verifyCode.validate(oCode.value);
     
//3.使用正则判断是否符合输入规则
   if(res){
        oC_inf.innerHTML =' 验证码正确';
       oC_inf.style.color='green';    
      oCodeoff=true;
       }
   else{
     	 oC_inf.innerHTML ='验证码错误';
       oC_inf.style.color='red';
       oCodeoff=false;
        }
   remove(oC_inf);
}	
				
				oBtn.onclick=function(){
					var login={'username':oUser.value,'password':oPwd.value};
					var dataJson=window.localStorage.getItem('list');
					var success=null;
					dataJson=eval('(' + dataJson + ')');
					
					
					for (var i=0;i<dataJson.length;i++) {
						
						
						if (dataJson[i].username==login.username&&dataJson[i].password==login.password&&oCodeoff) {
				   oBtn_inf.innerHTML='登陆成功';
//				   这是存入用户名称
                  window.localStorage.setItem('deng',oUser.value);
				   oBtn_inf.style.color='green';		 
							success=1;
							 setTimeout(dele,3000);
							 
						// 这是一个封装好的删除提示值的函数
						   function dele(){
						    	                                                                                                                             window.location.href="index.html";
						   };
						    
						 // 这是一个封装好的删除提示值结束的函   
						}
					}
				
					if (success==null) {
						oBtn_inf.innerHTML='用户名或密码错误';
						oBtn_inf.style.color='red';
						
					}
					if(!oCodeoff){
						oBtn_inf.innerHTML='验证码错误';
						oBtn_inf.style.color='red';
					}
					remove(oBtn_inf);
					
				}
				


// 这是一个封装好的删除提示值的函数
  function remove(obj){
    setTimeout(function(){
    	obj.innerHTML='';
    },3000);
    };
 // 这是一个封装好的删除提示值结束的函   





