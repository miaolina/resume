/**
 * Created by q on 2016/11/12.
 */
//鼠标滚动触发动画
var elevator = {
    init: function () {
        $(document).scroll(this.scroll.bind(this));
    },
    scroll: function () {
            //响应document的scroll事件
            //查找div，对每个元素执行：
        $("div").each(function (i, elem) {
            //function(i,elem){i:下标, elem:DOM元素}
            //获取当前元素就距页面顶部的总距离totalTop
            // var totalTop=$(elem).offset().top;
            //获取页面滚动过的距离scrollTop
            var scrollTop = $("body").scrollTop();
            //用totalTop-scrollTop，保存在innerTop
            // var innerTop=totalTop-scrollTop;
            //如果innerTop>UPLEVEL且<=DOWNLEVEL
            // var scrollTop = $("body").scrollTop();
            console.log(scrollTop);
            if (scrollTop > 800) {
                $("#individual_profiles ul li").css("animationPlayState", "running");
                $("#individual_profiles div h3").css("animationPlayState", "running");
            }
            if (scrollTop > 1500) {
                $("#production h3+ul>li").css("animationPlayState", "running");
               /* $("#production h3+ul>li").css("-o-animationPlayState", "running");
                $("#production h3+ul>li").css("-webkit-animationPlayState", "running");
                $("#production h3+ul>li").css("-moz-animationPlayState", "running");*/
            }
            if (scrollTop > 2000) {
                $("#skill ul li").css("animationPlayState", "running");
       /*         $("#skill ul li").css("-webkit-animationPlayState", "running");
                $("#skill ul li").css("-moz-animationPlayState", "running");*/
            }
            if (scrollTop > 4200) {
                $("#content ul li").css("animationPlayState", "running");
               /* $("#content ul li").css("-o-animationPlayState", "running");
                $("#content ul li").css("-webkit-animationPlayState", "running");
                $("#content ul li").css("-moz-animationPlayState", "running");*/
            }
        });
    }
};
elevator.init();


//点击菜单跳转时修改导航条的背景色
function jump(){
    var bg='#'+Math.floor(Math.random()*16777215).toString(16);
    document.getElementsByClassName('head')[0].style.backgroundColor=bg;

}
function jumptop(){
    //console.log("clear");
    document.getElementsByClassName('head')[0].style.backgroundColor='rgba(0,0,0,0)';
}
//首页背景轮播
var curr_image = 1;
var timer=setInterval(function(){
    for(var i=curr_image;i<=7;i++) {
            var bgpic = 'url(img/bg0' + i + '.jpg)';
            //console.log(bgpic);
            document.getElementById('bg').style.backgroundImage = bgpic;
            curr_image++;
            //console.log(curr_image);
            if (curr_image == 8){
                curr_image = 1;
            }
            break;
}
},3000);



//点击添加class名以切换动画效果
//项目一
function toggleClass1(ele){
    $(ele).toggleClass('menu_list-active1')
}
//console.log('done');
//项目二
function toggleClass2(ele){
    $(ele).toggleClass('menu_list-active2')
}
//项目三
function toggleClass3(ele){
    $(ele).toggleClass('menu_list-active3')
}


function drawskill(){
    //canvas绘制圆环进度条
    var ctx1 = skill01.getContext('2d');
    var ctx2 = skill02.getContext('2d');
    var ctx3 = skill03.getContext('2d');
    var ctx4 = skill04.getContext('2d');
    var ctx5 = skill05.getContext('2d');
    var ctx6 = skill06.getContext('2d');

    ctx1.strokeStyle = ctx2.strokeStyle = ctx3.strokeStyle = '#4B90FF';
    ctx4.strokeStyle = ctx5.strokeStyle = ctx6.strokeStyle ='#FFBFFA';
    ctx1.beginPath();
    ctx2.beginPath();
    ctx3.beginPath();
    ctx4.beginPath();
    ctx5.beginPath();
    ctx6.beginPath();
    ctx1.lineWidth = ctx2.lineWidth = ctx3.lineWidth =ctx4.lineWidth = ctx5.lineWidth = ctx6.lineWidth = 15;
    ctx1.arc(200, 200, 100, 0, 2 * Math.PI);
    ctx2.arc(200, 200, 100, 0, 2 * Math.PI);
    ctx3.arc(200, 200, 100, 0, 2 * Math.PI);
    ctx4.arc(200, 200, 100, 0, 2 * Math.PI);
    ctx5.arc(200, 200, 100, 0, 2 * Math.PI);
    ctx6.arc(200, 200, 100, 0, 2 * Math.PI);
    ctx1.stroke();
    ctx2.stroke();
    ctx3.stroke();
    ctx4.stroke();
    ctx5.stroke();
    ctx6.stroke();
    ctx1.strokeStyle = ctx2.strokeStyle = ctx3.strokeStyle = '#0043AA';
    ctx4.strokeStyle = ctx5.strokeStyle = ctx6.strokeStyle = '#FF2198';
    var degree = 0;  //角度值
    var text = 0;//百分比
    var text2 = 0;
    var text3 = 0;
    var text4 = 0;
    var text5 = 0;
    var text6 = 0;
    var timer = setInterval(function () {
        degree += 3;
        text += 1;
        ctx1.beginPath();
        ctx2.beginPath();
        ctx3.beginPath();
        ctx4.beginPath();
        ctx5.beginPath();
        ctx6.beginPath();
        //ctx.arc(250,200,100,0,degree*Math.PI/180);
        if (degree < 230) {
            $('.updatetext1').html(text + '%');
            ctx1.arc(200, 200, 100, 0 - Math.PI / 2, degree * Math.PI / 180 - Math.PI / 4);
            ctx1.stroke();
        }
        if (degree < 200) {
            text2 = text+5;
            $('.updatetext2').html(text2 + '%');
            ctx2.arc(200, 200, 100, 0 - Math.PI / 2, degree * Math.PI / 180 - Math.PI / 4);
            ctx2.stroke();
        }
        if (degree < 180) {
            text3 = text+8;
            $('.updatetext3').html(text3 + '%');
            ctx3.arc(200, 200, 100, 0 - Math.PI / 2, degree * Math.PI / 180 - Math.PI / 4);
            ctx3.stroke();
        }
        if (degree < 160) {
            text4 = text+8;
            $('.updatetext4').html(text4 + '%');
            ctx4.arc(200, 200, 100, 0 - Math.PI / 2, degree * Math.PI / 180 - Math.PI / 4);
            ctx4.stroke();
        }
        if (degree < 150) {
            text5 = text+10;
            $('.updatetext5').html(text5 + '%');
            ctx5.arc(200, 200, 100, 0 - Math.PI / 2, degree * Math.PI / 180 - Math.PI / 4);
            ctx5.stroke();
        }
        if (degree < 140) {
            text6 = text+8;
            $('.updatetext6').html(text6 + '%');
            ctx6.arc(200, 200, 100, 0 - Math.PI / 2, degree * Math.PI / 180 - Math.PI / 4);
            ctx6.stroke();
        }
    }, 10);
}

//模态对话框
function imgclick(elem){
    if(document.getElementById('imgclick').style.display=='none')
    {
        document.getElementById('imgclick').style.display = 'block';
        var img="img/"+elem+".jpg";
        console.log(img);
        $(".modal-dialog div img").attr("src", img);
    }
    else{
        document.getElementById('imgclick').style.display = 'none';
    }
}