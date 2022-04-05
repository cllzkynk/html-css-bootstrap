const bars=document.querySelector(".btn");

const kapat=document.querySelector(".close-btn");

const gizli =document.querySelector(".gizli");

bars.addEventListener("click",()=>{
  gizli.classList.toggle('goster-gizli')
});


kapat.addEventListener("click",()=>{
  gizli.classList.remove("goster-gizli")
});
