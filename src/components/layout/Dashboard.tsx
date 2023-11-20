import { Outlet } from "react-router-dom";
import { RootState } from "../../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import GetStarted from "../common/GetStarted";
import Header from "../ui/Header";
import { useEffect } from "react";
import { getDocs } from "firebase/firestore";
import {
  friendsAnswersCollection,
  quizCollection,
} from "../../config/collections";
import { newQuiz } from "../../redux/reducers/quizesReducer";
import { newFriendsAnswers } from "../../redux/reducers/friendsAnswers";

function Dashboard() {
  const user = useSelector((state: RootState) => state.user.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const data = await getDocs(quizCollection);
        const filteredData = data.docs
          .filter((item) => user.quizes.includes(item.id))
          .map((item) => ({ ...item.data(), id: item.id }));
        dispatch(newQuiz(filteredData));
        console.log(filteredData);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const data = await getDocs(friendsAnswersCollection);
        const filteredData = data.docs.map((item) => ({
          ...item.data(),
          id: item.id,
        }));
        dispatch(newFriendsAnswers(filteredData));
        console.log(filteredData);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <>
      {"userId" in user ? (
        <>
          <Header />
          <Outlet />
        </>
      ) : (
        <div className=" p-4 flex items-center justify-center gap-4 flex-col">
          <p className=" font-bold text-2xl text-pinkColor">
            you must register first
          </p>
          <GetStarted />
        </div>
      )}
    </>
  );
}

export default Dashboard;
