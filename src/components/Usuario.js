import React from 'react'
import {memo} from "react"

const Usuario = ({usuario}) => { //Recibo la variable usuario

    console.log("Render Usuario")
  return (
    <div>{usuario.nombre} - {usuario.email}</div>
  )
}

export default memo(Usuario); //Para que se ejecute solo una vez al guardar cada usuario