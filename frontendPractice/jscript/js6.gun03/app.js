/*


const renkler = ["green", "red", "blue", "gray", "yellow", "darkcyan", "aqua"];
const btn = document.querySelector("#btn");
const renk = document.querySelector(".rnk");
btn.addEventListener("click", () => {
  let rastgeleSayi = sayiSec();
  document.body.style.background = renkler[rastgeleSayi];
  renk.textContent = renkler[rastgeleSayi];
});
function sayiSec() {
  return Math.floor(Math.random() * renkler.length);
}
//JavaScript Math.random() fonksiyonu 0 (dahil) 1 (hariç) arasında rastgele sayı üretir.
//Math.random() fonksiyonu her zaman 1’den küçük ondalıklı sayı üretir.
// Math.random() ile üretilen rastgele ondalıklı sayıyı Math.floor() ile ondalıksız tamsayıya çevirebiliriz.
//Math.floor(Math.random() * 10); // 0 ve 9 arasında sayı üretir.



*/

/*==========================================*/
 

 
const btn = document.querySelector("#btn");
const Renk = document.querySelector(".rnk");
btn.addEventListener("click", () => {
 
  let renk=`rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;

  document.body.style.background = renk;
  Renk.textContent = renk;
});
 