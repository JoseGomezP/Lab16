function validarFormulario(){
    let nom = document.getElementById("nombre").Value;
    let email = document.getElementById("email").Value;
    let imag = document.getElementById("imagen").Value;
    if(nom == "" || email == "" || imag == ""){
        alert("Todos los campos deben estar llenos...");
        return false;
    }
    return true;
}

function mostrarImagen(event){
    let imaga = document.getElementById("ver-imagen");
    imaga.src = URL.createObjectURL(event.target.files[0]); 
}