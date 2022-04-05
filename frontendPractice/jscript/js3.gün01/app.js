/* //soru1:Kullanıcıdan iki sayı alıp girdiği işleme göre sonucu gösterelim.
let sayi1 = Number(prompt("Birinci sayi:"));
let islem = prompt("islemi giriniz");
let sayi2 = Number(prompt("ikinci sayi"));

let sonuc;

if (islem == "+") {
  sonuc = sayi1 + sayi2;
} else if (islem == "-") {
  sonuc = sayi1 - sayi2;
} else if (islem == "*") {
  sonuc = sayi1 * sayi2;
} else if (islem == "/") {
  sonuc = sayi1 / sayi2;
} else {
  alert("yanlis sembol");
}
alert(`${sayi1} ${islem} ${sayi2} =${sonuc}`);
 */

//soru2:Kullanıcın girdiği nota göre harfli puan notunu gösteriniz.
let not = prompt("Sınav notunuzu giriniz.");

switch (true) {
  case not < 30:
    alert("Harfli notunuz FF'tir.");
    break;
  case not < 40:
    alert("Harfli notunuz DD'dir.");
    break;
  case not < 50:
    alert("Harfli notunuz DC'dir.");
    break;
  case not < 60:
    alert("Harfli notunuz CC'dir.");
    break;
  case not < 70:
    alert("Harfli notunuz CB'dir.");
    break;
  case not < 80:
    alert("Harfli notunuz BB'dir.");
    break;
  case not < 90:
    alert("Harfli notunuz BA'dır.");
    break;
  case not < 100:
    alert("Harfli notunuz AA'dır.");
    break;
  default:
    alert("Bir daha deneyin");
}
