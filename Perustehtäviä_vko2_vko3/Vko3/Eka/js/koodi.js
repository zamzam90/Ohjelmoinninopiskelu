//filter some linter errors(brackets editor)...
/*global console*//* eslint no-console: "off" */
/*global prompt*//* eslint no-prompt: "off" */
/*global document*//* eslint no-document: "off" */
/*global window*//* eslint no-window: "off" */
/*global undef*//* eslint no-undef: "off" */
/* eslint no-unused-vars: "off" */

//Vko 3 perustehtäviä, ekat.
console.log("Tässä kolmosviikon ekat tehtävät..");
//1.tehtävä
//pyydetään käyttäjältä parillinen luku, tulostetaan parilliset luvut siihen asti(poislukien 0).
function tehtava1() {
  var nmbr = 0, tuloste = "", x;
  nmbr = parseInt(document.getElementById("parillinenLuku").value);
  //console.log(nmbr);
  for (x=2;x<=nmbr;x+=2) {
    tuloste += x;
    tuloste += " ";
  }
  //console.log(tuloste);
  document.getElementById("vastaus1").innerHTML = "Parilliset luvut: " + tuloste;
}
//2.tehtävä
//muutetaan käyttäjän antama sana "salasanaksi" :D
function tehtava2() {
  var annettuSana = "", salasanaitettu;
  annettuSana = Array.from(document.getElementById("annettuSana").value);
  //console.log(annettuSana);
  
}
//reset answer paragraphs..
function empty() {
  //tyhjätään KAIKKI..
  document.getElementById("parillinenLuku").value = "";
  document.getElementById("annettuSana").value = "";
  document.getElementById("").value = "";
  document.getElementById("").value = "";
  document.getElementById("").value = "";
  document.getElementById("").value = "";
  document.getElementById("").value = "";
  document.getElementById("").value = "";
  document.getElementById("").value = "";
  document.getElementById("vastaus1").innerHTML = "Parilliset luvut: ";
  document.getElementById("vastaus2").innerHTML = "Salasana muunnos: ";
  document.getElementById("vastaus3").innerHTML = "Vastaus..";
  document.getElementById("vastaus4").innerHTML = "Vastaus..";
  document.getElementById("vastaus5").innerHTML = "Vastaus..";
  document.getElementById("vastaus6").innerHTML = "Vastaus..";
  document.getElementById("vastaus7").innerHTML = "Vastaus..";
  document.getElementById("vastaus8").innerHTML = "Vastaus..";
  document.getElementById("vastaus9").innerHTML = "Vastaus..";
  document.getElementById("vastaus10").innerHTML = "Vastaus..";
  document.getElementById("vastaus11").innerHTML = "Vastaus..";
}
console.log("Programmed by Sami.S KKTI20C - 2021");
