import { useState } from "react";

const TodoListItem = ({ name, checked, id, edit, onCheck, changeEditBtn, updateItem }) => {
    const [inputName, setInputName] = useState(name)

    let clazz = checked ? 'line opacity-50' : null;

    const updateName = (e, id) => {
        let val = e.target.value

        console.log(id);

        setInputName(val)
        updateItem(val, id)
    }

    return (
        <div className="list-item mb-2">
            <ul className='list-group'>
                <li className="list-group-item wrapper">
                    <input className={`form-control name ${clazz}`} 
                        aria-label="Disabled input example"
                        value={inputName} 
                        onChange={(e) => updateName(e, id)}
                        disabled={edit}/>
                    <div className="checkbox_input">
                        <input type="checkbox"
                            checked={checked}
                            className='form-check-input'
                            onChange={() => onCheck(id)}
                        />
                    </div>
                    <button className="btn btn-primary" onClick={() => changeEditBtn(id)} >
                        <div className="btn_wrapper">
                            <div className="edit">Edit</div>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                </svg>
                            </div>
                        </div>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default TodoListItem;