//length:: özelliği stringin uzunluğunu verir
//(karakter sayısını, boşluklarda dahil olmak üzere).
/* let cumle =
  "Kar taneleri ne güzel anlatıyor, birbirlerine zarar vermeden de yol almanın mümkün olduğunu.";
console.log(cumle.length); */
/*  Substring() metodu, kendisine verilen parametreler ile değişkenin içeriğinden parametrelerde 
istenilen kısmı kopyalayarak sonucu bize döndürür. Kullanım mantığı
substring(start, end) şeklindedir. Substring() Metodu eksi değerleri kabul etmez… (substr kabul eder)Örnek : */
/* let esya = "telefon, çanta, cüzdan, kalem, ayna";
let esya1 = esya.substring(6, 12);
console.log(esya.substring(6)); */
/* let esya2 = [telefon, çanta, cüzdan, kalem, ayna];
console.log(esya2.substring(3, 6)); */
/* indexOf::: metodu kendine verilen karakteri ya da kelimeyi metnin içinde arar 
ve bulduğu ilk değerin sıra numarasını verir. */
let cumle = "İlerlemenin sırrı başlamaktır.";
let kelime = "istanbulunun";
console.log(kelime.indexOf("u"));

console.log(cumle.indexOf("r"));
console.log(cumle.indexOf("r", 20));
/* lastIndexOf:: metodu kendine verilen karakteri ya da kelimeyi metnin içinde arar 
ve bulduğu son değerin sıra numarasını verir.
indexOf ve  lastIndexOf metodu, kendine verilen değeri metin içinde bulamazsa
 geriye -1(bulunamadı)  döndürür. */
console.log(cumle.lastIndexOf("r"));
console.log(cumle.lastIndexOf("a"));
/* includes() Metodu, değişekenin içerisinde kendisine verilen parametreyi arar ve sonucu boolean (mantıksal) 
olarak geri döndürür. Yani eğer varsa true veya yoksa false döndürecektir.
 Büyük ve küçük harf duyarlıdır. */
let cumlem =
  "İnsanların, senin hakkında ne düşündüklerini önemsemeyerek, ömrünü uzatabilirsin mesela.";
/* console.log(cumlem.includes("senin"));
console.log(cumlem.indexOf("senin"));

console.log(cumlem.includes("seni"));
console.log(cumlem.includes("Senin"));
 */
console.log(cumlem.includes("seninle"));
/* startsWith() Metodu, değişkenin başlanagıç değerinin girdiğimiz parametre ile eşleşmesini 
kontrol eder ve eşleşme varsa true yoksa false döndürür. Büyük ve küçük harf duyarlıdır. */
console.log(cumlem.startsWith("İnsanların"));
console.log(cumlem.startsWith("İNsanların"));
/* endsWith() Metodu, değişkenin bitiş değerinin girdiğimiz parametre ile eşleşmesini 
kontrol eder ve eşleşme varsa true yoksa false döndürür. Büyük ve küçük harf duyarlıdır. */
/* console.log(cumlem.endsWith("mesela"));
/* replace():: metodu ile bir metnin içinde arama yapıp, bulduğumuz değerleri yine istediğimiz bir
 değer ile değiştirebiliriz(sadece ilk bulduğu değeri değiştirir). */
/* const str = " Cuma günü hava güzeldi ";
console.log(str.replace("Cuma", "Pazar"));
console.log(str.replace("a", "A"));
console.log(str.replaceAll("a", "A"));
console.log(str.replaceAll("a", "123"));

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.split());
console.log(str.split("")); */
//console.log(str.split(" "));
/* trim() metodu ile karakter dizisinin başındaki ve sonundaki boşluk karakterlerini sileriz. */
/* console.log(str);
console.log(str.trim());

let sayi = 12345;
console.log(typeof sayi);
let sonuc = sayi.toString();
console.log(typeof sonuc);

let dil1 = "Html";
let dil2 = "CSS";
let dil3 = "JS";
let sonuc2 = dil1.concat(dil2, dil3);
console.log(sonuc2);
let sonuc3 = dil1.concat(`, ${dil2}, ${dil3}.`);
console.log(sonuc3); */
/* slice():: metodu string içinden belirli bir bölümü çıkartmaya yarar.
iki parametre alır: ilk parametre başlama indeksi, ikinci parametre bitiş indeksidir.
Eğer parametre değerlerini negatif verirseniz o zaman parçalama işlemi metnin sonundan başlayacaktır. */
let renkler = "yeşil,kırmızı,mavi,siyah,beyaz";
console.log(renkler.slice());
console.log(renkler.slice(7, 13));
console.log(renkler.slice(-12, -6));
console.log(renkler.substring(-3, 3));
/* search() Metodu, bir değişkenin içerisinde parametre olarak girdiğimiz ifadeyi ilk eşleşme sağlandığı 
yerdeki index ini bize geri döndürür. Büyük ve küçük harf duyarlıdır. 
Yazdığımız parametreyi değişken içerisinde
 bulamazsa bize -1 geri döndürür. */
console.log(renkler.search("kırmızı"));
console.log(renkler.search("Kırmızı"));
