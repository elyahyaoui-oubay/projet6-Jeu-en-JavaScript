// Declaration des variables
var btn;
var sortir; 
var nombre;
var nombreDeviner;

// Saisir
btn = document.getElementById ('btn');
sortir = document.getElementById ('sortiUtilisateur');
nombre = Math.floor(Math.random() * 100);

// Traitement
function enter(){
    nombreDeviner = document.getElementById('entréeUtilisateur').value ;
if (nombreDeviner == nombre){
   sortir.innerHTML = 'Félicitation';
} else {
    if (nombreDeviner <  nombre){
        sortir.innerHTML = "Il est plus petit que";
    } 
    else {
        sortir.innerHTML = "Il est plus grand que";
    }   
}
};

