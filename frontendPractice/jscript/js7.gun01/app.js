/* soru:
a.datayı tabloya yerleştirelim
b.maaşı 5000den büyük olanların satırlarının rengini değiştirelim.
 
c.maaşlarının ortalamasını alıp alt satıra ekleyelim
d.Personeller diye bir başlık ekleyelim.
e.çıkış butonuna basınca listeyi silelim,iyi günler diye mesaj ekleyelim.
butonun valuesinı da geri diye değiştirelim.
*/
const bilgiler = [
  { isim: "Ali T", yas: 33, maas: 3000 },
  { isim: "Kaan Z", yas: 37, maas: 4500 },
  { isim: "Hülya S", yas: 43, maas: 4500 },
  { isim: "Sedef D", yas: 45, maas: 5500 },
  { isim: "Onur V", yas: 54, maas: 5500 },
  { isim: "Ömer K", yas: 35, maas: 6000 },
  { isim: "Sara G", yas: 27, maas: 3000 },
  { isim: "Deniz R", yas: 41, maas: 4500 },
  { isim: "Emre C", yas: 38, maas: 5500 },
  { isim: "Suat Ç", yas: 35, maas: 3000 },
];



//a.datayı tabloya yerleştirelim
let satir = "";
for (bilgi of bilgiler) {
  satir += ` <tr>
   <td>${bilgi.isim}</td>
   <td>${bilgi.yas}</td>
   <td>${bilgi.maas}</td>
  </tr>`;
}
document.querySelector("#liste tbody").innerHTML = satir;




//b.maaşı 5000den büyük olanların satırlarının rengini değiştirelim.
const satirlar = document.querySelectorAll("#liste tbody tr");
for (satir of satirlar) {
  const maas = satir.querySelector("td:last-child").innerText;
  if (maas > 5000) {
    satir.classList.add("table-success");
  }
}



//c.maaşlarının ortalamasını alıp alt satıra ekleyelim
const ortalama = bilgiler.reduce((x, y) => x + y.maas, 0) / bilgiler.length;
const altSatir = document.createElement("div");
altSatir.innerText =`Ortalama maas: ${ ortalama}`;
altSatir.setAttribute("class", "card");
document.querySelector(".table").append(altSatir);




//d.Personeller diye bir başlık ekleyelim.
const baslik = document.createElement("h1");
baslik.innerText = "PERSONELLER";
baslik.setAttribute("class", "text-center");
document.querySelector(".container").prepend(baslik);


 
//f.çıkış butonuna basınca listeyi silelim,iyi günler diye mesaj ekleyelim.
//butonun valuesinı da geri diye değiştirelim.
const mesaj = document.createElement("div");
mesaj.innerText = "İYİ GÜNLER DİLERİZ..";
mesaj.setAttribute("class", "card");
const buton = document.querySelector("#btn");
buton.addEventListener("click", () => {
  document.querySelector("#liste").remove();
  document.querySelector(".container").append(mesaj);
  buton.setAttribute("value", "Geri");
});
