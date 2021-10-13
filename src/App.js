import Navbar from './components/Navbar';
import Login from './pages/Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import Users from './pages/Users';



function App() {
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
      <Routing/>
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
