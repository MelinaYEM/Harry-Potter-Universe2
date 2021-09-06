var busqueda="Harry Potter y la piedra filosofal";

function buscar(){
    var element = document.getElementById("elem");
    element.innerHTML="";

    busqueda=document.getElementById("buscador").value;
    console.log("busqueda:"+busqueda);
        

    const url = "https://fedeperin-harry-potter-api.herokuapp.com/db";

    fetch(url)
    .then(function(response){
        return response.json();    
    })


    .then(function(data){
        long=data.libros.length;
        console.log("lenght:"+ long);
        console.log(data.libros);

        var res= data.libros.filter(item=>item.libro===busqueda);
            console.log(res);

            var div=crearNodo("div")
            var id=crearNodo("p");
            var libro=crearNodo("p");
            var titulo_original=crearNodo("p");
            var fecha_de_lanzamiento=crearNodo("p");
            var autora=crearNodo("p");
            var descripcion=crearNodo("p");

            id.innerHTML=res[0].id;
            libro.innerHTML="Libro: " + res[0].libro;
            titulo_original.innerHTML="Titulo Original: " + res[0].titulo_original;
            fecha_de_lanzamiento.innerHTML="Fecha de Lanzamiento: " + res[0].fecha_de_lanzamiento;
            autora.innerHTML="Autora: " + res[0].autora;
            descripcion.innerHTML="Descripcion: " + res[0].descripcion;

            adjuntar(div,id);
            adjuntar(div,libro);
            adjuntar(div,titulo_original);
            adjuntar(div,fecha_de_lanzamiento);
            adjuntar(div,autora);
            adjuntar(div,descripcion);
            adjuntar(element,div); 

    })

    .catch(function(error){
    console.log(error);           
    });

    function crearNodo(elemento){
        return document.createElement(elemento);
    }

    function adjuntar(padre,hijo){
        return padre.appendChild(hijo);
    }    

}