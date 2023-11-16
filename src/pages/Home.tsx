import { Button } from "@material-tailwind/react"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      <p className=" font-bold text-2xl text-pinkColor">How well do your friends know you?</p>
      <ol>
        <li className=" font-normal text-lg list-disc">Choose your region.</li>
        <li className=" font-normal text-lg list-disc">Enter your name.</li>
        <li className=" font-normal text-lg list-disc">Answer 10 Questions about yourself.</li>
        <li className=" font-normal text-lg list-disc">Your quiz link will be created.</li>
        <li className=" font-normal text-lg list-disc">Share your quiz link with your friends.</li>
        <li className=" font-normal text-lg list-disc">Your friends will try to answer your questions.</li>
        <li className=" font-normal text-lg list-disc">Check the results at your quiz link!</li>
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