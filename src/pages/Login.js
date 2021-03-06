import React from 'react'
import logo from '../assets/bootstrap-logo.svg';

const Login = () => {
    return (
        <main className="form-signin mx-auto w-25 my-5">
        <form style={{color:"blue"}}>
            <div className= "row mx-auto w-25 my-5 ">
          <img className="mb-4" src={logo}  alt="" width="25px" height="45px"/>
          </div>
          <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>
      
          <div className="form-floating my-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label htmlFor="floatingPassword">Password</label>
          </div>
      
          <div className="checkbox my-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted">&copy; IPF- 2019–2021- Tecnicatura Superior en Desarrollo de Software</p>
        </form>
      </main>
      
    )
}

export default Login
