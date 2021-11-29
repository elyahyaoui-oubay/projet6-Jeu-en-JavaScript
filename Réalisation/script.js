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
console.log(number)
tentativeSortir = document.getElementById('tentative')
tentative = 10;

 // traitement 
btn.addEventListener('click', function(){
tentative--;
nombreDeviner = document.getElementById('entréeUtilisateur').value;
if(tentative>0){
    tentativeSortir.innerHTML=tentative +"-tentative"
  if (nombreDeviner == nombre && tentative >=3){
    sortir.innerHTML = 'Supérieur'

  } else{
    if (nombreDeviner == nombre){
        sortir.innerHTML = "Il est plus petit que"
    }

    else {
        sortir.innerHTML = "il est plus grand que"
    }
}

  } 

});






           