//Counter Req
var button=document.getElementById('counter');
button.onclick = function() {
  var request = new XMLHttpRequest();
  request.onreadystatechange= function(){
      if(request.readyState === XMLHttpRequest.DONE){
          if(request.status === 200){
            var counter=request.responseText;
            var spam = document.getElementById('count');
            spam.innerHTML = counter.toString();
          }
      }
  };
  request.open('GET','http://u15pa1a1238.imad.hasura-app.io/counter',true);
  request.send(null);
};