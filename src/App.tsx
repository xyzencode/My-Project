import React from "react";

const Loading = React.lazy(() => import('@/components/Loading'))
const Navbar = React.lazy(() => import('@/components/Navbar'))
const Landing = React.lazy(() => import('@/layout/Landing/Landing'))
const Products = React.lazy(() => import('@/layout/Landing/products'))

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);

  if (loading) {
    return <Loading />;
  }

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
