/*
	Prologue by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
$(".headerSamsung").click(function() {
	let 

	$header = $(this);
	//getting the next element
	$content = $header.next();
	//open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
	$content.slideToggle(500, function() {
		//execute this after slideToggle is done
		//change text of header based on visibility of content div
		$header.text(function() {
		//change text based on condition
		return $content.is(":visible") ? "Collapse" : "Samsung";
		});
	});

});

$(".headerApple").click(function() {
	let 

	$header = $(this);
	//getting the next element
	$content = $header.next();
	//open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
	$content.slideToggle(500, function() {
		//execute this after slideToggle is done
		//change text of header based on visibility of content div
		$header.text(function() {
		//change text based on condition
		return $content.is(":visible") ? "Collapse" : "Apple";
		});
	});

});

$(".headerNintendo").click(function() {
	let 

	$header = $(this);
	//getting the next element
	$content = $header.next();
	//open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
	$content.slideToggle(500, function() {
		//execute this after slideToggle is done
		//change text of header based on visibility of content div
		$header.text(function() {
		//change text based on condition
		return $content.is(":visible") ? "Collapse" : "Nintendo";
		});
	});

});



(function($) {

	skel.breakpoints({
		wide: '(min-width: 961px) and (max-width: 1880px)',
		normal: '(min-width: 961px) and (max-width: 1620px)',
		narrow: '(min-width: 961px) and (max-width: 1320px)',
		narrower: '(max-width: 960px)',
		mobile: '(max-width: 736px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Scrolly links.
			$('.scrolly').scrolly();

		// Nav.
			var $nav_a = $('#nav a');

			// Scrolly-fy links.
				$nav_a
					.scrolly()
					.on('click', function(e) {

						var t = $(this),
							href = t.attr('href');

						if (href[0] != '#')
							return;

						e.preventDefault();

						// Clear active and lock scrollzer until scrolling has stopped
							$nav_a
								.removeClass('active')
								.addClass('scrollzer-locked');

						// Set this link to active
							t.addClass('active');

					});

			// Initialize scrollzer.
				var ids = [];

				$nav_a.each(function() {

					var href = $(this).attr('href');

					if (href[0] != '#')
						return;

					ids.push(href.substring(1));

				});

				$.scrollzer(ids, { pad: 200, lastHack: true });

		// Header (narrower + mobile).

			// Toggle.
				$(
					'<div id="headerToggle">' +
						'<a href="#header" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);

			// Header.
				$('#header')
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'header-visible'
					});

			// Fix: Remove transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#headerToggle, #header, #main')
						.css('transition', 'none');

	});

})(jQuery);