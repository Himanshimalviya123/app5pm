import { createSlice } from "@reduxjs/toolkit";
const nameslice=createSlice({
    name:"myname",
    initialState:{
        user:"tinku"
    },
    reducers:{
        user:(state)=>{
        state.user="sakshi"
    }
}
})
export const {changename}=nameslice.actions;
export default nameslice.reducer;