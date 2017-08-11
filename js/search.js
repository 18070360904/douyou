			
//			这是百度跨域
				$(function(){
				$('#seach').keyup(function(){
					$.ajax({
						type:"get",
						url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
						async:true,
						dataType:"jsonp",
						jsonp:"cb",
						data:{"wd":$('#seach').val()},
						success:function(str){
							console.log(str.s);
							for(var i=0;i<$('#list li').size();i++){
								$('#list li').remove();
							}
							for(var i=0;i<str.s.length;i++){
								var li = '<li> <a href="https://www.baidu.com/s?wd='+str.s[i]+'">'+str.s[i]+'</a>  </li>';
								
								$('#list').append(li);
							}
						}
					});
					if($('#seach').val()==''){
						for(var i=0;i<$('#list li').size();i++){
							$('#list li').remove();
						}
					}
				})
			});
			
		//百度跨域结束	
			
			
			
			
			
			
			
			
			
			
			
			
			
