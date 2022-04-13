const cumleler = [
  "Sitemize Hoşgeldiniz",
  "Sağlıklı Günler..",
  "Yine Bekleriz..",
];
const yazim = document.querySelector(".cumleler");
let cumleIndex = 0;
let harfIndex = 0;
/*  Cümleler dizisindeki belirli indexe karşılık gelen cümlenin uzunluğundan küçükse harf indexi
yazımın içerisine cumleler dizisindeki belirli indexteki cümlenin harfindexine karşılk gelen harfini birer
birer arttır ve bunu belirli bir gecikme süresiyle yap. değilse belirli bir gecikme süresiyle silme  */
function yazıYerleştir() {
  if (harfIndex < cumleler[cumleIndex].length) {
    yazim.textContent += cumleler[cumleIndex].charAt(harfIndex);
    harfIndex++;
    setTimeout(yazıYerleştir, 500);
  } else {
    setTimeout(sil, 500);
  }
}
/* harf indexi sıfırdan büyükse cümleler dizisindeki belirli indexe karşılık gelen cümlenin 0 ile o harf indexinin
bir eksiği arasındaki harfleri yazımın içerisinde tut ve harf indexini birer birer azalt bunu silme
 gecikme süresiyle yap.
değilse cümleler indexini bir arttır. ve eğer cümleler indexi cümlelerin uzunluğundan büüyk eşitse 
cümleler indexi sıfırla,
yazı yerleştir fonksiyonunu  belirli gecikmeyle çalıştır. */
function sil() {
  if (harfIndex > 0) {
    yazim.textContent = cumleler[cumleIndex].substring(0, harfIndex - 1);
    harfIndex--;
    setTimeout(sil, 500);
  } else {
    cumleIndex++;
    if (cumleIndex >= cumleler.length) {
      cumleIndex = 0;
    }
    setTimeout(yazıYerleştir, 500);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(yazıYerleştir, 500);
});