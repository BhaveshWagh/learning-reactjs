import {configureStore} from '@reduxjs/toolkit'
import todoReducer from "../features/todo/todoslice"

// store is created
export const store = configureStore({
    reducer: todoReducer
})