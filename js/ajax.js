$(document).ready(function(){
    
    $('.nursery_d_nav ul li a').click(function(){
       var $this = $(this),
         target = $this.data('target');
          console.log(target);

        //load target page into container

        $('#content').load (target);

        return false ;
    });
});