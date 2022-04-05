let listem = document.querySelector(".container");

let mlz1 = document.querySelector(".bir");
let mlz2 = document.querySelector(".iki");
let mlz3 = document.querySelector(".uc");
let mlz4 = document.querySelector(".dort");
let mlz5 = document.querySelector(".bes");

mlz1.innerText = "1.kiraz";
mlz2.innerText = "2.elma";
mlz3.innerText = "3.muz";
mlz4.innerText = "4.cilek";
mlz5.innerText = "5.mandalina";

mlz5.innerHTML = `<ol style='list-style-position:inside;'>
<li>kiraz</li>
<li>elma</li>
<li>muz</li>
<li>cilek</li>
</ol>`;
