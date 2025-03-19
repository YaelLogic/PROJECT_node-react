
import Axios from 'axios'
import { useEffect, useState } from 'react'
import CardTodo from './CardTodo'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const GetAllTodos = () => {

    const addTodo=()=>{
        return (
            <Card variant="outlined" sx={{ maxWidth: 360 }}>
              <Box sx={{ p: 2 }}>
                <Stack
                  direction="row"
                  sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    {props.createdAt}
                  </Typography>
                </Stack>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {props.tags}
                </Typography>
              </Box>
              <Divider />
              <Box sx={{ p: 2 }}>
                <Stack direction="row" spacing={1}>
                  <ico color="primary" label="Soft" size="small" />
                  <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Fab color="primary" aria-label="bool" onClick={()=>handelDelete(props._id)}>
                      <DeleteIcon />
                    </Fab>
                    <Fab color="secondary" aria-label="edit" >
                      <EditIcon />
                    </Fab>
                    <Fab variant="extended">
                      <CheckIcon sx={{ mr: 1 }} />
                      complited
                    </Fab>
                  </Box>
                </Stack>
              </Box>
            </Card>
        );

    }
    
    const saveTodo= async()=>{

        
    }


    const handelDelete = async (id) => {
        //console.log("connectTodos")
        await Axios.delete(`http://localhost:1100/todo/deleteTodo/${id}`);
        connectTodos()
    }
    const [allTodos, setAllTodos] = useState([])

    const connectTodos = async () => {
        const res = await Axios.get("http://localhost:1100/todo/getAllTodos")
        setAllTodos(res.data)
    }

    useEffect(() => {
        connectTodos()
    }, [])

    if (allTodos.length === 0)
        return <h1>
            Loading...
        </h1>
    return (
        <div>
            {allTodos.map((todo) => {
                return <> {<CardTodo handelDelete={handelDelete} props={todo} />}</>
            })}
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab color="secondary" aria-label="add" onClick={cr}>
                    <AddIcon />
                </Fab>
            </Box>
        </div>

    );
}

export default GetAllTodos;


// export default function IntroDivider() {

// }
