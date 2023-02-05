
import Nav from "./Nav"
import { useCarrito } from "./CustomProvider";
const Footer = () => {

  const {totalProductos} = useCarrito();
    return(
    <footer>
      
    <p>Copyright &Copy@2022</p>
    <Nav
  
      //{
       
        textLinkFooter = "Twitter"//, soolo afectara al footer
        hrefLinkFooter = "https://www.facebook.com/"
        //}
    />
  </footer>
    )
}
export default Footer;