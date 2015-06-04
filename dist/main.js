$(document).ready(function() {
	
	$('#formbox').submit(function (e){
		e.preventDefault();
		var input = $('#inputbox').val();
		console.log(input);

		$.post('http://tiny-pizza-server.herokuapp.com/collections/mona', {message: input}, 'JSON' );
	});

})