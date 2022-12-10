alert("Hello")
var url = window.location.href
fetch("http://127.0.0.1:5000/getdetect/"+url).then(response => response.json()).then(function(data){
   alert(data["result"]);
});