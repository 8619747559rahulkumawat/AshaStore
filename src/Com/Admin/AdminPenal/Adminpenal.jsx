import React from 'react'
import './Admin.css'
import { Link } from 'react-router-dom'

const Adminpenal = () => {
  return (
    <>
    <div className="Admin-Header">
      <ul>
        <li> <Link to='/Product'>Product</Link> </li>
        <li> <Link to='/AddProduct'>Add-Product</Link> </li>
        <li> <Link to='/UpdateProduct'>Update-Product</Link> </li>
        <li> <Link to='/Users'>User-Profile</Link> </li>
      </ul>
    </div>
    </>
  )
}

export default Adminpenal