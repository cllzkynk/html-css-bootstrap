/*  DOM elemanlarımızdaki data-* ön eki ile başlayan öznitelikler (attributes), 
özel veri öznitelikleridir. DOM elemanımızın 
sahip olmadığı yeni bir özel öznitelik eklemek istersek bunu bu ön ek ile yaparız. */

const butonlar = document.querySelectorAll(".btn");
const metin = document.querySelector(".metin");

butonlar.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const icerik = e.target.dataset.link;
    if (icerik == "home") {
      metin.innerHTML = ` <h1>Anasayfa</h1>`;
    } else if (icerik == "about") {
      metin.innerHTML = ` <h1>Hakkımızda Sayfası</h1>`;
    } else {
      metin.innerHTML = ` <h1>İletişim Sayfası</h1>`;
    }
  });
});