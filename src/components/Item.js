import {Link} from "react-router-dom"

const Item = ({producto}) =>{ 
    return ( //En cada vuelta del map me va a retornar esto
        <article key={producto.id} className="product-card">
            <h3>{producto.title}</h3>
            <img className="product-card__image" src={producto.image} alt={producto.title}/> {/*producto.image es la img de nuestro producto en firebase*/}
            <p>{producto.price}</p>
            {/* <a href={"/productos/" + producto.id}>Ver Mas</a> */}

            <Link to={"/item/" + producto.id}>Ver mas</Link> {/*Con esto no se recargara toda la pagina*/}

        </article>
    )
}
export default Item