import React, { useState } from "react";
import './TodoList.css';

const TodoList = () =>{
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');


    const handleKeyDown = (e) =>{
        if(e.key === 'Enter'){
            if(input.trim() !== ''){
                setTodos([...todos, {text: input, completed: false}]);
                setInput('');
            }
        }
    };
    const toggleTodo = (i) =>{
        const newTodos = [...todos];
        newTodos[i].completed = !newTodos[i].completed;
        setTodos(newTodos);
    }

    return(
        <div className="TodoList">
        <div className="todo-list">
            <h2>Todo List</h2>
            <div className="todos">
                {todos.map((todo, i) =>(
                    <div
                    key={i}
                    className={`todo ${todo.completed ? 'completed': ''}`}
                    onClick={() => toggleTodo(i)}
                    >
                        {todo.text}
                    </div>
                ))};
                <input
                type="text"
                placeholder="Add a new task here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                />
            </div>
        </div>
        </div>
    )
}

export default TodoList;