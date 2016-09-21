var search=$('.search');
search.click(function(){
    $('.mask').css('display','block');
    $('body,html').css('overflow','hidden');
    $('.del').css('opacity',1);
    $('.item,.icon').each(function(index,value){
        $(this).transition({scale:[0.5,0.5],opacity:0,color:'#fff'},function(){
            $(this).hide();
            $('.search-box').css('display','inline-block').transition({x:-300});
        });
    })
});
$('.bag').click(function () {
    $('.bag-list').toggleClass('active');
});
$('.del').click(function () {
    $('.mask').css('display','none');
    $('.del').css('opacity',0);
    $('.search-box').css('display','none');
    $('.item,.icon').each(function(index,value){
        $(this).show().transition({'opacity':1,scale:[1,1],color:'#fff'})
    })
})

//3.small-nav 旋转  pull
$('.small-menu').click(function(){
    $('.small-nav').css('background','#000')
    $(this).children().toggleClass('active');
    $('.pull').slideToggle();
    $('#slide-bag').toggleClass('active')
})
//4.ss-pull
$('.pull li').last().click(function(){
    $('.pull ul').slideUp('5000',function(){
        $('.ss-pull').css('display','block')
        $('.ss-pull').find('input').focus();
    });
});

// 5.foot-small
$('.foot-small .btn').click(function(){
    var index=$(this).index();
    $('.foot-small-pull').eq(index).find('a').toggleClass('active')
});
//6.banner
var pre=0;
var next=0;
var ban=$('.ban');
var lis=$('.ban-btn  li');
var zsL=$('.zsL');
var zsR=$('.zsR');
var flag=true;
ban.each(function(index){
    if(index==0){
        $(this).css('left','0');
    }else{
        $(this).css('left','100%');
    }
});
lis.each(function(index){
    if(index==0){
        $(this).css('background','#999999');
    }else{
        $(this).css('background','#ccc');
    }
});
var t=setInterval(moveL,3000);
$('.ban-box').hover(function(){
    zsL.css('display','block');
    zsR.css('display','block');
},function(){
    zsL.css('display','none');
    zsR.css('display','none');
})
zsL.click(function(e){
    e.preventDefault();
    clearInterval(t);
    if(flag){
        moveR();
        flag=false;
    }
})
zsR.click(function(e){
    e.preventDefault();
    clearInterval(t);
    if(flag){
        moveL();
        flag=false;
    }
})
//点击小圆点
   lis.click(function(){
       var index=$(this).index();
        if(index==pre){
            lis.eq(index).css('background','#999999');
        }else if(index>pre){
            clearInterval(t);
            ban.eq(index).css('left','100%');
            ban.eq(pre).transition({'left':'-100%'});
            lis.eq(pre).css('background','#ccc');
            ban.eq(index).transition({'left':0});
            lis.eq(index).css('background','#999999');

        }
        else if(index<pre){
            clearInterval(t);
            ban.eq(index).css('left','-100%');
            ban.eq(pre).transition({'left':'100%'});
            lis.eq(pre).css('background','#ccc');
            ban.eq(index).transition({'left':0});
            lis.eq(index).css('background','#999999');
        }
       pre=index;
    })

function moveL() {
    next++;
    if(next==3){
        next=0;
    }
    ban.eq(next).css('left','100%');
    ban.eq(pre).transition({'left':'-100%'});
    lis.eq(pre).css('background','#ccc');
    ban.eq(next).transition({'left':0},function () {
        flag=true;
    });
    lis.eq(next).css('background','#999999');
    pre=next;
}
function moveR(){
    next--;
    if(next<0){
        next=2
    }
    ban.eq(next).css('left','-100%');
    ban.eq(pre).transition({'left':'100%'});
    lis.eq(pre).css('background','#ccc');
    ban.eq(next).transition({'left':0},function () {
        flag=true;
    });
    lis.eq(next).css('background','#999999');
    pre=next;
}
/*小轮播*/
var next1=0;
var pre1=0;
var ban1=$('.small-ban .ban');
var lis1=$('.small-ban .ban-btn  li');
var zsL1=$('.small-ban .zsL');
var zsR1=$('.small-ban .zsR');
ban1.each(function(index){
    if(index==0){
        $(this).css('left','0');
    }else{
        $(this).css('left','100%');
    }
});
var t1=setInterval(moveL1,3000);
zsL1.click(function(e){
    clearInterval(t1);
    if(flag){
        moveR1();
        flag=false;
    }
})
zsR1.click(function(e){
    clearInterval(t1);
    if(flag){
        moveL1();
        flag=false;
    }
})
function moveL1() {
    next1++;
    if(next1==3){
        next1=0;
    }
    ban1.eq(next1).css('left','100%');
    ban1.eq(pre1).transition({'left':'-100%'});
    lis1.eq(pre1).css('background','#ccc');
    ban1.eq(next1).transition({'left':0},function () {
        flag=true;
    });
    lis1.eq(next1).css('background','#999999');
    pre1=next1;
}
function moveR1(){
    next1--;
    if(next1<0){
        next1=2
    }
    ban1.eq(next1).css('left','-100%');
    ban1.eq(pre1).transition({'left':'100%'});
    lis1.eq(pre1).css('background','#ccc');
    ban1.eq(next1).transition({'left':0},function () {
        flag=true;
    });
    lis1.eq(next).css('background','#999999');
    pre1=next1;
}




