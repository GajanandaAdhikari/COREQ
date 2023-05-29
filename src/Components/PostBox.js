// import { Avatar } from "@mui/material";
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import React, { useState } from 'react';

// let userImage="https://avatars.githubusercontent.com/u/92971596?s=120&v=4";


// function CreatePost(){
//   return(
// <>
// const [isOpen, setIsOpen] = useState(false);
 
//  const togglePopup = { () => {
//    setIsOpen(!isOpen);
//  }}

//  return <div>
//    <input
//      type="button"
//      value="Click to Open Popup"
//      onClick={togglePopup}
//    />
//    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//    {isOpen && <Popup
//      content={<>
//        <b>Design your Popup</b>
//        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//        <button>Test button</button>
//      </>}
//      handleClose={togglePopup}
//    />}
//  </div>
// </>

//   )
// }

// function PostBox(){

//     const [text, setText] = useState('');
//     const [title,SetText]= useState('');
//     const handleChange = (event) => {
//       setText(event.target.value);
//     };
//     const HandleChange = (event) => {
//       SetText(event.target.value);
//     };
  
//     return (
//       <div className="flex pl-0 ">
        
//         <img class="h-8 w-8 rounded-full mr-10" src={userImage} alt="" />
//         <form>
//         <div>
//           <CreatePost></CreatePost>
// {/*          
//     <input type="text" id="small-input" onClick={() => {
//            CreatePost();
//         }} placeholder="CLICK HERE TO CIRCULATE ...." class="flex items-start sm:w-[100px] md:w-[400px] lg:w-[700px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/> */}
//     </div>
//         {/* <div className="block mt-4 w-fit ">
//         <Stack spacing={2} direction="row">
//        <Button variant="outlined">Post</Button>
//        <Button variant="outlined">Research Articles</Button>
//        <Button variant="outlined">Projects</Button>
//        <Button variant="outlined">QnA</Button>
//     </Stack>
//         </div>
//         <div className="mt-5">
//         <Button  variant="contained" color="success" type="submit">Circulate</Button>
//         </div> */}
//         </form>
//         {/* <p>You entered: {title}</p> */}
//       </div>
//     );
// }

// export default PostBox;

import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

// for toogle buttons
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

let userImage="https://avatars.githubusercontent.com/u/92971596?s=120&v=4";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // for toogle hooks
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
      <div className='flex'>
      <img class="h-8 w-8 rounded-full mr-10" src={userImage} alt="" />
      <input type="text" id="small-input" onKeyDown={handleClickOpen} onClick={handleClickOpen} placeholder="CLICK HERE TO CIRCULATE ...." class="flex items-start sm:w-[100px] md:w-[400px] lg:w-[700px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        color='success'
        sx={{
          "& .MuiDialog-container": {
            justifyContent: "center",
            alignItems: "flex-start"
          }
        }}
        PaperProps={{
          sx: {
            m: 0,
            top: 10,
            left: 60
          },
          style: {
            color:'success',
            backgroundColor: 'white',
            boxShadow: 'none',
          }
        }}
        
         
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        <ToggleButtonGroup
      color="success"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      fullWidth='true'
    >
      <ToggleButton value="post" className=''>Post</ToggleButton>
      <ToggleButton value="article">Article</ToggleButton>
      <ToggleButton value="Project">Project</ToggleButton>
      <ToggleButton value="queries">Queries</ToggleButton>
      <ToggleButton value="archive">Archive</ToggleButton>
    </ToggleButtonGroup>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

