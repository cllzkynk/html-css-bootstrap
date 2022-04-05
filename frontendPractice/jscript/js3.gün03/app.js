function renkSec() {
  let kullanciSayi = document.querySelector("#sayi").value;

  switch (true) {
    case kullanciSayi == 1:
      kirmizi();
      break;
    case kullanciSayi == 2:
      yesil();
      break;
    case kullanciSayi == 3:
      mavi();
      break;
    case kullanciSayi == 4:
      pembe();
      break;
    case kullanciSayi == 5:
      gri();
      break;
    default:
      //alert("doğru sayı giriniz.");
      document.querySelector(
        ".renk"
      ).innerHTML = ` <b>LÜTFEN GEÇERLİ BİR SAYI GİRİNİZ</b>`;
  }

  function kirmizi() {
    let kirmizi = document.querySelector(".renk");
    kirmizi.style.background = "red";
  }

  function yesil() {
    let yesil = document.querySelector(".renk");
    yesil.style.background = "green";
  }
  function mavi() {
    let mavi = document.querySelector(".renk");
    mavi.style.background = "blue";
  }
  function pembe() {
    let pembe = document.querySelector(".renk");
    pembe.style.background = "pink";
  }
  function gri() {
    let gri = document.querySelector(".renk");
    gri.style.background = "gray";
  }
}
function sil() {
  document.querySelector(".renk").innerHTML = "";
}
