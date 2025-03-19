import * as React from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { colors } from '@mui/material';



  
const CardTodo = ({handelDelete,props }) => {
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

export default CardTodo