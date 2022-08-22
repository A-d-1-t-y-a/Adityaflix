import { createSlice } from "@reduxjs/toolkit"
export const counterSlice=createSlice({
    name:'counter',
    initialState:{count:0,toggle:true},
    reducers:{
        increment:(state)=>{state.count+=1;},
        decrement:(state)=>{state.count-=1;},
        showtoggle:(state)=>{state.toggle=!state.toggle}
    }})
export const ad=counterSlice.actions
export default counterSlice.reducer