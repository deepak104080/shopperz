import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='row'>
        <div className='col-12 bg-warning bg-opacity-50'>
            <Link to="/home">Home</Link>
            <Link to="/category/jewelery">Jewellery</Link>
            <Link to="/category/men's clothing">Mens' Clothing</Link>
            <Link to="/category/electronics">Electronics</Link>
            <Link to="/category/women's clothing">Women's Clothing</Link>
        </div>
    </div>
  )
}

export default Menu
