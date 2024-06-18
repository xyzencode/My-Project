import React from "react";

const Navbar = React.lazy(() => import('@/components/Navbar'))
const Landing = React.lazy(() => import('@/layout/Landing/Landing'))
const Products = React.lazy(() => import('@/layout/Landing/products'))

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container">
        <Landing />
        <Products />
      </div>
    </div>
  )
}

export default App
