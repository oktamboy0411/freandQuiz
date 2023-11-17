import { Button } from "@material-tailwind/react"
import { Link } from "react-router-dom"
import aboutSite from "../units/aboutSite"

function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      <p className=" font-bold text-2xl text-pinkColor">How well do your friends know you?</p>
      <ol>
        {aboutSite.map(item => <li key={item} className=" font-normal text-lg list-disc">{item}</li>)}
      </ol>
      <p className=" font-bold text-2xl text-pinkColor">Get started</p>
      <div className="flex items-center justify-center gap-4">
        <Link to={"/sign-in"}>
          <Button className="px-14 bg-pinkColor">Sign In</Button>
        </Link>
        <Link to={"/sign-up"}>
          <Button className="px-14 bg-pinkColor">Sign Up</Button>
        </Link>
      </div>
    </div>
  )
}

export default Home