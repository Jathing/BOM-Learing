// 实现数量加减的绑定事件
// 入口函数
$(function () {
  // 给减号赋予点击事件
  $('.pnum_reduce').click(function () {
    //需求： 商品数量最大为10  最小为1
    if ($(this).next().val() <= 1) {
      alert('老板，不能再少啦！');
      return;
    }
    // 大于1的情况 （3 4 10）//拿到当前数量-1
    var i = $(this).next().val() - 1;
    $(this).next().val(i); //把重新处理好的新值 重新赋值给input框

    // 调用小计函数
    // console.log($(this).parents('.item').index() -1);
    changeXJ($(this).parents('.item').index() - 1);
  });

  // 给加号赋予点击事件
  $('.pnum_add').click(function () {
    //需求： 商品数量最大为10  最小为1
    if ($(this).prev().val() >= 10) {
      alert('老板，限购10个！');
      return;
    }
    // 点击加好的时候  需要让input里面的值+1
    // 相加的时候 如果有字符串 会进行字符串拼接 相减的时候不会进行拼接  先转换成number类型再进行相加
    var i = $(this).prev().val() - 0 + 1;
    $(this).prev().val(i); //把重新处理好的新值 重新赋值给input框

    // 调用小计函数
    // console.log($(this).parents('.item').index()-1);
    changeXJ($(this).parents('.item').index() - 1);
  });

  // 实现全选和单选的逻辑-----------------------------------------------------
  // 给全选添加点击事件（#check_all）
  $('#check_all').click(function () {
    // 让所有的复选框 都等于 全选按钮复选框这个情况
    // checked
    $(':checkbox').prop('checked', $(this).prop('checked'));
  });

  // 给单选添加点击事件（#check_all）
  $('.item_option').click(function () {
    // 当你点击单选的时候 判断全选框是否被选中
    // 如果两个都点了全选框才能被选中 如果一个按钮都不选中 全选框就不能被选中
    // jq循环 each()循环 索引在前,节点在后

    var flag = true; //假设两个都被选中
    $('.item_option').each(function (index, item) {
      if (!$(item).prop('checked')) {
        flag = false;
        // 如果有一个值为false 全选框就不能被选中
        return flag;
      }
    });
    $('#check_all').prop('checked', flag);
  });

  // 实现删除逻辑-----------------------------------------------------
  $('.pro_delete').click(function () {
    $(this).parent().parent().remove();
  });

  // 实现小计逻辑-----------------------------------------------------
  //   封装小计函数
  // 当你点击当前商品的时候 传递下标
  function changeXJ(index) {
    var dj = parseInt($('.pro_price').eq(index).html()); //单价
    var num = parseInt($(':text').eq(index).val()); //数量
    var moneyAll = dj * num;
    console.log(moneyAll);
    $('.total_price')
      .eq(index)
      .html(moneyAll + '元');
  }
});
