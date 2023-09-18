import CardProfile from "./ProfileEditPictureUpload"
import CoverPictureUpload from "./ProfileEditCoverPictureUpload"
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FailedAlert from "../Static/FailedAlert";
import SucessAlert from "../Static/SucessAlert";


export default function EditProfile() {
  const navigate = useNavigate();

  const token = Cookies.get('token');
  const userId = Cookies.get('userId');

  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [faculty, setFaculty] = useState("");
  const [batch, setBatch] = useState("");
  const [alerts, setAlerts] = useState([]);

  // Handle input changes and update the state variables
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleFacultyChange = (e) => {
    setFaculty(e.target.value);
  };
  const handleBatchChange = (e) => {
    setBatch(e.target.value);
  };

  const [selectedProfilePic, setSelectedProfilePic] = useState(null);
  const [selectedCoverPic, setSelectedCoverPic] = useState(null);

  //Handle Login API Integration here
  const HandleOnSave = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    // Define the form fields and their values as an object
    const formFields = {
      fullName: fullName,
          bio: bio,
          faculty: faculty,
          batch: batch
    };

    // Append the form fields to the FormData object in a loop
    for (const [fieldName, fieldValue] of Object.entries(formFields)) {
      formDataToSend.append(fieldName, fieldValue);
    }

    if (selectedProfilePic) {
      // Set the field name to 'profilePic' to match your backend configuration
      formDataToSend.append("profilePic", selectedFile);
    } 
    if (selectedCoverPic) {
      // Set the field name to 'coverPic' to match your backend configuration
      formDataToSend.append("coverPic", selectedFile);
    }

    try {
      const response = await axios.patch(
        `http://localhost:8000/user/editProfile/${userId}`,
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Profile updated successfully:", response.data);
      setAlerts((prevAlerts) => [...prevAlerts, "profileUpdatedSucess"]);
      setFullName("");
      setBatch("");
      setBio("");
      setFaculty("");
      navigate("/edit");
    } catch (error) {
      setAlerts((prevAlerts) => [...prevAlerts, "profileUpdatedFailed"]);
      console.error(error);
    }
  };
  const renderAlerts = () => {
    return alerts.map((alert, index) => {
      switch (alert) {
        
        case "profileUpdatedSucess":
          return (
            <SucessAlert
              key={index}
              message={"Profile updated successfully"}
            />
          );
        case "profileUpdatedFailed":
          return <FailedAlert key={index} message={"Failed to update Profile"} />;
        default:
          return null;
      }
    });
  };

  return (
    <div className="bg-back-color h-screen ">
      <div >
        <h3 className="overflow-y-scroll text-2xl font-bold pt-10 pl-10">Edit Profile</h3>
        {renderAlerts()}
        <CardProfile></CardProfile>
        <CoverPictureUpload></CoverPictureUpload>
      </div>
      <div class="w-2/3 mx-auto ">
        <input class="mt-8  justify-center  shadow appearance-none border border-bcolor rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Full Name" value={fullName} onChange={handleFullNameChange}/>
      </div>
      <div className="flex justify-center">
        <TextareaAutosize
          placeholder="Bio"
          id="bio"
          minRows={5}
          value={bio}
          onChange={(handleBioChange)}
          className="md:text-[20px] w-2/3 mt-7 p-1 rounded text-gray-900 border border-bcolor   sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></TextareaAutosize>
      </div>
      <div class=" mx-auto w-2/3 pt-8 mb-3 md:mb-0">

        <div class="flex mx-auto pb-10">
          <select className="mr-[40px] w-2/3 border border-bcolor text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 overflow-y-scroll"
            id="faculty"
            size="1"
            value={faculty} onChange={(handleFacultyChange)}
          >
            <option   disabled selected>
              Faculty
            </option>
            <option>BEIT</option>
            <option>BCE</option>
            <option>BE Civil</option>
            <option>BE Elx</option>
          </select>

          <select
  className="block appearance-none w-2/3 border border-bcolor text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  id="batch"
  size="1"

  onChange={handleBatchChange}
>
  <option disabled value="">
    Batch
  </option>
  {Array.from({ length: 7 }, (_, index) => {
    const year = 2017 + index;
    return <option key={year} value={year} onChange={handleBatchChange}>{year}</option>;
  })}
</select>



        </div>
        <div className="flex justify-end">
          <Link to={`/profile/${Cookies.get("userId")}`} key={Cookies.get("userId")}>
            <button className="inline-flex max-sm:mr-20 md:mr-20 border border-pbcolor bg-white rounded hover:bg-gray-100 text-pbcolor font-bold py-1 px-8">Cancel</button>
          </Link>
          <button className="inline-flex   max-sm:mt-3 bg-pbcolor  text-white font-bold py-1 px-9 rounded" onClick={HandleOnSave}>Save</button>
        </div>
      </div>
    </div>
  )
}