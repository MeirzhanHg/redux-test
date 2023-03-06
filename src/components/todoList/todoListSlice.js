import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 3,
    list: [
        { id: 1, name: 'Meirzhan I.', checked: true, edit: true },
        { id: 2, name: 'Nursultan E.', checked: false, edit: false },
        { id: 3, name: 'Eldar K.', checked: false, edit: false },
    ]
}

const todoListSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addPerson: (state, action) => {
            state.list.push(action.payload)
            state.counter = state.list.length
        },
        delPerson: state => {
            state.list = state.list.filter(item => !item.checked)
            state.counter = state.list.length
        },
        changeCheck: (state, action) => {
            state.list = state.list.map(item => item.id === action.payload ?
                {...item, checked: !item.checked} : item    
            )
        },
        editChange: (state, action) => {
            state.list = state.list.map(item => item.id === action.payload ? {...item, edit: !item.edit} : item)
        },
        setUpdateName: (state, action) => {
            console.log(action);
            state.list = state.list.map(item => item.id === action.payload.id ? {...item, name: action.payload.val} : item)
        }
    }
})

const {actions, reducer} = todoListSlice;

export default reducer;
export const {
    addPerson,
    delPerson,
    changeCheck,
    editChange,
    setUpdateName
} = actions;