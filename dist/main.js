$(document).ready(function() {
	
	var input;
	var user;

	$('#formbox').submit(function (e){
		e.preventDefault();
		input = $('#inputbox').val();
		user = $('#usernamebox').val();

		console.log(input);
		console.log(user);
		$.post('http://tiny-pizza-server.herokuapp.com/collections/mona', {username: user, message: input, }, 'JSON' );

	});

})