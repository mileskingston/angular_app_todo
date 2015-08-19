// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


$(document).ready(function() {
    headerFixed();
    backToTop();
});

function headerFixed() {
    var headElHeight = jQuery('.header').outerHeight();
    var headEl = jQuery('.header');
    var scrollTop = jQuery('.icon-top');
    var docHeight = jQuery(window).height() / 10;

    jQuery(window).scroll(function() {
        // header
        if (jQuery(window).scrollTop() > headElHeight) {
            headEl.addClass('header-fixed');
        } else {
            headEl.removeClass('header-fixed');    
        }
        // scroll top
        if (jQuery(window).scrollTop() > docHeight) {
            scrollTop.addClass('fixed');
        } else {
            scrollTop.removeClass('fixed');    
        }
    });    
}

function backToTop() {
    jQuery('.icon-top').click(function(event){
        event.preventDefault();
        jQuery('body, html').animate({scrollTop: 0,}, 800);
    });
}
