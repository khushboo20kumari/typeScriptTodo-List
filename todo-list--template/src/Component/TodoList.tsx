import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
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
                <Card sx={{ maxWidth: 400, position: "relative", top: "100px", boxShadow: "4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38)", background: "white" }}>
                    <CardContent >
                        <img style={{ width: "100%", height: "200px" }} src="https://media.istockphoto.com/photos/spiral-bound-notebook-with-todo-list-on-white-wooden-table-with-and-picture-id1193498585?b=1&k=20&m=1193498585&s=170667a&w=0&h=fqPhCl9SoRJPWI9Knz800Ctg7cxc0GCbSREAf3oV03A=" alt="" />
                        <Grid container spacing={2}>

                            <Grid item xs={9} md={9} lg={9} sm={9}>
                                <TextField fullWidth id="outlined-basic" label="Todo List....." variant="outlined" onChange={HandlerOnChange} value={item} style={{ position: "relative", top: "10px"}} />
                            </Grid>
                            <Grid item xs={2} md={2} lg={2} sm={2} style={{ color: "red" }}>
                                <Button variant="contained" onClick={OnClickHandler} style={{ fontSize: "20px", margin: "10px", position: "relative" }}>Add</Button>
                            </Grid>
                        </Grid>
                        <center>
                            <div className='todoList'>
                                <Grid container spacing={2}>
                                    {todos.map((ele, index) => (
                                        <div style={{ position: "relative", top: "20px" }}>
                                            <Grid container spacing={2}>
                                                <Grid item md={8} sm={8} xs={8} lg={8} style={{ margin: "10px" }}>
                                                    <TextField fullWidth id="outlined-basic" label={ele} variant="outlined" style={{
                                                        position: "relative", top: "10px", left: "50px", color: "black", background: "linear-gradient(45deg, hsl(46, 82%, 84%), hsl(283, 54%, 85%)"
                                                    }} ></TextField>


                                                </Grid>
                                                <Grid item md={1} sm={1} xs={1} lg={1} style={{ margin: "10px", position: "relative", top: "20px", left: "20px" }}>
                                                    < DeleteIcon onClick={() => OnDelete(index)} />
                                                </Grid>
                                                <Grid item md={1} sm={1} xs={1} lg={1} style={{ margin: "5px", position: "relative", top: "26px", left: "10px" }}>
                                                    <ModeEditIcon />
                                                </Grid>
                                            </Grid>
                                        </div>
                                    ))}
                                </Grid>
                            </div>
                        </center>
                    </CardContent >
                </Card >
            </center >
        </>
    )
}
export default TodoList;




