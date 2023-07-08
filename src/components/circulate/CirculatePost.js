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


let userImage="https://avatars.githubusercontent.com/u/92971596?s=120&v=4";



export default function Circulate() {

  return (
    <div>
      <div className='flex md:mt-0 max-sm:mt-7'>
      {/* <img class="h-9 w-9 rounded-full mr-10 max-sm:mr-4 max-sm:ml-4 max-sm:h-9 max-sm:w-9" src={userImage} alt="" /> */}
      <input type="text" id="large-input" placeholder="CLICK HERE TO CIRCULATE ...." class="flex items-start md:text-[20px] max-sm:w-[350px] max-md:w-[350px] lg:w-[600px] 2xl:w-[900px] 2xl:h-[50px]  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      
    </div>
  );
}

