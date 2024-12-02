let titulo=document.querySelector('h1');

titulo.addEventListener('click', e => {
    window.location.replace("../index.html");
    
});
titulo.addEventListener('mouseover', e => {
    
    titulo.style.cursor = "pointer";
});