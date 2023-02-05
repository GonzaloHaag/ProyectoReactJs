//Este archivo va a quedar asi


// import React from 'react';  

// import ReactDOM from 'react-dom/client';

// import App from './App';
// import './index.css'
// /*
// Son librerias de react y react-dom
// Las dos primeras lineas es similar a esto en html:
// <script src="react.js"></script>
// <script src="react-dom-js"></script>
// No tiene ./ porque lo va a ir a buscar al node-modules por default
// */
// // import './index.css';
// // import App from './App'; -> Es algo que creo yo, creo la funcion abajo y saldra lo que retorno
// /*
// Buscar el archivo app en la misma carpeta
// Es una variable que yo creo, tieneque ser un componente
// de react.
// Los componentes en react siempre son funciones
// class App {}
// const App = () => {} --> Debe retornar aglo
// return ? 
// Los componentes en react siempre son funciones que arrancan
// con la primera letra en mayuscula y tiene que retornar algo
// */
// const App = () =>{
//   return "Hola mundo por las dudas kayn"
// }
// // import reportWebVitals from './reportWebVitals';



// //Uso la libreria de react-dom para renderizar el componente App
// // en el elemento con id root(que esta en el index.html en public)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( //Esta variable muestra en pantalla nuestro componente


//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
//      App() //Llamo la funcion aca

// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App'; //Importo la App,esta dentro de la carpeta components


import './index.scss'; //Importo el index.css que podemos modificar el estilo alli

import "./firebase";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App/> //ASI SE INVOCA A LA FUNCION  JSX
);


