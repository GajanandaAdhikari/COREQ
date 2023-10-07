import TextareaAutosize from "@mui/base/TextareaAutosize";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import UploadPDF from "./UploadPDF";
import FailedAlert from "../Static/FailedAlert";
import SucessAlert from "../Static/SucessAlert";

function CirculateArchive() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const year = new Date().getFullYear();
  const years = Array.from(new Array(20), (val, index) => year - index);

  const navigate = useNavigate();
  const token = Cookies.get("token");
  const userId = Cookies.get("userId");

  const [title, setTitle] = useState("");
  const [collabrators, setCollabrators] = useState("");
  const [team, setTeam] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [alerts, setAlerts] = useState([]);

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

  const [selectedFile, setSelectedFile] = useState();

  //Handle Login API Integration here
  const HandleSubmitArchive = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    // Define the form fields and their values as an object
    const formFields = {
      userId: userId,
      title: title,
      collabrators: collabrators,
      team: team,
      description: description,
      keywords: keywords,
    };

    // Append the form fields to the FormData object in a loop
    for (const [fieldName, fieldValue] of Object.entries(formFields)) {
      formDataToSend.append(fieldName, fieldValue);
    }

    if (selectedFile) {
      // Set the field name to 'archivePdf' to match your backend configuration
      formDataToSend.append("archivePdf", selectedFile);
    }

    try {
      const response = await axios.post(
        `${apiUrl}/archive/`,
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Data sent successfully:", response.data);
      setAlerts((prevAlerts) => [...prevAlerts, "circulateArchiveSucess"]);

      // You can handle the API response here
      // Clear the form by resetting the state variables
      setTitle("");
      setCollabrators("");
      setTeam("");
      setDescription("");
      setKeywords("");

      navigate("/archive");
    } catch (error) {
      console.error("Error sending data:", error);
      setAlerts((prevAlerts) => [...prevAlerts, "circulateArchiveFailed"]);
      // Handle errors here
    }
  };
  const renderAlerts = () => {
    return alerts.map((alert, index) => {
      switch (alert) {
        case "circulateArchiveSucess":
          return (
            <SucessAlert
              key={index}
              message={"Circulate archive successfully"}
            />
          );
        case "circulateArchiveFailed":
          return (
            <FailedAlert key={index} message={"Failed to circulate archive"} />
          );
        default:
          return null;
      }
    });
  };
  return (
    <>
      <div className=" max-sm:w-[350px] max-md:w-[350px] lg:w-[600px] 2xl:w-[900px]  p-4 border border-boderColor rounded-lg mt-5 ">
      {renderAlerts()}
        <h1 className="text-center md:text-xl font-bold pb-3">
          Circulate Archive
        </h1>

        <input
          type="text"
          id="title"
          placeholder="Project Title"
          value={title}
          onChange={handleTitleChange}
          className="flex items-start md:text-[20px] w-full 2xl:h-[40px]  p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <input
          type="text"
          id="collaburator"
          placeholder="Members Name"
          value={collabrators}
          onChange={handleCollabratorsChange}
          className="flex mt-4 items-start md:text-[20px] w-full 2xl:h-[40px]  p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        {/* <input type="text" id="author" placeholder="published year" className="mt-4 items-start md:text-[20px] w-1/2  p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/> */}

        <input
          type="text"
          id="team_name"
          placeholder="Team Name"
          value={team}
          onChange={handleTeamChange}
          className="mt-4 text-start md:text-[20px] max-sm:w-full   w-full  p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          className="max-sm:flex md:inline-flex md:mr-10 items-start md:text-[20px] w-full mt-3  p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></TextareaAutosize>
        <UploadPDF
          message={"Upload Archive Details PDF"}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
        <div className="flex justify-center mt-5">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
            Draft
          </button>
          <button
            className="ml-10 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={HandleSubmitArchive}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default CirculateArchive;
