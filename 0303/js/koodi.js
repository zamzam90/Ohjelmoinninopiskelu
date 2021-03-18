//filter some linter errors...
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
  var luku = 0, taulukkoLuku = 0;
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
  for (x = 0; x < 5; x++) {
    
  }
}
