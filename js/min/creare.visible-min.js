$(document).ready(function(){var a=$(window),i=$(".scroll");i.each(function(a,i){var i=$(i);i.visible(!0)&&(i.addClass("already-visible"),i.hasClass("counter")&&statCountUp())}),a.scroll(function(a){i.each(function(a,i){var i=$(i);i.visible(!0)&&setTimeout(function(){i.addClass("visible")},50*a)})})});