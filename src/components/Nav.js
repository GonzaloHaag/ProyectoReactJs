import {NavLink} from "react-router-dom"
import CartWidget from "./CartWidget";
const Nav = (parametro) => {
    // console.log(parametro); //Al paremtro lo recibe como un objeto, aunque yo le pase 2 parametros solo pongo un parametro
    // console.log(parametro.textLinkFooter);
    // console.log(parametro.hrefLinkFooter);

    //Utilizando el DESTRUCTURING:
   const {isHeader,textLinkFooter,hrefLinkFooter} = parametro;

    if(parametro.isHeader) { //Si es true
        return (
            <nav className="header__navbar">
            <NavLink className="header__link" to="/productos/electronicos">Electronicos</NavLink> {/*Lo que hace el navLink es ponerle la clase active segun el link que clickeemos*/}
            <NavLink className="header__link" to="/productos/ropa">Ropa</NavLink>
            <NavLink className="header__link" to="#">Link</NavLink>
            <CartWidget/>
          </nav>

        )
    }

    else{
        return(
     <nav className="header__navbar">
      
        <a href={parametro.hrefLinkFooter}>{parametro.textLinkFooter}</a>{/*Para que no este hardcodeado*/}
        {/*Es lo mismo que <a href="#">Twitter</a> pero dinamico */}
     </nav>
        )
    }
  
}
export default Nav