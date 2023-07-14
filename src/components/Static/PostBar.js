import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Upvote from '@mui/icons-material/ArrowCircleUp';
import Downvote from '@mui/icons-material/ArrowCircleDown';
import Share from '@mui/icons-material/Share';
import PostAdd from '@mui/icons-material/PostAdd';
import { Button } from '@mui/material';
import Cookies from "js-cookie";

export default function PostBar({userId}) {
  const shouldShowDelete = userId == Cookies.get('userId');
  return (
   <div>

     <Stack direction="row" alignItems="end" spacing={2}>
   
           <IconButton><PostAdd sx={{ fontSize: 30,color: 'black'  }} /> </IconButton>
            <IconButton><Share sx={{ fontSize: 30  }} /> </IconButton>
             <IconButton><Upvote sx={{ fontSize: 30 ,color: 'green' }} /> </IconButton>
             <IconButton><Downvote sx={{ fontSize: 30 ,color: 'red' }} /> </IconButton>
             {shouldShowDelete && (
             <IconButton aria-label="delete" > <DeleteIcon fontSize="inherit" sx={{fontSize: 30 }}/></IconButton>
              )}
    </Stack> 
   </div>
  );
}