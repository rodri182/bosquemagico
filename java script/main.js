
let nombreadul=localStorage.getItem("Reservado por");
let fechacumple=localStorage.getItem("Fecha del cumple");
let nombrecumple=localStorage.getItem("Cumpleaños de");
let tel=localStorage.getItem("telefono");
document.getElementById("nombreadulto").value=nombreadul;
document.getElementById("fechareserva").value=fechacumple;
document.getElementById("nombrecumple").value=nombrecumple;
document.getElementById("tel").value=tel;

function capturardatos()
{
    let nombreadul=document.getElementById("nombreadulto").value;
    console.log("NOMBRE:    "+ nombreadul + "\n");
    let fechacumple=document.getElementById("fechareserva").value;
    console.log("FECHA DEL CUMPLEAÑOS:    "+ fechacumple + "\n" );
   let nombrecumple=document.getElementById("nombrecumple").value;
   console.log("CUMPLEAÑERO:        "+nombrecumple );
    let tel=document.getElementById("tel").value;
   localStorage.setItem("Reservado por",nombreadul);
   localStorage.setItem("Fecha del cumple",fechacumple);
   localStorage.setItem("Cumpleaños de",nombrecumple);
   localStorage.setItem("telefono", tel);
   alert("SU FECHA ESTA SIENDO PROCESADA");
}


