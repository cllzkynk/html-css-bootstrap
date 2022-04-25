const cumleler = ["Sitemize Hosgeldiniz.", "Iyi eglenceler.", "Gule gule..."];

const yazi = document.querySelector(".cumleler");
let cumleIndex = 0;
let harfIndex = 0;

function harfEkle() {
  if (harfIndex < cumleler[cumleIndex].length) {
    yazi.textContent += cumleler[cumleIndex].charAt(harfIndex);
    harfIndex++;
    setTimeout(harfEkle, 500);
  } else {
    setTimeout(harfSil, 500);
  }
}

function harfSil() {
  if (harfIndex >= 0) {
    yazi.textContent = cumleler[cumleIndex].substring(0, harfIndex - 1);
    harfIndex--;
    setTimeout(harfSil, 500);
  } else {
    cumleIndex++;
    if (cumleIndex >= cumleler.length) {
      cumleIndex = 0;
    }
    setTimeout(harfEkle, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(harfEkle, 1500);
});
