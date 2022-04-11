const menu=document.querySelector(".menu");
const resim=document.querySelector(".resim img");
 


 
resim.addEventListener("mouseover",()=>{
menu.classList.add("active");
});

resim.addEventListener("mouseout",()=>{
  menu.classList.remove("active");
  });


  menu.addEventListener("mouseover",()=>{
    menu.classList.add("active");
    });


  menu.addEventListener("mouseout",()=>{
    menu.classList.remove("active");
    });
 


    /*
    resim.addEventListener("mouseenter",()=>{
      menu.classList.add("active");
      });
      resim.addEventListener("mouseleave",()=>{
        menu.classList.remove("active");
        });

        */