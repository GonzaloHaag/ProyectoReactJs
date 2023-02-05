import React from 'react'

import {memo} from 'react'
import Usuario from './Usuario'

// memo(Componente[,diffFunction]);

const UsuariosList = ({usuarios}) => { //Recibo por parametro la variable usuarios enviada por carrito

    console.log("Render UsuariosList")
  return (
    <div>
        {usuarios.map((usuario,i)=>{
            return <Usuario key={i} usuario={usuario}/>//Por cada usuario que haya, quiero retornar un div con el nombre y el email
            //Le paso la variable a usuario
        })}
    </div>
  )
}

export default memo(UsuariosList); //Ahora al escribir algo solo se renderiza el carrito, no este componente

//Cuando pongo terminar compra si se ejecutara ya que se le esta cambiando la prop de usuario

/*
Memorizamos el componente con memo porque la variable entrante es siempre
la misma(usuarios) y no deberia recargarse cada vez que hago 
algo en mi pagina



*/