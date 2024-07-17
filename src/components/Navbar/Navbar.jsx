import React  from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
export default function Navbar() {
  return (
    <div  >
       <nav className="navbar navbar-expand-lg position-fixed top-0 p-1 z-3 col-md-6 col-lg-12 bg-light " >
        <div className="container">
          <h5 className="mb-0  text-black fs-3 fw-bold">
          Customers Transactions
          </h5>

          
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
            <Link className="nav-link fw-bold text-black active" to="home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bold text-black" to="customer">Customers</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bold text-black" to="transaction">Filter & Chart</Link>
          </li>
          
              
            </ul>
            
          </div>
        </div>
      </nav>

   
    </div>
  )
}
