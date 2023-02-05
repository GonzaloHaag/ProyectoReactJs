import Nav from "./Nav" //Importo el nav
import {Link} from "react-router-dom"

const Header = ({children}) => { //Se debe llamar igual que el archivo

  const isHeader = true;

    return (
      <>
        <header className="header">
          <Link to="/">
        <h1 className="header__title">
          Titulo
        </h1>
        </Link>
        {children}
        {/* Nav(true,1) */}
       <Nav
       isHeader = {isHeader}
       />
       </header>
       <Nav/>

       </>
       
     

    )

}
export default Header;