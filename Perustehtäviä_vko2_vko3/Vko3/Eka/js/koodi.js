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
}
//2.tehtävä
//muutetaan käyttäjän antama sana "salasanaksi" :D
function tehtava2() {
  var annettuSana = "",
    salasanaitettu;
  annettuSana = Array.from(document.getElementById("annettuSana").value);
  //console.log(annettuSana);
  //for loopilla käydään listan jokainen kohta läpi ja lisätään jokaiseen kohtaan Ö kirjain..
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
  origLuvut = [uno, dos, tres, cuatro, cinco];
  luvut = [uno, dos, tres, cuatro, cinco];
  järkäs = luvut.sort(function(b, a) {
    return b - a;
  });
  pienin = järkäs[0];
  suurin = järkäs[järkäs.length - 1];
  document.getElementById("vastaus9").innerHTML = "Annoit luvut: " + origLuvut + "\<br>Pienin: " + pienin + " Suurin: " + suurin;
}
//10.Tehtävä
//Salasanoitetaan käyttäjän sana, lisätään random kirjain annetun sanan kirjaimien väliin..
function tehtava10() {
  var annettusana = "",
    randomKirjain = "",
    salasanoitettu = [];
  const aakkoset = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖabcdefghijklmnopqrstuvwxyzåäö";
  annettuSana = Array.from(document.getElementById("parempiSalasana").value);
  //console.log(annettuSana);//for testing..
  //console.log(randomKirjain);for testing..
  //tehrää for looppi joka käy listan jokaisen kohdan läpi ja lisää random kirjaimen
  for (var x = 0; x < annettuSana.length; x++) {
    randomKirjain = aakkoset[Math.floor(Math.random() * aakkoset.length)]; //Arvotaan random kirjain.
    annettuSana[x] += randomKirjain;
  }
  salasanoitettu = annettuSana.join("");
  //console.log(salasanoitettu);//for testing..
  document.getElementById("vastaus10").innerHTML = "Annettu sana salasanoitettuna: " + salasanoitettu;
}
//11.Tehtävä
//pyydetään kaksi numeroa ja tulostetaan niiden väliltä parittomat ja parilliset ja niiden summat
function parittomatJaParillisetJaSummat() {
  var ekaluku,
    tokaluku,
    parillinen,
    pariton,
    paritLuvut = "",
    parilLuvut = "",
    paritSumma = 0,
    parilSumma = 0;
  //haetaan käyttäjän antamat luvut..tarkistetaan että on annettu numeroita
  //ja että ensimmäinen on pienempi kuin toinen.
  ekaluku = parseInt(document.getElementById("ekaNumero").value);
  if (isNaN(ekaluku)) {
    alert("Anna vain numeroita!");
    return false;
  }
  tokaluku = parseInt(document.getElementById("tokaNumero").value);
  if (isNaN(tokaluku)) {
    alert("Anna vain numeroita!");
    return false;
  }
  if (ekaluku > tokaluku) {
    alert("Ensimmäisen luvun pitää olla pienempi!");
    return false;
  }
  //Parilliset ja summa
  //tarkistetaan onko ensimmäinen luku parillinen,jos ei, +1 niin saadaan siitä parillinen.
  if (ekaluku % 2 == 0) {
    parillinen = ekaluku;
  } else {
    parillinen = ekaluku + 1;
  }
  //console.log(parillinen);//for testing..
  //for loopilla lisätään 2 aina tokaan lukuun asti..ja lasketaan luvut summa samassa.
  for (i = parillinen; i <= tokaluku; i += 2) {
    parilLuvut += i + " ";
    parilSumma += i;
  }
  //console.log(parilLuvut);//for
  //console.log(parilSumma);//testing
  //Parittomat ja summa
  //tarkistetaan onko ensimmäinen luku pariton, jos ei, +1 niin saadaan siitä pariton.
  if (ekaluku % 2 == 0) {
    pariton = ekaluku + 1;
  } else {
    pariton = ekaluku;
  }
  //console.log(pariton);//for testing..
  //for loopilla lisätään 2 aina tokaan lukuun asti ja lasketaan summa samalla.
  for (j = pariton; j <= tokaluku; j += 2) {
    paritLuvut += j + " ";
    paritSumma += j;
  }
  document.getElementById("vastaus11").innerHTML = "Parilliset luvut: " + parilLuvut + " ja niiden summa: " + parilSumma +
    ".\<br>Parittomat luvut: " + paritLuvut + " ja niiden summa: " + paritSumma + ".";
}
//tyhjätään KAIKKI..
function empty() {
  document.getElementById("parillinenLuku").value = "";
  document.getElementById("annettuSana").value = "";
  document.getElementById("tarkistettavaSana").value = "";
  document.getElementById("kertomaLuku").value = "";
  document.getElementById("ekaLuku").value = "";
  document.getElementById("tokaLuku").value = "";
  document.getElementById("kolmasLuku").value = "";
  document.getElementById("neljäsLuku").value = "";
  document.getElementById("viidesLuku").value = "";
  document.getElementById("parempiSalasana").value = "";
  document.getElementById("ekaNumero").value = "";
  document.getElementById("tokaNumero").value = "";
  document.getElementById("vastaus1").innerHTML = "Parilliset luvut: ";
  document.getElementById("vastaus2").innerHTML = "Salasana muunnos: ";
  document.getElementById("vastaus3").innerHTML = " ";
  document.getElementById("vastaus4").innerHTML = "Vastaus..";
  document.getElementById("vastaus5").innerHTML = "Vastaus..";
  document.getElementById("vastaus6").innerHTML = "Vastaus..";
  document.getElementById("vastaus7").innerHTML = "Vastaus..";
  document.getElementById("vastaus8").innerHTML = "Vastaus..";
  document.getElementById("vastaus9").innerHTML = "Vastaus..";
  document.getElementById("vastaus10").innerHTML = "Vastaus..";
  document.getElementById("vastaus11").innerHTML = "Vastaus..";
}
console.log("Programmed by Sami.S KKTI20C - 2021");
