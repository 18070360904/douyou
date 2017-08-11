


$('#username').keyup(function(){
    $('#udele').fadeTo('slow', .5);
});
$('#username').blur(function(){
	 $('#udele').fadeOut();
});
 $('#udele').click(function(){
 	$('#username').val('');
 	
 });
// 这是密码
$('#password').keyup(function(){
	console.log(22);
    $('#pdele').fadeTo('slow', .5);
});
$('#password').blur(function(){
	 $('#pdele').fadeOut();
});
 $('#pdele').click(function(){
 	$('#password').val('');
 });
 //这是确认密码
$('#ack').keyup(function(){
	console.log(22);
    $('#adele').fadeTo('slow', .5);
});
$('#ack').blur(function(){
	 $('#adele').fadeOut();
});
 $('#adele').click(function(){
 	$('#ack').val('');
 });