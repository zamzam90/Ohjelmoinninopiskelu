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
  for (x=0;x<annettuSana.length;x++) {
    annettuSana[x] += "Ö";
  }
  //console.log(annettuSana);
  salasanaitettu = annettuSana.join("");
  //console.log(salasanaitettu);
  document.getElementById("vastaus2").innerHTML = "Salasana muunnos: " + salasanaitettu;
}
//3.Tehtävä
//tarkistetaan onko käyttäjän antamassa sanassa ö-kirjain.
function ööKirjain() {
  var annettuSana, test, onei, tuloste;
  annettuSana = document.getElementById("tarkistettavaSana").value;
  //console.log(annettuSana);
  test = /ö/ig;
  if (annettuSana.match(test)) {
    onei = "Kyllä, sanassa on ö-kirjain";
  } else {
    onei = "Sanassa ei ole ö-kirjainta";
  }
  //console.log(test.test(annettuSana));
  if (annettuSana.match(test)) {
    tuloste = "\<br>Sanassa on " + annettuSana.match(test).length + " kpl ö-kirjainta.";
  } else {
    tuloste = "";
  }
  //console.log(tuloste);
  document.getElementById("vastaus3").innerHTML = onei +  tuloste;
}
//4.Tehtävä
//tulostetaan käyttäjän antamasta luvusta sen kertoma.
function luvunKertoma() {
  var kertomaLuku, tulos;
  kertomaLuku = document.getElementById("kertomaLuku").value;
  tulos = 1;
  //console.log(kertomaLuku);//for testing..
  for (var x=1; x<=kertomaLuku; x++) {
    //console.log(x);//testing..
    tulos *=x;
    //console.log(tulos);
  }
document.getElementById("vastaus4").innerHTML = "Luvun " + kertomaLuku + " kerroin on: " + tulos;
}
//5.Tehtävä



//reset answer paragraphs..
function empty() {
  //tyhjätään KAIKKI..
  document.getElementById("parillinenLuku").value = "";
  document.getElementById("annettuSana").value = "";
  document.getElementById("tarkistettavaSana").value = "";
  document.getElementById("kertomaLuku").value = "";
  //document.getElementById("").value = "";
  //document.getElementById("").value = "";
  //document.getElementById("").value = "";
  //document.getElementById("").value = "";
  //document.getElementById("").value = "";
  document.getElementById("vastaus1").innerHTML = "Parilliset luvut: ";
  document.getElementById("vastaus2").innerHTML = "Salasana muunnos: ";
  document.getElementById("vastaus3").innerHTML = " ";
  document.getElementById("vastaus4").innerHTML = "Vastaus..";
  //document.getElementById("vastaus5").innerHTML = "Vastaus..";
  //document.getElementById("vastaus6").innerHTML = "Vastaus..";
  //document.getElementById("vastaus7").innerHTML = "Vastaus..";
  //document.getElementById("vastaus8").innerHTML = "Vastaus..";
  //document.getElementById("vastaus9").innerHTML = "Vastaus..";
  //document.getElementById("vastaus10").innerHTML = "Vastaus..";
  //document.getElementById("vastaus11").innerHTML = "Vastaus..";
}
console.log("Programmed by Sami.S KKTI20C - 2021");
