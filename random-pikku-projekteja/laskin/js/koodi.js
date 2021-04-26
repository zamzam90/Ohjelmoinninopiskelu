//Das Laskin..
/* 
TODO: estää ","" käyttö useammin kuin kerran(nyt ei saa peräkkäin mutta esim 6,66, onnistuu..), estää operaattorin syöttäminen _ensimmäisenä_, % operaattori, laskin toimii numpädistä, muotoilu&värit..
*/
console.log("Erittäin erittäin simppeli laskin..\nMade by: Sami Siltanen");
//alustetaan muuttujia:
var tulos = "",
  luku = "",
  tyhjätty = "Klikkaile nappuloita!";
//Lisäys-funktio, lisää luvun/operaattorin tulosmuuttujaan
function lisää(luku) {
  /* estetään peräkkäisten pilkkujen lisääminen */
  if (luku == "." && tulos[tulos.length - 1] == ".") {
    return false;
  } else {
    tulos += luku;
    //console.log("Luku/Operaattori " + luku + " lisätty laskuun."); //for debugging..
    //console.log(tulos);
    document.getElementById("näyttö").innerHTML = tulos;
  }
}
//Lasku-funktio, lasketaan tulos-muuttujaan lisätyt luvut eval funktion avulla)
function kalkuloi() {
  /* Estetään undefined jos painetaan ensimmäisenä = nappia */
  if (tulos == "") {
    //console.log("hello");//for debugging..
    return false;
  } else {
    tulos = eval(tulos); /*lasketaan eval funktiolla*/
    tulos = tulos.toString(); /*muutetaan tulos takaisin stringiksi*/
    //console.log("tulos: " + tulos); //for debugging..
    document.getElementById("näyttö").innerHTML = tulos;
  }
}
//Poisto-funktio (poistaa viimeksi lisätyn luvun & operaattorin) */
function poista() {
  var patt, lastOperatorIndex;
  patt = /[-+/*]/g; /* https://stackoverflow.com/questions/4009817/include-the-minus-sign-into-this-regular-expression-how ensin ei  - toiminut..*/
  /* jos tuloste on tyhjä, ei tyhjennetä näyttöä */
  if (tulos == "") {
    //console.log("hello0");
    return false;
  }
  /* https://stackoverflow.com/questions/2295657/return-positions-of-a-regex-match-in-javascript saadaan viimeisimmän matchin indexi*/
  while ((match = patt.exec(tulos)) != null) {
    //console.log("hello1");
    lastOperatorIndex = match.index;
  }
  //console.log(lastOperatorIndex);//for debugging
  /* https://www.tutorialspoint.com/how-to-remove-text-from-a-string-in-javascript */
  tulos = tulos.substr(0, lastOperatorIndex);
  //console.log("hello2");

  //jos ei operaattoria poistetaan viimeinen luku
  if (lastOperatorIndex == undefined) {
    //console.log("hello undefined");
    tulos = tulos.substring(0, tulos.length - 1);
    //console.log(tulos + " " + tulos.length);
  }
  if (tulos == "" && tulos.length == 0) {
    //console.log("hello3");
    return alusta();
  }
  //console.log(tulos); //for debugging..
  //console.log("hello4");
  document.getElementById("näyttö").innerHTML = tulos;
}
//Alustus-funktio (tyhjentää "näytön")
function alusta() {
  //console.log("Näyttö tyhjennetty."); //for debugging..
  tulos = "";
  document.getElementById("näyttö").innerHTML = tyhjätty;
}
