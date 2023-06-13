import React from 'react';

function TodoList({ item }) {
    return (
        <div style={{ position: "relative" }}>{item}<span style={{ position: "absolute", left: "76%", marginRight: "10px" }}><i class="fa-solid fa-circle-check"></i><i style={{ marginRight: "10px" }} class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash-can"></i></span></div>
    )
}

export default TodoList