import SettingsIcon from '@mui/icons-material/Settings';
import SocialFollow from '../components/profile/SocialFollow';
import '../css/ProfileDetails.css'
import FollowButton from '../components/Static/FollowButton';
import UserPostDetails from '../components/profile/UserPostDetails';
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';


const cover = ["https://covermyfb.files.wordpress.com/2012/06/smile1.jpg"]
const profile = ["https://img.freepik.com/free-vector/robot-face-concept-illustration_114360-8207.jpg?size=626&ext=jpg&ga=GA1.2.600027373.1688413125&semt=ais"]
const bio = "Aurora Vega is a captivating enigma, a multifaceted soul roaming the tapestry of life with a boundless curiosity and an insatiable thirst for adventure. Born under the celestial symphony of stars, she embodies the essence of a wandering dreamer, forever seeking new experiences and connections."
function Profile({ userFullName, userBio, userFollowers, userFollowing, userProjects, userArticles, githubUserName, linkedinUserName, facebookUserName, instagramUserName, twitterUserName, userFaculty, userSemester, userBatch, userId }) {
  return (
    <div className='profile '>
      <div className='cover'>
        <img src={cover[0]} alt='cover' className='coverimg' />
      </div>
      <div className='profiledetails flex  pt-10'>
        <div className='profilepic  mr-10  ml-10'>
          <img src={profile[0]} alt='profile' className='profileimg' />
        </div>
        <div className='profileinfo'>
          <h1 className='text-3xl font-bold'>{userFullName}</h1>
          <div className='profilestats  flex'>
            <p><span className='font-bold text-blue-600'>{userFollowers}</span> Followers</p>
            <p className='ml-5'><span className='font-bold'>{userFollowing}</span> Following</p>
            <p className='ml-5'><span className='font-bold text-green-600'>{userProjects}</span> Projects</p>
            <p className='ml-5'><span className='font-bold text-yellow-400'>{userArticles}</span> Articles</p>
            <p className='ml-5'>Faculty <span className='font-bold text-purple-700'>{userFaculty}</span></p>
            <p className='ml-5'>Semester <span className='font-bold text-red-600'>{userSemester}</span></p>
            <p className='ml-5'>Batch <span className='font-bold text-blue-600'>{userBatch}</span></p>
            <div className='ml-10 '><FollowButton followingId={userId}></FollowButton></div>
            <span className='flex ml-20'><Link to={"/edit"}> <SettingsIcon sx={{ fontSize: 40 }}></SettingsIcon></Link></span>
         
          </div>
          <div className='  mt-5 pr-30'>
         <p className='mr-40 '>{userBio}</p>
          </div>



        </div>

        <div className='profilebio xl:ml-20 xl:pl-20  grid grid-cols-15'>
  <div className='col-span-10 mt-5 pr-30'></div>
  <div className='col-span-5 pl-20 mt-10 xl:ml-20  flex items-end justify-end'>
    <SocialFollow
      facebookUserName={facebookUserName}
      githubUserName={githubUserName}
      linkedinUserName={linkedinUserName}
      twitterUserName={twitterUserName}
      instagramUserName={instagramUserName}
    />
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

  const [articlesCount, setArticleCount] = useState([]);
  const [projectsCount, setProjectsCount] = useState([]);

  const [followingDetails, setFollowingDetails] = useState([]);
  const [followerDetails, setFollowerDetails] = useState([]);
  const [followingCount, setFollowingCount] = useState();
  const [followerCount, setFollowerCount] = useState();

  const [githubUserName, setGithubUserName] = useState([]);
  const [linkedinUserName, setLinkedinUserName] = useState([]);
  const [facebookUserName, setFacebookUserName] = useState([]);
  const [instagramUserName, setInstagramUserName] = useState([]);
  const [twitterUserName, setTwitterUserName] = useState([]);

  // Access the route parameters
  const { userId } = useParams();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/user/get/${ userId }`,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get('token')}`,
            },
          }
        );
        setUserDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchUserArticlesCount = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/article/user/${ userId }/countArticles`,  
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
          },
        }
      );
      setArticleCount(response.data);
      }    
      catch(error) {
        console.log(error);
      }
    };
    const fetchUserProjectsCount = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/project/user/${ userId }/countProjects`,  
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
          },
        }
      );
      setProjectsCount(response.data);
      }    
      catch(error) {
        console.log(error);
      }
    };
    const fetchSocialUserNames = async() => {
      try {
        const response = await axios.get(`http://localhost:8000/user/get/${ userId }`, 
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
          },
        }
        );
        setGithubUserName(response.data.socialNames.github);
        setLinkedinUserName(response.data.socialNames.linkedin);
        setFacebookUserName(response.data.socialNames.facebook);
        setInstagramUserName(response.data.socialNames.instagram);
        setTwitterUserName(response.data.socialNames.twitter);
      }
      catch(error) {
        console.log(error);
      }
    };
    const fetchFollowingDetails = async() => {
      try {
        const response = await axios.get(`http://localhost:8000/user/get/${ userId }/followings`, 
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
          },
        });
        setFollowingDetails(response.data.followingDetails);
        setFollowingCount(response.data.followingCount);

      }
      catch(error) {
        console.log(error);
      }
    };
    const fetchFollowerDetails = async() => {
      try {
        const response = await axios.get(`http://localhost:8000/user/get/${ userId }/followers`, 
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
          },
        });
        setFollowerDetails(response.data.followerDetails);
        setFollowerCount(response.data.followerCount);

      }
      catch(error) {
        console.log(error);
      }
    };
    fetchUserDetails();
    fetchUserArticlesCount();
    fetchUserProjectsCount();
    fetchSocialUserNames();
    fetchFollowingDetails();
    fetchFollowerDetails();
  }, []);
  return (
    <Profile
      userFullName={userDetails.fullName}
      userBio={userDetails.bio}
      userFollowers={followerCount}
      userFollowing={followingCount}
      userProjects={projectsCount}
      userArticles={articlesCount}
      userFaculty={userDetails.faculty}
      userBatch={userDetails.batch}
      userSemester={userDetails.semester}
      githubUserName={githubUserName}
      linkedinUserName={linkedinUserName}
      twitterUserName={twitterUserName}
      facebookUserName={facebookUserName}
      instagramUserName={instagramUserName}
      userId={userId}
    ></Profile>
  )
}
export default ProfileDetails;