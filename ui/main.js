//Counter Req
var button=document.getElementById('counter');
 var counter=0;
button.onclick= function(){
  
  counter=counter+1;
  var spam=document.getElementById('count');
  sapm.innerHTML=counter.toString();
};