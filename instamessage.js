$(document).ready(function() {
    var base_url = $('#js_data').data('base_url');
    $('.insta_chat_pro_img').on('change.bs.fileinput', function(event) {
        event.stopPropagation();
        var img_src = jQuery(".profile1 img").attr("src");
        jQuery(".profile1 img").css({height: "40px", width: "40px",marginTop:"20 px", border:"1px solid #ddd",
        borderRadius: "4px"});
        jQuery(".modal-title-img.insta-img img").attr("src", img_src);
        jQuery(".insta-img.message-avatar img").attr("src", img_src);
    });
    $('#options input[type="text"], #options textarea').keyup(function() {
        var thisData = $(this).attr("data-edit");
        if (thisData) {
            var thisValue = $(this).val();
            thisData = thisData.replace("edit-", "");
            if (thisValue == '') {
                thisValue = '...';
            }
            if (thisData == 'likes' && thisValue == '...') {
                $(".post_likes").css('display', 'none');
                $(".post_write_comment").css('display', 'none');
            } else if (thisData == 'likes' && thisValue != '...') {
                $(".post_likes").css('display', 'block');
                $(".post_write_comment").css('display', 'block');
            }
            $(".text-" + thisData).html(thisValue);
            if (thisData == 'name') {
                $(".theName").text(thisValue);
            }
        }
    });
    $('#options input[name="visibleOnline"]').change(function() {
        if ($("input[name='visibleOnline']").prop("checked")) {
            $("#insta_Active").hide();
            $("#insta_text_Active").hide();
            $(".live-time").hide();
            $(".insta-user-online").show();
        } else {
            $("#insta_Active").show();
            $("#insta_text_Active").show();
            $(".live-time").show();
            $(".insta-user-online").hide();
        }
    });
    $('#options input[name="visibleActive"]').change(function() {
        var val = $("input[name='visibleActive']:checked").val();
        if (val == "Show") {
            $("#insta_text_Active").show();
            $(".live-time").show();
        }
        if (val == "Hide") {
            $("#insta_text_Active").hide();
            $(".live-time").hide();
        }
    });
    $('#profile1_name').keyup(function() {
        var text = $(this).val();
        var comment1 = "";
        var count = "";
        var bad_word = "";
        for (var i = 0; i < bad.length; i++) {
            var comment1 = text.search(bad[i]);
            if (comment1 > 0) {
                bad_word = bad[i];
            }
        }
        text1 = text.replace(bad_word, '');
        var count = text1.length;
        if (count > 16) {
            var res = text1.substr(0, 14);
            var res1 = res + '...';
            $(".text-name").text(res1);
        } else {
            $(".text-name").text(text1);
        }
    });
    $("#edit-tagname").keyup(function() {
        var count = $(this).val();
        $(".header-title").text("@" + count);
    });
    $("#edit-2-Clock").keyup(function() {
        var count = $(this).val();
        $(".status-time").text(count);
    });
    $("#Battery_percent").keyup(function() {
        var count = $(this).val();
        $(".battery-level").removeClass("red");
        if (count <= 15) {
            $(".battery-level").addClass("red");
        }
        $(".battery-level").css("width", count + "%");
        $(".battery-status").text(count + "%");
    });
    $("#edit-Status").keyup(function() {
        var count = $(this).val();
        $(".header-title").text(count);
    });
    $('#profile1_name').keyup(function() {
        var text = $(this).val();
        var comment1 = "";
        var count = "";
        var bad_word = "";
        for (var i = 0; i < bad.length; i++) {
            var comment1 = text.search(bad[i]);
            if (comment1 > 0) {
                bad_word = bad[i];
            }
        }
        text1 = text.replace(bad_word, '');
        var count = text1.length;
        if (count > 16) {
            var res = text1.substr(0, 14);
            var res1 = res + '...';
            $(".text-name").text(res1);
        } else {
            $(".text-name").text(text1);
        }
    });
    $('#left-panel input[name="ch_rtl"]').change(function() {
        var thisValue = $(this).val();
        if (thisValue == 'ltr') {
            $('#download').css('direction', 'ltr');
            $('#download .pull-left').attr('style', 'float:left !important');
            $('#download .pull-right').attr('style', 'float:right !important');
            $('.ltr').show();
            $('.rtl').hide();
            $('.message-received .message-container').css({
                'margin-right': 'auto',
                'margin-left': '0',
                'padding-right': '50px',
            });
            $('.message-received .message-avatar').css({
                'right': 'auto',
                'left': '0'
            });
            $('.message-received .message-footer').css({
                'padding-left': '58px',
                'padding-right': '50px'
            });
            $('.tw .message-sent .message-avatar').css({
                'left': 'auto',
                'right': '0'
            });
            $('.message-sent .message-container').css({
                'margin-left': 'auto',
                'margin-right': '0'
            });
            $('.tw .message-sent .message-footer').css({
                'float': 'right',
                'padding-left': '50px',
                'padding-right': '58px'
            });
            $('.message-received .message-bubble').removeClass('Caret-right').addClass('Caret-left');
            $('.message-sent .message-bubble').removeClass('Caret-left').addClass('Caret-right');
            $('.modal-footer').css({
                'text-align': 'right'
            });
            $('.tweet-action').css({
                'margin-left': '0px'
            });
        } else {
            $('#download .pull-left,#download .pull-right,.tweet-action,.modal-footer,.tw .message-sent .message-footer,.message-sent .message-container,.tw .message-sent .message-avatar,.message-received .message-container,.message-received .message-footer,.message-received .message-avatar').removeAttr('style');
            $('#download').css('direction', 'rtl');
            $('.rtl').show();
            $('.ltr').hide();
            $('.message-received .message-bubble').removeClass('Caret-left').addClass('Caret-right');
            $('.message-sent .message-bubble').removeClass('Caret-right').addClass('Caret-left');
        }
    });
    $('#visiblefooter').click(function() {
        check_lg();
    });
    $('#visibleheadre').click(function() {
        check_lg();
    });
    $('button').click(function() {
        check_lg();
    });

    function check_lg() {
        if ($('.right-part').hasClass('desktop_view')) {
            $(".insta-chat-footer").hide();
            $(".all_header_wp").hide();
        } else {
            if ($('input#visiblefooter').is(':checked')) {
                $(".insta-chat-footer").hide();
            } else {
                $(".insta-chat-footer").show();
            }
            if ($('input#visibleheadre').is(':checked')) {
                $(".all_header_wp").hide();
            } else {
                $(".all_header_wp").show();
            }
        }
    }
    $("#visibleStory").click(function() {
        if ($('input#visibleStory').is(':checked')) {
            $(".modal-title-img").addClass("visibleStory");
        } else {
            $(".modal-title-img").removeClass("visibleStory");
        }
    });
    $("#Chat-Like").click(function() {
        if ($('input#Chat-Like').is(':checked')) {
            $(".message-received:last-child .user_unlike_msg_send").hide();
            $(".message-received:last-child .user_like_msg_send").show();
            $(".message-received:last-child .insta-last").addClass("user_like_rad");
            $(".message-received:last-child .insta-last").removeClass("insta-last");
        } else {
            $(".message-received:last-child .user_unlike_msg_send").show();
            $(".message-received:last-child .user_like_msg_send").hide();
        }
    });
    $("#visibleOnline").click(function() {
        if ($('input#visibleOnline').is(':checked')) {
            $(".online_insta_img").addClass("active-fb");
        } else {
            $(".online_insta_img").removeClass("active-fb");
        }
    });
    $("#edit-tagname").keyup(function() {
        var count = $(this).val();
        $(".header-title").text("@" + count);
    });
    $('.ista_chat_pro_img').on('change.bs.fileinput', function(event) {
        event.stopPropagation();
        var img_src = jQuery(".profile1 img").attr("src");
        jQuery(".modal-title-img.insta-img img").attr("src", img_src);
        jQuery(".insta-img.message-avatar img").attr("src", img_src);
    });
});
$(".pro_mag_send").click(function() {
    var base_url = $('#js_data').data('base_url');
    jQuery(".insta-last").html("");
    jQuery(".message-footer").addClass("insta-message-footer");
    jQuery(".message-received:last-child .message-footer").addClass("insta-last");
    jQuery(".message.message-received.is-not:last-child .message-footer").html('<div class="message-footerinsta-message-footer"><span class="message-footerItem user_unlike_msg_send"><img src="' + base_url + '/assets/images/insta-message-unlike.png"> Double-tap to like</span><span class="user_like_msg_send" style="display:none"><img src="https://fakedetail.com/assets/images/insta-message-like.png"><div class="person-2-img like_img_send"><img class="" src="https://fakedetail.com/assets/images/profile.jpg"></div></span></div>');
});

