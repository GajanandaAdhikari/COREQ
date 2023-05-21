import { Avatar } from "@mui/material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import React, { useState } from 'react';

function PostBox(){

    const [text, setText] = useState('');
    const [title,SetText]= useState('');
    const handleChange = (event) => {
      setText(event.target.value);
    };
    const HandleChange = (event) => {
      SetText(event.target.value);
    };
  
    return (
      <div className="flex pl-10">
        <Avatar src="https://avatars.githubusercontent.com/u/92971596?s=120&v=4" className="flex "></Avatar>
        <form>
        <div className="">
        <textarea
          value={title}
          onChange={HandleChange}
          rows={1} // Specify the number of visible rows
          cols={44} // Specify the number of visible columns
          className="border-4  shadow-lg shadow-inner ml-4 hover:bg-blend-darken font-medium text-lg"
          style={{border:"none",outline:"none"}}
          placeholder="Title"
        />
        </div>
        <textarea
          value={text}
          onChange={handleChange}
          rows={6} // Specify the number of visible rows
          cols={50} // Specify the number of visible columns
          className="border-4 shadow-lg shadow-inner ml-4 hover:bg-blend-darken"
          style={{border:"none",outline:"none"}}
          placeholder="What's yout thought?"
        />
        <div className="mt-4 ">
        <Stack spacing={2} direction="row">
       <Button variant="outlined">Post</Button>
       <Button variant="outlined">Research Articles</Button>
       <Button variant="outlined">Projects</Button>
       <Button variant="outlined">QnA</Button>
    </Stack>
        </div>
        <div className="mt-5">
        <Button  variant="contained" color="success" type="submit">Circulate</Button>
        </div>
        </form>
        {/* <p>You entered: {title}</p> */}
      </div>
    );
}

export default PostBox;