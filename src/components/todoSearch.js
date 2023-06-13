import React, { useState } from 'react';
import Styles from '../App.module.scss';
import TodoList from './todoList';
import { uuid } from 'uuidv4';

function TodoSearch() {
    const [todoList, setTodoList] = useState([])
    const [inputVal, setInputVal] = useState('')
    const handleTodoList = () => {
        let todo = [...todoList];
        todo.push(inputVal)
        console.log("inputVal,todo,todoList", inputVal, todo, todoList)
        setTodoList([...todo])
        setInputVal('')
    }
    const handleInputVal = (e) => {
        setInputVal(e.target.value)
    }
    console.log("todo", todoList)
    return (
        <>
            <div className={Styles.inputContainer}>
                <input placeholder='Type Todo' value={inputVal} onChange={handleInputVal} className={Styles.inputBox}>
                </input>
                <button className={Styles.inputBtn} onClick={handleTodoList}>Add</button>
            </div>
            {todoList.length > 0 && todoList.map(item => {
                return (
                    <div id={uuid} className={Styles.todoContainer}>
                        <TodoList item={item} />
                    </div>
                )
            })}
        </>
    )
}

export default TodoSearch