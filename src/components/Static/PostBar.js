import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import Downvote from '@mui/icons-material/ArrowCircleDown';
import Share from '@mui/icons-material/Share';
import { Button } from '@mui/material';
import Cookies from "js-cookie";
import SavePostButton from './SaveButton';
import UpvoteButton from './UpvoteButton';
import DownvoteButton from './DownvoteButton';

export default function PostBar({userId, postId}) {
  const shouldShowDelete = userId == Cookies.get('userId');
  return (
   <div>

     <Stack direction="row" alignItems="end" spacing={2}>
   
      <SavePostButton postId={ postId }></SavePostButton>
            <IconButton><Share sx={{ fontSize: 30  }} /> </IconButton>
             <UpvoteButton postId={ postId }></UpvoteButton>
             <DownvoteButton postId={postId}></DownvoteButton>
             {shouldShowDelete && (
             <IconButton aria-label="delete" > <DeleteIcon fontSize="inherit" sx={{fontSize: 30 }}/></IconButton>
              )}
    </Stack> 
   </div>
  );
}