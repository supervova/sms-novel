// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

$(document).ready(function(){
	$('iframe[src^="http://player.vimeo.com"], iframe[src^="http://www.youtube.com"], iframe[src*="dailymotion.com"], object:not([class*="not-video"]):not(:has(embed)), embed:not([class*="not-video"])').wrap('<figure class="video" />');
	$('ol, ul').prev('p').css('margin-bottom', '0'); //lists captions

	// JS 'media queries'
	// var screenWidth = (screen.width < 480px) ? true : false;
	//if(!screenWidth) { ... }
});

// Retina Image Replacement — pure jQuery solutions:
//https://github.com/mcilvena/jQuery-Retina-Display-Plugin/blob/master/jquery.retina.js
//http://css3.bradshawenterprises.com/blog/retina-image-replacement-for-new-ipad/ — technique #2

//function handleError() {
//    return true;
//}
//window.onerror = handleError;