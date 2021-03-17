//filter some linter errors...
/*global console*//* eslint no-console: "off" */
/*global prompt*//* eslint no-prompt: "off" */
/*global document*//* eslint no-document: "off" */
/*global window*//* eslint no-window: "off" */
/*global undef*//* eslint no-undef: "off" */
/* eslint no-unused-vars: "off" */
console.log("Tässä tokan viikon tokat tehtävät..");
//Vko 2 perustehtäviä, tokat.
//1.tehtävä
//Onko luku positiivinen vai negatiivinen?
function ehto2lauseita1() {
  //haetaan käyttäjän antama luku htmlstä
  var nmbr = document.getElementById("joqLuku").value;
  //tarkistetaan onko luku positiivinen vai negatiivinen
  //ilmoitetaan alertilla vastaus..
  if (nmbr < 0) { //jos luku alle 0
    alert("Luku on negatiivinen");
    //console.log("luku on negatiivinen");
    //kirjoitetaan vastaus vielä htmlään myös..
    document.getElementById('vastaus1').innerHTML = "Antamasi luku: " + nmbr + ", on negatiivinen.";
  } else { //jos luku yli 0
    alert("Luku on positiivinen");
    //console.log("luku on positiivinen");
    //kirjoitetaan vastaus vielä htmlään myös..
    document.getElementById("vastaus1").innerHTML = "Antamasi luku: " + nmbr + ", on positiivinen.";
  }
}
//2.Tehtävä,
//viikonpäivä numero..
function viikonPäiväNro() {
  //haetaan htmlstä käyttäjän antama numero.
  var päiväNro = parseInt(document.getElementById("pvNro").value);
  var päiväOn = "joQpäivä";
  switch (päiväNro) {
    case 1: //jos 1, Maanantai jne..
      päiväOn = "Maanantai";
      break;
    case 2:
      päiväOn = "Tiistai";
      break;
    case 3:
      päiväOn = "Keskiviikko";
      break;
    case 4:
      päiväOn = "Torstai";
      break;
    case 5:
      päiväOn = "Perjantai";
      break;
    case 6:
      päiväOn = "Lauantai";
      break;
    default:
      päiväOn = "Sunnuntai";
      break;
  }
  alert(päiväOn);
  document.getElementById("vastaus2").innerHTML = "Antamasi numero:" + päiväNro + ", on " + päiväOn + ".";
}
//3.Tehtävä
//tarkastetaan onko käyttäjän antama vuosluku karkausvuosi.
function karkausVuosiko() {
  //console.log("lasketaan onko vuosiluku karkausvuosi:");
  var karkaus = "karkaako";
  var vuosiluku;
  vuosiluku = parseInt(document.getElementById("vuosiLuku").value);
  if (vuosiluku % 4 == 0 && vuosiluku % 100 !== 0) {
    karkaus = "On karkausvuosi.";
    //console.log("vuosi on jaollinen neljällä sekä ei sadalla=karkausvuosi.");
    alert("Vuosi on karkausvuosi");
  } else if (vuosiluku % 400 == 0) {
    karkaus = "On karkausvuosi.";
    //console.log("Vuosi on jaollinen neljälläsadalla=karkausvuosi.");
    alert("Vuosi on karkausvuosi");
  } else {
    karkaus = "Ei ole karkausvuosi.";
    //console.log("vuosi ei ole karkausvuosi.");
    alert("Vuosi ei ole karkausvuosi");
  }
  document.getElementById("vastaus3").innerHTML = "Antamasi vuosi: " + vuosiluku + ".\<br>" + karkaus + ".";
}
//4.Tehtävä
//kysytään käyttäjältä 5 lukua, lasketaan niiden summa ja keskiarvo.
function summaJaKA() {
  //määritellään muuttujat..
  var eka, toka, kolmas, neljäs, viides;
  var summa;
  var keskiarvo;
  //luetaan käyttäjän antamat luvut muuttujiin
  eka = parseInt(document.getElementById("eka").value);
  toka = parseInt(document.getElementById("toka").value);
  kolmas = parseInt(document.getElementById("kolmas").value);
  neljäs = parseInt(document.getElementById("neljäs").value);
  viides = parseInt(document.getElementById("viides").value);
  //lasketaan luvut yhteen ja niiden keskiarvo
  summa = eka + toka + kolmas + neljäs + viides;
  keskiarvo = summa / 5;
  //tulostetaan summa ja keskiarvo
  alert("Lukujen summa on: " + summa + " ja keskiarvo on: " + keskiarvo + ".");
  document.getElementById("vastaus4").innerHTML = "Lukujen summa on: " + summa + ".\<br>Keskiarvo on: " + keskiarvo + ".";
}
//5.Tehtävä
//joQ lausemuuttuja
function lauseMuuttuja() {
  //määritellään muuttujat
  var joqluku;
  var lause = "";
  var htmlLause = "";
  var x;
  //luetaan käyttäjän antama luku muuttujaan
  joqluku = document.getElementById("joQluku").value;
  //tehrään jottai
  for (x = 1; x < 11; x++) {
    lause += joqluku + " x " + x + " = " + joqluku * x + "\n";
  }
  for (x = 1; x < 11; x++) {
    htmlLause += joqluku + " x " + x + " = " + joqluku * x + "\<br>";
  }
  //return console.log(lause);
  alert(lause);
  document.getElementById("vastaus5").innerHTML = htmlLause;
}

//reset answer paragraphs..
function empty() {
  //tyhjätään KAIKKI..
  document.getElementById("joqLuku").value = "";
  document.getElementById("pvNro").value = "";
  document.getElementById("vuosiLuku").value = "";
  document.getElementById("eka").value = "";
  document.getElementById("toka").value = "";
  document.getElementById("kolmas").value = "";
  document.getElementById("neljäs").value = "";
  document.getElementById("viides").value = "";
  document.getElementById("joQluku").value = "";
  document.getElementById("vastaus1").innerHTML = "Vastaus..";
  document.getElementById("vastaus2").innerHTML = "Vastaus..";
  document.getElementById("vastaus3").innerHTML = "Vastaus..";
  document.getElementById("vastaus4").innerHTML = "Vastaus..";
  document.getElementById("vastaus5").innerHTML = "Vastaus..";
}
console.log("Programmed by Sami.S KKTI20C - 2021");
