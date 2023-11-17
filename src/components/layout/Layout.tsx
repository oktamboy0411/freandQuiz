import { Outlet } from "react-router-dom"
import Navbar from "../ui/Navbar"
import Footer from "../ui/Footer"
import Loader from "../ui/Loader"

function Layout() {
  return (
    <div>
        <Loader />
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout