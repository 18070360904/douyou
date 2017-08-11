//机器人
var atop=$('.txt_list').height();
console.log(atop)
$('.set_txt').on('click',function(){
	function setText(){
		var $meLi='<li class="me"><img src="img/g2.jpg" alt="" /><p>'+$('.txt_val').val()+'</p></li>'
		$('.txt_list').append($meLi);
	
	
	
	$(function(){
		$.ajax({
			type:"get",
			url:"http://www.tuling123.com/openapi/api",
			dataType:"JSON",
			jsonP:"callback",
			data:{'key':'b8680786b6714ae4953c72d6cde9c556','info':$('.txt_val').val(),'userid':'12345678'},
			success:function(str){
				var $meLi='<li class="text_left"><img src="img/g2.jpg" alt="" /><p>'+str.text+'</p></li>'
					$('.txt_list').append($meLi);
					document.getElementById('content').scrollTop = document.getElementById('content').scrollHeight;
			 console.log(document.getElementById('content').scrollTop+"top");
console.log(document.getElementById('content').scrollHeight+"height");			 
			}
		});
	});
	$('.txt_val').val('');
	}
	setText()
});

