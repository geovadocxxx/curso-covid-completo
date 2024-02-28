$(function() {
	$('.lightbox').each(function(){
		recurso = $(this).data('recurso');
		console.log(recurso);
		$(this).load(recurso, function(){});
	})
});