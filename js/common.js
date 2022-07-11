$(function(){
    $("#gnb>ul>li").on("mouseover focusin",function(){
        $("#gnb>ul>li>ul").stop().slideDown(300);
        $("#gnb>ul>li>a").css({"border-bottom":"1px solid #6d5d45"});
    });
    $("#gnb>ul>li").on("mouseout focusout",function(){
        $("#gnb>ul>li>ul").stop().slideUp(300);
        $("#gnb>ul>li>a").css({"border-bottom":"none"});
    });
    $("#seach_wrap>button").click(function(){
        $("#seach_wrap>form").stop().fadeIn(100);
        $(".search_close").stop().fadeIn(100);
    });
    $(".search_close").click(function(){
        $("#seach_wrap>form").stop().fadeOut(100);
        $(this).stop().fadeOut(100);
        return false;
    });
        $("#seach_wrap>button").click(function(){
        $("#seach_wrap>form").stop().fadeIn(100);
        $(".search_close").stop().fadeIn(100);
    });
    $(".m_search").click(function(){
        // $(this).css({"z-index":"-10"});
        $(".m_search_wrap").stop().fadeIn(300);
    });
    $(".m_search_close").click(function(){
        // $(".m_search").css({"z-index":"0"});
        $(".m_search_wrap").stop().fadeOut(300);
    });
    $("#m_gnb>ul>li>a").click(function(){
        $(this).parent().siblings().children("ul").slideUp(500);
        $(this).next().slideDown(500);
        $(this).parent().siblings().children().removeClass("on");
        $(this).addClass("on");
    });
    $(".btn_m_gnb_open").click(function(){
        $(".m_gnb_wrap").css({"left":"0px"});
        $(".m_gnb_bg").css({"display":"block"});
    });
    $(".btn_m_gnb_close").click(function(){
        $(".m_gnb_wrap").css({"left":"-305px"});
        $(".m_gnb_bg").css({"display":"none"});
    });
    $("#m_gnb>ul>li>a").click(function(){
        $(this).parent().siblings().children("ul").slideUp(500);
        $(this).next().slideDown(500);
        $(this).parent().siblings().children().removeClass("on");
        $(this).addClass("on");
    });
    $(window).scroll(function(){
        var sct=$(window).scrollTop();
        var off_category=$("#category").offset().top;
        var off_bg=$("#bg_con").offset().top;
        if(sct>1){
            $("#hd").addClass("on");
            $("#gnb").css({"opacity":"0","height":"0px"});
            $(".hd_menu>a").addClass("on");
        }else{
            $("#hd").removeClass("on");
            $("#gnb").css({"opacity":"1","height":"auto"});
            $(".hd_menu>a").removeClass("on");
        };
        if(sct>=off_bg-400){
            $("#bg_con>h2").addClass("on");
        }else{
            $("#bg_con>h2").removeClass("on");
        };
        if(sct>=off_category){
            $("#fix_menu").fadeIn(300);
        }else{
            $("#fix_menu").fadeOut(300);
        };
    });
    $(".top_button").click(function(){
        $("body, html").stop().animate({"scrollTop":0},500);
        return false;
    });
})//E