
$(function(){

/****
 *点击切换
 * 滚动切换
 * 滚动切换current
 * 滚动切换section****/
var index = 0;
    //初始化进行就需要判断
showAndHideTag(index);
var timer = null;

$('.gps li').on('click',function(){
    //获取索引值
    index = $(this).index();
    //切换current
    $(this).addClass('current').siblings().removeClass('currrent');
    //让section走起来
    $('section').eq(index).show().siblings('section').hide();
    //显示或者隐藏标签
    showAndHideTag(index)







});
$(window).mousewheel(function (event){
        //清除定时器
        clearTimeout(timer);
        timer = setTimeout(function(){
            //获取滚动的索引值
            index-=event.deltaY;
            //判断索引值的越界问题
            if(index>$('.gps li').length-1){
                index = $('.gps li').length-1;

            }
            else if(index<0){
                index = 0;
            }
            //让current变
            $('.gps li').eq(index).addClass('current').siblings().removeClass('current');
            //让section变
            $('section').eq(index).show().siblings('section').hide();
            //调用showAndHideTag函数
            //显示或者隐藏标签
            showAndHideTag(index);

        },400);

    })



    //隐藏或者显示对应的标签
    //showAndHideTag自己定义的属性来着
function showAndHideTag(index){
        //判断是否是第一屏
        //if(条件是否成立){执行函数}
        if(index==0){
            //左上角头部不显示
            $('.header-left').hide();
            //底部指示器显示
            $('.scroll').show();
        }
        else {
            //左下角头部不显示
            $('.header-left').show();
            //底部指示器显示
            $('.scroll').hide();
        }


    }


});