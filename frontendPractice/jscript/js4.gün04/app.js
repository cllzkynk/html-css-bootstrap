//Kullanıcıdan alınan ismin uzunluğuna göre tavsiye film verelim

const mesaj = () => {
  let isim = document.querySelector("#ad").value.length;
  switch (true) {
    case isim == 3:
      document.querySelector(
        "#msj"
      ).innerHTML = ` <b>Önerimiz:Interstaller</b>`;
      break;
    case isim == 4:
      document.querySelector("#msj").innerHTML = ` <b>Önerimiz:The Intern</b>`;
      break;
    case isim == 5:
      document.querySelector("#msj").innerHTML = ` <b>Önerimiz:Inception</b>`;
      break;
    case isim == 6:
      document.querySelector("#msj").innerHTML = ` <b>Önerimiz:The Pianist</b>`;
      break;
    case isim == 7:
      document.querySelector(
        "#msj"
      ).innerHTML = ` <b>Önerimiz:A Beautiful Mind</b>`;
      break;
    case isim == 8:
      document.querySelector(
        "#msj"
      ).innerHTML = ` <b>Önerimiz:Forrest Gump</b>`;
      break;
    case isim == 9:
      document.querySelector("#msj").innerHTML = ` <b>Önerimiz:Truman Show</b>`;
      break;
    default:
      document.querySelector(
        "#msj"
      ).innerHTML = ` <b>Önerimiz:İsminizi 10 harfi geçmeyecek şekilde yazın.</b>`;
  }
  document.querySelector("#msj").classList.add("mesaj");
  return;
};

const yenile = () => {
  document.querySelector("#msj").innerHTML = "";
  document.querySelector("#msj").classList.remove("mesaj");
};
