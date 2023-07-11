import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import SucessAlert from "../Static/SucessAlert";
import FailedAlert from "../Static/FailedAlert";
import AlertInfo from "../Static/InfoAlert";

export default function Security() {
  const token = Cookies.get("token");
  const userId = Cookies.get("userId");

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alerts, setAlerts] = useState([]);

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setAlerts((prevAlerts) => [...prevAlerts, "passwordMismatch"]);
      return;
    }

    try {
      const response = await axios.patch(
        `http://localhost:8000/user/editProfile/${userId}`,
        {
          oldPassword: oldPassword,
          password: newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAlerts((prevAlerts) => [...prevAlerts, "passwordUpdated"]);
    } catch (error) {
      console.error(error);
      setAlerts((prevAlerts) => [...prevAlerts, "updateFailed"]);
    }
  };

  const renderAlerts = () => {
    return alerts.map((alert, index) => {
      switch (alert) {
        case "passwordMismatch":
          return (
            <AlertInfo
              key={index}
              message={"New password and confirm password do not match"}
            />
          );
        case "passwordUpdated":
          return (
            <SucessAlert
              key={index}
              message={"Password updated successfully"}
            />
          );
        case "updateFailed":
          return <FailedAlert key={index} message={"Failed to update password"} />;
        default:
          return null;
      }
    });
  };

  return (
    <>
      <div className="bg-back-color h-screen md:h-full overflow-y-scroll">
        <div>
          <h3 className="text-2xl font-bold pt-20 pl-20">Security</h3>
        </div>
        {renderAlerts()}
        <div className="w-2/3 mx-auto mb-10 pb-20 pt-20 mt-20">
          {/* Input fields */}
          <input
            className="ml-5 text-xl mb-10 text-center justify-center shadow appearance-none border border-bcolor rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="OldPassword"
            type="password"
            placeholder="Old Password"
            value={oldPassword}
            onChange={handleOldPasswordChange}
          />
          <input
            className="ml-5 text-xl text-center mt-20 justify-center shadow appearance-none border border-bcolor rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="NewPassword"
            type="password"
            placeholder="Create New Password"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
          <input
            className="ml-5 text-xl text-center mt-10 justify-center shadow appearance-none border border-bcolor rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ConfirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>

        <div className="flex justify-end w-2/3 mx-auto">
          <Link to={`/profile/${Cookies.get("userId")}`} key={Cookies.get("userId")}>
            <button className="inline-flex border mr-10 border-pbcolor bg-white rounded hover:bg-gray-100 text-pbcolor font-bold py-1 px-8">
              Cancel
            </button>
          </Link>
          <button
            className="inline-flex max-sm:mt-3 bg-pbcolor text-white font-bold py-1 px-9 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}
