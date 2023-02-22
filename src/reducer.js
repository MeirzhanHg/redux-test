
// СОСТОЯНИЕ
const initialState = {
    counter: 0,
    list: [
        { id: 1, name: 'Meirzhan I.', checked: true },
        { id: 2, name: 'Nursultan E.', checked: false },
        { id: 3, name: 'Eldar K.', checked: false },
    ]
}

// REDUCER КОТОРЫЙ МЕНЯЕТЬ СОСТОЯНИЕ ПРИЛОЖЕНИЕ
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC":
            return {
                ...state,
                counter: state.counter + 1
            }
        case "DEC":
            return {
                ...state,
                counter: state.counter - 1
            }
        case "RND":
            return {
                ...state,
                counter: state.counter * action.payload
            }
        case "ADD_PERSON":
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case "DEL_PERSON":
            return {
                ...state,
                list: state.list.filter(item => !item.checked)
            }
        case "CHANGE_CHECK":
            return {
                ...state,
                list: state.list.map(item => item.id === action.payload ? 
                    {...item, checked: !item.checked} : item
                )
            }
        default:
            return state;
    }
}

export default reducer;