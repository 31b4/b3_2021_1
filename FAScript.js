console.log("SZIA");
filmek='[{"name":"Jégvarázs","date":"2013","type":["vigjatek","animation","drama"]},{"name":"Másnaposok","date":"2009","type":["vigjatek"]},{"name":"Verdák","date":"2006","type":["vigjatek","animation"]},{"name":"Démonokközött","date":"2013","type":["horror"]},{"name":"Visszaajövőbe","date":"1985","type":["vigjatek","sci-fi"]},{"name":"Éhezőkviadala","date":"2012","type":["sci-fi","akcio","drama"]},{"name":"Miután","date":"2019","type":["romantika","drama","sex,softporn"]},{"name":"Pókember:Idegenben","date":"2019","type":["akcio","sci-fi","vigjatek"]}]'
var mydata = JSON.parse(filmek);

for (let i = 0; i < filmek.length; i++) {
    if (mydata[i]==null) {break;}
    console.log(mydata[i].name);
    console.log(mydata[i].date);
    console.log(mydata[i].type);
}            

var tipus = "drama";
var a = new Array();

for (let i = 0; i < 10; i++) {
    for (var k = 0; k < 3; k++) {
        if (data[i].type[k] == tipus) {
            a.push(data[i])
            console.log("ha ha ")
        }   
        
        console.log("Becsüld meg ami van")
        
    }
}
for (let j = 0; j < a.length; j++) {
    console.log(a[i].name);
    
}