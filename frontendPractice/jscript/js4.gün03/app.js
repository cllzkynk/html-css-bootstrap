//Elinde 1500 lirası olan biri,tek bir üründen almak kaydıyla,
//kullanıcıdan alınan ürün ve fiyat bilgisine göre o üründen kaç tane alabileceğini gösterelim

const ekle = () => {
  let isim = document.querySelector("#ad").value;
  let fiyat = Number(document.querySelector("#fiyat").value);
  let sayac = 0;

  do {
    sayac++;
    toplam = sayac * fiyat;
  } while (toplam < 1500);

  if (toplam > 1500) {
    toplam = toplam - fiyat;
    sayac -= 1;
  }
  document.querySelector(
    "#sonuc"
  ).innerHTML = `${sayac}adet ${isim} alabilirsiniz; toplam ödemeniz:${toplam}`;
  return;
};
