// 实现数量加减的绑定事件
// 入口函数
$(function(){
    // 给减号赋予点击事件
    $('.pnum_reduce').click(function(){
        //需求： 商品数量最大为10  最小为1
        if($(this).next().val()<=1){
            alert('老板，不能再少啦！');
            return;
        }
        // 大于1的情况 （3 4 10）//拿到当前数量-1
        var i =  $(this).next().val() - 1;
        $(this).next().val(i) //把重新处理好的新值 重新赋值给input框
    })

    // 给加号赋予点击事件
    $('.pnum_add').click(function(){
        //需求： 商品数量最大为10  最小为1
        if($(this).prev().val()>=10){
            alert('老板，限购10个！');
            return;
        }
        // 点击加好的时候  需要让input里面的值+1
        // 相加的时候 如果有字符串 会进行字符串拼接 相减的时候不会进行拼接  先转换成number类型再进行相加
        var i = $(this).prev().val() - 0 + 1
        $(this).prev().val(i) //把重新处理好的新值 重新赋值给input框
    })
})