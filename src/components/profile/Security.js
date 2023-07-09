import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Security() {
  const navigate = useNavigate();

  const token = Cookies.get('token');
  const userId = Cookies.get('userId');

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // Handle input changes and update the state variables
  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  //Handle Login API Integration here
  const HandleOnSave = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        `http://localhost:8000/user/editProfile/${userId}`,
        {
          oldPassword: oldPassword,
          password: newPassword
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/profile");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="bg-back-color h-screen md:h-full overflow-y-scroll">
        <div>
          <h3 className="text-2xl font-bold pt-20 pl-20">Security</h3>
        </div>
        <div className="w-2/3 mx-auto mb-10 pb-20 pt-20 mt-20">
          <input className="ml-5 text-xl mb-10 text-center justify-center shadow appearance-none border border-bcolor rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="OldPassword" type="text" placeholder="Old Password" value={oldPassword} onChange={handleOldPasswordChange} />
          <input className="ml-5 text-xl text-center mt-20 justify-center shadow appearance-none border border-bcolor rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="NewPassword" type="text" placeholder="Create New Password" value={newPassword} onChange={handleNewPasswordChange} />
          <input className="ml-5 text-xl text-center mt-10 justify-center shadow appearance-none border border-bcolor rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ConfirmPassword" type="text" placeholder="Confirm Password" />
        </div>

        <div className="flex justify-end w-2/3 mx-auto">
          <Link to={"/profile"}>
            <button className="inline-flex border mr-10 border-pbcolor bg-white rounded hover:bg-gray-100 text-pbcolor font-bold py-1 px-8">Cancel</button>
          </Link>
          <button className="inline-flex max-sm:mt-3 bg-pbcolor text-white font-bold py-1 px-9 rounded" onClick={HandleOnSave}>Save</button>
        </div>
      </div>
    </>
  );
}
