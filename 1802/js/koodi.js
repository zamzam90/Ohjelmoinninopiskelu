//filter some linter errors...
/*global console*//* eslint no-console: "off" */
/*global prompt*//* eslint no-prompt: "off" */
/*global document*//* eslint no-document: "off" */
/*global window*//* eslint no-window: "off" */
/*global undef*//* eslint no-undef: "off" */
/*global unused-var*//* eslint no-unused-vars: "off" */

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
