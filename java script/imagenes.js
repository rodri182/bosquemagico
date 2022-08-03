
const imagenes= document.querySelectorAll(".img-galeria")
const imagenesLigth=document.querySelector(".agregar-img")
const contenedorLigth=document.querySelector(".imagen-ligth")

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