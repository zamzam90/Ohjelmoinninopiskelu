//Das Laskin..
/* 
TODO: laskin toimii numpädistä, värit, lisää poista edellinen funktio....
*/
console.log("Erittäin erittäin simppeli laskin..\nMade by: Sami Siltanen");
//alustetaan muuttujia:
var tulos = "",
  luku = "",
  operaattorit = ["+", "-", "*", "/", "%"] /* poista nappille operaattorit */,
  tyhjätty = "Klikkaile nappuloita!";
//Lisäys-funktio (lisää luvun / operaattorin) lisätään luku tulosmuuttujaan
function lisää(luku) {
  tulos += luku;
  //console.log("Luku/Operaattori " + luku + " lisätty laskuun."); //for debugging..
  //console.log(tulos);
  document.getElementById("näyttö").innerHTML = tulos;
}
//lasku-funktio (tässä lasketaan lisätyt luvut eval funktion avulla)
function kalkuloi() {
  tulos = eval(tulos);
  //console.log("tulos: " + tulos);
  document.getElementById("näyttö").innerHTML = tulos;
}
/* ToDo..
//Poisto-funktio (poistaa viimeksi lisätyn luvun & operaattorin)
function poista() {
  console.log("Hello World");
}
*/
//Alustus-funktio (tyhjentää "näytön")
function alusta() {
  //console.log("Näyttö tyhjennetty."); //for debugging..
  tulos = "";
  document.getElementById("näyttö").innerHTML = tyhjätty;
}
