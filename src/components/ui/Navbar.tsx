import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="w-full flex items-center justify-center py-9 bg-bgGray shadow-bgGrayShadow">
        <Link to={"/"}>
           <img className=" w-72" src="/images/FriendQuiz.png" alt="icon" />
        </Link>
    </div>
  )
}

export default Navbar