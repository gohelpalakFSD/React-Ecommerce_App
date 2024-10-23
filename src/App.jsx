import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home';
import ProductDetails from './ProductDetails';
import Header from './Navbar';
import SignUp from './Auth/SingUp';
import SignIn from './Auth/SignIn';



function App() {
 

  return (
    <>
        
          <BrowserRouter>
            <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productdetails/:id" element={<ProductDetails/>} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/signIn" element={<SignIn />} />
              </Routes>
          </BrowserRouter>
        
    </>
  )
}

export default App
