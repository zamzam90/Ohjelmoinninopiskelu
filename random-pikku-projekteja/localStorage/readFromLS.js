console.log("Hello stranger..");

/* 
TODO:
  -hakea kaikki tiedot localstoragesta
  -parse json?
  -tulostaa tiedot htmlään, avain ok, arvo, objecti, jokainen omaan table soluun?
  -tietojen(avaimen) poisto mahdollisuus?
  -???
  -testailla
*/

/* alustetaan muuttujia ja haetaan niihin tietoa */
var infoArea = document.getElementById("infoArea");
var listaaBtn = document.getElementById("listaaBtn");

/* 
  TODO:
  0. valitse tietty avain vai näytä kaikkien avainten(hlötietojen) arvo(t)(=tiedot)?
  1. hae avain/avaimet localstoragesta -> muuttujaan
  1.1 arvo(t?) -> muuttujaan (JSON.parse)
  1.2 käy koko arvo objekti läpi ja puske tiedot johonkin muuttujiin
  2. kirjoita for loopilla htmltablee?:
      -avain: table header colspan 2
      -arvot table cell etc?
      Henkilötiedot 0:
      Etunimi: Matti
      Sukunimi: Meikäläinen
      jne..
*/

/* localStorage.key(0) //= henkilötiedot 0
JSON.parse(localStorage.getItem("henkilötiedot 0")); */

/* testing */
test = JSON.parse(localStorage.getItem("henkilötiedot 0"));
function printObject(o) {
  var out = "";
  for (var p in o) {
    out += p + ": " + o[p] + "\n";
  }
  document.getElementById("infoArea").innerHTML = out;
}
/* helvetisti tekemistä vielä */

/* Funktio joka tulostaa tiedot htmlään */
function listaa() {
  /* alustetaan muuttujia ja haetaan niihin tietoa */
  var printKey,
    printValue,
    printHTML = "";

  console.log("tulostetaan...");
  for (x = 0; x < localStorage.length; x++) {
    // hae avain localStoragesta
    printKey = localStorage.key(x);
    console.log("printKey");
    // hae avaimella arvo localStoragesta
    printValue = JSON.parse(localStorage.getItem("printKey"));
    console.log(printValue);
    // lisätään avain ja sen arvo tulosteeseen
    printHTML += printKey + " " + printValue + "<br>";
  }
  document.getElementById("infoArea").innerHTML = printHTML;
}

/* Funktio joka näyttää localStoragen tiedot konsolissa*/
function listLSitems() {
  console.log(localStorage);
}

/* Funktio joka tyhjentää localStoragen, KOKONAAN */
function tyhjääLocalStorage() {
  if (confirm("Haluatko varmasti tyhjentää kaiken localStoragesta!")) {
    localStorage.clear();
    alert("localStorage KOKONAAN tyhjennetty!");
  } else {
    alert("localStoragesta ei poistettu mitään.");
  }
}
