
import { useEffect, useState } from "react" //Importamos el hook

import { collection, getDocs , query, where } from "firebase/firestore"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {db} from "../firebase";
import swal from "sweetalert";

// import { toast } from "react-toastify"



// console.log(productosCollection); //CollectionReference

//getDocs(Query,...)

const ItemsListContainer = () => {
    const [load, setLoad] = useState(false)
    const [productos, setProductos] = useState([])

    useEffect(() => {
        // toast.info("Cargando productos...")
        swal("Cargando productos...")
        const productosCollection = collection(db, "Productos") //CollectionReference/Query

        //getDocs(Query)
        //query(Query,Constraint)
        //where(propieda,operador,valor)

        //const filtro = query(productosCollection,where("category","==","clothing"),where("price",">",100))
    //    const filtro = query(productosCollection); //Todos los productos de la coleccion que coincidan con, where(los que quiero)

       //where hace coincidir los valores -> where(propiedad,operador,valor)
       const filtro = query(productosCollection,where("category", "==","clothing"))
       
       const pedidoFirestore = getDocs(filtro);

        pedidoFirestore
            .then((respuesta) => {
                const productos = respuesta.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                setProductos(productos)
                setLoad(true)
                // toast.dismiss()
                // toast.success("Productos cargados!")
                swal({
                    title: "Productos cargados!",
                    icon: "success",
                  });
                  
            })
            .catch((error) => {
                swal({
                    title: "Cuidado!",
                    text: "Hubo un error,vuelva a intentarlo" + error,
                    icon: "error",
                  });
                  
            })
    }, [])

    return (
        <>
            {load ? null : 'Cargando...'}
            <ItemList productos={productos} />
        </>
    )
}

//     /*Variables de estado : Son variables que mantienen valores
//     en un componente. En componentes de tipo funcion, se crean
//     Hooks -> Son funciones que nos permiten tener una nueva 
//     funcionalidad dentro del componente */

//     // const miEstado = useState(0) //contador
//     // // console.log(miEstado);//Devuelve un array [0,f]

//     // const contador = miEstado[0]

//     // const cambiarContador =  miEstado[1]

//     const [contador,setContador] = useState(0); //Con destructuring
//     //setContador(1) | si se puede hacer
//     //contador = 1 | No se puede hacer 

//     // console.log(contador); //Arroja solamente el 0
//     // console.log(setContador); //Es una funcion

//     const [searchText,setSearchText] = useState("");
//     const [load,setLoad] = useState(false);
//     const [productosApi,setProductosApi] = useState([]);

//     //useParams
//     const props = useParams()//Los parametros vienen en objeto
//     // console.log(props.categoria); //Para obtener la categoria

//     /*
//     Puedo hacer un condicional diciendo que si props.categoria == true
//     el  const pedido = fetch('https://fakestoreapi.com/products/' + props.categoria)

//     */

//     const[open,setOpen] = useState(false);
//     const [loadMore,setLoadMore] = useState(false);
//     const[cargo,setCargo] = useState(false);
//     //Para cargar un array de productos

//     const [productos,setProductos] = useState([]); //Array vacio

//     const handleClick = () =>{ //funcion con nombre para llamarla en el onClick
//        setContador(contador + 1); //Recordar que no puedo contador++ porque es una asignacion
//     }
//     const handleOnChange = (e) => {
//         setSearchText(e.target.value); //Cada tecla cambiara mi estado
//     }
//     const handleToggleDrawer = () => {

//         setOpen(!open); //Lo opuesto a lo que ya vale

        

//     }
    

//     //HOOK de useEffect

//     useEffect(()=>{
//         //Lo que pasa aca es asincronico

//         //async = asincronica
//         //mock =simulacion

//         // newPromise(()=>{
//         //     setTimeout(()=>{
//         //         setLoad(true)
//         // },2000) --> El fetch ya es mi mock async
//         // })


//         //operacionX() es una operacion muy costosa por tiempo,por peso,por complejidad,como pedir algo a la base de datos 
//         console.log("Pido algo a la base de datos");

//         setTimeout(()=>{
//             console.log("Termino de pedir algo a la base de datos")
          

//             const ejemploProductos = [
//                 {id:1,nombre:"Producto 1", precio:100},
//                 {id:2,nombre:"Producto 2", precio:200},
//                 {id:3,nombre:"Producto 3", precio:300}


//             ]
//             // ejemploProductos.forEach(producto=>{ no sirve, ya que estaria pisando la variable original
//             //     productos.push(producto) 
//             // })
//             setCargo(true);
//             setProductos(ejemploProductos);
//         },2000)
//     },[]); //Para que solo se ejecute una vez le agrego los []
    
//    //API DE FAKESTORE
//    useEffect(()=>{
//     //Si tengo una variable y es promesa(y no esta dentro de un .then le pongo un .then)

//     // const pedido = fetch('https://fakestoreapi.com/products')->Ahora ya pediremos a firebase los productos
//     const productosCollection = collection(db,"Productos");
//     const pedidoFirestore = getDocs(productosCollection);//Arroja un promise <pending></pending>

//     pedidoFirestore
//     .then((respuesta)=>{

        

//         // console.table(respuesta.docs); //En tabla lo arroja

//         // // respuesta.docs.forEach(doc=>{
//         // //     //console.log(doc) es una representacion del doc
//         // //     console.log(doc.date()) //Es el contenido del doc
//         // respuesta.docs.forEach((doc)=>{
//         //     console.log(doc.data()); //Para obtener la info de ese doc-> price,title,description,stock,image
//        const productos = respuesta.docs.map(doc=>({...doc.data(), id:doc.id}))
//        setProductos(productos)
//        setLoad(true)
    
//         })                                                                                                                                                                                                         
       
    
//     .catch((error)=>{
//         console.log(error)
//     })


//     /*pedido
//     .then((respuesta)=>{
//         //Habiendo pasado las validaciones de status y headers

//         //Si tengo una variable que vale promesa adentro de un .then -> LE HAGO RETORNO
//         const productos = respuesta.json();
//         return productos
        
//     })
//     .then((productos)=>{

//         console.log(productos);
//         setProductosApi(productos);
//         setLoad(true);


//     })
//     pedido.catch((error)=>{

//         console.log(error);

//     })*/

//    },[]) //[] Para que solo se ejecute una vez

// //    fetch('https://fakestoreapi.com/products')
// //             .then(res=>res.json())
// //             .then(json=>console.log(json))

//     //Operador ternario --> open ? true:false; porque el onclick espera esto
//         return (
//         <div>
//             {!cargo ? "Cargando...": "Termino de cargar"} <br/>
//          {props.greeting}
//         <p>Contador : {contador}</p>
//         <p>Texto a buscar : {searchText}</p>
//         <p>Drawer Open : {open ? "Abierto" : "Cerrado"} </p>
//         <button onClick={handleClick}>Sumar</button>
//         <button onClick={handleToggleDrawer}>Toggle drawer</button>
//         <input onChange={handleOnChange} type="text"/>
//         <ItemList productosDeApi = {productosApi}/>

       
//         </div>
//     )
// }
export default ItemsListContainer

// Los hooks que vienen con react sirven para: 
// -controlar el estado de un componente 
// -controla el ciclo de vida de un componente
// -controla memoria 

// function App () {
//     return [<p></p>,<p></p>] //Esto se acepta tambien

//     return (
//         <>
//         {[<p></p>,<p></p>]} <br/>
//         {[<p></p>,<p></p>]}
        
//         </>
//     )
// }

// <App/>

