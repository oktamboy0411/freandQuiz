import { useSelector } from "react-redux"
import { RootState } from "../../redux/store/store"
import { BarLoader } from "react-spinners"
import colors from "../../units/colors"

function Loader() {
    const loader = useSelector((state: RootState) => state.loader.value)

  return (
    <div className={`${loader ? "" : " hidden"} fixed w-full h-screen left-0 top-0 bg-gray-300/40 flex items-center justify-center text-white`}>
      <BarLoader width={"50%"} height={7} color={colors.pinkColor} />
    </div>
  )
}

export default Loader