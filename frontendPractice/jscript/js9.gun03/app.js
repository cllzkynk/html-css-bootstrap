const input = document.querySelector("#search");



/* Girilen harfi icermesi yaterli*/

/*
const search = () => {
  const inputVal = input.value;

  const li = document.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    if (li[i].innerText.toLowerCase().includes(inputVal.toLowerCase())) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};
input.addEventListener("keyup", search);


*/

/* Girilen harf ile baslamali*/


const search1 = () => {
  const inputVal = input.value;

  const li = document.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    if (li[i].innerText.toLowerCase().startsWith(inputVal.toLowerCase())) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};
input.addEventListener("keyup", search1);
