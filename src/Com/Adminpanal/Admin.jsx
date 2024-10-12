import React from 'react'
import './Admin.css'
const Admin = () => {
  return (
    <div>
      <header className="Adminpanal ">
              <div className="container mx-auto flex justify-between items-center py-4">
                <div>
                  <a href="#" className="text-xl font-bold">
                  ASHA BARTHAN STORE
                  </a>
                </div>
                <nav>
                  <ul className="flex space-x-4">
                    <li>
                     
                        Home
                     
                    </li>
                    <li>
                     
                        Shop
                      
                    </li>
                    <li>
                      
                        About
                     
                    </li>
                    <li>
                      
                        Contact
                     
                    </li>
                  </ul>
                </nav>
                <div>
                  <a href="#" className="text-secondary">
                    <img src="https://placehold.co/30?text=🛒" alt="cart" className="mr-2" />
                    Cart
                  </a>
                </div>
              </div>
            </header>
    </div>
  )
}

export default Admin
