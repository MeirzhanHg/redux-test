import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        inc: state => {
            state.counter++
        },
        dec: state => {
            state.counter-- 
        },
        rnd: (state, action) => {
            state.counter = state.counter * action.payload
        }
    }
})

const {actions, reducer} = counterSlice

export default reducer;

export const {
    inc, 
    dec, 
    rnd
} = actions;
