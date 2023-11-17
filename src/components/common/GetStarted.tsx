import { Button } from "@material-tailwind/react"
import { Link } from "react-router-dom"

function GetStarted() {
  return (
    <div className="flex items-center justify-center gap-4">
        <Link to={"/sign-in"}>
          <Button className="px-14 bg-pinkColor">Sign In</Button>
        </Link>
        <Link to={"/sign-up"}>
          <Button className="px-14 bg-pinkColor">Sign Up</Button>
        </Link>
    </div>
  )
}

export default GetStarted