import React, { useState } from 'react';
const TodoList: React.FC = () => {

    const [item, setItem] = useState<string>("")
    const [todos, setTodos] = useState<string[]>([]);

    const HandlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItem(event.target.value)
    }

    const OnClickHandler = () => {
        setTodos([...todos, item])
        setItem("")
    }



    const OnDelete = (index: number) => {
        setTodos(todos.filter((_, i) => i !== index));
    };
    return (
        <>
            <p> Todo List</p>
            <input onChange={HandlerOnChange} value={item}></input>
            <button onClick={OnClickHandler}>add</button>
            {todos.map((ele, index) => (
                <>
                    <p>{ele}</p>
                    <button onClick={()=>OnDelete(index)}>Delete</button>
                </>
            ))}

        </>

    )
}
export default TodoList;


