var url = window.location.href
// fetch("http://127.0.0.1:5000/getdetect/"+url).then(response => response.json()).then(function(data){
//     result = data["result"];
//     alert(result);
// });
function getDetect(){
    fetch("http://127.0.0.1:5000/getdetect/"+url).then(response => response.json()).then(function(data){
        console.log(data["result"]);
        alert(data["result"]);
    });
}

getDetect();