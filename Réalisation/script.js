// declaration des variables 
var btn;
var sortir;
var nombre;
var nombreDeviner;
var tentative;

 // entrer: saisir 
btn = document.getElementById('btn');
sortir = document.getElementById('sortirtext');
nombre = Math.floor(Math.random() * 100);
console.log(nombre);
tentativeSortir = document.getElementById('tentative');
tentative = 10;

 // traitement 
btn.addEventListener('click', function(){
tentative--;
nombreDeviner = document.getElementById('entréeUtilisateur').value;
if(tentative>0){
    tentativeSortir.innerHTML=tentative +"-tentative"
  if (nombreDeviner == nombre){
    if ( nombreDeviner == nombre && tentative >=8){
      sortir.innerHTML = 'Bravo, vous etes un génie !!'
    }else{
      if (nombreDeviner == nombre && tentative >=3){
        sortir.innerHTML = 'Félicitations, vous aves gangné après , ' +tentative +"tentative"
    }
    }

 } else {
   if (nombreDeviner < nombre){
    sortir.innerHTML = "il est plus petit que"
   }
    else {
      sortir.innerHTML = "il est plus grand que"

    }  
    }
}else{
  sortir.innerHTML = "C'est raté!!"
  tentativeSortir.innerHTML = "0-tentative"
}

  });






           