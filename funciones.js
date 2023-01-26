function encriptar(){
    var mensaje = document.getElementById("txt-mensaje").value.toLowerCase();

    var txtEncriptado = mensaje.replace(/e/img, "enter");       //i= toma letras mayusculas y minusculas
    var txtEncriptado = txtEncriptado.replace(/i/img, "imes");  //m= multiples lineas
    var txtEncriptado = txtEncriptado.replace(/a/img, "ai");    //g= toda la oración
    var txtEncriptado = txtEncriptado.replace(/o/img, "ober");
    var txtEncriptado = txtEncriptado.replace(/u/img, "ufat");

    //Desaparecer objetos 
    document.getElementById("munieco").style.display = "none";
    document.getElementById("mensaje").style.display = "none";

    //Aparecer objetos y mostrarlo en un momento de hacer click 
     document.getElementById("btn-copiar").style.display = "show"; 
     document.getElementById("btn-copiar").style.display = "inherit";
 
    //Aparezca texto encriptado
    document.getElementById("txt-encriptado").innerHTML= txtEncriptado;
}

function desencriptar(){
    var mensaje = document.getElementById("txt-mensaje").value.toLowerCase();

    //Invertir condición encriptado
    var txtEncriptado = mensaje.replace(/enter/img, "e");      
    var txtEncriptado = txtEncriptado.replace(/imes/img, "i");  
    var txtEncriptado = txtEncriptado.replace(/ai/img, "a");    
    var txtEncriptado = txtEncriptado.replace(/ober/img, "o");
    var txtEncriptado = txtEncriptado.replace(/ufat/img, "u");

    document.getElementById("munieco").style.display = "none";
    document.getElementById("mensaje").style.display = "none";
    document.getElementById("btn-copiar").style.display = "show"; 
    document.getElementById("btn-copiar").style.display = "inherit";

    document.getElementById("txt-encriptado").innerHTML= txtEncriptado;
}

function copiar(){
    const texto = document.querySelector("#txt-encriptado");
   texto.select();
   document.execCommand("copy");
}
