import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
        { id: 1, name: 'Meirzhan I.', checked: true },
        { id: 2, name: 'Nursultan E.', checked: false },
        { id: 3, name: 'Eldar K.', checked: false },
    ]
}

const todoListSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addPerson: (state, action) => {
            state.list.push(action.payload)
        },
        delPerson: state => {
            state.list = state.list.filter(item => !item.checked)
        },
        changeCheck: (state, action) => {
            state.list = state.list.map(item => item.id === action.payload ?
                {...item, checked: !item.checked} : item    
            )
        }
    }
})

const {actions, reducer} = todoListSlice;

export default reducer;
export const {
    addPerson,
    delPerson,
    changeCheck
} = actions;