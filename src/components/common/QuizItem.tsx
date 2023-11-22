import { useState } from "react";
import { quizType } from "../../types/quizType";
import ModalConfirm from "./ModalConfirm";
import { Button, ListItem } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeQuiz } from "../../redux/reducers/quizesReducer";
import { setLoader } from "../../redux/reducers/loaderReducer";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";

function QuizItem({ quiz }: { quiz: quizType }) {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((prev) => !prev);

  const deleteQuiz = () => {
    (async () => {
      dispatch(setLoader(true))
      try {
        const userDoc = doc(db , "quizes", quiz.id || "") 
        await deleteDoc(userDoc)
        quiz.friendsAnswers.forEach( async (item) => {
          const friendsAnswersDoc = doc(db , "friendsAnswers" , item)
          await deleteDoc(friendsAnswersDoc)
        })
        dispatch(removeQuiz(quiz.id))
      } catch (error) {
        console.error(error); 
      }
      dispatch(setLoader(false))
    })();
  }

  return (
    <ListItem className="flex items-center justify-between w-96">
      <ModalConfirm
        title={<>siz bu quizni o'chirmoqchimisiz</>}
        {...{ open, handleOpen }}
        callBack={deleteQuiz}
      />
      <Link to={`/dashboard/${quiz.id}`} className="w-full p-3">
        <p className="font-normal text-lg list-disc">{quiz.title}</p>
      </Link>
      <Button className="px-14 flex items-center justify-center" color="red" onClick={handleOpen}>
        <span>Delete</span>
      </Button>
    </ListItem>
  );
}

export default QuizItem;
