// 实现数量加减的绑定时间
// 入口函数
$(function () {
  // 加号和减号事件 ==================================================
  // 给减号赋予点击事件
  $('.pnum_reduce').click(function () {
    // 需求:商品数量最大为10  最小1
    if ($(this).next().val() <= 1) {
      alert('老板,不能再少了!');
      return;
    }
    // 大于1的情况 (3 4 10) 拿到的数量 -1
    var i = $(this).next().val() - 1;
    $(this).next().val(i); //把重新处理好的新值 重新赋值给input框

    // 调用小计函数
    changeXJ($(this).parents('.item').index() - 1);

    finallyPrice();
  });
  // 给加号添加点击事件
  $('.pnum_add').click(function () {
    // 需求:商品数量最大为10  最小1
    if ($(this).prev().val() >= 10) {
      alert('老板,最多只能买10件');
      return;
    }
    // 小于10的情况 (3,5 ,7 )拿到的数量 +1
    // 相加由于获取的是字符串,需要先把字符串转化为数字
    var i = $(this).prev().val() - 0 + 1;
    $(this).prev().val(i);

    // 调用小计函数
    changeXJ($(this).parents('.item').index() - 1);

    finallyPrice();
  });

  //全选和单选逻辑  ===================================================
  //给全选添加点击事件(#check_all)
  $('#check_all').click(function () {
    // 让所有的复选框 都等于 全选按钮复选框这个情况
    // checked是一个布尔值 默认是true
    // 记录全选的选中状态
    var checkSta = $(this).prop('checked');
    // 状态同步
    $(':checkbox').prop('checked', checkSta);
    // console.log(checkSta);
    finallyPrice();
  });
  // 给单选添加点击事件
  $('.item_option').click(() => {
    var flag = true; // 假设两个都被选中
    $('.item_option').each(function (index, item) {
      // console.log(item);
      if (!$(item).prop('checked')) {
        flag = false;
        // 如果有一个值为false 全选框就不能被选中
        return flag;
      }
    });
    $('#check_all').prop('checked', flag);
    finallyPrice();
  });

  // 实现删除逻辑 ============================================
  $('.pro_delete').click(function () {
    $(this).parent().parent().remove();
    finallyPrice();
  });

  // 实现小计逻辑 ============================================

  // 封装小计函数
  // 当你点击当前商品的时候 传递下标
  function changeXJ(index) {
    console.log(index);
    var price = parseInt($('.pro_price').eq(index).text()); //单价
    var num = parseInt($(':text').eq(index).val()); // 数量
    var totalPrice = price * num;
    $('.total_price')
      .eq(index)
      .html(totalPrice + '元');
  }
  // 实现商品总数量和总逻辑==========================================

  // 封装函数 总金额和总逻辑
  // 总金额 = 被选中的小计的合数
  // 总数量 = 被选中的数量和
  function finallyPrice() {
    var numSum = 0;
    var priceSum = 0;
    // 判断商品是否被选中
    $('.item_option').each(function (index, item) {
      if ($(item).prop('checked')) {
        numSum += parseInt($(':text').eq(index).val());
        priceSum += parseInt($('.total_price').eq(index).html());
      }
      // 拿到总数量和总金额数 对两个变量重新赋值
      $('.total_num b').html(numSum);
      $('.sum_price b').html(priceSum);
    });
  }
});
