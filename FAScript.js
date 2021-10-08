filmek='[{"name":"Jégvarázs","date":"2013","type":["vigjatek","animacio","drama"]},{"name":"Másnaposok","date":"2009","type":["vigjatek"]},{"name":"Verdák","date":"2006","type":["vigjatek","animacio"]},{"name":"Démonokközött","date":"2013","type":["horror"]},{"name":"Visszaajövőbe","date":"1985","type":["vigjatek","sci-fi"]},{"name":"Éhezőkviadala","date":"2012","type":["sci-fi","akcio","drama"]},{"name":"Miután","date":"2019","type":["romantika","drama","sex,softporn"]},{"name":"Pókember:Idegenben","date":"2019","type":["akcio","sci-fi","vigjatek"]}]'
var mydata = JSON.parse(filmek);//main adat tarolo

function TipusKereses(id){//Bemeno adatok beolvasasa
    let kivantTipusSV = new Array();
    for (let i = 0; i < 7; i++) {
        let checkBox = document.getElementById(id+i);
        if (checkBox.checked==true) {
            kivantTipusSV.push(checkBox.value)
        }
    }
    return kivantTipusSV;
}
function CheckRemove() {//check boxok false-a tetele
    for (let i = 0; i < 7; i++) {
        let checkBox1 = document.getElementById("id"+i);
        let checkBox2 = document.getElementById("noid"+i);
        checkBox1.checked = false;
        checkBox2.checked = false;
    }
}
function AzonosType(kivantTipus,nemKivantTipus){//azonos tipusok deaktivalasa
    for (let i = 0; i < kivantTipus.length; i++) {
        for (let j = 0; j < nemKivantTipus.length; j++) {
            if (kivantTipus[i]==nemKivantTipus[j]) {
                alert("Ne legyen azonos a kívánt és nem kívánt típusok között :)");
                CheckRemove();
                return true;
            }
        }
    }
    return false;
}
function FilmekKizarasa(mydata,kivanatosTipus, nemKivantTipus) {//rossz filmek kizarasa
    var lehetHogyJo = new Array();
    for (let i = 0; i < mydata.length; i++) {
        var kilep = false;
        for (let j = 0; j < mydata[i].type.length; j++) {
            kilep = false;
            for (let k = 0; k < nemKivantTipus.length; k++) {
                if (mydata[i].type[j] == nemKivantTipus[k]) {
                    kilep=true;
                    break;
                } 
            }
            if (kilep==true) {
                break;
            }
        }
        if (kilep == false) {
            lehetHogyJo.push(mydata[i]);
        }
    }
    //console.log(lehetHogyJo);
    JoFilmek(kivanatosTipus,lehetHogyJo);
}
function JoFilmek(kivanatosTipus,lehetHogyJo) {// jo/ajanlott filmek lementese
    var ajanlottFilmek = new Array();
    for (let i = 0; i < lehetHogyJo.length ; i++) {
        for (let j = 0; j < kivanatosTipus.length; j++) {
            var kilep = false;
            for (let k = 0; k < lehetHogyJo[i].type.length; k++) {
                if (kivanatosTipus[j] == lehetHogyJo[i].type[k]) {
                    ajanlottFilmek.push(lehetHogyJo[i]);
                    kilep = true;
                    break;
                }
            }
            if (kilep==true) {
                break;
            }
        }
    }
    KiIras(ajanlottFilmek);
}
function KiIras(ajanlottFilmek) {//Vegleges megjelenites
    var filmDiv = document.getElementById("ajanlottFilmek")
    for (let i = 0; i < ajanlottFilmek.length; i++) {
        var div = document.createElement("div")
        div.className="row";
        div.style.fontSize="20px";
        div.innerHTML="<div class='col'>"+ajanlottFilmek[i].name + "</div> <div class='col'> " + ajanlottFilmek[i].date+"</div>";
        filmDiv.appendChild(div);
    }
}
function Kereses () {//main function 
    document.getElementById("ajanlottFilmek").innerHTML="<h2>Ajanlott filmek: </h2>";
    var kivantTipus = new Array();
    var nemKivantTipus = new Array();
    kivantTipus = TipusKereses("id");//feltoltes
    nemKivantTipus = TipusKereses("noid");//feltoltes
    if (!AzonosType(kivantTipus,nemKivantTipus)) {//
        FilmekKizarasa(mydata,kivantTipus,nemKivantTipus);
    }   
}
