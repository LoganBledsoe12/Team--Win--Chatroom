$(document).ready(function() {
	
	var input;
	var user;


	$('#formbox').submit(function (e){
		e.preventDefault();

		$input = $('#inputbox').val();
		user = $('#usernamebox').val();
		// $('.comment').emoticonize();
		console.log($input);
		console.log(user);
		$.post('http://fathomless-caverns-2838.herokuapp.com/messages/new', {username: user, entry: $input }, 'JSON' );
		$('#inputbox').val('');
	});
	function getMsg(){
		$.get('http://fathomless-caverns-2838.herokuapp.com/messages',chatMessages, 'JSON' );
		function chatMessages(data){
		var html = '';
			data.reverse();
			for(var i=0; i<data.length; i++){
				var msg = data[i];
				html+='<div>'+msg.username+': '+msg.entry+'</div>';

			}
				$('#chatbox').html(html);
				$("#chatbox").scrollTop($("#chatbox").prop('scrollHeight'));
				console.log($("#chatbox").prop('scrollHeight'));
		}


	}
	setInterval(getMsg, 500);
	getMsg();

});