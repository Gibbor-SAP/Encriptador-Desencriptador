function encriptar(){
    var mensaje = document.getElementById("txt-mensaje").value.toLowerCase();

    var txtEncriptado = mensaje.replace(/e/img, "enter");       //i= toma letras mayusculas y minusculas
    var txtEncriptado = txtEncriptado.replace(/i/img, "imes");  //m= multiples lineas
    var txtEncriptado = txtEncriptado.replace(/a/img, "ai");    //g= toda la oración
    var txtEncriptado = txtEncriptado.replace(/o/img, "ober");
    var txtEncriptado = txtEncriptado.replace(/u/img, "ufat");

    //Para que desaparezcan objetos 

    document.getElementById("munieco").style.display = "none";
    document.getElementById("mensaje").style.display = "none";

      //Para que aparezcan objetos
      
     document.getElementById("btn-copiar").style.display = "show"; 

 
    document.getElementById("txt-encriptado").innerHTML= txtEncriptado;
}
