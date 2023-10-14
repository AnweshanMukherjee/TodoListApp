import React, { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');

    const addTodo = () => {
        if (task !== '' && task.trim() !== '') {
            setTodos([...todos, task]);
            setTask('');
        }
    }

    const deleteTodo = (index) => {
        let newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    }

    const editTodo = (index) => {
        const editedTodo = prompt('Edit todo');
        if (editedTodo !== null && editedTodo.trim() !== '') {
            let newTodos = [...todos];
            newTodos[index] = editedTodo;
            setTodos(newTodos);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <h1>To-Do List</h1>
                    <div className="input-group" style={{ marginTop: 40 }}>
                        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} className="form-control" placeholder="Task Description" aria-label="Task Description" aria-describedby="button-addon2"/>
                        <div className="input-group-append text-center">
                            <button className="btn btn-dark" type="button" id="button-addon2" onClick={addTodo}>Add Task</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
            <hr color="black"/>
            {
                todos.map((todo, index) => (
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="input-group col-md-6" style={{ marginTop: 40 }}>
                            <p className="form-control" aria-describedby="button-addon2">{todo}</p>
                            <div className="input-group-append" id="button-addon">
                                <button className="btn btn-dark" onClick={() => editTodo(index)}>Edit Task</button>
                                <button className="btn btn-dark" onClick={() => deleteTodo(index)}>Delete Task</button>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                ))
            }
        </div>
    );
}

export default TodoList;
