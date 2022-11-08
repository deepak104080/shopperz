import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='row'>
        <div className='col-12 bg-warning bg-opacity-50'>
            <Link className="btn btn-info" to="/home">Home</Link>
            <Link className="btn btn-warning" to="/category/jewellery">Jewellery</Link>
            <Link className="btn btn-primary" to="/category/men's clothing">Mens' Clothing</Link>
            <Link className="btn btn-info" to="/category/electronics">Electronics</Link>
            <Link className="btn btn-warning" to="/category/women's clothing">Women's Clothing</Link>
        </div>
    </div>
  )
}

export default Menu
