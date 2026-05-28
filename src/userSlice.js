import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const userSlice = createSlice({
    name:"user",
    initialState:{name:"",isLoggedIn:false},
    reducers:{
        login:(state,action)=>{
            state.name = action.payload
            state.isLoggedIn = true
        },
        logout:(state)=>{
            state.name="",
            state.isLoggedIn=false
        }
    }
})
export const {login,logout} = userSlice.actions
export default userSlice.reducer