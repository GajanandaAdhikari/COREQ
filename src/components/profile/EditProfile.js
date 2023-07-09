import CardProfile from "./ProfileEditPictureUpload"
import CoverPictureUpload from "./ProfileEditCoverPictureUpload"
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const navigate = useNavigate();

  const token = Cookies.get('token');
  const userId = Cookies.get('userId');

  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [faculty, setFaculty] = useState("");
  const [batch, setBatch] = useState("");

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


  //Handle Login API Integration here
  const HandleOnSave = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        `http://localhost:8000/user/editProfile/${userId}`,
        {
          fullName: fullName,
          bio: bio,
          faculty: faculty,
          batch: batch
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
    <div className="bg-back-color h-screen overflow-y-scroll">
      <div >
        <h3 className="text-2xl font-bold pt-10 pl-20">Edit Profile</h3>
        <CardProfile></CardProfile>
        <CoverPictureUpload></CoverPictureUpload>
      </div>
      <div class="w-2/3 mx-auto">
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
            id="grid-state"
            size="1"
          >
            <option  value={faculty} onChange={(handleFacultyChange)} disabled selected>
              Faculty
            </option>
            <option>BEIT</option>
            <option>BCE</option>
            <option>BE Civil</option>
            <option>BE Elx</option>
          </select>

          <select className="block appearance-none w-2/3  border border-bcolor  text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
            <option  value={batch} onChange={(handleBatchChange)} disabled selected>
              Batch
            </option>
            {Array.from({ length: 7 }, (_, index) => {
              const year = 2017 + index;
              return <option key={year}>{year}</option>;
            })}
          </select>


        </div>
        <div className="flex justify-end">
          <Link to={"/profile"}>
            <button className="inline-flex max-sm:mr-20 md:mr-20 border border-pbcolor bg-white rounded hover:bg-gray-100 text-pbcolor font-bold py-1 px-8">Cancel</button>
          </Link>
          <button className="inline-flex   max-sm:mt-3 bg-pbcolor  text-white font-bold py-1 px-9 rounded" onClick={HandleOnSave}>Save</button>
        </div>
      </div>
    </div>
  )
}