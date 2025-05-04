import { createSlice } from "@reduxjs/toolkit";
const Todoslice=createSlice({
    name:"todo",
    initialState:{
        task:[],
    },
    reducers:(state,actions)=>{
    console.log(actions);
    state.task.push(actions);
    }
    
})
export default Todoslice;