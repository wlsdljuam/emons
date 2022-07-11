$(function(){
    $(".bx1").bxSlider({
        mode:"fade",
        speed:1000,
        auto: true,
        autoHover: true,
        pause:9000,
        onSliderLoad:function(currentIndex){
        $(".bx1>div").eq(currentIndex).find("h2").addClass("active");
        $(".bx1>div").eq(currentIndex).find("h3").addClass("active");
        },
        onSlideAfter:function($slideElement, oldIndex, newIndex){
        $(".bx1>div").eq(oldIndex).find("h2").removeClass("active");
        $(".bx1>div").eq(newIndex).find("h2").addClass("active");
        $(".bx1>div").eq(oldIndex).find("h3").removeClass("active");
        $(".bx1>div").eq(newIndex).find("h3").addClass("active");
        }
    });
    $(".bx2").bxSlider({
        slideWidth:300,
        minSlides:3,
        maxSlides:5,
        moveSlides:1,
        slideMargin:60,
        auto: true,
        autoHover: true
    });
    $(".tab_title>a").click(function(){
        $(".tab_contents>div").hide();
        var path1=$(this).attr("href");
        $(path1).css({"display":"flex"});
        $(this).siblings().removeClass("on");
        $(this).addClass("on");
        return false;
    });
})//E;