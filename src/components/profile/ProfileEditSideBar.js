import EditProfile from "./EditProfile"
import SocialLink from "./SocialLink"
import Security from "./Security"
import CreateIcon from '@mui/icons-material/Create';
import AddLinkIcon from '@mui/icons-material/AddLink';
import SecurityIcon from '@mui/icons-material/Security';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import {Link} from "react-router-dom";


function ProfileEditSideBar(){
    return(
        <>
        <div className="flex-grow h-screen  border-r border-gray-300">
        <div className="">
        <Link to={"/profile"} > <h1 className='mt-20 md:pl-5 xl:pl-20 md:text-md lg:text-lg 2xl:text-2xl font-semibold hover:text-sky-700'><ArrowBackIosIcon className=" mr-6  " sx={{fontSize:30}} ></ArrowBackIosIcon><span className='hidden  sm:inline-flex '>Settings</span></h1></Link>
        </div>
        <div className='ml-20 md:pl-5 xl:pl-20 pt-10 max-xl:pr-20  max-sm:ml-4 '>
           <Link to={"/editprofile"} > <h1 className='mt-10 md:text-md lg:text-lg 2xl:text-2xl font-semibold hover:text-sky-700'><CreateIcon className=" mr-6  " sx={{fontSize:30}} ></CreateIcon><span className='hidden  sm:inline-flex '>Edit Profile</span></h1></Link>
           <Link to={"/sociallink"} > <h1 className='mt-10 md:text-md lg:text-lg 2xl:text-2xl  hover:text-sky-700'><AddLinkIcon className=" mr-6  " sx={{fontSize:30}} ></AddLinkIcon><span className='hidden  sm:inline-flex '>Social Link</span></h1></Link>
           <Link to={"/security"} > <h1 className='mt-10 md:text-md lg:text-lg 2xl:text-2xl  hover:text-sky-700'><SecurityIcon className=" mr-6  " sx={{fontSize:30}} ></SecurityIcon><span className='hidden  sm:inline-flex '>Security</span></h1></Link>
           <Link to={"/help"} > <h1 className='mt-10 md:text-md lg:text-lg 2xl:text-2xl  hover:text-sky-700'><HelpOutlineIcon className=" mr-6  " sx={{fontSize:30}} ></HelpOutlineIcon><span className='hidden  sm:inline-flex '>Help</span></h1></Link>
        </div>
        </div>
  
        </>
    )
}

export default ProfileEditSideBar;