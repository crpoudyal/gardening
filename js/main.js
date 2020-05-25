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
$(document).ready(function () {
    $('.search').click(function () { //select your searchbar by class and onclick create a new function
        var my_searchbar = $(this); //my_searchbar is how you can access your searchbar

        my_searchbar.animate({ marginTop: '150px' }, 1000);
    });
});


