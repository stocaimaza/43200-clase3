//Programación sincrónica y asincrónica. 

//La programación sincrónica ejecuta una tarea a la vez, en orden secuencial. 

//La programación asincrónica ejecuta varias tareas al mismo tiempo en orden no secuencial. 

//Para practicar podemos usar setTimeout. Recuerden que recibe dos parámetros: una función y un tiempo en milisegundos. 
//setInterval : le pasamos una función y el intervalo en tiempo para la repetición. 

//Promesas: un objeto que representa un evento a futuro. 
//En general representa el resultado eventual de una petición asíncrona. 


//Las promesas tienen 3 estados: pendiente, cumplida o rechazada.



const Promesas = () => {

    //Programación sincrónica: 
    console.log("Tarea A");
    console.log("Tarea B");

    //Programación asincrónica: 

    setTimeout( ()=> {
        console.log("Tarea 1");
    }, 3000)

    setTimeout( ()=> {
        console.log("Tarea 2");
    }, 1000)

    //Promesas: 
    
    const tusPromesas = (estado) => {
        return new Promise((resolve, reject) => {
            if(estado) {
                resolve("Promesa cumplida, me regalaron lo que queria");
            } else {
                reject("Promesa rechazada, me dieron carbón");
            }
        })
    }

    console.log(tusPromesas(false));

    //THEN Y CATCH: 
    //Podemos concatenar dos métodos que me permite ejecutar una función cuando la promesa se cumple o cuando se rechaza. 
    //THEN se ejecuta cuando la promesa se cumple. 
    //CATCH se ejecuta cuando la promesa se rechaza. 
    //FINALLY se ejecuta siempre. 

    tusPromesas(false)
        .then((respuesta) => {
            console.log(respuesta);
        })
        .catch((error) => {
            console.log(error)
        })

        //Ahora practicamos con un array de datos: 

        const array = ["Tinki Winki", "Lala", "Po", "Dipsy"]; 

        const solicitarTeletubbies = (estado) => {
            return new Promise((resuelto, rechazado) => {
                if(estado) {
                    resuelto(array);
                } else {
                    rechazado("No hay teletubbies hoy");
                }
            })
        }

        solicitarTeletubbies(true)
            .then(respuesta => {
                console.table(respuesta);
            })
            .catch(error => console.error(error))
            .finally( ()=> console.log("Proceso terminado"))
            
  
  
        return (
    <div>Promesas</div>
  )
}

export default Promesas