
/*
|-------------------------------------------------------------------------------
| CONSOLE ERRORS CURE
|-------------------------------------------------------------------------------
|
| Avoid 'console' errors in browsers that lack a console.
|
*/
(function() {
    var noop = function noop() {},
        methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'],
        length = methods.length,
        console = window.console || {};

    while(length--) {
        // Only stub undefined methods.
        console[methods[length]] = console[methods[length]] || noop;
    }
}());

/*
|-------------------------------------------------------------------------------
| DROPDOWNS
|-------------------------------------------------------------------------------
*/
function dropDowns() {
    var label = $('.mm-label-4dd, .body-label-4dd, .hdr-label-4dd'),
        allDropDowns = $('.mm-dropdown, .body-dropdown, .hdr-dropdown');

    label.click(function(event) {
        allDropDowns.hide();
        $(this).parents('.mm-menu, .body-menu, .hdr-menu').children('.mm-dropdown, .body-dropdown, .hdr-dropdown').toggle();
        label.removeClass('down');
        $(this).addClass('down');
        return false;
    });

    $(document).click(function() {
        allDropDowns.hide();
        label.removeClass('down');
    });

    $(document).keydown(function(e) {
        if(e.keyCode == 27) {
            allDropDowns.hide();
            label.removeClass('down');
        }
    });

    allDropDowns.click(function(event) {
        event.stopPropagation();
    });
}

/*
|-------------------------------------------------------------------------------
| SLIDE-OUT MENU
|-------------------------------------------------------------------------------
|
| Modified version of snippet by Aldo Lugo —
| https://github.com/aldomatic/FB-Style-Page-Slide-Menu
|
*/
function slideOut() {
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
}

/*
|-------------------------------------------------------------------------------
| TOOLTIP and smiley
|-------------------------------------------------------------------------------
*/
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

/*
|-------------------------------------------------------------------------------
| TEXT ROTATOR
|-------------------------------------------------------------------------------
*/
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

/*
|-------------------------------------------------------------------------------
| TUMBLR LIKE
| @todo: research native tumblr like button and my tumblr theme, fix it
|-------------------------------------------------------------------------------
*/
function tumblrLike() {
    $('.pft-like').click(function() {
        var command = $(this).hasClass('pft-liked') ? 'unlike' : 'like';
        var oauth = $(this).attr('data-reblog').slice(-8);
        var id = $(this).attr('data-id');
        var frameAttr = 'http://www.tumblr.com/' + command + '/' + oauth + '?id=' + id;
        $('#likeit').attr('src', frameAttr);
        $(this).hasClass('pft-liked') ? $(this).removeClass('pft-liked') : $(this).addClass('pft-liked');
        return false;
    });
}

/*
|-------------------------------------------------------------------------------
| FLUID WIDTH VIDEO
|-------------------------------------------------------------------------------
| Self calling anonymous function
|
*/
$(function() {

    var $allVideos = $("iframe[src^='http://player.vimeo.com'], iframe[src^='http://www.youtube.com'], object, embed"),
    $fluidEl = $("figure");

    $allVideos.each(function() {

      $(this)
        // jQuery .data does not work on object/embed elements
        .attr('data-aspectRatio', this.height / this.width)
        .removeAttr('height')
        .removeAttr('width');

    });

    $(window).resize(function() {

      var newWidth = $fluidEl.width();
      $allVideos.each(function() {

        var $el = $(this);
        $el
            .width(newWidth)
            .height(newWidth * $el.attr('data-aspectRatio'));

      });

    }).resize();

});

/*
|-------------------------------------------------------------------------------
| CALLING FUNCTIONS
|-------------------------------------------------------------------------------
| After the DOM is loaded
|
*/
$(document).ready(function(){
    // $('.i-search').css( 'border-color', 'transparent');
    $('ol, ul').prev('p').css('margin-bottom', '0'); //lists captions
    dropDowns();
    tooltipSmiley();
    slideOut();
    tumblrLike();
    $('.box-testimonials').rotaterator({fadeSpeed:1200, pauseSpeed:8000});
    $('<div class="box-cta-hr"></div>').insertBefore('.box-cta .h-secondary');
    $('.btn-back').click(function(){ parent.history.back(); return false;});
});

/*
|---------------------------------------
| After scripting elements created
|---------------------------------------
*/
// $(document).on(function() {
// });

/*
|---------------------------------------
| IE status bar error fix
|---------------------------------------
*/
function noError() {
    return true;
}
window.onerror = noError;
