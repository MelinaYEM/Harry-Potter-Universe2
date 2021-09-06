var busqueda="Accio";

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
        long=data.hechizos.length;
        console.log("lenght:"+ long);
        console.log(data.hechizos);

        var res= data.hechizos.filter(item=>item.hechizo===busqueda);
            console.log(res);

            var div=crearNodo("div")
            var id=crearNodo("p");
            var hechizo=crearNodo("p");
            var uso=crearNodo("p");

            id.innerHTML=res[0].id;
            hechizo.innerHTML="Hechizo: " + res[0].hechizo;            
            uso.innerHTML="Uso: " +res[0].uso;

            adjuntar(div,id);
            adjuntar(div,hechizo);
            adjuntar(div,uso);
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