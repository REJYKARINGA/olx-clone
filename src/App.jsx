import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRouter from './components/ProtectedRouter'
import OptionItem from './components/OptionItem'
import Profile from './pages/Profile'
import ProductDetails from './components/ProductDetails'
import BannerApp from './components/BannerApp'
import FooterAboutus from './components/FooterAboutus'
import Footer from './components/Footer'
import CategoryPage from './components/CategoryPage'
// Lazy load the Profile component

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <OptionItem />
        
        {/* <ProductItem /> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/productId' element={<ProductDetails />} />
            <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/:category" element={<CategoryPage />} />
          </Routes>
        </Suspense>
      </AuthContextProvider>
      <BannerApp />
      <FooterAboutus />
      <Footer />
    </>
  )
}

export default App
