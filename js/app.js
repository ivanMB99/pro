const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');


//Cargar primero mi codigo HTML
document.addEventListener('DOMContentLoaded',()=>{
    mostrarMenu();
    cerrarMenu();
});


//Funcion menu de hamburguesa
function mostrarMenu(){
    hamburguesa.addEventListener('click',()=>{
        console.log('clickando...');
        navegacion.classList.toggle('ocultar'); //Quitar clase
    });
}

//Cerrar menu
function cerrarMenu(){
    enlaces.forEach(enlace =>{
        enlace.addEventListener('click',(e)=>{
            
            if(e.target.tagName === 'A'){
                navegacion.classList.add('ocultar');
            }
        });
    });
}



