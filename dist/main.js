$(document).ready(function() {
	
	var input;
	var user;


	$('#formbox').submit(function (e){
		e.preventDefault();

		$input = $('#inputbox').val();
		user = $('#usernamebox').val();

		console.log($input);
		console.log(user);
		$.post('http://tiny-pizza-server.herokuapp.com/collections/slacker', {username: user, message: $input, }, 'JSON' );
		$('#inputbox').val('');
	});
	function getMsg(){
		$.get('http://tiny-pizza-server.herokuapp.com/collections/slacker',chatMessages, 'JSON' );
		function chatMessages(data){
		var html = '';
			data.reverse();
			for(var i=0; i<data.length; i++){
				var msg = data[i];
				html+='<div>'+msg.username+': '+msg.message+'</div>';

			}
				$('#chatbox').html(html);
				$("#chatbox").scrollTop($("#chatbox").prop('scrollHeight'));
				console.log($("#chatbox").prop('scrollHeight'));
		}


	}
	setInterval(getMsg, 500);
	getMsg();

});