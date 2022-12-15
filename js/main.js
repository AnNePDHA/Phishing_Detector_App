var url = window.location.href
// fetch("http://127.0.0.1:5000/getdetect/"+url).then(response => response.json()).then(function(data){
//     result = data["result"];
//     alert(result);
// });
function getDetect(){
    fetch("http://127.0.0.1:5000/getdetect/"+url).then(response => response.json()).then(function(data){
        if(data["result"] == "Phish"){
            alert("ĐÂY LÀ TRANG WEB LỪA ĐẢO!!!")
        }
    });
}

getDetect();