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
        if($(e.target).is('.mm-label-4dd, .body-label-4dd')) {
            return;
        }
        $('.mm-dropdown, .body-dropdown').hide();
        $('.mm-label-4dd, .body-label-4dd').removeClass('down');
    });
    $('html').click(function() {
        $('.mm-dropdown, .body-dropdown').hide();
        $('.mm-label-4dd, .body-label-4dd').removeClass('down');
    });
    $('.mm-dropdown, .body-dropdown').click(function(event) {
        event.stopPropagation();
    });
    $(document).keydown(function(e) {
        if(e.keyCode == 27) {
            $('.mm-dropdown, .body-dropdown').hide();
            $('.mm-label-4dd, .body-label-4dd').removeClass('down');
        }
    });
    $('.mm-label-4dd, .body-label-4dd').click(function(event) {
        $('.mm-dropdown, .body-dropdown').hide();
        $(this).parents('.mm-menu, .body-menu').children('.mm-dropdown, .body-dropdown').toggle();
        $('.mm-label-4dd, .body-label-4dd').removeClass('down');
        $(this).addClass('down');
        $('#billboard').append('<div class="overlay"></div>');
        return false;
    });
}

// SLIDE-OUT MENU. Modified version of snippet by Aldo Lugo — https://github.com/aldomatic/FB-Style-Page-Slide-Menu
$(function slideOut() {
    var menuStatus;

    // Show menu
    $('.btn-menu').click(function() {
        if(menuStatus !== true) {
            $('.ui-page-active, .doc-header').animate({
                marginLeft: '240px'
            }, 300, function() {
                menuStatus = true;
            });
            return false;
        } else {
            $('.ui-page-active, .doc-header').animate({
                marginLeft: '0'
            }, 300, function() {
                menuStatus = false;
            });
            return false;
        }
    });

    $('#slide-out, .pages').live('swipeleft', function() {
        if(menuStatus) {
            $('.ui-page-active, .doc-header').animate({
                marginLeft: '0'
            }, 300, function() {
                menuStatus = false;
            });
        }
    });

    $('.pages').live('swiperight', function() {
        if(!menuStatus) {
            $('.ui-page-active, .doc-header').animate({
                marginLeft: '240px'
            }, 300, function() {
                menuStatus = true;
            });
        }
    });

    $('div[data-role="page"]').live('pagebeforeshow', function(event, ui) {
        menuStatus = false;
        $('.pages').css('margin-left', '0');
    });

    // Menu behaviour
    $('#slide-out li a').click(function() {
        var p = $(this).parent();
        if($(p).hasClass('active')) {
            $('#slide-out li').removeClass('active');
        } else {
            $('#slide-out li').removeClass('active');
            $(p).addClass('active');
        }
    });
});

// TOOLTIP and smiley
function tooltipSmiley() {
    $('.dfn').hover(

    function() {
        var txtTitle = $(this).prop("title");
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

// A responsive images approach including Retina image replacement — Picturefill - https://github.com/scottjehl/picturefill.

$(document).ready(function(){
    $('iframe[src^="http://player.vimeo.com"], iframe[src^="http://www.youtube.com"], iframe[src*="dailymotion.com"], object:not([class*="not-video"]):not(:has(embed)), embed:not([class*="not-video"])').wrap('<figure class="video" />');
    $('ol, ul').prev('p').css('margin-bottom', '0'); //lists captions
    dropDowns();
    tooltipSmiley();
});

function noError() {
    return true;
}
window.onerror = noError;
