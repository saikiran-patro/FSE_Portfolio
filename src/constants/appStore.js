import { configureStore } from '@reduxjs/toolkit'
import windowSlice from './windowSlice'

const appStore= configureStore({
   reducer:{
      window:windowSlice

   }

})


export default appStore;