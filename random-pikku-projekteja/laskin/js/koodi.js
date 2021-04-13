//Das Laskin..
console.log("Erittäin erittäin simppeli laskin..\nMade by: Sami Siltanen");
//alustetaan muuttujia:
var tulos = "",
  luku = "",
  operaattorit = ["+", "-", "*", "/", "%"],
  tyhjätty = "Klikkaile nappuloita!";
//Näyttö-funktio (tässä näkyy lisätyt luvut / operaattorit / tulos), tulos muuttuja
function kalkuloi() {
  tulos = eval(tulos);
  console.log("tuloste 'jono' tällä hetkellä: " + tulos);
  document.getElementById("näyttö").innerHTML = tulos;
}
//Lisäys-funktio (lisää luvun / operaattorin) lisätään luku tulosmuuttujaan
function lisää(luku) {
  tulos += luku;
  console.log("luku " + luku + " lisätty tulosteeseen"); //for debugging..
  console.log(tulos);
  document.getElementById("näyttö").innerHTML = tulos;
}
/* ToDo..
//Poisto-funktio (poistaa viimeksi lisätyn luvun / operaattorin)
function poista() {
  console.log("Hello World");
}
*/
//Alustus-funktio (tyhjentää "näytön")
function alusta() {
  console.log("Näyttö tyhjennetty.."); //for debugging..
  tulos = "";
  document.getElementById("näyttö").innerHTML = tyhjätty;
}
