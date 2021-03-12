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
function ehto2lauseita1() {
  //haetaan käyttäjän antama luku htmlstä
  nmbr = document.getElementById('joqLuku').value;
  //tarkistetaan inko luku positiivinen vai negatiivinen
  //ilmoitetaan alertilla kumpi luku on..
  if (nmbr < 0) {
    alert("Luku on negatiivinen");
    console.log("luku on negatiivinen");
    //kirjoitetaan vastaus vielä htmlään myös..
    document.getElementById('vastaus1').innerHTML = "Antamasi luku: " +  nmbr + ", on negatiivinen.";
  } else {
    alert("Luku on positiivinen");
    console.log("luku on positiivinen");
    //kirjoitetaan vastaus vielä htmlään myös..
    document.getElementById('vastaus1').innerHTML = "Antamasi luku: " +  nmbr + ", on positiivinen.";
  }
}

//reset answer paragraphs..
function empty()
{
  //tyhjätään KAIKKI..
  document.getElementById("joqLuku").value = "";
  document.getElementById("vastaus1").innerHTML = "Vastaus..";
  document.getElementById("vastaus2").innerHTML = "Vastaus..";
  document.getElementById("vastaus3").innerHTML = "Vastaus..";
  document.getElementById("vastaus4").innerHTML = "Vastaus..";
  document.getElementById("vastaus5").innerHTML = "Vastaus..";
}
console.log("Programmed by Sami.S KKTI20C - 2021");
