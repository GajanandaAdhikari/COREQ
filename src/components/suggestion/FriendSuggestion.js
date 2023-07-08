import { Link } from "react-router-dom";
import FollowButton from "../Static/FollowButton";
import "../../css/FollowButton.css";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

function FriendSuggestionList() {
  const [suggestedFriends, setSuggestedFriends] = useState([]);
  const token = Cookies.get("token");

  useEffect(() => {
    const fetchSuggestedFriends = async () => {
      try {
        console.log(Cookies.get('userId'))
        const response = await axios.get(
          `http://localhost:8000/feed/friendSuggestions/${Cookies.get('userId')}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data)
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
        />
      ))}
    </>
  );
}

function SuggestedFriend({ userFullName, userName, userImage }) {
  return (
    <>
      <li className="py-2 ">
        <div className="flex items-left space-x-4">
          <div class="flex-shrink-0">
            <img className="w-8 h-8 rounded-full" src={userImage} />
          </div>
          <div class="flex-1 min-w-0">
            <p className=" md:text-[20px] 2xl:text-[20px]  hover:text-sky-700  ">
              <Link to="/profile">
                {" "}
                <span className="">{userFullName}</span>
              </Link>
            </p>
            <p className="text-[16px] text-gray-700 dark:text-gray-700">
              @{userName}
            </p>
          </div>
          <div className="inline-flex md:text-2xl font-semibold text-gray-900 dark:text-white">
            <FollowButton></FollowButton>
          </div>
        </div>
      </li>
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
