//Büyük sayının küçük sayıya bölümünden kalanlar toplamını,
//küçük sayı büyük sayıya yetişene kadar birer birer arttırarak
//hem kalanlar toplamını hem kaç sayı olduğunu bulalım

const hesapla = () => {
  let sayi1 = Number(document.querySelector("#num1").value);
  let sayi2 = Number(document.querySelector("#num2").value);
  let kalanlar = sayi2 % sayi1;
  while (sayi2 > sayi1) {
    sayi1++;
    kalanlar = kalanlar + (sayi2 % sayi1);
  }
  document.querySelector("#sonuc").innerHTML = `Kalanlar toplamı: ${kalanlar}`;
  return;
};
