//filter some linter errors...
/*global console*//* eslint no-console: "off" */
/*global prompt*//* eslint no-prompt: "off" */
/*global document*//* eslint no-document: "off" */
/*global window*//* eslint no-window: "off" */
/*global undef*//* eslint no-undef: "off" */
/* eslint no-unused-vars: "off" */
console.log("Viikon2 ekat perustehtävät.");
//Vko 2 perustehtäviä, ekat.
//1.Tehtävä, pyydetään 3 numeroa ja laitetaan ne järjestykseen..
function sortEm() {
  //hae numerot htmlstä
  var uno = document.getElementById("first").value;
  var dos = document.getElementById("second").value;
  var tres = document.getElementById("third").value;
  //lisää numerot taulukkoon
  var numerot = [uno, dos, tres];
  //järkkää taulukkoon
  numerot.sort(function(a, b) {
    return a - b;
  });
  //siivotaan pilkut pois..
  var selkee = numerot.join(" ").toLocaleString();
  //anna vastais alerttina?
  //alert("Annoit numerot: " + uno + "," + dos + "," + tres + "\n" + "Pienimmästä suurimpaan: " + selkee);
  //kirjoitetaan vastaus myös htmlään..
  document.getElementById("vastaus1").innerHTML = "Annoit numerot: " + uno + "," + dos + "," + tres + "\<br>" + "Pienimmästä suurimpaan: " + selkee;
}
//2.Assignment, ask for 5 numbers, find the biggest..
//get numbers from html..
function biggest() {
  //get numbers from html form..
  var uno = document.getElementById("first_number").value;
  var dos = document.getElementById("second_number").value;
  var tres = document.getElementById("third_number").value;
  var cuatro = document.getElementById("fourth_number").value;
  var cinco = document.getElementById("fifth_number").value;
  //put them in an array and sort it (w3schools helped with sort..)
  var numberss = [uno, dos, tres, cuatro, cinco];
  var numbers = [uno, dos, tres, cuatro, cinco];
  var sortedNumbers = numbers.sort(function(a, b) {
    return b - a;
  });
  //get the last number in the array a.k.a the biggest
  var theBiggest = sortedNumbers[0];
  //alert("Annoit numerot: " + numberss + "\n" + "Suurin on: " + theBiggest);
  //kirjoitetaan vastaus myös htmlään..
  document.getElementById("vastaus2").innerHTML = "Annoit numerot: " + numberss + "\<br>" + "Suurin on: " + theBiggest;
}
//3. Mission, is the number even or odd?
function evnORodd() {
  //hajetaan luku htmlstä..
  var luku = document.getElementById("luku").value;
  //if parillinen do this, else do that..
  if (luku % 2 === 0) {
    //alert("Annoit luvun " + luku + ", se on parillinen.");
    //kirjoitetaan vastaus myös htmlään..
    document.getElementById("vastaus3").innerHTML = "Annoit luvun " + luku + ", se on parillinen.";
  } else {
    //alert("Annoit luvun " + luku + ", se on pariton.");
    //kirjoitetaan vastaus myös htmlään..
    document.getElementById("vastaus3").innerHTML = "Annoit luvun " + luku + ", se on pariton.";
  }
}
//4.Tehtävä, annetaan ajoneuvo iän mukaan..
function reteli() {
  //haetaan ikä htmlstä..
  var age = document.getElementById("ika").value;
  //jos <16 fillari, jos <18 mopo, muuten auto.
  if (age < 15) {
    //alert("Olet " + age + " vuotta vanha, saat ajaa polkupyörää.");
    //kirjoitetaan vastaus myös htmlään..
    document.getElementById("vastaus4").innerHTML = "Olet " + age + " vuotta vanha, saat ajaa polkupyörää";
  } else if (age < 18) {
    //alert("Olet " + age + " vuotta vanha, saat ajaa mopolla.");
    //kirjoitetaan vastaus myös htmlään..
    document.getElementById("vastaus4").innerHTML = "Olet " + age + " vuotta vanha, saat ajaa mopolla";
  } else
    //alert("Olet " + age + " vuotta vanha, saat ajaa autolla.");
  //kirjoitetaan vastaus myös htmlään..
  document.getElementById("vastaus4").innerHTML = "Olet " + age + " vuotta vanha, saat ajaa autolla.";
}
//5. Tehtävä, näytetään "hei maailma" valitulla kielellä..
function heippaMaailma() {
  //haetaan käyttäjän valinta htmlstä..
  var x = document.getElementById("select_lang").value;
  //tulostetaan vastuas käyttäjän valinnan mukaan
  if (x == "en") {
    document.getElementById("vastaus5").innerHTML = "Hello world!";
  } else if (x == "se") {
    document.getElementById("vastaus5").innerHTML = "Hej världen!";
  } else if (x == "sp") {
    document.getElementById("vastaus5").innerHTML = "Hola Mundo!";
  } else {
    return;
  }
}
//reset answer paragraphs..
function empty() {
  //tyhjätään KAIKKI..
  document.getElementById("first").value = "";
  document.getElementById("second").value = "";
  document.getElementById("third").value = "";
  document.getElementById("first_number").value = "";
  document.getElementById("second_number").value = "";
  document.getElementById("third_number").value = "";
  document.getElementById("fourth_number").value = "";
  document.getElementById("fifth_number").value = "";
  document.getElementById("luku").value = "";
  document.getElementById("ika").value = "";
  document.getElementById("select_lang").value = "en";
  document.getElementById("vastaus1").innerHTML = "Vastaus..";
  document.getElementById("vastaus2").innerHTML = "Vastaus..";
  document.getElementById("vastaus3").innerHTML = "Vastaus..";
  document.getElementById("vastaus4").innerHTML = "Vastaus..";
  document.getElementById("vastaus5").innerHTML = "Vastaus..";
}
console.log("Programmed by Sami.S KKTI20C - 2021");
