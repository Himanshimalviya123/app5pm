import { createSlice } from "@reduxjs/toolkit";
const Todoslice=createSlice({
    name:"todo",
    initialState:{
        task:[],
    },
    reducers:{
       addtask: (state,actions)=>{
    console.log(actions);
    state.task.push(actions.payload);
    }
} 
})
 export const  {addtask}=Todoslice.actions;
export default Todoslice.reducer;