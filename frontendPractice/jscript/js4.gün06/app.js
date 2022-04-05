const btn = document.querySelector("#btn");
let zaman = new Date();
console.log(zaman);
let saat = zaman.getHours();

btn.addEventListener("click", function () {
  //let saat = Number(document.querySelector("#saat").value);
  if (saat >= 6 && saat < 11) {
    document.querySelector(".msj").innerHTML = ` <h1>GÜNAYDIN</h1>`;
  } else if (saat >= 11 && saat < 19) {
    document.querySelector(".msj").innerHTML = ` <h1>TÜNAYDIN</h1>`;
  } else if (saat >= 19 && 23 >= saat) {
    document.querySelector(".msj").innerHTML = ` <h1>İYİ AKŞAMLAR</h1>`;
  } else if (saat < 6) {
    document.querySelector(".msj").innerHTML = ` <h1>İYİ GECELER</h1>`;
  }
  return;
});
