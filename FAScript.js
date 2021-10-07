filmek='[{"name":"Jégvarázs","date":"2013","type":["vigjatek","animacio","drama"]},{"name":"Másnaposok","date":"2009","type":["vigjatek"]},{"name":"Verdák","date":"2006","type":["vigjatek","animacio"]},{"name":"Démonokközött","date":"2013","type":["horror"]},{"name":"Visszaajövőbe","date":"1985","type":["vigjatek","sci-fi"]},{"name":"Éhezőkviadala","date":"2012","type":["sci-fi","akcio","drama"]},{"name":"Miután","date":"2019","type":["romantika","drama"]},{"name":"Pókember:Idegenben","date":"2019","type":["akcio","sci-fi","vigjatek"]}{"name":"Venom","date":"2018","type":["akcio","sci-fi"]}{"name":"007Nincsidőmeghalni","date":"2021","type":["akcio"]}{"name":"Miutánelbuktunk","date":"2021","type":["romantika","drama"]}{"name":"Éjszakaaházban","date":"2020","type":["horror"]}{"name":"Mancsőrjárat:Afilm","date":"2021","type":["animacio"]}{"name":"Afeleségemtörténete","date":"2021","type":["romantika","drama"]}]'
var mydata = JSON.parse(filmek);

function TipusKereses(id){
    let kivantTipusSV = new Array();
    for (let i = 0; i < 7; i++) {
        let checkBox = document.getElementById(id+i);
        if (checkBox.checked==true) {
            kivantTipusSV.push(checkBox.value)
        }
    }
    return kivantTipusSV;
}
function CheckRemove() {
    for (let i = 0; i < 7; i++) {
        let checkBox1 = document.getElementById("id"+i);
        let checkBox2 = document.getElementById("noid"+i);
        checkBox1.checked = false;
        checkBox2.checked = false;
    }
}
function AzonosType(kivantTipus,nemKivantTipus){
    for (let i = 0; i < kivantTipus.length; i++) {
        for (let j = 0; j < nemKivantTipus.length; j++) {
            if (kivantTipus[i]==nemKivantTipus[j]) {
                alert("Ne legyen azonos a kívánt és nem kívánt típusok között :)");
                CheckRemove();
            }
        }
    }
}
function FilmekKizarasa(mydata,kivanatosTipus, nemKivantTipus) {
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
function JoFilmek(kivanatosTipus,lehetHogyJo) {
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
    /*
        for (let i = 0; i < ajanlottFilmek.length; i++) {
            console.log("vegleges "+ajanlottFilmek[i].name);
        }
    */
    KiIras(ajanlottFilmek);
}
function KiIras(ajanlottFilmek) {
    var filmDiv = document.getElementById("ajanlottFilmek")
    for (let i = 0; i < ajanlottFilmek.length; i++) {
        var div = document.createElement("div")
        div.className="row";
        div.style.fontSize="20px";
        div.innerHTML="<div class='col'>"+ajanlottFilmek[i].name + "</div> <div class='col'> " + ajanlottFilmek[i].date+"</div>";
        filmDiv.appendChild(div);
    }
}
function Kereses () {
    document.getElementById("ajanlottFilmek").innerHTML="<h2>Ajanlott filmek: </h2>";
    var kivantTipus = new Array();
    var nemKivantTipus = new Array();
    kivantTipus = TipusKereses("id");
    nemKivantTipus = TipusKereses("noid");
    /*
    console.log("kivant:::::"+kivantTipus);
    console.log("NEMkivant:::::"+nemKivantTipus);
    */
    AzonosType(kivantTipus,nemKivantTipus);
    FilmekKizarasa(mydata,kivantTipus,nemKivantTipus);
}
