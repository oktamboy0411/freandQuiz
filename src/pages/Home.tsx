
import GetStarted from "../components/common/GetStarted"
import aboutSite from "../units/aboutSite"

function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      <p className=" font-bold text-2xl text-pinkColor">How well do your friends know you?</p>
      <ol>
        {aboutSite.map(item => <li key={item} className=" font-normal text-lg list-disc">{item}</li>)}
      </ol>
      <p className=" font-bold text-2xl text-pinkColor">Get started</p>
      <GetStarted />
    </div>
  )
}

export default Home