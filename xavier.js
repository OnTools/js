$(document).ready(function() {
    $('#side-menu').metisMenu();
    $(window).resize(function() {
        if ($(window).width() < 768) {
            $('body').addClass('768');
        } else {
            $('body').removeClass('768');
        }
    });
    $('.close-sidebar').click(function() {
        $("body").toggleClass("mini-navbar");
        $('#sidebar-collapse').attr('style', '');
        $("body").removeClass('fixed-sidebar');
        if ((!$('body').hasClass('768')) && ($('body').hasClass('right-sidebar')) && (!$('body').hasClass('mini-navbar'))) {
            $("body").toggleClass("right-sidebar");
        }
        if (($('body').hasClass('768')) && ($('body').hasClass('mini-navbar')) && ($('body').hasClass('right-sidebar'))) {
            $("body").toggleClass("right-sidebar");
        }
        if (!$('body').hasClass('mini-navbar')) {
            $('#sidebar-collapse').hide();
            setTimeout(function() {
                $('#sidebar-collapse').fadeIn(500);
            }, 100);
        }
    });
    $('.reveal-rightsidebar').click(function() {
        $("body").toggleClass("right-sidebar");
        if ((!$('body').hasClass('768')) && (!$('body').hasClass('mini-navbar')) && ($('body').hasClass('right-sidebar'))) {
            $("body").toggleClass("mini-navbar");
        }
        if (($('body').hasClass('768')) && ($('body').hasClass('right-sidebar')) && ($('body').hasClass('mini-navbar'))) {
            $("body").toggleClass("mini-navbar");
        }
        if ($('body').hasClass('right-sidebar')) {
            $('#right-sidebar-id').hide();
            setTimeout(function() {
                $('#right-sidebar-id').fadeIn(600);
            }, 100);
        }
    });
    $('[data-toggle="tooltip"], .show-tooltip').tooltip({
        container: 'body',
        animation: false
    });
    $('[data-toggle="popover"]').popover({
        container: 'body',
        animation: false
    });
    $(document).ready(function() {
        $(".panel-options .close-panel").click(function() {
            $(this).parents(".panel").fadeToggle(400);
            return false;
        });
    });
    $(document).ready(function() {
        $(".panel-options .minimise-panel").click(function(event) {
            $(this).parents(".panel").find(".panel-body").slideToggle(400);
            $(this).parents(".panel").toggleClass('minimized');
            return false;
        });
    });
    $(document).ready(function() {
        $('.panel-options .expand-panel').on('click', function() {
            if ($(this).parents(".panel").hasClass('panel-fullsize')) {
                $(this).parents(".panel").removeClass('panel-fullsize');
            } else {
                $(this).parents(".panel").addClass('panel-fullsize');
            }
        });
    });
    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 150) {
                $('#to-top').fadeIn(200);
            } else {
                $('#to-top').fadeOut(100);
            }
        });
        $('#to-top').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 400);
            return false;
        });
    });
});
