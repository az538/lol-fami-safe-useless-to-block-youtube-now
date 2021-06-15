let k;
function startVideo(){
    
 if(document.getElementById('heHeBoi').value != ""){
 k = document.getElementById('heHeBoi').value
 document.getElementById('vid').src = "https://www.youtube-nocookie.com/embed/" + k
 }else{
     alert('put something in the box')
 }
}