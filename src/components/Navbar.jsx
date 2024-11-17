import React from 'react'
import { Link } from 'react-router-dom'

// const handleToggleMode=(props)=>{
//   if (props.Mode==="dark"){
//     console.log("Dark mode")
//   }
//   else{
//     console.log("light Mode")
//   }
// }
export default function Navbar(props) {
  return (
    <div id="myNavbar" >
      <nav className="navbar navbar-expand-lg bg-light" navbar={props.Mode} bg={props.Mode} >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.Heading}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
          <button type="button" className="btn btn-dark mx-2" onClick={props.toggleMode} id='toggleBtn'>{props.Mode==="light"?"Enable Dark Mode":"Enable Light Mode"}</button>

        </div>
      </nav>
    </div>
  )
}
