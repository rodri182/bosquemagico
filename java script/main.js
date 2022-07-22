console.dir(document);
console.dir(document.head);
console.dir(document.body);
/*
for (const producto of productos) 
{
    let contenedor = document.createElement('div');
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                                <p> Producto: ${producto.nombre}</p>
                                <b> $ ${producto.precio}</b>`;
    document.body.appendChild(contenedor);
}
const conteiner= document.getElementById("contenedor")
conteiner.innerHTML="<h3>Hola mundo!</h3><p>Bienvenidos a todos!</p><hr>"

const texto=document.createElement("p")
texto.innerText="buenassssss hola hola holaaaaaa"
texto.style="blue bold"
conteiner.append(texto)
console.log(conteiner)
*/

const elementos= ["casa","auto","parque","cochera","mesas"];
const cosaslist= document.getElementById("cosas-list")
elementos.forEach((cosas)=>{
 const list=document.createElement("li")
 list.innerHTML = cosas
 list.className = "grey"
 cosaslist.append(list)
})