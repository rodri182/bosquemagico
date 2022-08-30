
(async function() {
    const response = await fetch('./json/galeria.json')
    const data = await response.json()

    for(let cont = 0; cont < data.length; cont++) {
      
        const gallery = document.querySelector('.contenedor-galeria')
        const newImg = document.createElement('img')

        gallery.appendChild(newImg)

        newImg.setAttribute("class", "img-galeria")
        newImg.setAttribute("src", data[cont].src)
        newImg.setAttribute("alt", data[cont].alt)
        console.log("chau")
    }
   
const imagenes= document.querySelectorAll(".img-galeria")
const imagenesLigth=document.querySelector(".agregar-img")
const contenedorLigth=document.querySelector(".imagen-ligth")
console.log("hola");
imagenes.forEach(imagen=>{
    imagen.addEventListener("click",()=>{
        aparecerImg(imagen.getAttribute("src"))
    })

})

contenedorLigth.addEventListener("click", (flecha)=>{

    if(flecha.target!==imagenesLigth){
        contenedorLigth.classList.toggle("show")
        imagenesLigth.classList.toggle("showImage")
    }
})
const aparecerImg=(imagen)=>{
    imagenesLigth.src=imagen;
    contenedorLigth.classList.toggle("show")
    imagenesLigth.classList.toggle("showImage")
}

})()

