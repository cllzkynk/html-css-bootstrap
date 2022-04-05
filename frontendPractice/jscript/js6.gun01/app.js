let aday = [
  {
    isim: "Ali T",
    yas: 14,
  },
  {
    isim: "Ayse K",
    yas: 30,
  },
  {
    isim: "Tarık G",
    yas: 16,
  },
  {
    isim: "Elif S",
    yas: 22,
  },
];


 let yasToplam= aday.reduce((toplam,adayYas)=>{
   return toplam+adayYas.yas;
 },0);

 let ort=yasToplam/aday.length;
 console.log(ort.toFixed(2));
 console.log("/*===========================================================================*/")
 let dizim = [24, 456, 788, 56, 124, 38, 324, 490];

 console.log((dizim.filter(x=>x>70).map(m=>m/2)));



 console.log(dizim.filter(x=>x<70).map(m=>m*1.2));

 console.log("/*===========================================================================*/")

let cumle = "Bugün hava güzeldi";

for (let i  in cumle) {
 // console.log(cumle[i]);

  console.log(`${i}= ${cumle[i]}`);

}

for (let harf of cumle) {
  console.log(harf);
}
console.log("/*===========================================================================*/")

let dizi = ["çanta", "kalem", "silgi", "defter", "cüzdan"];

for (let i  in dizi) {

  console.log(i);
  console.log(dizi[i]);
 
   console.log(`${i}= ${dizi[i]}`);
 
 }


for (let item of dizi) {
  console.log(item);
}

for (let i = 0; i < dizi.length; i++) {
  console.log(dizi[i]);
  
}
console.log("/*===========================================================================*/")

for (let i of dizi) {
  console.log(i); // cunda kelimeler gelir "çanta", "kalem", "silgi", "defter", "cüzdan" seklinde
}

for (let i  in dizi) {

  console.log(i); // kelimenin index nosu gelir 
 

 }
