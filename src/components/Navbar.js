import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand"style={{color:"yellow"}}  to="/#">IPF-APP</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" style={{color:"red"}} to="/home">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" style={{color:"lightgreen"}} to="/post">Post</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" style={{color:"lightblue"}} to="/users">Users</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" style={{color:"orange"}}  to="/login">Login</Link>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar
