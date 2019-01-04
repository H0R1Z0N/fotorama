	$('.myfotorama')
		.on('fotorama:ready ' + 
				'fotorama:showend ',       // Video iframe is removed
				function (e, fotorama, extra) {
					$('.myfotorama').removeClass('typing');
					$('.content, .item-video video').hide();
					$('.fotorama__active').find('.typing').each(function(){
						$(this).html('');
						typing($(this), $(this).data('text'));
					});

					$('.fotorama__active').find('.animate').each(function(){
						triggerAnimate($(this));
					});
					$('video').trigger('play');
					$('.fotorama__active .content, .fotorama__active .item-video video').show();
				}
		)
		.fotorama();
					
		function triggerAnimate(ele) {
			var self = $(ele);
			var animate = $(self).data('animate');
			var delay = $(self).data('delay');
			console.log($(ele).data('animate'));
			self.addClass('animated ' + animate).css({'animationDelay' : delay});
			
			var animationEnd = (function(el) {
				var animations = {
					animation: 'animationend',
					OAnimation: 'oAnimationEnd',
					MozAnimation: 'mozAnimationEnd',
					WebkitAnimation: 'webkitAnimationEnd',
				};

				for (var t in animations) {
					if (el.style[t] !== undefined) {
						return animations[t];
					}
				}
			})(document.createElement('div'));

			self.one(animationEnd, function(){
				self.removeClass('animated ' + animate);

			});
			
		}
