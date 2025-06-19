import { Outlet } from "react-router";
import Navbar from "./nav/Navbar"

function App() {
  
  return (
    <div>
      <Navbar />
      <div className="container w-full mx-auto px-10 mt-24">
        <Outlet />
      </div>
    </div>
  )
}

export default App;
 