let titulo=document.querySelector('h1');

titulo.addEventListener('click', e => {
    window.location.replace("../index.html");
    
});
titulo.addEventListener('mouseover', e => {
    
    titulo.style.cursor = "pointer";
});

//Estilos del nav
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }