$(document).ready(function() {
	
	var input;
	var user;

	$('#formbox').submit(function (e){
		e.preventDefault();
		input = $('#inputbox').val();
		user = $('#usernamebox').val();

		console.log(input);
		console.log(user);
		$.post('http://tiny-pizza-server.herokuapp.com/collections/slacker', {username: user, message: input, }, 'JSON' );

	});
	function getMsg(){
		$.get('http://tiny-pizza-server.herokuapp.com/collections/slacker',chatMessages, 'JSON' );
		function chatMessages(data){
		var html = '';
			for(var i=0; i<data.length; i++){
				var msg = data[i];
				html+='<div>'+msg.username+':'+msg.message+'</div>';
			}
				$('#chatbox').html(html);
		}

	}
	setInterval(getMsg, 500);
	getMsg();

});