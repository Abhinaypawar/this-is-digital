
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

var tl = gsap.timeline()
gsap 
tl
.from("#one",{
    top: "30%",
    duration: 2,
    ease : Expo.easeinOut,
    opacity:0,
})
.from("#two",{
    left: "50%",
    duration: 2,
    ease : Expo.easeinOut,
    opacity:0,
},"-=2")
.from("#three",{
    top: "55%",
    duration: 2,
    ease : Expo.easeinOut,
    opacity:0,
},"-=2")
//  document.querySelector("h2>i").addEventListener("click",function(){
    // tl.from("h2  i",{
    //     // left:30,
    //     width:0,
    //     duration:2,
    //     backgroundColor:"green",
    //     color:"green",
    // })
//  })