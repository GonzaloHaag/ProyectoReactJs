import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {db} from "../firebase";
import { useEffect } from "react";
import { collection,doc,getDoc } from "firebase/firestore";
import swal from "sweetalert";
import { useState } from "react";
//doc(db,id) => DocumentReference
//doc(collection,id)=>DocumentReference
//getDoc(DocumentReference)=> Promise

const ItemDetailsContainer = () =>{

    const [producto,setProducto] = useState ({}) //Comienza como un objeto vacio

    // console.log(window.location.pathname); //Me arroja la url del producto donde estoy parado /Item/1 o el id del producto que sea
    const {id} = useParams()
    // console.log(params); //Esto ya me arroja el id del producto DIRECTAMENTE
    // console.log(params.id)//Para obtener el numerito directamente
    useEffect(()=>{
        swal("Cargando productos...");
        const productosCollection = collection (db,"Productos"); //Como se repite en 2 componentes,podriamos crear un componente y exportarlo e importarlo cuando sea necesario
        const referencia = doc(productosCollection,"Xs5SvCnuG8a9ni"); //El segundo parametro es el id del producto que no tieene nada por ahora
        const pedido = getDoc(referencia)
        // console.log(pedido); //Arooja una promise

        pedido
        .then((respuesta)=>{
            // console.log(respuesta.id); //id del producto
            const producto = respuesta.data(); //info del producto->undefined poruqe no cargamos nada en la firestore
           setProducto(producto);
            swal({
                title: "Producto cargado!",
                icon: "success",
              });
        })
        .catch((error)=>{
            console.log(error);
            swal({
                title: "Hubo un erorr, vuelva a intentarlo." + error,
                icon: "error",
              });
        })


    },[])
    return(
        <div><ItemDetail producto={producto}/></div> //Le paso la variable producto
    )

}
export default ItemDetailsContainer