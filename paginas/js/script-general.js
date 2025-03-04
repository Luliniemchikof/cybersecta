let titulo1=document.querySelector('.titulo1');
let titulo2=document.querySelector('.titulo2');

if(titulo1){
  titulo1.addEventListener('click', e => {
    window.location.replace("../index.html");
  });
  titulo1.addEventListener('mouseover', e => {
    
    titulo1.style.cursor = "pointer";
  });
}

if(titulo2){
  titulo2.addEventListener('click', e => {
    window.location.replace("../../index.html");
  });
  titulo2.addEventListener('mouseover', e => {
    
    titulo2.style.cursor = "pointer";
  });
}
    



//Estilos del nav
// Alternar entre mostrar y esconder los links del menu de navegación cuando el usuario clickea en el hamburger menu//
function myFunction() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }