// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Gonzalo Haag
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// function App() { //Componente App que declaramos en el index.js
//   return (
//     <div className="App">
//       YA SOY APP EN UN ARCHIVO

//     </div>
//   );
// }

// function App () {
//   return <div>
//     <div>
//       <h1>Card</h1>
//       <p>Card Description</p>
//     </div>
//     <div>
//       <h1>Card</h1>
//       <p>Card Description</p>
//     </div>

//   </div> //Los componentes solo devuelven un elemento, aca cumple porque solo devuelvo UN div, pero coloque otro dentro 
// }
//USO DE ETIQUETA INVISIBLE CUANDO HAY QUE DEVOLVER MUCHAS COSAS
import Card from "../components/Card"; //Importo mi card
// function App () {
//   return (
//   <> 
//    <Card/> 
//     <article>
//       <h1>Card</h1>
//       <p>Card Description</p>
//     </article>

//   </>//Cierre de etiqueta invisible
//   ) 
// }

import Header from "./Header"; //importo el header

import Main from "./Main";
import Footer from "./Footer";
import ItemsListContainer from "./ItemsListContainer"
import { BrowserRouter } from "react-router-dom";
import CustomProvider from "./CustomProvider";
// import "react-toastify/dist/ReactToastify.css"
// import { ToastContainer } from "react-toastify"




const App = () =>{
  return(
    <CustomProvider>
    <BrowserRouter> {/*Necesario para utilizar la libreria react router*/}
    {/* <header>
      <h1>
        Titulo
      </h1>
      <nav>
        <a href="">Link</a>
        <a href="">Link</a>
        <a href="">Link</a>
      </nav>
    </header> */}
    <Header/> 
    {/* <main>
      <h2>Home</h2>
    </main> */}
    <Main/>
    {/* <footer>
      <p>Copyright &Copy@2022</p>
    </footer> */}
     {/* <ItemsListContainer greeting="Hola prop gretting"/> */}
    <Footer/>
   
    </BrowserRouter>
    {/* <ToastContainer/> */}
    </CustomProvider>
  )
}
export default App;
