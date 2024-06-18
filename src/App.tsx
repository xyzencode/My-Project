import Navbar from "./components/Navbar"
import Landing from './layout/Landing';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container">
        <Landing />
      </div>
    </div>
  )
}

export default App
