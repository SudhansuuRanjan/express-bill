import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Contact from "../pages/Contact"
import Features from "../pages/Features"
import Home from "../pages/Home"
import Upcoming from "../pages/Upcoming"
import NavBar from "../components/NavBar"

const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <div className='flex items-center justify-center relative pt-20'>
        <div className='artboard min-h-[90vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/upcoming" element={<Upcoming />} />
          </Routes>
        </div>
      </div>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </Router>
  )
}

export default AppRoutes;