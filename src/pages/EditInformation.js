import EditProfile from "../components/profile/EditProfile"
import SocialLink from "../components/profile/SocialLink"
import Security from "../components/profile/Security"
import Help from "../components/profile/Help";
import CreateIcon from '@mui/icons-material/Create';
import AddLinkIcon from '@mui/icons-material/AddLink';
import SecurityIcon from '@mui/icons-material/Security';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ProfileEditSideBar from "../components/profile/ProfileEditSideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function EditInformation(){
    return(
        <>
        <div className="grid grid-cols-10 bg-back-color">
        <div className="md:col-span-4 xl:col-span-3">
        <ProfileEditSideBar></ProfileEditSideBar>
        </div>
            <div className="max-md:col-span-6 xl:col-span-7">
             
                <Routes>
                    <Route path="/" element={<EditProfile />} />
                    <Route path="/sociallink" element={<><SocialLink /><ProfileEditSideBar/> </>} />
                    <Route path="/security" element={<><ProfileEditSideBar/><Security /> </>} />
                    <Route path="/help" element={<><ProfileEditSideBar/><Help /> </>} />

                </Routes>
        
                </div>
        </div>
        </>
    )
}

export default EditInformation;