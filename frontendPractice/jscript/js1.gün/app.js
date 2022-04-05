/* /*GENEL TEKRAR
1. İsimler camelCase olmalı, yani isim birden fazla kelimeden oluşursa sonraki kelimelerin 
ilk harfi büyük olur.
2.İsimleri kodla alakalı seçmek okunabilirlik açısından önemli.
3.İsimlerde  harf, sayi, $, _ kullanılabilir.
4.Sayı kelimenin başında yazılmaz.
5. + işaretinin iki tarafı da sayı ise toplama yapar, ama bir tarafı bile string
olursa concatination olur.
6.Eğer matematiksel bir işlem yaparsak parantez içerisinde yazmak emin olmak için iyi olur.
7.prompt() fonksiyonu kullanıcıdan bir veri almak için kullanılır.
8.Data Tipleri:
1.String
2.Boolean
3.Number
4.null
5.undefined
6.Symbol
7.Object


*/

/* //Örnek1:
console.log("merhaba");
console.warn("bu bir uyarıdır");
console.error("bu bir hatadır");
 */

/* //Örnek:2
var name = prompt("isminizi yazınız");
console.log("Merhaba " + name + " nasılsın?"); */

/* //örnek3:
var kenar = prompt("karenin bir kenarini giirniz");
var kareninAlani = kenar * kenar;
console.log("Kenarı " + kenar + " olan karenin alanı: " + kareninAlani); */

/* //örnek4:
var isim = prompt("isminizi yazın");
var soyİsim = prompt("soyisminizi yazın");
var yas = prompt("yaşınızı yazın");
alert(
  "İsminiz " + isim + " soyisminiz " + soyİsim + "ve yaşınız: " + yas + " tır."
); */

/* //örnek5:
var pi = 3.14;
console.log(pi);
console.log(typeof pi);
pi = true;
console.log(pi);
console.log(typeof pi); */

/* //örnek6:
let fiyat;
console.log(fiyat);
fiyat = 5.5;
console.log(fiyat);
console.log(typeof fiyat); */

/* //örnek7:
const kelime = null;
console.log(kelime);
console.log(typeof kelime); */

/* //örnek8:
const kutu = 6;
const koli = 34;
const sise = 76;

let toplamMalzeme = kutu + koli + sise;
console.log(toplamMalzeme);
toplamMalzeme++;
console.log(toplamMalzeme);
toplamMalzeme += 27;
console.log(toplamMalzeme);

console.log("Toplam:", toplamMalzeme, "adet malzeme var.");
console.log("Toplam:" + toplamMalzeme + "adet malzeme var.");
console.log(`Toplam ${toplamMalzeme} adet malzeme var`); */

/* //örnek9:
const ad = "Tom";
const soyad = "Sawyer";
console.log(ad + soyad);  */

/* örnek10
const isim = "Kürşat";
const yas = 35;
console.log("Benim adim " + isim + "yasim: " + yas + "tır.");
console.log(`Benim adim ${isim} yasim ${yas}tır`);
console.log(`Sepet sepet yumurta
Sakın beni unutma
Unutursan küserim
Mektubunu keserim.`); */

/* //örnek11
const yil = 2022;
const dogumTarihi = 1968;
const yasi = yil - dogumTarihi;
console.log("yaş:" + yasi);
console.log("yaş:" + yil - dogumTarihi);
console.log("yaş:" + (yil - dogumTarihi));
console.log(`Yaş: ${yil}-${dogumTarihi}`);
console.log(`Yaş:${yil - dogumTarihi}`);
 */

/* //örnek12:
const taban = 4;
const us = 8;
const sonuc = 4 ** 8;
console.log(sonuc); */

/* //örnek13:
const sayi = 123;
const birler = sayi % 10;
console.log(birler);

const onlar = Math.floor(sayi / 10) % 10;
console.log(onlar);

const yuzler = Math.floor(sayi / 100) % 10;
console.log(yuzler);
 */

/* //örnek:14
const language = "JavaScript";
console.log(Number(language));
console.log(Number("1234abcd")); */

/*NOT:0,null, undefined, NaN ve  "" ->Boolean'a cevrilirken false döndürür
Diğer değerler Boolean'a çevrilince true döner.
 */

/* //ornek15:
const sayi1 = 5;
const sayi2 = -7;
const isim = "John";
console.log(Boolean(sayi1));
console.log(Boolean(sayi2));
console.log(Boolean(isim));
const sifir = 0;
const hic = null;
const bos = "";
const tanimsiz = undefined;
const sayiDegil = NaN;
console.log(Boolean(sifir), Boolean(hic));
console.log(Boolean(tanimsiz), Boolean(bos));
console.log(Boolean(sayiDegil)); */

/* //örnek16:
const sayi = "1000";
console.log(sayi + 15);
console.log(Number(sayi) + 15);
 */

/* //örnek17:
const sayi = 13;
console.log(sayi + sayi);
console.log(String(sayi) + sayi); */
