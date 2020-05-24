
            
const search = document.getElementById('test');
var i =0;
var message='What are You Looking For';
var speed=100;
search.addEventListener('click',()=>{
   
    type();
})
function type(){
    if(i < message.length){
        msg = search.getAttribute('placeholder')+ message.charAt(i); 
        search.setAttribute('placeholder',msg);
        i++;
        setTimeout(type,speed);
    }
}
