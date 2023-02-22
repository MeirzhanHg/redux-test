import { v4 as uuidv4 } from 'uuid';

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, del, change } from '../../actions';

import './todoList.css'

const TodoList = () => {
    const list = useSelector(state => state.list)
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [check, setCheck] = useState(false)

    function render(arr) {
        return arr.map((item, i) => {
            let clazz = item.checked ? 'line' : null;
            return (
                <div className="item" key={i}>
                    <div>
                        <div className='wrapper'>
                            <div className={`name ${clazz}`}>{item.name}</div>

                            <input type="checkbox"
                                checked={item.checked}
                                onChange={() => onCheck(item.id)}
                            />
                        </div>
                    </div>
                </div>
            )
        })
    }

    function onCheck(id) {
        dispatch(change(id))
    }

    function addPerson() {
        let newObj = {
            id: uuidv4(),
            name: name,
            checked: check,
        }

        dispatch(add(newObj))
        setName('')
    }

    function delPerson() {
        dispatch(del())
    }

    const content = render(list)

    return (
        <>
            <div className="todo">
                <h4>Todo List</h4>

                <div className="input">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                {content}

                <button onClick={addPerson} className="btn btn-primary">Add Person</button>
                <button onClick={delPerson} className="btn btn-primary">Delete Person</button>
            </div>
        </>
    )
}

export default TodoList;