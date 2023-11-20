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
        },
        newQuiz: (state , action) => {
            state.quizes = action.payload
        },
        removeQuiz: (state , action) => {
            state.quizes = state.quizes.filter(item => item.id !== action.payload)
        }
    }
 })

 export const { addQuiz , newQuiz, removeQuiz} = quizesSlice.actions
 export default quizesSlice