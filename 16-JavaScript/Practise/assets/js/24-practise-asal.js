

function hesapla(){
    let sayi = document.querySelector("#txtSayi").value;



    if(!sayi || isNaN(sayi) || sayi<=1){
        alert("Lütfen 1'den büyük bir sayı giriniz");
        return;
    }


    let bolunenler = 0;

    for(let i=2; i<sayi; i++){
        if(sayi % i == 0){
            bolunenler++;
        }
    }

    let mesaj = "Bu sayı asal";
    if(bolunenler>0){
        mesaj = `Bu sayı asal değil. Çünkü ${bolunenler+2} adet pozitif böleni var.`;
    }

    document.querySelector("#sonuc").innerHTML = mesaj;


}