import React from 'react'
import { useState } from 'react';

const ItemCount = ({stock,onAdd}) => { //CONTEXT onAdd para enviar la variable contador hacia el itemDetail

    let [contador,setContador] = useState(1);
    // foo(contador);

    const handleSumar = () =>{
        if(contador < stock){ //Si el stock es mayor al contador es pq no hay mas stock

        setContador(contador + 1);
        }

    }

    const handleRestar = ()=>{
        if(contador > 0 ) {
            setContador(contador - 1);
        }

    }
    const handleConfirmar = ()=>{
        onAdd(contador); //Aqui ejecuto la funcion, para que me de la cantidad que tieene contador al confirmar
        console.log(contador); //Recien cuando me confirmen veo el valor que tiene la variable contador
    }
    const handleReset = ()=>{

        setContador(1); //Para que se resetee la cantidad

    }


  return (
    <div>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSumar}>+</button>
        <p>Cantidad : {contador}</p> {/*Para que salga en cantidad lo que esta guardado en contador*/}
        <button onClick={handleRestar}>-</button>
        <button onClick={handleConfirmar}>Confirmar</button>
    </div>
  )
}

export default ItemCount