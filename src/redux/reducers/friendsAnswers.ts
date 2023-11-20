import { createSlice } from "@reduxjs/toolkit";
import { friendsAnswersType } from "../../types/friendsAnswersType";

const initialState : {friendsAnswers: friendsAnswersType[]} = {
    friendsAnswers: []
}

 const friendsAnswersSlice = createSlice({
    name: "friendsAnswers",
    initialState,
    reducers: {
        addFriendsAnswers: (state , action) => {
            state.friendsAnswers = [...state.friendsAnswers , action.payload]
        },
        newFriendsAnswers: (state , action) => {
            state.friendsAnswers = action.payload
        },
        removeFriendsAnswers: (state , action) => {
            state.friendsAnswers = state.friendsAnswers.filter((item) => item.id !== action.payload)
        }
    }
 })

 export const { addFriendsAnswers , newFriendsAnswers} = friendsAnswersSlice.actions
 export default friendsAnswersSlice