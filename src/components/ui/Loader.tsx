import { useSelector } from "react-redux"
import { RootState } from "../../redux/store/store"

function Loader() {
    const loader = useSelector((state: RootState) => state.loader.value)

  return (
    <div className={`${loader ? "" : " hidden"} fixed w-full h-screen left-0 top-0 bg-blue-gray-300/60 flex items-center justify-center text-white`}>Loader</div>
  )
}

export default Loader