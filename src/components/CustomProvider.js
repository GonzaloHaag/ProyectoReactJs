import { useState } from "react";
import { createContext,useContext } from "react";



const contexto = createContext();
// console.log(contexto); //Solo sirve el provider
const Provider = contexto.Provider;//El provider le da valor definitivo al contexto
//El contexto se lee asi : 
//import {useContext} from = "react"

//const valorDelContexto = useContext(objetoContexto)

//useContext(ContextObject) => Provider.value


//Ademas, desde donde este ubicado, todos los children pueden acceder a este valor

// const Consumer = contexto.Consumer; //El consumer consume el valor del contexto

//Hoy para leer el valor del contexto se usa un hook useContext->En vez del consumer
// console.log(Provider);

 export const useCarrito = () => {
    const valorDelContexto = useContext(contexto);
    return valorDelContexto;

}


const CustomProvider = ({children}) => {
    const [carrito,setCarrito] = useState([])
    const [totalProductos,setTotalProductos] = useState(0);

    const agregarProducto = (producto,cantidad) => {


        //Recordar q no se puede carrito.push

        //Se puede asi:

        // const copia = carrito.slice(0)
        // const copia = [...carrito];
        // copia.push(producto) --> ahora si es valido
        if(estaEnCarrito()){ //Si da true no hago nada
            //[{id:1,titulo:"Pantalon",cantidad:1}]
            //Si da true puedo aumentar la cantidad
            //El mismo producto no puede estar multiplicado en el array

        }
        //if/else
        //localStorage
        //setCarrito()
    }
    const eliminarProducto = (id) => {
        setCarrito([]); //Que se resetee el array de carrito
        
    }
    const estaEnCarrito = (id) => {
        //Devuelve true o false
        /*Me mandan el id, si encuentro ese id
        dentro de todos los productos que estan en el array
        retorno true, sino false*/
        
    }

    const valorDelContexto = { //La idea del contexto es tener cosas que cambien
        carrito:carrito,
        totalProductos:totalProductos,
        setCarrito : setCarrito,
        setTotalProductos : setTotalProductos,
        agregarProducto : agregarProducto

    }
    return(
        <Provider value={valorDelContexto}>
            {children} {/*Para que me lleguen los hijos que serian todos los componentes*/}

        </Provider>
    )
}
export default CustomProvider;