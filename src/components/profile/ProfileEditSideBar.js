import EditProfile from "./EditProfile";
import SocialLink from "./SocialLink";
import Security from "./Security";
import CreateIcon from '@mui/icons-material/Create';
import AddLinkIcon from '@mui/icons-material/AddLink';
import SecurityIcon from '@mui/icons-material/Security';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import { Link, useLocation } from "react-router-dom";

function ProfileEditSideBar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "font-extrabold" : "";
  };

  return (
    <>
      <div className="flex-grow h-screen   border-r border-bcolor bg-back-color">
        <div className="">
          <Link to={"/profile"}>
            {" "}
            <h1 className='pt-20 md:pl-5 xl:pl-20 md:text-md lg:text-lg 2xl:text-2xl font-semibold hover:text-sky-700'>
              <ArrowBackIosIcon className=" mr-6  " sx={{ fontSize: 30 }} />
              <span className='hidden  sm:inline-flex '>Settings</span>
            </h1>
          </Link>
        </div>
        <div className='ml-20 md:pl-5 xl:pl-20 pt-10 max-xl:pr-20  max-sm:ml-4 '>
          <Link to={"/edit"}>
            <h1 className={`mt-10 md:text-md lg:text-lg 2xl:text-2xl hover:text-sky-700 ${isActive("/edit")}`}>
              <CreateIcon className=" mr-6  " sx={{ fontSize: 30 }} />
              <span className='hidden  sm:inline-flex '>Edit Profile</span>
            </h1>
          </Link>
          <Link to={"/sociallink"}>
            <h1 className={`mt-10 md:text-md lg:text-lg 2xl:text-2xl  hover:text-sky-700 ${isActive("/sociallink")}`}>
              <AddLinkIcon className=" mr-6  " sx={{ fontSize: 30 }} />
              <span className='hidden  sm:inline-flex '>Social Link</span>
            </h1>
          </Link>
          <Link to={"/security"}>
            <h1 className={`mt-10 md:text-md lg:text-lg 2xl:text-2xl  hover:text-sky-700 ${isActive("/security")}`}>
              <SecurityIcon className=" mr-6  " sx={{ fontSize: 30 }} />
              <span className='hidden  sm:inline-flex '>Security</span>
            </h1>
          </Link>
          <Link to={"/help"}>
            <h1 className={`mt-10 md:text-md lg:text-lg 2xl:text-2xl  hover:text-sky-700 ${isActive("/help")}`}>
              <HelpOutlineIcon className=" mr-6  " sx={{ fontSize: 30 }} />
              <span className='hidden  sm:inline-flex '>FAQ</span>
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProfileEditSideBar;
