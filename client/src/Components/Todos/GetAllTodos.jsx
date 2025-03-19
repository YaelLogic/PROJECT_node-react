import Axios from 'axios'
import { useEffect, useState } from 'react';


const GetAllTodos = () => {

    const [allTodos, setAllTodos] = useState([])

    const connectTodos = async () => {
        setAllTodos = await (await Axios.get("http://localhost:1100/todo/getAllTodos")).data
    }

    useEffect(() => {
        connectTodos()
    }, [])

    if (allTodos.length === 0)
        return <h1>
            Loading...
        </h1>
    return (
        <>
        {allTodos.map((todo)=>{
            return<> {todo.title}</>
        })}
        </>
    );
}

export default GetAllTodos;

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import Divider from '@mui/material/Divider';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Fab from '@mui/material/Fab';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import CheckIcon from '@mui/icons-material/Check';

// export default function IntroDivider() {
//   return (
//     <Card variant="outlined" sx={{ maxWidth: 360 }}>
//       <Box sx={{ p: 2 }}>
//         <Stack
//           direction="row"
//           sx={{ justifyContent: 'space-between', alignItems: 'center' }}
//         >
//           <Typography gutterBottom variant="h5" component="div">
//             Toothbrush
//           </Typography>
//           <Typography gutterBottom variant="h6" component="div">
//             $4.50
//           </Typography>
//         </Stack>
//         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//           Pinstriped cornflower blue cotton blouse takes you on a walk to the
//           park or just down the hall.
//         </Typography>
//       </Box>
//       <Divider />
//       <Box sx={{ p: 2 }}>
//         <Stack direction="row" spacing={1}>
//           <ico color="primary" label="Soft" size="small" />
//           <Box sx={{ '& > :not(style)': { m: 1 } }}>
//             <Fab color="primary" aria-label="bool">
//               <DeleteIcon />
//             </Fab>
//             <Fab color="secondary" aria-label="edit">
//               <EditIcon />
//             </Fab>
//             <Fab variant="extended">
//               <CheckIcon sx={{ mr: 1 }} />
//               complited
//             </Fab>
//           </Box>
//         </Stack>
//       </Box>
//     </Card>
//   );
// }
