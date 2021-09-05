var busqueda="Harry James Potter";

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
        long=data.personajes.length;
        console.log("lenght:"+ long);
        console.log(data.personajes);

        var res= data.personajes.filter(item=>item.personaje===busqueda);
            console.log(res);

            var div=crearNodo("div")
            var id=crearNodo("p");
            var poster=crearNodo("img");
            var personaje=crearNodo("p");
            var apodo=crearNodo("p");
            var estudianteDeHogwarts=crearNodo("p");
            var casaDeHogwarts=crearNodo("p");
            var interpretado_por=crearNodo("p");
            var hijos=crearNodo("p");

            id.innerHTML=res[0].id;
            poster.src=res[0].imagen;
            personaje.innerHTML="Personaje: " + res[0].personaje;
            apodo.innerHTML="Apodo: " + res[0].apodo;
            estudianteDeHogwarts.innerHTML="Estudiante de Hogwarts: " + res[0].estudianteDeHogwarts;
            casaDeHogwarts.innerHTML="Casa de Hogwarts: " + res[0].casaDeHogwarts;
            interpretado_por.innerHTML="Interpretado Por: " + res[0].interpretado_por;
            hijos.innerHTML="Hijos: " + res[0].hijos;

            adjuntar(div,poster);
            adjuntar(div,id);
            adjuntar(div,personaje);
            adjuntar(div,apodo);
            adjuntar(div,estudianteDeHogwarts);
            adjuntar(div,casaDeHogwarts);
            adjuntar(div,interpretado_por);
            adjuntar(div,hijos);
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