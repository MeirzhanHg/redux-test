export const inc = () => ({type: 'INC'})
export const dec = () => ({type: 'DEC'})
export const rnd = (value) => ({type: 'RND', payload: value})

export const add = (data) => ({type: 'ADD_PERSON', payload: data})
export const del = (id) => ({type: 'DEL_PERSON', payload: id})
export const change = (id) => ({type: 'CHANGE_CHECK', payload: id})