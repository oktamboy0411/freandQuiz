import { createSlice } from "@reduxjs/toolkit";
import { quizType } from "../../types/quizType";

const initialState : {quizes: quizType[]} = {
    quizes: []
}

 const quizesSlice = createSlice({
    name: "quizes",
    initialState,
    reducers: {
        addQuiz: (state , action) => {
            state.quizes = [...state.quizes , action.payload]
        }
    }
 })

 export const { addQuiz } = quizesSlice.actions
 export default quizesSlice