function addComment(type) {
    var base_url = $('#js_data').data('base_url');
    var read_img = like_img = class_name = like_img1 = class_name1 = "";
    if ($("input[name='read'][value='read']").prop("checked")) {
        $('.message-footer').html('');
        read_img = 'Seen';
    }
    if ($("input[name='read'][value='unread']").prop("checked")) {
        read_img = '';
    }
    if ($("input[name='Chat-Like']").prop("checked")) {
        $('.message-footer').html('');
        like_img = '<div class="message-like" style="display:block"></div>';
        class_name = 'message-liked';
    } else {
        class_name = '';
        like_img = '';
    }
    if ($("input[name='Chat-Like1']").prop("checked")) {
        like_img1 = '<div class="message-like" style="display:block"></div>';
        class_name1 = 'message-liked';
    } else {
        class_name1 = '';
        like_img1 = '';
    }
    var profileimg = '';
    if ($('.profile1 img').attr('src') == undefined) {
        profileimg = $('.profile_1 img').attr('src');
    } else {
        profileimg = $('.profile1 img').attr('src');
    }
    var comment = $('textarea#' + type + '_message').val();
    var date = $('input#' + type + '_date').val();
    var ch_rtl = $('#left-panel input[name="ch_rtl"]:radio:checked').val();
    if (ch_rtl == 'ltr') {
        rtl_r_av = ' style="right: auto; left: 0;"';
        rtl_r_m = ' style="margin-right: auto; margin-left: 0; padding-right: 50px"';
        rtl_r_mf = ' style="padding-left: 58px; padding-right: 50px"';
        rtl_s_av = ' style="right: 0; left: auto;"';
        rtl_s_m = ' style="margin-left: auto; margin-right: 0"';
        rtl_s_mf = ' style="float: right; padding-left: 50px; padding-right: 58px"';
    } else {
        rtl_r_av = rtl_s_av = rtl_r_m = rtl_r_mf = rtl_s_m = rtl_s_mf = '';
    }
    if (type == 'profile1') {
        var where = 'received';
        var Caret = 'left';
    } else if (type == 'profile2') {
        var where = 'sent';
        var Caret = 'right';
    }
    var pc_class = "";
    if ($('input#visibleOnline').is(':checked')) {
        pc_class = "active-fb";
    } else {
        pc_class = "";
    }
    if (comment > '') {
        var comment1 = "";
        var count = "";
        var bad_word = "";
        for (var i = 0; i < bad.length; i++) {
            var count = comment.search(bad[i]);
            if (count > 0) {
                bad_word = bad[i];
            }
        }
        comment1 = comment.replace(bad_word, '');
        var str1 = "";
        if (hasWhiteSpace(comment1)) {
            str1 = '<p>' + comment1 + '<p>';
        } else {
            str1 = '<p style="word-break:break-all;">' + comment1 + '<p>';
        }
        if (where == 'received') {
            var str = '<div class="message message-received ' + class_name1 + ' is-not">' + '<div class="message-container insta-table u-table"' + rtl_r_m + '>' + '<div class="insta-img message-avatar"' + rtl_r_av + '>' + '<img src="' + profileimg + '" class="img-rounded">' + '<div class="online_insta_img ' + pc_class + '"></div>' + '</div>' + '<div class="message-message u-tableCell u-alignBottom">' + '<div class="message-bubble Caret Caret-' + Caret + '">' + '<div class="message-text insta-text">' + str1 + '</div>' + '</div>' + like_img1 + '</div>' + '</div>' + '<div class="message-footer"' + rtl_r_mf + '>' + '<span class="message-footerItem">' + '</span>' + '</div>' + '<div class="clearfix"></div>' + '</div>';
        } else {
            var str = '<div class="message message-sent ' + class_name + ' is-not">' + '<div class="message-container insta-table insta-sent-table u-table"' + rtl_s_m + '>' + '<div class="message-message u-tableCell u-alignBottom">' + '<div class="message-bubble Caret Caret-' + Caret + '">' + '<div class="message-text insta-text insta-sent">' + str1 + '</div>' + '</div>' + like_img + '</div>' + '</div>' + '<div class="message-footer insta-message-footer"' + rtl_s_mf + '>' + '<span class="message-footerItem">' + '' + read_img + '</span>' + '</div>' + '<div class="clearfix"></div>' + '</div>';
        }
        var item = $(str).hide();
        $('.modal-body').append(item);
        if ($(".modal-body .remove").length > 0) {
            $('.modal-body .remove').fadeTo(250, 0, function() {
                $(".modal-body .remove").remove();
                item.fadeIn(500);
            });
        } else {
            item.fadeIn(500);
        }
        return false;
    }
}

function addImage(e) {
    if (e.files && e.files[0]) {
        var t = new FileReader;
        t.onload = function(e) {
            $(".like_img_send").html($("<img src='' style='' width='34' height='34'>").attr("src", e.target.result).addClass("circular"))
        }, t.readAsDataURL(e.files[0])
    }
}