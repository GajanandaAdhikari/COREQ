import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

function UserName({ name, userName, userImage }) {
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
            src={userImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

function Gretting() {
  const [userDetails, setUserDetails] = useState([]);

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
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserDetails();
  }, []);
  return (
    <div>
      <Link to={`/profile/${Cookies.get("userId")}`} key={Cookies.get("userId")}>
        <UserName
          name={userDetails.fullName}
          userName={userDetails.username}
          userImage={userDetails.profilePic}
        />
      </Link>
    </div>
  );
}

export default Gretting;
