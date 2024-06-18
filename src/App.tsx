import React from "react";

const Navbar = React.lazy(() => import('@/components/Navbar'))
const Landing = React.lazy(() => import('@/layout/Landing/Landing'))
const Products = React.lazy(() => import('@/layout/Landing/products'))

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="px-8 md:px-44 pb-16 flex flex-col gap-24">
        <Landing />
        <Products />
      </div>
    </div>
  )
}

export default App
