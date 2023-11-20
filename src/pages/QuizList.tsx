import { useSelector } from "react-redux"
import { RootState } from "../redux/store/store"
import QuizItem from "../components/common/QuizItem"

function QuizList() {
   const quizes = useSelector((state:RootState) => state.quizes.quizes )

  return (
    <div>
      <p className=" font-bold text-2xl text-pinkColor">Quizes</p>
      <div>
        {quizes.map(item => <QuizItem key={item.id} quiz={item}/>)}
      </div>
    </div>
  )
}

export default QuizList