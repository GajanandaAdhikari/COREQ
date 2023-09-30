import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';


import Downvote from '@mui/icons-material/ArrowCircleDown';
import Share from '@mui/icons-material/Share';
import { Button } from '@mui/material';
import Cookies from "js-cookie";
import SavePostButton from './SaveButton';
import UpvoteButton from './UpvoteButton';
import DownvoteButton from './DownvoteButton';
import DeleteButton from './DeleteButton';

export default function PostBar({userId, postId,voteStatus,savedStatus}) {
  const shouldShowDelete = userId == Cookies.get('userId');
  return (
   <div>

     <Stack direction="row" alignItems="end" spacing={2}>
   
      <SavePostButton postId={ postId } savedStatus={savedStatus}></SavePostButton>
            <IconButton><Share sx={{ fontSize: 30  }} /> </IconButton>
             <UpvoteButton postId={ postId } voteStatus={voteStatus}></UpvoteButton>
             <DownvoteButton postId={postId} voteStatus={voteStatus}></DownvoteButton>
             {shouldShowDelete && (
             <DeleteButton postId={postId}></DeleteButton> 
              )}
    </Stack> 
   </div>
  );
}