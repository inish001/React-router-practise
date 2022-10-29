import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <>
    <div>
      Products :
      <input type="text" placeholder='Search Products' />
    </div>
    <nav className='primary-nav'>
        <Link to="FeaturedProducts">Featured Products</Link>
        <Link to="NewProducts">New Products</Link>
    </nav>
    <Outlet/>
    </>
  )
}

export default Products
