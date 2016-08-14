var $as=$(".bannerbox-left>a");
var $btns=$(".sybtnbox>span");
var $bannerleft=$(".banner-box");
$as.css("left","100%").eq(0).css("left",0);
$btns.removeClass("hot").eq(0).addClass("hot");
var now=0;
var next=0;
function move(){
	next++;
	if(next>=$as.length){
		next=0;
	}
	$as.eq(next).css({"left":"100%"});
	$as.eq(now).animate({"left":"-100%"});
	$as.eq(next).animate({"left":"0"});
	$btns.removeClass("hot").eq(next).addClass("hot");
	now=next;
}
var tt=setInterval(move,2000);
$bannerleft.hover(function(){
	clearInterval(tt);
},function(){
	tt=setInterval(move,2000);
})
$(".btn-left").click(function(){
	move();
})