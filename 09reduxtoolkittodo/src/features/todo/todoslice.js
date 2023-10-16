import {createSlice, nanoid} from "@reduxjs/toolkit"
// nanoid is unique id generator

const initialState = {
    todos:[{id:1, text:"chai"}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state, action) => {
            const todo = {
                id:nanoid(),
                text:action.payload,
            }
            state.todos.push(todo)
        }, //remember: always you got to things 1.state 2.action
        removeTodo: (state,action) => {
            state.todos = state.todos.filter( (todo) => todo.id !== action.payload )
        },
        updateTodo: (state,action) => {
            state.todos = state.todos.map( (todo) => todo.id === action.payload )
            console.log("update")
        }
    } // reducers have properties and functions
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer