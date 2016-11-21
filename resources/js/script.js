$(document).ready(function() {
	
	if ( 0 < $('.product button').length ) {
		$('.product button').click(function() {
			var offset = $(this).parent().offset();
			$(this).parent().clone().addClass('product-clone').css({
				'left' : offset.left + 'px',
				'top' : parseInt(offset.top-$(window).scrollTop()) + 'px',
				'width' :  $(this).parent().width() + 'px',
				'height' : $(this).parent().height() + 'px'
			}).appendTo($('.product').parent());

			var cart = $('nav .navbar-right strong').offset();
			$('.product-clone').animate( { top: parseInt(cart.top-$(window).scrollTop()) + 'px', left: cart.left + 'px', 'height': '0px', 'width': '0px' }, 800, function(){
	            $(this).remove();
	            var price = parseInt($('nav .navbar-right').attr('data-price'));
	            var productPrice = parseInt($(this).attr('data-price'));
	            var cartPrice = parseInt(price+productPrice);
	            $('nav .navbar-right strong').html('$' + cartPrice);
	            $('nav .navbar-right').attr('data-price', cartPrice);
	        });
		});
	}

});