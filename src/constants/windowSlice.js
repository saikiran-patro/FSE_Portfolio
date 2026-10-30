import { createSlice } from "@reduxjs/toolkit";

const windowSlice=createSlice({

    name:"window",
    initialState:"Home",
    reducers:{
        changeWindow:(state,action)=>{
            return action.payload;
        }
    }

})

export const { changeWindow } = windowSlice.actions;
export default windowSlice.reducer;
