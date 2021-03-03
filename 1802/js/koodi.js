//filter some linter errors...
/*global console*//* eslint no-console: "off" */
/*global prompt*//* eslint no-prompt: "off" */
/*global document*//* eslint no-document: "off" */
/*global window*//* eslint no-window: "off" */
/*global undef*//* eslint no-undef: "off" */
/* eslint no-unused-vars: "off" */

//1. Yhteenlasku
function laskeYhteen(ekaLuku,tokaLuku) {
    var summa = ekaLuku + tokaLuku;
    return console.log(summa);
}

//2. ensimmäinen arvo taulukkomuuttujasta
var taulukkomuuttuja = [34,566,71,890];
function ekaMuuttuja() {
    return console.log(taulukkomuuttuja[0]);
}

//3. jos kaksi arvoa < 100 do this else that
function yhteenLaskettuArvo(ekaLuku,tokaLuku) {
    var summa = ekaLuku + tokaLuku;
    if (summa < 100) {
        return console.log("Lukujen summa on alle 100");
    } else {
        return console.log("Luvut ovat liian suuria, jotta pystyisin laskemaan niitä!");
    }
}

//4. ovatko luvut samat
function onkoSamatLuvut(ekaLuku, tokaLuku) {
    if (ekaLuku == tokaLuku) {
        return console.log("Samat");
    } else {
        return console.log("Eri luvut");
    }
}

//5. muunna tunnit,minuutit,sekunnit sekunneiksi
function sekunneiksi(tunnit,minuutit,sekunnit) {
    var tunneista = tunnit * 60 * 60;
    var minuuteista = minuutit * 60;
    var sekunneiksi = tunneista + minuuteista + sekunnit;
    return console.log(sekunneiksi);
}

//6. lasketaan kunka monta päivää vanha olet
function yourAge(day, month, year) {
  function yearsToDays(year) { //muutetaan annettu vuosi päiviksi
    return year * 365.25;
  }
  function monthToDays(month) { //muutetaan annettu kuukausi päiviksi
    switch(month-1) { //jos tammikuu lisätään 0päivää, jos joulukuu lisätään 334päivää jne..
      case 0:
      return 0;
      case 1:
      return 31;
      case 2:
      return 59;
      case 3:
      return 90;
      case 4:
      return 120;
      case 5:
      return 151;
      case 6:
      return 181;
      case 7:
      return 212;
      case 8:
      return 243;
      case 9:
      return 273;
      case 10:
      return 304;
      case 11:
      return 334;
      default:
      return 0;
    }
  }
    dob = yearsToDays(year) + monthToDays(month) + day; //annettu syntymäpäivä päiviksi
    today = yearsToDays(2020) + monthToDays(3) + 3; //kuluva pvm päiviksi
    console.log(today-dob); //tämäpäivä - syntymäpäivä
}
