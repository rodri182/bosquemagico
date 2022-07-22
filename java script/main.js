/*
const elementos= ["casa","auto","parque","cochera","mesas"];
const cosaslist= document.getElementById("cosas-list")
elementos.forEach((cosas)=>{
 const list=document.createElement("li")
 list.innerHTML = cosas
 list.className = "grey"
 cosaslist.append(list)
})
*/


function hadleclick ()
{
    
    alert("SU FECHA ESTA SIENDO PROCESADA");
}

function capturardatos()
{
    let nombreadul=document.getElementById("nombreadulto").value;
    console.log("NOMBRE:    "+ nombreadul + "\n");
    let fechacumple=document.getElementById("fechareserva").value;
    console.log("FECHA DEL CUMPLEAÑOS:    "+ fechacumple + "\n" );
   let nombrecumple=document.getElementById("nombrecumple").value;
   console.log("CUMPLEAÑERO:        "+nombrecumple )

}