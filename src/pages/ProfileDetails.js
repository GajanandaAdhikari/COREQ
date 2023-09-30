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
import Search from '../components/Static/Search';
import Gretting from '../components/Static/Gretting';
import SideBar from '../components/Static/SideBar';



function Profile({ userFullName, userBio, userFollowers, userFollowing, userProjects, userArticles, githubUserName, linkedinUserName, facebookUserName, instagramUserName, twitterUserName, userFaculty, userSemester, userBatch, userId, profileImage, profileCover }) {
     // Check if userId prop is equal to the value of Cookies.get('userId')
    const shouldShowEdit = userId === Cookies.get('userId');
    const shouldFollow = userId !== Cookies.get('userId'); 
    console.log("profile : "+profileImage);
    console.log("cover : "+profileCover);

    // Use conditional checks to set profile and cover states
  const [profile, setProfile] = useState(profileImage ? 'http://127.0.0.1:8081/' + profileImage : 'https://img.freepik.com/free-vector/robot-face-concept-illustration_114360-8207.jpg?size=626&ext=jpg&ga=GA1.2.600027373.1688413125&semt=ais');
  const [cover, setCover] = useState(profileCover ? 'http://127.0.0.1:8081/' + profileCover : 'https://covermyfb.files.wordpress.com/2012/06/smile1.jpg');

  useEffect(() => {
    // Update profile and cover states when props change
    if (profileImage) {
      setProfile('http://127.0.0.1:8081/' + profileImage);
    }
    if (profileCover) {
      setCover('http://127.0.0.1:8081/' + profileCover);
    }
  }, [profileImage, profileCover]);// Empty dependency array ensures this runs only once on component mount

  return (
    <div className='p-10 bg-back-color'>
      <div className="grid md:grid-cols-5 sm:grid-cols-5 pr-5  ">
        <div className=" "><Gretting /></div>
        <div className="md:col-span-3 sm:col-span-4 text-center font-mono  font-bold max-sm:hidden md:text-[40px] lg:text-[50px]">{/* section name or icon on the top  */}</div>
        <div className="max-sm:col-start-4"><Search /></div>
      </div>


      <div className="grid md:grid-cols-9 h-screen max-sm:h-[30px] max-sm:grid-cols-5 ">
        <div className="grid md:col-span-2 md:grid-rows-6 ">
          <div className="max-sm:inline-flex md:row-span-3 md:ml-10">{/* nav bar  */}<SideBar /></div>
          <div className="max-sm:hidden md:ml-10"></div>
        </div>

        <div className="md:col-span-7 max-sm:col-span-5 max-sm:col-start-1 max-sm:overflow-scroll max-sm:h-[600px] sm:overflow-y-scroll   ">

          <div className='profile'>
            <div className='cover'>
              <img src={cover} alt='cover' className='coverimg' />
            </div>
            <div className='profiledetails flex pt-10'>
              <div className='profilepic mr-10 ml-10'>
                <img src={profile} alt='profile' className='profileimg' />
              </div>
              <div className='profileinfo '>
                <h1 className='text-3xl font-bold'>{userFullName}</h1>
                <div className='profilestats flex'>
                  <p>
                    <span className='font-bold text-blue-600'>{userFollowers}</span> Followers
                  </p>
                  <p className='ml-5'>
                    <span className='font-bold'>{userFollowing}</span> Following
                  </p>
                  <p className='ml-5'>
                    <span className='font-bold text-green-600'>{userProjects}</span> Projects
                  </p>
                  <p className='ml-5'>
                    <span className='font-bold text-yellow-400'>{userArticles}</span> Articles
                  </p>
                  <p className='ml-5'>
                    Faculty <span className='font-bold text-purple-700'>{userFaculty}</span>
                  </p>
                  <p className='ml-5'>
                    Semester <span className='font-bold text-red-600'>{userSemester}</span>
                  </p>
                  <p className='ml-5'>
                    Batch <span className='font-bold text-blue-600'>{userBatch}</span>
                  </p>
                  {shouldFollow && (
                  <div className='ml-10'>
                    <FollowButton followingId={userId}></FollowButton>
                  </div>
                  )}
                  <span className='flex ml-20'>
                    {shouldShowEdit && (  
                    <Link to={'/edit'}>
                      <SettingsIcon sx={{ fontSize: 40 }} userId={userId}></SettingsIcon>
                    </Link>
                    )}
                  </span>
                </div>
                <div className='mt-5 pr-30'>
                  <p className='mr-40 '>{userBio}</p>
                </div>
              </div>
              <div className='profilebio xl:ml-20 xl:pl-20 grid grid-cols-15'>
                <div className='col-span-10 mt-5 pr-30'></div>
                <div className='col-span-5 pl-20 mt-10 xl:ml-20 flex items-end justify-end'>
                  <SocialFollow
                    githubUserName={githubUserName}
                    linkedinUserName={linkedinUserName}
                    facebookUserName={facebookUserName}
                    instagramUserName={instagramUserName}
                    twitterUserName={twitterUserName}
                  />
                </div>
              </div>
            </div>
            <div className='block profile pt-20'>
              <UserPostDetails userId={userId}></UserPostDetails>
            </div>
          </div>

        </div>

      </div>



    </div>
  );
}

function ProfileDetails() {
  const [userDetails, setUserDetails] = useState([]);
  const [articlesCount, setArticleCount] = useState([]);
  const [projectsCount, setProjectsCount] = useState([]);
  const [followingDetails, setFollowingDetails] = useState([]);
  const [followerDetails, setFollowerDetails] = useState([]);
  const [followingCount, setFollowingCount] = useState();
  const [followerCount, setFollowerCount] = useState();
  const [githubUserName, setGithubUserName] = useState('');
  const [linkedinUserName, setLinkedinUserName] = useState('');
  const [facebookUserName, setFacebookUserName] = useState('');
  const [instagramUserName, setInstagramUserName] = useState('');
  const [twitterUserName, setTwitterUserName] = useState('');
  const token = Cookies.get('token');
  const { userId } = useParams();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/user/get/${userId}`,
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

    const fetchUserArticlesCount = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/article/user/${userId}/countArticles`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setArticleCount(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchUserProjectsCount = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/project/user/${userId}/countProjects`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProjectsCount(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSocialUserNames = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/user/get/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const socialNames = response.data.socialNames;
        setGithubUserName(socialNames && socialNames.github);
        setLinkedinUserName(socialNames && socialNames.linkedin);
        setFacebookUserName(socialNames && socialNames.facebook);
        setInstagramUserName(socialNames && socialNames.instagram);
        setTwitterUserName(socialNames && socialNames.twitter);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchFollowingDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/user/get/${userId}/followings`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setFollowingDetails(response.data.followingDetails);
        setFollowingCount(response.data.followingCount);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchFollowerDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/user/get/${userId}/followers`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setFollowerDetails(response.data.followerDetails);
        setFollowerCount(response.data.followerCount);
      } catch (error) {
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
      profileImage={userDetails.profilePic}
      profileCover={userDetails.coverPic}
    />
  )
}

export default ProfileDetails;
