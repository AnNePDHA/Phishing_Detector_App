function readFile(){
fetch('result.txt')
.then(response => response.text())
.then(
    data => {
        document.getElementById("site_score").innerHTML = data;
        document.getElementById("site_score").style.fontSize = "30px";
        document.getElementById("site_score").style.top = "45px";
        
        if (data == "Legit"){
        document.getElementById("site_msg").innerHTML = "This website is safe to visit";
        document.getElementById("site_score").style.fontSize = "50px";
        document.getElementById("site_score").style.top = "35px";
    }
    else if (data == "Phish"){
        document.getElementById("res-circle").style.backgroundColor = "#bc5858";
        document.getElementById("site_msg").innerHTML = "This website is a phishing site";
        document.getElementById("site_score").style.fontSize = "50px";
        document.getElementById("site_score").style.top = "35px";
    }
    console.log(data);
}
)
}
setInterval(readFile, 200);
