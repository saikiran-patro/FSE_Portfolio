import { createSlice } from "@reduxjs/toolkit";

const windowSlice=createSlice({

    name:"window",
    initialState:"About",
    reducers:{
        changeWindow:(state,action)=>{
            return action.payload;
        }
    }

})

export const { changeWindow } = windowSlice.actions;
export default windowSlice.reducer;