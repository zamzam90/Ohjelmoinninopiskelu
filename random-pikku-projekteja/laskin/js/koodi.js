//Das Laskin..
/* 
TODO: , estää , käyttö useammin kuin kerran, % operaattori, laskin toimii numpädistä, muotoilu&värit..
*/
console.log("Erittäin erittäin simppeli laskin..\nMade by: Sami Siltanen");
//alustetaan muuttujia:
var tulos = "",
  luku = "",
  tyhjätty = "Klikkaile nappuloita!";
//Lisäys-funktio (lisää luvun / operaattorin) lisätään luku tulosmuuttujaan
function lisää(luku) {
  tulos += luku;
  //console.log("Luku/Operaattori " + luku + " lisätty laskuun."); //for debugging..
  //console.log(tulos);
  document.getElementById("näyttö").innerHTML = tulos;
}
//Lasku-funktio (tässä lasketaan lisätyt luvut eval funktion avulla)
function kalkuloi() {
  tulos = eval(tulos); /*lasketaan eval funktiolla*/
  tulos = tulos.toString(); /*muutetaan tulos takaisin stringiksi*/
  //console.log("tulos: " + tulos);//for debugging..
  document.getElementById("näyttö").innerHTML = tulos;
}
//Poisto-funktio (poistaa viimeksi lisätyn luvun & operaattorin) */
function poista() {
  var patt, lastOperatorIndex;
  patt = /[-+/*]/g; /* https://stackoverflow.com/questions/4009817/include-the-minus-sign-into-this-regular-expression-how ensin ei  - toiminut..*/
  /* https://stackoverflow.com/questions/2295657/return-positions-of-a-regex-match-in-javascript saadaan viimeisimmän matchin indexi*/
  while ((match = patt.exec(tulos)) != null) {
    lastOperatorIndex = match.index;
  }
  //console.log(lastOperatorIndex);//for debugging
  /* https://www.tutorialspoint.com/how-to-remove-text-from-a-string-in-javascript */
  tulos = tulos.substr(0, lastOperatorIndex);
  //console.log(tulos); //for debugging..
  document.getElementById("näyttö").innerHTML = tulos;
}
//Alustus-funktio (tyhjentää "näytön")
function alusta() {
  //console.log("Näyttö tyhjennetty."); //for debugging..
  tulos = "";
  document.getElementById("näyttö").innerHTML = tyhjätty;
}
