$(function () {
    var navListIco = $('.nav-list')[0].children;
    for (var i = 0; i < navListIco.length; i++) {
        navListIco[i].querySelector('.ico').style.backgroundPositionY='-'+i*48+'px'
    }

    var index=0;
    $('.menu').on('click',function () {
        if(index===0) {
            $('.menu>img')[0].src='../icon/gb.svg';
            $('.nav').css({
                'display':'flex',
                'width':'100%'
            });
            index=1;
        } else {
            $('.menu>img')[0].src='../icon/menu.svg';
            $('.nav').css({
                'display':'none',
                'width':'0'
            });
            index=0;
        }

    })
})