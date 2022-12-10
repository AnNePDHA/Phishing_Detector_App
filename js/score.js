//read result.txt every 5 seconds
function readFile(){
fetch('result.txt')
.then(response => response.text())
.then(data => {
    console.log(data);
    document.getElementById("site_score").innerHTML = data;
}
);
}
setInterval(readFile, 5000);
