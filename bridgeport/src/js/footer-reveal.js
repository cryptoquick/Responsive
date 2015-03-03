var sticky = $('.sticky-footer'),
		reveal_wrapper = $('.reveal-wrapper'),
		reveal_wrapper_height = reveal_wrapper.outerHeight(),
		sticky_height = sticky.outerHeight(),
		half_sticky_height = (sticky_height / 2);

(function ($) {
	$(window).load(function () {
		$(window).scroll(function () {
			var docTop = $(this).scrollTop(),
			docBottom = docTop + $(this).height(),
			docHeight = $(document).height(),
			marginBottom = parseInt($('.reveal-wrapper').css('margin-bottom'));

			if (docBottom >= (reveal_wrapper_height - half_sticky_height)) {
				$('.sticky-footer').addClass('absolute');
			} else {
				$('.sticky-footer').removeClass('absolute');
			}
		})
	});
})(jQuery);
