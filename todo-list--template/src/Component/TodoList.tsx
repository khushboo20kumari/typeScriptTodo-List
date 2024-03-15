import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
            <center>
                <Card sx={{ maxWidth: 500 }}>
                    <CardContent>
                        <p className='title'>Todo List</p>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={HandlerOnChange} value={item} />
                        <Button variant="contained" onClick={OnClickHandler}>Add</Button>
                        <div className='todoList'>
                            {todos.map((ele, index) => (
                                <div key={index} className='todoItem'>
                                    <p>{ele}</p>
                                    <button onClick={() => OnDelete(index)}>Delete</button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </center>
        </>
    )
}
export default TodoList;




// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// function ImgMediaCard() {
//     return (
//         <center>
//             <Card sx={{ maxWidth: 345 }}>

//                 <CardContent>

//                 </CardContent>

//             </Card>
//         </center>
//     );
// }

// export default ImgMediaCard;