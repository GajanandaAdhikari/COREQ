import TextareaAutosize from "@mui/base/TextareaAutosize";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function CirculateArchive() {
  const year = new Date().getFullYear();
  const years = Array.from(new Array(20), (val, index) => year - index);

  const navigate = useNavigate();
  const token = Cookies.get('token');
  const userId = Cookies.get('userId');

  const [title, setTitle] = useState("");
  const [collabrators, setCollabrators] = useState("");
  const [team, setTeam] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");

   // Handle input changes and update the state variables
   const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCollabratorsChange = (e) => {
    setCollabrators(e.target.value);
  };

  const handleTeamChange = (e) => {
    setTeam(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleKeywordsChange = (e) => {
    setKeywords(e.target.value);
  };


  //Handle Login API Integration here
  const HandleSubmitArchive = async (e) => {
    e.preventDefault();

    try {
      console.log({userId, title, collabrators, team, description, keywords});
      console.log(token);
      console.log(userId);
      const response = await axios.post(
        "http://localhost:8000/archive",
        {
          title: title,
          collabrators: collabrators,
          team: team,
          description: description,
          keywords: keywords,
          userId: userId
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      navigate("/projects");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className=" max-sm:w-[350px] max-md:w-[350px] lg:w-[600px] 2xl:w-[900px]  p-4 border border-boderColor rounded-lg mt-5 ">
        <h1 className="text-center md:text-xl font-bold pb-3">
          Circulate Archive
        </h1>

        <input
          type="text"
          id="title"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
          class="flex items-start md:text-[20px] w-full 2xl:h-[40px]  p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <input
          type="text"
          id="collaburator"
          placeholder="Collabrators"
          value={collabrators}
          onChange={handleCollabratorsChange}
          class="flex mt-4 items-start md:text-[20px] w-full 2xl:h-[40px]  p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        {/* <input type="text" id="author" placeholder="published year" class=" mt-4 items-start md:text-[20px] w-1/2  p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/> */}

        <input
          type="text"
          id="author"
          placeholder="Team Name"
          value={team}
          onChange={handleTeamChange}
          class="mt-4 text-start md:text-[20px] max-sm:w-full   w-full  p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <TextareaAutosize
          placeholder="Description"
          minRows={5}
          value={description}
          onChange={handleDescriptionChange}
          className="flex items-start md:text-[20px] w-full mt-3  p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></TextareaAutosize>
        <TextareaAutosize
          placeholder="keywords"
          aria-rowcount={1}
          maxRows={1}
          value={keywords}
          onChange={handleKeywordsChange}
          className="max-sm:flex md:inline-flex md:mr-10 items-start md:text-[20px] max-sm:w-full md:w-2/3 mt-3  p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></TextareaAutosize>
        <button class="inline-flex max-sm:mt-3 max-sm:ml-7 max-sm:mr-20 mr-5 bg-green-500  hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
          Draft
        </button>
        <button class="inline-flex max-sm:mt-3 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={HandleSubmitArchive}>
          Submit
        </button>
      </div>
    </>
  );
}

export default CirculateArchive;
