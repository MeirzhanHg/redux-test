import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector, useDispatch } from "react-redux";
import { addPerson, delPerson, changeCheck, editChange, setUpdateName } from './todoListSlice';

import TodoListItem from './todoListItem/TodoListItem';

import './todoList.css'

const TodoList = () => {
    const { list, counter } = useSelector(state => state.todo)
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [checked] = useState(false)
    const [edit] = useState(false)

    function render(arr) {
        return arr.map(item => {
            return (
                <CSSTransition key={item.id} timeout={500} classNames="list__item">
                    <TodoListItem {...item} onCheck={onCheck} changeEditBtn={onEdit} updateItem={(val, id) => updateItem(val, id)} />
                </CSSTransition>
            )
        })
    }

    const updateItem = (val, id) => {
        dispatch(setUpdateName({ val, id }))
    }

    const onEdit = (id) => {
        dispatch(editChange(id))
    }

    const onCheck = (id) => {
        dispatch(changeCheck(id))
    }

    const onDelete = () => {
        dispatch(delPerson())
    }

    const newPerson = () => {
        let newObj = {
            id: uuidv4(),
            name: name,
            checked,
            edit,
        }

        if (name.length) {
            dispatch(addPerson(newObj))
            setName('')
        }
    }

    const content = render(list)

    return (
        <>
            <div className="todo">
                <h4>Todo List <span>{counter}</span></h4>

                <div className="input mb-3">
                    <input type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="list-items mb-4">
                    <TransitionGroup>
                        {content}
                    </TransitionGroup>
                </div>
                <div className='btns'>
                    <button onClick={newPerson} className="btn btn-primary">Add Person</button>
                    <button onClick={onDelete} className="btn btn-primary">Delete Person</button>
                </div>
            </div>
        </>
    )
}

export default TodoList;