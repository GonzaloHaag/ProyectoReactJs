
import {handleClick} from './Utils';
import { useState } from 'react';
import UsuariosList from './UsuariosList';
import { db } from '../firebase';
import { serverTimestamp } from 'firebase/firestore';
import { addDoc,collection } from 'firebase/firestore';



/*

TECNICAS DE RENDERING: 

useMemo(hook): Sirve para memorizar una variable que no sea funcion
useCallback(hook): SIrve para memorizar variables que sean funciones
memo(HoC) : Memoriza el componente hasta que se cambien sus props
o algo interno de ese componente



*/


/*
e.target --> El target de un evento es el elemento original 
que dispara el evento

*/


const Carrito = () => {
  /*TARGET DE UN EVENTO: 
  e.target = Es el elemento original que dispara el evento*/ 
    

  //Ultimo proceso de compra
  const [nombre,setNombre] = useState("");
  const [email,setEmail] = useState("");

  const [usuarios,setUsuarios] = useState([]);




  //Queremos hacer cuando el usuario ya termina de comprar

  const handleClickTerminar = (e) =>{
    // console.log(nombre,email) //Para imprimir lo que esta guardado en nombre y en email, lo que escribio el usuario

    // let copia = [...usuarios]
    // const usuario = {
    //   nombre:nombre,
    //   email:email
    // }
    // copia.push(usuario)
    // setUsuarios(copia)

    const compra = {
      usuario : { //Aca ira lo q completo el usuario
        nombre : "Horacio",
        email : "horacio@test.com",
        telefono : "555555555"
      },
      productos : [],
      fecha : serverTimestamp()


    }
    const ventasCollection = collection(db,"ventas")
    const pedido = addDoc(ventasCollection,compra) //Agrega un documento

    pedido
    .then((resultado)=>{
      console.log("Id producto: " + resultado.id); //Limpio todo y muestro el id como el ticket de compra

    })
    .catch(error=>{
      console.log(error);

    })
  
   }
//Luego de la compra, hacer un boton que diga volver al inciio, o compra finalizada, para MEJOR EXPERIENCIA DEL USUARIO

  const handleChangeName = (e) =>{
    setNombre(e.target.value); //Que la tecla que presiono se vaya guardando en nombre
  }
  const handleChangeEmail = (e) =>{

    setEmail(e.target.value);

  }
  console.log("Render");
   


    
  return (
    <div>
      <div>
      <input type="text" onChange={handleChangeName} placeholder="Nombre"/>
      </div>
      <div>
        <input type="text" onChange={handleChangeEmail} placeholder="Email"/>
      </div>

        <button onClick={handleClickTerminar}>Terminar Compra</button>
        {/*En js si un button tiene un click, va a disparar ese evento para todos los elementos padres*/}

        <UsuariosList usuarios = {usuarios}/> {/*Para pasarle la variable usuarios a usuariosList*/
        }
      </div>
  )
}
export default Carrito;