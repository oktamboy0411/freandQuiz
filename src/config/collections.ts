import { collection } from "firebase/firestore";
import { db } from "./firebase";

export const userCollection = collection(db, "users");
export const quizCollection = collection(db, "quizes");
export const friendsAnswersCollection = collection(db, "friendsAnswers");
