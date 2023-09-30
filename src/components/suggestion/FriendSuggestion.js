import { Link } from "react-router-dom";
import FollowButton from "../Static/FollowButton";
import "../../css/FollowButton.css";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

function FriendSuggestionList() {
  const [suggestedFriends, setSuggestedFriends] = useState([]);
  

  useEffect(() => {
    const fetchSuggestedFriends = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/feed/friendSuggestions/${Cookies.get('userId')}`,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
          }
        );
        
        setSuggestedFriends(response.data);
     

      } catch (error) {
        console.log(error);
      }
    };

    fetchSuggestedFriends();
  }, []);

  return (
    <>
      {suggestedFriends.map((user) => (
          <SuggestedFriend
            userFullName={user.fullName}
            userName={user.username}
            userImage={user.profilePic}
            userId={user._id}
            key={user._id}
            initialIsFollowing={checkFollowing({follow:user.following})}
            profileImage={user.profilePic}
          />
      ))}
    </>
  );
}

function checkFollowing({follow}) {
  console.log(follow);
}

function SuggestedFriend({ userFullName, userName, profileImage, userId }) {
  const [profile, setProfile] = useState(profileImage ? 'http://127.0.0.1:8081/' + profileImage : 'https://img.freepik.com/free-vector/robot-face-concept-illustration_114360-8207.jpg?size=626&ext=jpg&ga=GA1.2.600027373.1688413125&semt=ais');
  
    
      
  useEffect(() => {
    
    if (profileImage) {
      setProfile('http://127.0.0.1:8081/' + profileImage);
    }
  }, [profileImage]);
  return (
    <>
    
        <div className=" grid grid-cols-7 ">
        <div className=" flex col-span-5 items-left ">
          <div class="flex-shrink-0">
            <img className="w-8 h-8 rounded-full" src={profile} />
          </div>
          <Link to={`/profile/${userId}`} key={userId}>
          <div class="flex-1 min-w-0">
            <p className=" md:text-[20px] 2xl:text-[20px]  hover:text-sky-700  ">
              <span >
                {" "}
                <span className="">{userFullName}</span>
              </span>
            </p>
            <p className="text-[16px] text-gray-700 dark:text-gray-700">
              @{userName}
            </p>
          </div>
          </Link>
          
        </div>
        <div className="flex col-span-2   md:text-2xl font-semibold text-gray-900 dark:text-white">
            <FollowButton followingId={userId}></FollowButton>
          </div>
      </div>
    </>
  );
}

function FriendSuggestion() {
  return (
    <>
      <div className="flex">
        <div class="max-sm:w-[175px] md:w-[180px] lg:w-[240px]  2xl:w-[376px]  p-1  border border-gray-200 rounded-lg shadow  ">
          <div class="flex items-center justify-between mb-4">
            <h5 class=" md:text-md lg:text-lg 2xl:text-3xl  font-bold leading-none  ">
              Friend Suggestions
            </h5>
          </div>
          <div class="flow-root">
            <ul
              role="list"
              class="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <FriendSuggestionList />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default FriendSuggestion;
