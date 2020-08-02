window.addEventListener("scroll",()=>{
    var navBar = document.querySelector("nav");
    // var navBarsec = document.querySelectorAll("nav ul li a")
    navBar.classList.toggle("sticky",window.scrollY > 0);
    // for(var i = 0; i<navBarsec.length;i++){
    //   navBarsec[i].classList.toggle("sticky",window.scrollY > 0);
    // }
  })