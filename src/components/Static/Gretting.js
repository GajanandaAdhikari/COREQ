import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import SavedPostChecking from "./SavedPostChecking";


function UserName({ name, userName, profileImage,savedPostDetails }) {
  const [profile, setProfile] = useState(profileImage ? 'http://127.0.0.1:8081/' + profileImage : 'https://img.freepik.com/free-vector/robot-face-concept-illustration_114360-8207.jpg?size=626&ext=jpg&ga=GA1.2.600027373.1688413125&semt=ais');
  
    
      
  useEffect(() => {
    
    if (profileImage) {
      setProfile('http://127.0.0.1:8081/' + profileImage);
    }
  }, [profileImage]); // Empty dependency array ensures this runs only once on component mount
  return (
    <div class="max-w-md rounded-3xl block flex-grow ml-10 pb-2">
      <div class="rounded-[calc(1.5rem-1px)] ">
        <h1 className="md:text-[30px]">Namaste🙏</h1>
        <div class="flex gap-4 items-center ">
          <div>
            <h3 class="max-sm:text-[12px] md:text-[20px]  truncate">{name}</h3>
            <span class="max-sm:text-[9px] md:text-[20px] tracking-wide text-gray-600">
              @{userName}
            </span>
          </div>
          <img
            class="max-sm:h-7 max-sm:w-7 ml-3 h-10 w-10 rounded-full "
            src={profile}
            alt=""
          />
        </div>
      </div>
      <SavedPostChecking savedPostDetails={savedPostDetails}>
    </SavedPostChecking>
    </div>
  );
}

function Gretting() {
  const [userDetails, setUserDetails] = useState([]);
  const [savedPost, setSavedPost] = useState([]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/user/get/${Cookies.get("userId")}`,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get('token')}`,
            },
          }
        );
        setUserDetails(response.data);
        // setSavedPost(response.data);
        // console.log(savedPost);
        console.log(userDetails.savedPost);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserDetails();
  }, []);
  return (
    <>
    <div>
      <Link to={`/profile/${Cookies.get("userId")}`} key={Cookies.get("userId")}>
        <UserName
          name={userDetails.fullName}
          userName={userDetails.username}
          profileImage={userDetails.profilePic}
          savedPostDetails={userDetails.savedPost}
        />
      </Link>
    </div>
    
    </>
    
  );
}

export default Gretting;
