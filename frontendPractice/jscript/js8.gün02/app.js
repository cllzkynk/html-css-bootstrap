const basliklar = document.querySelector(".basliklar");
const ürünlerRsm = document.querySelectorAll(".image");

basliklar.addEventListener("click", (e) => {
  if (e.target.classList.contains("ürün")) {
    basliklar.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    const aranan = e.target.dataset.sec;

    ürünlerRsm.forEach((item) => {
      if (aranan === "all" || item.classList.contains(aranan)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
});