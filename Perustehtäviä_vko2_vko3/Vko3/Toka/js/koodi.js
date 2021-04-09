console.log("Tässä kolmosviikon tokat tehtävät..");
//Vko 3 perustehtäviä, tokat.
//1.Tehtävä
//lasketaan sanalle pisteet kirjainten perusteella..
function laskeSanaPisteet() {
  //alustetaan muuttujia.
  var scrabbleSana = "",
    pieniks,
    pisteet = 0;
  //haetaan annettu sana htmlstä.
  scrabbleSana = document.getElementById("scrabbleSana").value;
  //console.log(scrabbleSana);
  //muutetaan annettu sana pieniksikirjaimiksi,vähemmän switch caseja :D
  pieniks = scrabbleSana.toLowerCase();
  //console.log(pieniks);
  //käydään annetun sanan jokainen kirjain läpi forloopilla ja annetaan pisteet kirjainten mukaan.
  for (let x = 0; x < pieniks.length; x++) {
    switch (pieniks[x]) {
      case "a":
      case "e":
      case "i":
      case "n":
      case "s":
      case "t":
        pisteet++;
        break;
      case "o":
      case "ä":
      case "k":
      case "l":
        pisteet += 2;
        break;
      case "u":
      case "m":
        pisteet += 3;
        break;
      case "y":
      case "h":
      case "j":
      case "p":
      case "r":
      case "v":
        pisteet += 4;
        break;
      case "ö":
      case "d":
        pisteet += 7;
        break;
      case "b":
      case "f":
      case "g":
        pisteet += 8;
        break;
      case "c":
        pisteet += 10;
        break;
      default:
        pisteet += 12;
        break;
    }
  }
  //console.log(pisteet);
  //tulostetaan saadut pisteet htmlään.
  document.getElementById("vastaus1").innerHTML =
    "Sait " + pisteet + " pistettä!";
}
//2.Tehtävä
/*arvotaan lottonumerot..
https://stackoverflow.com/questions/37963358/how-can-i-make-a-random-array-with-no-repeats */
function lototaan() {
  var numerot = [],
    tulos = [];
  //tehdään taulukko jossa numerot 1-40
  for (var i = 1; i <= 40; i++) {
    numerot.push(i);
  }
  //console.log(numerot);
  //sekoitetaan numerot-taulukko https://www.w3schools.com/js/js_array_sort.asp
  numerot.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  //console.log(numerot);
  //otetaan sekoitetusta numerot-taulukosta 7 numeroa tulos-taulukkoon
  for (var j = 0; j < 7; j++) {
    tulos[j] = numerot[j];
  }
  //console.log(tulos);
  //laitetaan numerot järjestykseen(pienimmästä isoimpaan) ja poistetaan taulukosta pilkut
  tulos = tulos.sort((a, b) => a - b);
  tulos = tulos.join(" ");
  //console.log(tulos);
  //kirjoitetaan vastaus htmlään
  document.getElementById("vastaus2").innerHTML =
    "Arvotut numerot ovat: " + tulos;
}
//3.Tehtävä
//muunnetaan ennalta määritelty js-taulukko html-taulukkomuotoon..
function muunnaTaulukko() {
  var tauluNumerot = [];
  tauluNumerot = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7],
  ];
  //console.log(tauluNumerot);
  var htmlTaulukko = '<table align="center" border="1">';
  /* kahdella for loopilla lisätään tablerowit ja niihin tablecellit 
  mihin sijoitetaan js taulukosta tiedot */
  for (var y = 0; y < tauluNumerot.length; y++) {
    htmlTaulukko += "<tr>";
    for (var z = 0; z < tauluNumerot[y].length; z++) {
      htmlTaulukko += "<td>" + tauluNumerot[y][z] + "</td>";
    }
    htmlTaulukko += "</tr>";
  }
  htmlTaulukko += "</table>";
  //tulostetaan taulukko htmlään
  document.getElementById("vastaus3").innerHTML = htmlTaulukko;
}
//4.Tehtävä
//tehdään taulukko kaikista korttipakankorteista, arvotaan sieltä 5korttia..
function arvoKortit() {
  //alustetaan muuttujat..
  var korttiPakka = [""],
    maat = ["&#9828;", "&#9827;", "&#9826;", "&#9825;"],
    numerot = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ],
    count = 0,
    arvotutKortit = [];
  //tehdään korttipakka..
  for (m = 0; m < maat.length; m++) {
    for (n = 0; n < numerot.length; n++) {
      if (m == maat.length - 1 && n == numerot.length - 1) {
        korttiPakka[count] = maat[m] + numerot[n];
      } else {
        korttiPakka[count] = maat[m] + numerot[n];
        count++;
      }
    }
  }
  //console.log("pakka " + korttiPakka);
  //"sekoitetaan" pakka.. https://www.w3schools.com/js/js_array_sort.asp
  korttiPakka.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  //console.log("sekotetut " + korttiPakka);
  //otetaan pakasta 5 korttia..
  for (var k = 0; k < 5; k++) {
    arvotutKortit[k] = korttiPakka[k];
  }
  //console.log("5-korttia " + arvotutKortit);
  //tulostetaan ne htmlään..
  arvotutKortit = arvotutKortit.join(" ");
  document.getElementById("vastaus4").innerHTML = arvotutKortit;
}
//tyhjätään KAIKKI..
function empty() {
  document.getElementById("scrabbleSana").value = "";
  document.getElementById("vastaus1").innerHTML = "";
  document.getElementById("vastaus2").innerHTML = "";
  document.getElementById("vastaus3").innerHTML = "";
  document.getElementById("vastaus4").innerHTML = "";
}
console.log("Programmed by Sami.S KKTI20C - 2021");
