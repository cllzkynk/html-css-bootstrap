let renk = document.querySelector(".container");

let renk1 = document.querySelector(".red");
let renk2 = document.querySelector(".white");
let renk3 = document.querySelector(".blue");
let renk4 = document.querySelector(".black");

renk1.innerText = "KIRMIZI";
renk2.innerText = "BEYAZ";
renk3.innerText = "MAVİ";
renk4.innerText = "SİYAH";

let yanlisHali = ` <div class="kutu">
<div class="red">SİYAH</div>
<div class="white">KIRMIZI</div>
<div class="blue">BEYAZ</div>
<div class="black">MAVİ</div>
</div>`;

renk.innerHTML = " <h1>RENKLER</h1>" + yanlisHali;
