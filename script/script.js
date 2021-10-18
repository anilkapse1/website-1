let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector("header .inner-container nav ul");

hamburger.addEventListener("click",callHamburger = ()=>{
    menu.classList.toggle("show");
    hamburger.classList.toggle("change");
});

// slick slider for card
$('.cards').slick({
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});

 // slick slider for testimonial
$('.client-card').slick({
  dots: true,
  autoplay: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});

// convert numver to dashed icon 
var dots = document.querySelectorAll(".slick-dots li");
dots.forEach((item)=>{
    item.innerText="";
});


// team social icon hover 
var hoveritem = document.querySelectorAll(".teamcard .card");
for(let i=0;i<hoveritem.length;i++){
  hoveritem[i].addEventListener("mouseover",function(){
    hoveritem[i].classList.add("sasa");    
   });
   hoveritem[i].addEventListener("mouseout",function(){
    hoveritem[i].classList.remove("sasa");    
   });
 }


// code for apply height of parent to child
var heightOverlay = document.querySelector(".achieve").offsetHeight;
document.querySelector(".achieve .achieve-overlay").style.height = `${heightOverlay}px`;

