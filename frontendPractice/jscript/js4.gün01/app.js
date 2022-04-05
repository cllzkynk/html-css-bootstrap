// Kullanıcıdan alınan yaş ve ürün fiyat bilgisine göre;65 yaştan büyüklere %50 indirim, diğerlerine %10 indirim yapalm

const hesapla = () => {
  let yas = Number(document.querySelector("#yas").value);
  let fiyat = Number(document.querySelector("#fiyat").value);
  yas > 65 ? (fiyat = fiyat * 0.5) : (fiyat = fiyat * 0.9);
  document.querySelector("#sonuc").innerHTML = `ÖDEMENİZ:${fiyat}`;
  return;
};
