
import itemsListContainer from "./ItemsListContainer"
import {  Route,Routes} from "react-router-dom"; //Routes se recarga cada vez que la url cambia
import ItemsListContainer from "./ItemsListContainer";
import ItemDetailsContainer from "./ItemDetailsContainer";
import Carrito from "./Carrito";
//El import routes seria un switch gigante
const Main = () => {
    return (
    <main>
    {/* <h2>Home</h2>
    <img src="/logo192.png"/>

    <itemsListContainer /> */}

    {/* <Routes> */}
      {/* <Route path="/" element={<ItemsListContainer/>}/> {/*Si justo caigo en la landing, que se vea el itemListContainer*/}

      {/* <Route path = "/electronicos" element ={<ItemsListContainer/>}/> {/*El element es lo que quiero mostrar cuando este esa URL*/}

      {/* <Route path = "/ropa" element={<ItemsListContainer/>}/> */} 
      

      {/*RUTAS DINAMICAS*/}
      {/* <Route path="/productos/:id" element={<itemsListContainer/>}/> */} 
{/* 
      <Route path="/" element={<ItemsListContainer/>}/>
      <Route path="/productos/:categoria" element={<itemsListContainer/>}/> */}
      {/* <Route path="/:id" element={<DetalleProducto/>} /> */}
    
    {/* </Routes> */}
    <Routes>

      {/*if(navegador.url=="/")return <ItemsListContainer/>*/}
    <Route path="/" element={<ItemsListContainer/>}/>
    <Route path="/productos/:categoria" element={<ItemsListContainer/>}/>
    <Route path="/item/:id" element={<ItemDetailsContainer/>}/>
    <Route path="/carrito" element ={<Carrito/>} />
 </Routes>
  
  </main>
    )
}
export default Main;