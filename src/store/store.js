import { configureStore } from "@reduxjs/toolkit"
import {reducerTheme} from "./reducer/themeReducer"
import { sendMailReducer } from "./reducer/mailReducer"

export const store = configureStore({
	reducer:{
        reducerTheme: reducerTheme,
        sendMailReducer: sendMailReducer
    }
})
