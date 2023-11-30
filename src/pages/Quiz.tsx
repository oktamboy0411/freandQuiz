import { useSelector } from "react-redux"
import { RootState } from "../redux/store/store"
import { useParams } from "react-router-dom"
import { Card, List } from "@material-tailwind/react"
import UserItem from "../components/common/UserItem"

function Quiz() {
  const { quizId } = useParams()
  const quiz = useSelector((state: RootState) => state.quizes.quizes.find(item => item.id === quizId))
  const friendsAnswers = useSelector((state: RootState) => state.friendAnswers.friendsAnswers.filter(item => quiz?.friendsAnswers.includes(item.id || "")))
  console.log(quiz);
  console.log(friendsAnswers);

  return (
    <div className="flex items-center justify-center flex-col gap-4 p-4">
      <p className=" text-pinkColor text-3xl font-bold">Your Quiz is Ready!</p>
      <p className=" text-pinkColor text-2xl font-bold">{quiz?.title}'s Quiz</p>
      <Card className="w-[800px]">
      <List>
        {friendsAnswers.map(item => <UserItem key={item.id} data={item}/>)}
      </List>
    </Card>
    </div>
  )
}

export default Quiz