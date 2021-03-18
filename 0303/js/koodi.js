//filter some linter errors(brackets editor)...
/*global console*//* eslint no-console: "off" */
/*global prompt*//* eslint no-prompt: "off" */
/*global document*//* eslint no-document: "off" */
/*global window*//* eslint no-window: "off" */
/*global undef*//* eslint no-undef: "off" */
/* eslint no-unused-vars: "off" */
// 1.Tehtävä, armstrongin numerot..
function armStrong() {
  console.log("Tehtävä 1.\nArmstrongin lukuja ovat:");
  //alustetaan muuttujat
  var luku = 0,
    taulukkoLuku = 0;
  //for loopilla ja iffillä chekataan onko a3+b3+c3=abc..
  for (luku = 100; luku < 1000; luku++) {
    taulukkoLuku = luku.toString().split("");
    if (Math.pow(taulukkoLuku[0], 3) + Math.pow(taulukkoLuku[1], 3) + Math.pow(taulukkoLuku[2], 3) == luku) {
      console.log("Luku: " + luku);
    }
  }
}
//2.Tehtävä, tulostetaan **joQ kuvio**
function kuvio() {
  console.log("Tehtävä 2.\ntähtikuvio:");
  var y = "";
  for (x = 0; x < 5; x++) {
    y += "* ";
    console.log(y);
  }
}
//3.Tehtävä, "koodikieli", korvataan kirjaimia numeroilla
function koodiKieleks(sana) {
  console.log("Tehtävä 3.\nKoodikieli");
  var taulukko = [],
    koodiSana = "";
  taulukko = Array.from(sana);
  for (x = 0; x < taulukko.length; x++) {
    switch (taulukko[x]) {
      case "a":
        taulukko[x] = "4";
        break;
      case "e":
        taulukko[x] = "3";
        break;
      case "o":
        taulukko[x] = "0";
        break;
      case "i":
        taulukko[x] = "1";
        break;
      case "s":
        taulukko[x] = "5";
        break;
      default:
        break;
    }
  }
  koodiSana = taulukko.toString().replace(/,/g, "");
  console.log(koodiSana);
}
/* 4.Tehtävä, 1-100, mutta jos luku on 3:lla jaollinen, näytölle tulostuukin ’Hik’ ja jos se on 5:llä jaollinen,
näytölle tulostuukin ’up’ ja jos luku on sekä 3:lla, että 5:llä jaollinen, näytölle tulostuu ’hik-up’. */
function hikkup() {
  console.log("Tehtävä 4.\nHik-Up..");
  for (x = 1; x <= 100; x++) {
    if (x%15 == 0) {
      console.log("Hik-Up");
    } else if (x%5 == 0) {
      console.log("Up");
    } else if (x%3 == 0) {
      console.log("Hik");
    } else {
      console.log(x);
    }
  }
}
