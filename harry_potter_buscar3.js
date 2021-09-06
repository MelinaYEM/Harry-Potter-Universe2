var busqueda="Protagonísta";

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
        long=data.info.length;
        console.log("lenght:"+ long);
        console.log(data.info);

        var res= data.info.filter(item=>item.tipo===busqueda);
            console.log(res);

            var div=crearNodo("div")
            var id=crearNodo("p");
            var tipo=crearNodo("p");
            var contenido=crearNodo("p");

            id.innerHTML=res[0].id;
            tipo.innerHTML=res[0].tipo + ":";
            contenido.innerHTML=res[0].contenido;

            adjuntar(div,id);
            adjuntar(div,tipo)
            adjuntar(div,contenido);
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