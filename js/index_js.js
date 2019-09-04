
// section one
 $(".fa-sliders-h").click(function(){
 	
 		$(this).animate({left:'270px'},1000,function(){
 		$("#options-container").fadeIn(1000,function(){
	 })
 		})

 })
  $(".fa-sliders-h").click(function(){
 	$("#options-box").toggle(1000)
 })

$(".fa-times-circle").click(function(){
	$("#options-container").fadeOut(1000,function(){
		 $(".fa-sliders-h").css("left",'10px')
	})
})


$(" #options-container a #acc").click(function(){
$("#acc").animate({width:'50%'},1000);

 $("#acc ").fadeIn(2000,function(){
 
})
})



//section two
$("h3").click(function(){
	$(this).siblings().slideToggle(1000)

})


//section three

var now = new Date();
// console.log(now) 
var event = new Date(2019,12,12);
var nowTime = now.getTime();
var eventTime = event.getTime();
var s = Math.floor(eventTime / 1000);
var m = Math.floor(s / 60);
var h = Math.floor(m / 60);
var d = Math.floor(h / 24)-30;

h %= 24;
m %= 60;
s %= 60;
h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;
document.getElementById("days").innerHTML = "<h3 class='overlay'>"+  d + " D"+"</h3>";
document.getElementById("hours").innerHTML ="<h3  class='overlay'>"+  h + " h"+"</h3>";
document.getElementById("minutes").innerHTML = "<h3 class='overlay'>"+  m + " m"+"</h3>";
document.getElementById("seconds").innerHTML = "<h3 class='overlay'>"+  s + " s"+"</h3>";
	
		








//section four
var max =100;
$("textarea").keyup(function(){
	var length = $(this).val().length;
	var text = max - length;
	if(text <= 0){
		$("#char").text("your available character finished");

	}else{
		$("#char").text(text)
	}
})