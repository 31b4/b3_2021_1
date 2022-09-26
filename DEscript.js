console.log("123");

var a=setInterval(function(){pontosIdo()},1000);

function pontosIdo() {
    var d=new Date();
    var t=d.toLocaleTimeString();
    document.getElementById("ido").innerHTML=t;
}
