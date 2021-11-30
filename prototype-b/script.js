// declaration des variables 
var btn;
var sortir;
var nombre;
var nombreDeviner;


 // entrer: saisir 
btn = document.getElementById('btn');
sortir = document.getElementById('sortirtext');
 nombre = Math.floor(Math.random() * 100);

 // traitement 
btn.addEventListener('click', function(){
  
  nombreDeviner = document.getElementById('entréeUtilisateur').value;
  if (nombreDeviner == nombre){
    sortir.innerHTML = 'Supérieur'
  } else{
    if (nombreDeviner < nombre){
        sortir.innerHTML = "Il est plus petit que"
    }
    else {
      sortir.innerHTML = "il est plus grand que"
    }

  } 

});






           