import { Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import SocialFollow from '../components/profile/SocialFollow';
import '../css/ProfileDetails.css'
import FollowButton from '../components/FollowButton';
import UserPostDetails from '../components/profile/UserPostDetails';
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {Link} from "react-router-dom";


const cover = ["https://covermyfb.files.wordpress.com/2012/06/smile1.jpg"]
const profile = ["https://img.freepik.com/free-vector/robot-face-concept-illustration_114360-8207.jpg?size=626&ext=jpg&ga=GA1.2.600027373.1688413125&semt=ais"]
const bio = "Aurora Vega is a captivating enigma, a multifaceted soul roaming the tapestry of life with a boundless curiosity and an insatiable thirst for adventure. Born under the celestial symphony of stars, she embodies the essence of a wandering dreamer, forever seeking new experiences and connections."
function Profile({userFullName,userBio,userFollowers,userFollowing,userProjects,userArticles}) {
  return (
    <div className='profile '>
    <div className='cover'>
     <img src={cover[0]} alt='cover' className='coverimg'/>
    </div>
    <div className='profiledetails flex pt-10'>
      <div className='profilepic mr-10  ml-10'>
      <img src={profile[0]} alt='profile' className='profileimg' />
      </div>
      <div className='profileinfo'>
      <h1 className='text-3xl font-bold'>{userFullName}</h1>
      <div className='profilestats flex'>
      <p><span className='font-bold text-blue-600'>{userFollowers}</span> Followers</p>
      <p className='ml-5'><span className='font-bold'>{userFollowing}</span> Following</p>
      <p className='ml-5'><span className='font-bold text-green-600'>{userProjects}</span> Projects</p>
      <p className='ml-5'><span className='font-bold text-yellow-400'>{userArticles}</span> Articles</p>

      <div className='ml-10 '><FollowButton></FollowButton></div>  
      <span className='flex ml-20'><Link to={"/edit"}> <SettingsIcon sx={{ fontSize: 40 }}></SettingsIcon></Link></span>  
      </div>

      <div className='profilebio grid  grid-cols-10'>
      <div className='col-span-7  mt-5 pr-30'><p className='mr-40'>{userBio}</p></div>
      <div className='col-span-3 '>
      <SocialFollow
      facebookUserName={"nischal.khanal69"}
      githubUserName={"hunter-420"}
      linkedinUserName={"nischalkhanal"}
      twitterUserName={"nischal_khanal1"}
      instagramUserName={"nischal_khanal"}
      > </SocialFollow></div>
      
      </div>

      </div>
     
      </div>
      <div className='block profile pt-20'>
      <UserPostDetails></UserPostDetails>
      </div>
    </div>
  )
}

function ProfileDetails() {
  const [userDetails, setUserDetails] = useState([]);
  const token = Cookies.get("token");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/user/get/${Cookies.get("userId")}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserDetails();
  }, []);
  return (
    <Profile 
    userFullName={userDetails.fullName}
    userBio={userDetails.bio}
    userFollowers={userDetails.following}
    userFollowing={userDetails.followers}
    userProjects={50}
    userArticles={30}
    ></Profile>
  )
}
export default ProfileDetails;