//placeholder typewriter effect...
const search = document.getElementById('test');

var i = 0;
var message = 'What are You Looking For';
search.addEventListener('click', () => {
// type();
    setTimeout(type,1000);
})

function type() {
    if (i < message.length) {
        msg = search.getAttribute('placeholder') + message.charAt(i);
        search.setAttribute('placeholder', msg);
        i++;
        setTimeout(type, 50);
    }
}

//display "Hit enter" when key typed on search bar.....
const tip = document.getElementById('tip');
search.addEventListener('keydown',() => {
    tip.style.visibility= "visible";
    tip.style.opacity="1";
  
    
})


//search bar animation...
if(typeof $('.search') !== 'undefined'){
$(document).ready(function () {
    $('.search').click(function () { //select your searchbar by class and onclick create a new function
        var my_searchbar = $(this); //my_searchbar is how you can access your searchbar

        my_searchbar.animate({ marginTop: '150px' }, 1000);
    });
});
}


// Category post slider.........................

$('.category').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
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
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });
     
  
  //.........................navBar sticky effects...............

  window.addEventListener("scroll",()=>{
    var navBar = document.querySelector("nav");
    // var navBarsec = document.querySelectorAll("nav ul li a")
    navBar.classList.toggle("sticky",window.scrollY > 0);
    // for(var i = 0; i<navBarsec.length;i++){
    //   navBarsec[i].classList.toggle("sticky",window.scrollY > 0);
    // }
  })

  