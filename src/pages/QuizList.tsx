import { useSelector } from "react-redux"
import { RootState } from "../redux/store/store"
import QuizItem from "../components/common/QuizItem"
import { List } from "@material-tailwind/react"

function QuizList() {
   const quizes = useSelector((state:RootState) => state.quizes.quizes )

  return (
    <div className="flex items-center justify-center flex-col gap-4 bg-gray-50 py-4">
      <p className=" font-bold text-2xl text-pinkColor">Quizes</p>
      <List className=" bg-white rounded-lg">
        {quizes.map(item => <QuizItem key={item.id} quiz={item}/>)}
      </List>
    </div>
  )
}

export default QuizList