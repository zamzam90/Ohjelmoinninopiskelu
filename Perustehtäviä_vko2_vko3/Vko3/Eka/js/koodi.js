//filter some linter errors(brackets editor)...
/*global console*/
/* eslint no-console: "off" */
/*global prompt*/
/* eslint no-prompt: "off" */
/*global document*/
/* eslint no-document: "off" */
/*global window*/
/* eslint no-window: "off" */
/*global undef*/
/* eslint no-undef: "off" */
/* eslint no-unused-vars: "off" */

//Vko 3 perustehtäviä, ekat.
console.log("Tässä kolmosviikon ekat tehtävät..");
//1.tehtävä
//pyydetään käyttäjältä parillinen luku, tulostetaan parilliset luvut siihen asti(poislukien 0).
function tehtava1() {
  var nmbr = 0,
    tuloste = "",
    x;
  nmbr = parseInt(document.getElementById("parillinenLuku").value);
  //console.log(nmbr);
  if (isNaN(nmbr)) {
    alert("Anna numero!");
  } else {
    for (x = 2; x <= nmbr; x += 2) {
      tuloste += x;
      tuloste += " ";
    }
    document.getElementById("vastaus1").innerHTML = "Parilliset luvut: " + tuloste;
  }
  //console.log(tuloste);
}
//2.tehtävä
//muutetaan käyttäjän antama sana "salasanaksi" :D
function tehtava2() {
  var annettuSana = "",
    salasanaitettu;
  annettuSana = Array.from(document.getElementById("annettuSana").value);
  //console.log(annettuSana);
  for (x = 0; x < annettuSana.length; x++) {
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
  document.getElementById("vastaus3").innerHTML = onei + tuloste;
}
//4.Tehtävä
//tulostetaan käyttäjän antamasta luvusta sen kertoma.
function luvunKertoma() {
  var kertomaLuku, tulos = 1;
  kertomaLuku = document.getElementById("kertomaLuku").value;
  if (isNaN(kertomaLuku)) {
    alert("Anna numero!");
  } else {
    //console.log(kertomaLuku);//for testing..
    for (var x = 1; x <= kertomaLuku; x++) {
      //console.log(x);//testing..
      tulos *= x;
      //console.log(tulos);
    }
    document.getElementById("vastaus4").innerHTML = "Luvun " + kertomaLuku + " kerroin on: " + tulos;
  }
}
//5.Tehtävä
//tulostetaan luvut 1-100 with a little twist :D
function yksviivasata() {
  //console.log("testing..");//for testing..
  var numerot = "";
  for (var x = 1; x < 101; x++) {
    //console.log(x);//for testing..
    if (x % 3 == 0 && x % 5 == 0) {
      numerot += "hipheijaa ";
    } else if (x % 3 == 0) {
      numerot += "hip ";
    } else if (x % 5 == 0) {
      numerot += "heijaa ";
    } else {
      numerot += x + " ";
    }
  }
  //console.log(numerot);//for testing..
  document.getElementById("vastaus5").innerHTML = numerot;
}
//6.Tehtävä
//tulostetaan 10 ekaa numeroa, eli lisää for looppia...
function kymmene() {
  var kybä = "";
  for (var x = 1; x <= 10; x++) {
    kybä += x + " ";
  }
  //console.log(kybä);//for testing..
  document.getElementById("vastaus6").innerHTML = kybä;
}
//7.Tehtävä
//Lasketaan ekat 10 numeroa yhteen..jos vaikka ehkä for loop..
function kymmeneYhteen() {
  var kybäYhteen = 0;
  for (var x = 1; x <= 10; x++) {
    kybäYhteen += x;
  }
  //console.log(kybäYhteen);//for testing..
  document.getElementById("vastaus7").innerHTML = "Ekat 10 numeroa yhteen = " + kybäYhteen;
}
//8.Tehtävä
//potenssilasku
function potenzzi() {
  var kLuku, potenssiLuku, potenssis;
  kLuku = parseInt(document.getElementById("korotettava").value);
  if (isNaN(kLuku)) {
    alert("Anna numero!");
  }
  potenssiLuku = parseInt(document.getElementById("potenssi").value);
  if (isNaN(potenssiLuku)) {
    alert("Anna numero!");
  }
  //console.log(kLuku + " " + potenssiLuku);//for testing..
  potenssis = Math.pow(kLuku, potenssiLuku);
  document.getElementById("vastaus8").innerHTML = kLuku + "\<sup>" + potenssiLuku + "\</sup>=" + potenssis;
}
//9.Tehtävä
//pyydetään 5 lukua, etsitään pienin ja suurin
function pieninSuurin() {
  var uno, dos, tres, cuatro, cinco, luvut, järkäs, pienin, suurin;
  uno = parseInt(document.getElementById("ekaLuku").value);
  if (isNaN(uno)) {
    alert("Anna vain numeroita!");
    return false;
  }
  dos = parseInt(document.getElementById("tokaLuku").value);
  if (isNaN(dos)) {
    alert("Anna vain numeroita!");
    return false;
  }
  tres = parseInt(document.getElementById("kolmasLuku").value);
  if (isNaN(tres)) {
    alert("Anna vain numeroita!");
    return false;
  }
  cuatro = parseInt(document.getElementById("neljäsLuku").value);
  if (isNaN(cuatro)) {
    alert("Anna vain numeroita!");
    return false;
  }
  cinco = parseInt(document.getElementById("viidesLuku").value);
  if (isNaN(cinco)) {
    alert("Anna vain numeroita!");
    return false;
  }
  luvut = [uno, dos, tres, cuatro, cinco];
  luvutt = [uno, dos, tres, cuatro, cinco];
  järkäs = luvut.sort(function(b, a) {
    return b - a;
  });
  pienin = järkäs[0];
  suurin = järkäs[järkäs.length - 1];
  document.getElementById("vastaus9").innerHTML = "Annoit luvut: " + luvutt + "\<br>Pienin: " + pienin + " Suurin: " + suurin;
}
//10.Tehtävä
//




//reset answer paragraphs..
function empty() {
  //tyhjätään KAIKKI..
  document.getElementById("parillinenLuku").value = "";
  document.getElementById("annettuSana").value = "";
  document.getElementById("tarkistettavaSana").value = "";
  document.getElementById("kertomaLuku").value = "";
  document.getElementById("ekaLuku").value = "";
  document.getElementById("tokaLuku").value = "";
  document.getElementById("kolmasLuku").value = "";
  document.getElementById("neljäsLuku").value = "";
  document.getElementById("viidesLuku").value = "";
  //document.getElementById("").value = "";
  //document.getElementById("").value = "";
  //document.getElementById("").value = "";
  document.getElementById("vastaus1").innerHTML = "Parilliset luvut: ";
  document.getElementById("vastaus2").innerHTML = "Salasana muunnos: ";
  document.getElementById("vastaus3").innerHTML = " ";
  document.getElementById("vastaus4").innerHTML = "Vastaus..";
  document.getElementById("vastaus5").innerHTML = "Vastaus..";
  document.getElementById("vastaus6").innerHTML = "Vastaus..";
  document.getElementById("vastaus7").innerHTML = "Vastaus..";
  document.getElementById("vastaus8").innerHTML = "Vastaus..";
  document.getElementById("vastaus9").innerHTML = "Vastaus..";
  //document.getElementById("vastaus10").innerHTML = "Vastaus..";
  //document.getElementById("vastaus11").innerHTML = "Vastaus..";
}
console.log("Programmed by Sami.S KKTI20C - 2021");
