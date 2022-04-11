//listeyi ul nin ice li olarak ekleyin
//sonra butona basilinca yeni gelişmişler ile birlikte listeyi gosterelim
// sil e basilinca da sirayla sil denilen kisim silinecek ve en sonrada liste bitti mesaji gosterilecek
const  notlar  =  [
  "Kitap oku." ,
  "Yürüyüşe çık." ,
  "Günlük'e katıl." ,
  "Taşini bitir." ,
] ;

const  liste  =  belge . sorguSeçici ( "#liste" ) ;
const  yeniList  =  belge . querySelector ( "#metin ul" ) ;

hadi  satir  =  "" ;
for  ( notlar değil  ) { _  
  satir  +=  ` <li> ${ değil } </li>` ;
}
liste . innerHTML  =  satir ;

ver  veri  =  belge . querySelector ( "#yeni" ) ;

belge _ sorguSeçici ( "#ekle" ) . addEventListener ( "tıklayın" ,  ( )  =>  {
  liste . innerHTML  +=  `<li> ${ veri . değer } </li>` ;
  notlar . push ( veri . değer ) ;
  sonuc ( notlar ) ;
  veri . değer  =  "" ;
} ) ;

belge _ sorguSelector ( "#sil" ) . addEventListener ( "tıklayın" ,  ( )  =>  {
  if  ( notlar . uzunluk  ==  0 )  {
    alert ( "Liste boşaldı." ) ;
  }  başka  {
    notlar . pop ( ) ;
    liste . removeChild ( liste.lastElementChild ) ; _ _
    sonuc ( notlar ) ;
  }
} ) ;
/* const sonuc = (eklenen) => {
  Document.querySelector(
    "#metin ül"
  .innerHTML = `<li class= "list-group-item">${eklenen}</li>`;
}; */

const  sonuc  =  ( değil )  =>  {
  izin ver  yeni  =  "" ;
  for  ( notlar değil  ) { _  
    yeni  +=  ` <li> ${ değil } </li>` ;
  }
  yeniListe . innerHTML  =  yeni ;
} ;