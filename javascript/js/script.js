



document.getElementById("form").addEventListener("submit",()=>{

    var nombre= document.getElementById("nombre").value.trim();
   
    let edad =document.getElementById("edad").value;

    const nombreError=document.getElementById("errorNombre");
    const edadError=document.getElementById("errorEdad");

    nombreError.textContent="";
    edadError.textContent="";

    let bandera=true;
    if(nombre===""){

        nombreError.textContent="El nombre es obligatorio";
        bandera=false;
    }
    if(edad===""){

        edadError.textContent="La edad es obligatoria";
        bandera=false;
    }
        
    if(bandera){

        alert("Bienvenidos..");
        document.getElementById("form").reset();

    }




});

