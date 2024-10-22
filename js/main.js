let widthSideBar ; 
let leftIcon;

$(window).resize(function(){
     widthSideBar = $("aside .content").innerWidth()
     leftIcon=$('.icon').css('left')
}).resize()


$('aside .content').css('left', `-${widthSideBar}px`);
  
// opening sidebar 
$(".icon").on("click", function() {
    $(".icon").animate({left:`${widthSideBar+46}px`},1000)
    $('aside .content').animate({ left: '0' }, 1000); 
    $('.title').animate({paddingLeft: '20%'}, 1000);
});
  


// closing sidebar  
$(".close").on("click",function() {
    $('aside .content').animate({ left: `-${widthSideBar}px` }, 1000);
    $(".icon").animate({left:leftIcon},1000)
    $('.title').animate({paddingLeft: '0'}, 1000);
});

// scrolling links
$(".content a").on("click",function(e){
const aHref= $(e.target).attr("href")
const secOffset=$(aHref).offset().top
$('body,html').animate({scrollTop:secOffset},2000)
})
  
// toggle singer's desc
$(".heading").on('click',function(){
    $(".desc").not($(this).next()).slideUp(500); //slideup all desc except the next one clicked on
    $(this).next().slideToggle(500)
})

// details
function updateCountdown() {
    const todayDate = new Date(); 
    const requiredDate = new Date('10/30/2024');
    const timeDiff = requiredDate - todayDate;
  

    if (timeDiff <= 0) {
      $(".day").html('0 D');
      $(".hour").html('00 H');
      $(".min").html('00 M');
      $(".sec").html('00 S');
      clearInterval(countdownInterval); 
      return;
    }
  
   
    const dayPass = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Days 
    const hoursPass = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // hour
    const mints = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)); // minutes 
    const sec = Math.floor((timeDiff % (1000 * 60)) / 1000); // seconds 
  
    $(".day").html(`${dayPass} D`);
    $(".hour").html(`${hoursPass} H`);
    $(".min").html(`${mints} M`);
    $(".sec").html(`${sec} S`);
  }
  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();

//   contact form
let maxCaracters=100
$('.message').on("keyup",function(){
    let remainigLetters=maxCaracters-$('.message').val().length
 if(remainigLetters>0){
$(".character").html(remainigLetters)
}
else{
    $(".character").html(`your available character finished`)
}

})

