/**
 * Created by ProCloud on 2016/6/22.
 */
$(window).ready(function(){
    var winWidth=$(window).width();

    if (winWidth < 700){
        $(".header-nav").hide(function () {
            $(".min-width-nav").show(500);
        });
        $('.font-info-bottom').css(
            'width','100%',
            'textAlign','center'
        );
        $('.tbl-info').css(
            'width','100%',
            'textAlign','right'
        );
    }
    if (winWidth>=700){
        $(".min-width-nav").hide();
    }
});
$(window).resize(function () {
    var winWidth=$(window).width();
    if (winWidth < 700){
        $(".header-nav" ).hide(function () {
            $(".min-width-nav").show(500);
        });
        $('.font-info-bottom').css(
            'width','100%',
            'textAlign','center'
        );
    }
    if (winWidth >= 700){
        $(".header-nav").show(100,function () {
            $(".min-width-nav").hide(500);
        });
        $('.font-info-bottom').css(
            'width','',
            'text-align','center'
        );

    }
});