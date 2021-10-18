import Navbar from './components/Navbar';
import Login from './pages/Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import Users from './pages/Users';
import React, { useState}  from 'react';
import {useEffect} from 'react';



function App() {

  const [mensaje,setMensaje] = useState(false);
  const cambiarEstado = (val) => setMensaje(val);
  const [colorMensaje, setColorMensaje] = useState("color")
  const cambiarColor = (color) => setColorMensaje(color);
  const [state, setState] = useState(false)
  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/10')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }
  
//useEffect(() => {
  //  console.log('se ha alcanzado el render')
   // fetchData()
 // }, [state])
  //
 useEffect(() => {
   if(state){
     console.log('El estado es verdadero, activamos el useEffect')
     fetchData()
   } 
 }, [state])
 const Routing = () =>{
  return (
   
   
    <Switch>
     <Route exact path="/home" component={Home}/>
     <Route exact path="/post" component={Post}/>
     <Route exact path="/users" component={Users}/>
     <Route exact path="/login" component={Login}/>
   </Switch>
  
 
 ) };

  return(

    <Router>
      
      <Navbar/>
     <>
     </>

      <Routing/>
      <div className="App">

{
  mensaje &&  <p style= {{color:colorMensaje||"white"}}>useEffect funcionando</p> 
}
<button
onClick={() =>{
  cambiarEstado(!mensaje) 
  cambiarColor("green")
  setState(!state)}}>
CAMBIAR</button>
  </div>
    </Router> 


  ) ; 
  // const decirSaludo = (params) => {
  //   alert(`Hola ${params}`) 
  // }
  // const verInput = (e) => 
  // {
  //   console.log(e.target.value)
  // }
}

export default App;
