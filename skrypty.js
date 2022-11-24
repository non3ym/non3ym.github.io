function loading(){
    window.onload = dateee();
    window.onload = clocky();
}

 function dateee() {
    
    var datee = new Date();
     
    var d = datee.getDate();
        if (d<10){
            d = "0" + d;
        }
    var m = datee.getMonth() + 1;
        if (m<10){
            m = "0" + m;
        }
    var y = datee.getFullYear();
    
    document.getElementById("today").innerHTML = d + " - " + m + " - " + y;
    setTimeout(dateee, 1000);
}
function clocky() {
    
    var time = new Date();
    var h = time.getHours();
        if (h<10){
            h = "0" + h;
        }
    var m = time.getMinutes();
        if (m<10){
            m = "0" + m;
        }
    var s = time.getSeconds();
        if (s<10){
            s = "0" + s;
        }
    
    document.getElementById("timer").innerHTML = h + " : " + m + " : " + s;
    setTimeout(clocky, 1000);
}