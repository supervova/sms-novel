// CONSOLE ERRORS CURE - Avoid 'console' errors in browsers that lack a console.
(function() {
    var noop = function noop() {};
    var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
    var length = methods.length;
    var console = window.console || {};

    while(length--) {
        // Only stub undefined methods.
        console[methods[length]] = console[methods[length]] || noop;
    }
}());

// DROPDOWNS
function dropDowns() {
    $(document).click(function(e) {
        if($(e.target).is('.mm-label-4dd, .body-label-4dd, .hdr-label-4dd')) {
            return;
        }
        $('.mm-dropdown, .body-dropdown, .hdr-dropdown').toggle();
        $('.mm-label-4dd, .body-label-4dd, .hdr-label-4dd').removeClass('down');
    });
    $('html').click(function() {
        $('.mm-dropdown, .body-dropdown, .hdr-dropdown').hide();
        $('.mm-label-4dd, .body-label-4dd, .hdr-label-4dd').removeClass('down');
    });
    $('.mm-dropdown, .body-dropdown, .hdr-dropdown').click(function(event) {
        event.stopPropagation();
    });
    $(document).keydown(function(e) {
        if(e.keyCode == 27) {
            $('.mm-dropdown, .body-dropdown, .hdr-dropdown').hide();
            $('.mm-label-4dd, .body-label-4dd, .hdr-label-4dd').removeClass('down');
        }
    });
    $('.mm-label-4dd, .body-label-4dd, .hdr-label-4dd').click(function(event) {
        $('.mm-dropdown, .body-dropdown, .hdr-dropdown').hide();
        $(this).parents('.mm-menu, .body-menu, .hdr-menu').children('.mm-dropdown, .body-dropdown, .hdr-dropdown').toggle();
        $('.mm-label-4dd, .body-label-4dd, .hdr-label-4dd').removeClass('down');
        $(this).addClass('down');
        return false;
    });
}

// SLIDE-OUT MENU. Modified version of snippet by Aldo Lugo — https://github.com/aldomatic/FB-Style-Page-Slide-Menu
$(function slideOut() {
    var menuStatus;
    $('.btn-menu').click(function() {
        if(menuStatus !== true) {
            $('.page, .doc-header').animate({
                marginLeft: '240px'
            }, 300, function() {
                menuStatus = true;
            });

            if($('#slide-out').css('visibility') != 'visible') {
                $('#slide-out').css('visibility', 'visible');
            }
            return false;
        } else {
            $('.page, .doc-header').animate({
                marginLeft: '0'
            }, 300, function() {
                menuStatus = false;
            });
            return false;
        }
    });

    $('#slide-out li a').click(function() {
        var p = $(this).parent();
        if($(p).hasClass('current')) {
            $('#slide-out li').removeClass('current');
        } else {
            $('#slide-out li').removeClass('current');
            $(p).addClass('current');
        }
    });
});

// TOOLTIP and smiley
function tooltipSmiley() {
    if(window.matchMedia('(min-width: 769px)').matches) {
        $('.dfn').hover(
        function() {
            var txtTitle = $(this).prop('title');
            $(this).after('<p class="tooltip">' + txtTitle + '</p>');
            $(this).siblings('.tooltip').show('fast');
            $(this).data('title', $(this).prop('title'));
            $(this).removeAttr('title');
            // Smiley
            $('.box-cta hr').css('background-position', '0 -48px');
        }, function() {
            $('.tooltip').hide('fast').remove();
            $(this).prop('title', $(this).data('title'));
            $('.box-cta hr').css('background-position', '0 0');
        });
    }
}

// A responsive images approach including Retina image replacement — Picturefill - https://github.com/scottjehl/picturefill.

// Text rotator
(function($) {
    $.fn.extend({
        //plugin name - rotaterator
        rotaterator: function(options) {

            var defaults = {
                fadeSpeed: 600,
                pauseSpeed: 100,
                child: null
            };

            var options = $.extend(defaults, options);

            return this.each(function() {
                var o = options;
                var obj = $(this);
                var items = $(obj.children(), obj);
                items.each(function() {
                    $(this).hide();
                });
                if(!o.child) {
                    var next = $(obj).children(':first');
                } else {
                    var next = o.child;
                }
                $(next).fadeIn(o.fadeSpeed, function() {
                    $(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function() {
                        var next = $(this).next();
                        if(next.length === 0) {
                            next = $(obj).children(':first');
                        }
                        $(obj).rotaterator({
                            child: next,
                            fadeSpeed: o.fadeSpeed,
                            pauseSpeed: o.pauseSpeed
                        });
                    });
                });
            });
        }
    });
})(jQuery);


$(document).ready(function(){
    $('iframe[src^="http://player.vimeo.com"], iframe[src^="http://www.youtube.com"], iframe[src*="dailymotion.com"], object:not([class*="not-video"]):not(:has(embed)), embed:not([class*="not-video"])').wrap('<figure class="video" />');
    $('ol, ul').prev('p').css('margin-bottom', '0'); //lists captions
    dropDowns();
    tooltipSmiley();
    $('.box-testimonials').rotaterator({fadeSpeed:1200, pauseSpeed:8000});

    $('html').click(function() {
       $('.mm-dropdown, .body-dropdown, .hdr-dropdown').hide();
       return false;
   });
});

function noError() {
    return true;
}
window.onerror = noError;
