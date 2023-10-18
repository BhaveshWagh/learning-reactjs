import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        updateTodo:(state, action) => {
            const {id, text} = action.payload
            const isUpdate = state.todos.find( (todo) => todo.id === id)
            // isUpdate ?  updateTodo.text = text : ""
            if(isUpdate){
                updateTodo.text = text
            }
        }, 
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
              
    }
})
    
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer

// updateTodo: (state, action) => {
//     const {id,text} = action.payload
//     const todoToUpdate = state.todos.find( (todo) => todo.id === id)
//     if(todoToUpdate){
//         todToUpdate.text = text;//
//     }
// }