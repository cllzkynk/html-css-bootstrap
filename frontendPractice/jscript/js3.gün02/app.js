function icerik() {
  let isim = document.querySelector("#ad").value;
  let meslek = document.querySelector("#meslek").value;

  document.querySelector(
    "#mesaj"
  ).innerHTML = `Sayın ${meslek} ${isim} hoşgeldiniz..`;
}
function sil() {
  document.querySelector("#mesaj").innerHTML = "";
}
