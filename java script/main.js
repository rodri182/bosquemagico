
document.getElementById("nombreAdulto").value = 'nombre';
document.getElementById("fechaReserva").value = 'fechaCumple';
document.getElementById("nombreCumple").value = 'cumpleañero';
document.getElementById("tel").value = 'tel';


function capturardatos() {
    const fechaReserva = document.getElementById("fechaReserva").value;
    const nombre = document.getElementById("nombreAdulto").value;
    const fecha = document.getElementById("fechaReserva").value;
    const cumpleanero = document.getElementById("nombreCumple").value;
    const telefono = document.getElementById("tel").value;

    const objetocumple = {
        nombre,
        cumpleanero,
        telefono,
        fecha,
        fechaReserva,
    };
    

    const todosMisCumpleaniosString = localStorage.getItem("cumple") || '[]';
    const todosMisCumpleanios = JSON.parse(todosMisCumpleaniosString);
   
    const existeLaFecha = todosMisCumpleanios.findIndex(cum => cum.fechaReserva == fechaReserva)
    
    if(existeLaFecha >= 0) {
        swal.fire({
            title: "La fecha ya existe!",
            width:600,
            text:"Elija otra fecha",
            imageUrl:"./imagenes/globos.png",
            imageWidth: 250,
            ImageHeigth: 80,
            imageAlt: "img-catel",
            color:"red",
            background:"white",
            confirmButtonText:"aceptar",
        });
        return
    }

    todosMisCumpleanios.push(objetocumple);
    const cumpleanito = JSON.stringify(todosMisCumpleanios);
    localStorage.setItem("cumple", cumpleanito);

    swal.fire({
        title: "Listo!",
        width:600,
        text:"Su fecha se esta procesando",
        imageUrl:"./imagenes/globos.png",
        imageWidth: 250,
        ImageHeigth: 80,
        imageAlt: "img-catel",
        color:"#27e83e",
        background:"#f7f6f6",
        confirmButtonText:"aceptar",
    });
}


