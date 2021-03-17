//filter some linter errors...
/*global console*//* eslint no-console: "off" */
/*global prompt*//* eslint no-prompt: "off" */
/*global document*//* eslint no-document: "off" */
/*global window*//* eslint no-window: "off" */
/*global undef*//* eslint no-undef: "off" */
/* eslint no-unused-vars: "off" */

// 1.Tehtävä, järjestetään taulukko pienimämstä suurimpaan
// ja palautetaan pienin ja suurin luku
function tehtava1(arr) {
  arr.sort();
  var pienin = arr.shift();
  var suurin = arr.pop();
  console.log("Tehtävä 1:");
  console.log("pienin " + pienin + ", suurin " + suurin);
}

//2.Tehtävä, onko luku pariton vai parillinen
function tehtava2(luku) {
  if (luku % 2 == 0) {
    console.log("Tehtävä 2:");
    console.log("parillinen");
  } else {
    console.log("Tehtävä 2:");
    console.log("pariton");
  }
}

//3.Tehtävä, numero --> kuukausi
function tehtava3(kuukausi) {
  switch (kuukausi) {
    case 1:
      console.log("Tehtävä 3:");
      console.log("Tammikuu");
      break;
    case 2:
      console.log("Tehtävä 3:");
      console.log("Helmikuu");
      break;
    case 3:
      console.log("Tehtävä 3:");
      console.log("Maaliskuu");
      break;
    case 4:
      console.log("Tehtävä 3:");
      console.log("Huhtikuu");
      break;
    case 5:
      console.log("Tehtävä 3:");
      console.log("Toukokuu");
      break;
    case 6:
      console.log("Tehtävä 3:");
      console.log("Kesäkuu");
      break;
    case 7:
      console.log("Tehtävä 3:");
      console.log("Heinäkuu");
      break;
    case 8:
      console.log("Tehtävä 3:");
      console.log("Elokuu");
      break;
    case 9:
      console.log("Tehtävä 3:");
      console.log("Syyskuu");
      break;
    case 10:
      console.log("Tehtävä 3:");
      console.log("Lokakuu");
      break;
    case 11:
      console.log("Tehtävä 3:");
      console.log("Marraskuu");
      break;
    case 12:
      console.log("Tehtävä 3:");
      console.log("Joulukuu");
      break;
    default:
      console.log("Tehtävä 3:");
      console.log("Anna luku 1-12 väliltä!");
      break;
  }
}

//4.Tehtävä, syötellän osoitetietoja yms..
function tehtava4(firstName, lastName, address, zipcode, city, phone, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.zipcode = zipcode;
  this.city = city;
  this.phone = phone;
  this.email = email;
}

var sami = new tehtava4("Sami", "Siltanen", "kolopolku", '01260', "vantaa", '0401234567', "sami.siltanen@edu.keuda.fi");
var matti = new tehtava4("Matti", "Meikäläinen", "hakunila", "01360", "vantaa", '0403216549', "matti.meikäläinen@edu.keuda.fi");
var maija = new tehtava4("Maija", "Meikäläinen", "hakunila", "01360", "vantaa", '0503571593', "maija.meikälänentanen@edu.keuda.fi");

//5.Tehtävä, tulostetaan annetun sanan kirjaimet aakkosjärjestyksessä..
//kesken...
function tehtava5(annettuSana) {
  wordToArray = Array.from(annettuSana);
  sortWord = wordToArray.sort();
  sortedWord = sortWord.join("").toString();
  console.log("Tehtävä 5:");
  console.log(sortedWord);
}

//6.Tehtävä, arvostellaan kokeita..
function tehtava6(name, points) {
  nimi = name;
  if (points < 50) {
    console.log(nimi + " Hylätty");
  } else if (points < 60) {
    console.log(nimi + " T1");
  } else if (points < 70) {
    console.log(nimi + " T2");
  } else if (points < 80) {
    console.log(nimi + " H3");
  } else if (points < 90) {
    console.log(nimi + " H4");
  } else {
    console.log(nimi + " K5");
  }
}

function oppilaidenArvosanat() {
  console.log("tehtävä 6:");
  return tehtava6("Daniel", 80), tehtava6("Viivi", 77), tehtava6("Tiina", 88), tehtava6("Ismael", 95), tehtava6("Tuomas", 68);
}
