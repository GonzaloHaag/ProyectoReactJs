import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ price , title , description , image , stock}) => { //Le pasamos todas las props que tiene nuestro producto

    const onAdd = (parametro)=> { //ESTAMOS PASANDO LA VARIABLE CONTADOR HACIA AQUI
        console.log(parametro);
    } //CONTEXT
  return (
    <div>
        <h1>{title} - ${price}</h1>
        {/*picsum*/}
        <img src={image} alt="picsum"/>
        <p>{description}</p>

        <ItemCount stock={stock} onAdd={onAdd}/>
        </div>
  )
}

export default ItemDetail