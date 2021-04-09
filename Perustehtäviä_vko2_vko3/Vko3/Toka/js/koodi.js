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
//arvotaan lottonumerot..

//3.Tehtävä
//muunnetaan ennalta määritelty js taulukko html taulukkomuotoon..

//4.Tehtävä
//tehdään taulukko kaikista korttipakankorteista, arvotaan sieltä 5korttia..

//tyhjätään KAIKKI..
function empty() {
  document.getElementById("scrabbleSana").value = "";
  //document.getElementById("").value = "";
  //document.getElementById("").value = "";
  //document.getElementById("").value = "";
  //document.getElementById("").value = "";
  document.getElementById("vastaus1").innerHTML = "";
  //document.getElementById("vastaus2").innerHTML = "";
  //document.getElementById("vastaus3").innerHTML = "";
  //document.getElementById("vastaus4").innerHTML = "";
}
console.log("Programmed by Sami.S KKTI20C - 2021");
