function id(id){
	return document.getElementById(id);
}
//这是用户名验证
//1.编写正则表达式
//邮箱验证
var userReg=/^[a-zA-z0-9]\w*@\w+\.\w{2,3}(\.\w{2})?$/;
//手机验证
var userRegt=/^1[3458]\d{9}$/;
var oUse=id('username');
var oUseinf=id('user_inf');
var oUseoff=false;//这是开关
var oPassoff=false;//这是开关
var oAckoff=false;//这是开关
var oCodeoff=false;
//2.绑定输入改变的事件
oUse.onkeyup=function(){
//3.使用正则判断是否符合输入规则
   if(userReg.test(oUse.value)||userRegt.test(oUse.value)){
   	if(oUse.value){
   	oUseinf.innerHTML = '恭喜你，用户名可用。';
   	oUseinf.style.color='green';
   	oUseoff=true;
   }
   }
   	else{
   	 	oUseinf.innerHTML ='请输入正确的邮箱号或手机号';
   	 	oUseinf.style.color='red';
   	 	oUseoff=false;
   }
         remove(oUseinf);
};

// 这是密码验证
  var oPass=id('password');
  var oPassinf=id('pass_inf');
  var passReg = /^\w{6,12}$/; 
  oPass.onkeyup=function(){
//3.使用正则判断是否符合输入规则
   if(passReg.test(oPass.value)){
   if(oPass.value){
   	oPassinf.innerHTML = '密码可用';
     oPassinf.style.color='green';
     oPassoff=true;
   }
   }
   else{
   	 oPassinf.innerHTML = '密码不可用，需要输入英文或数字，长度在6到12之间';
   	  oPassinf.style.color='red';
   	    oPassoff=false;
   }
         remove(oPassinf);
};

//再次确认密码
  var oAck=id('ack');
  var oAckinf=id('ack_inf');
 oAck.onkeyup=function(){
//3.使用正则判断是否符合输入规则
   if(oPass.value){
          if(oPass.value==oAck.value){
   	         oAckinf.innerHTML ='密码正确';
   	              oAckinf.style.color='green';
   	              oAckoff=true;
                } 
                else{
              	 oAckinf.innerHTML ='密码输入不一致';
              	  oAckinf.style.color='red';
              	    oAckoff=false;
                    }
       }else{
   	    oAckinf.innerHTML ='请输入密码';
   	    oAckinf.style.color='red';
   	      oAckoff=false;
        }
    remove(oAckinf);
};
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
  console.log(oCodeoff+'oCodeoff1');
      
};



//这是登陆函数判定
var oGo=id('go');
var oBtn_inf=id('btn_inf');
oGo.onclick=function(){
     if(oUseoff&&oPassoff&&oAckoff&&oCodeoff){
     	post();
     }
     else{
     oBtn_inf.innerHTML='请填写信息';
     	oBtn_inf.style.color='red';
     
     }
    remove(oBtn_inf);
}

function post(){//这是注册提交函数
 var upData=null;
 var repeat=null;
 				var upData=null;
					var repeat=null;
						//首先判断有无值有就运行
					if (oUse.value&&oPass.value) {
					     //   如果数据库里能获取list的值就运行
				 		if (window.localStorage.getItem('list')) {
                           //然后把它存成json格式
							upData={'username':oUse.value,'password':oPass.value};
							//再获取这个json
							var dataJson=window.localStorage.getItem('list');
							
							dataJson=eval('('+dataJson+')');
                           //利用循环把这个数组拿出来
							for (var i=0;i<dataJson.length;i++) {
								//判断用户名是否重复
								if (dataJson[i].username==upData.username) {
									 oBtn_inf.innerHTML='用户名重复';
									   oBtn_inf.style.color='red';
									//如果重复把repeat的值设为1
									repeat=1;
								}
							}
							 //如果用户名不重复就运行
							if (repeat==null) {
								oBtn_inf.innerHTML='注册成功';
						         oBtn_inf.style.color='green';
								//把值赋给加进一个数组
								dataJson.push(upData);
								//把这个数组装换成json的格式
								dataJson=JSON.stringify(dataJson);
								//把值传进数据库
								window.localStorage.setItem('list',dataJson);
								console.log(window.localStorage.getItem('list'));
								 skb();
								
							}
						} 
						//如果没有值的话就直接添加进去
						else {
							upData={'username':oUse.value,'password':oPass.value};
							console.log(upData);
							var data=[];
							data.push(upData);
							data=JSON.stringify(data);
							window.localStorage.setItem('list',data);
							oBtn_inf.innerHTML='注册成功';
						     oBtn_inf.style.color='green';
						     skb();
							console.log(window.localStorage.getItem('list'));
						}
					}
				};

// 这是一个封装好的删除提示值的函数
  function remove(obj){
    setTimeout(function(){
    	obj.innerHTML='';
    },3000);
    };
    
// 这是一个封装好的删除提示值结束的函
  function skb(){
    setTimeout(function(){
    	window.location.href='denglu.html';
    },2000);
    };
   
    
//这是写入数据库的函数















