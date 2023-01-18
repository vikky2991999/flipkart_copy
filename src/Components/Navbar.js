
import React from 'react';
import images from './image/logo.jpg'
import './navbar.css';



function Navbar() {
  return (
    <div className='navbar'>
    <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <img className='ms-5' src={images} alt="..."/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href='www.flipkart.com'>Shopping Cart</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="xyz"  type="search" placeholder="Search for products, brands and more" aria-label="Search"/>
       
      </form>
    </div>
  </div>
</nav>
</div>
  )
}

export default Navbar


