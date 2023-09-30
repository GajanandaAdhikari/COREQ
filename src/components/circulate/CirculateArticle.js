import TextareaAutosize from "@mui/base/TextareaAutosize";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import UploadPDF from "./UploadPDF";
import FailedAlert from "../Static/FailedAlert";
import SucessAlert from "../Static/SucessAlert";

function CirculateArticle() {
  const year = new Date().getFullYear();
  const years = Array.from(new Array(20), (val, index) => year - index);

  const navigate = useNavigate();

  const token = Cookies.get("token");
  const userId = Cookies.get("userId");

  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [publicationHouse, setPublicationHouse] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [alerts, setAlerts] = useState([]);

  // Handle input changes and update the state variables
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorsChange = (e) => {
    setAuthors(e.target.value);
  };

  const handlePublicationHouseChange = (e) => {
    setPublicationHouse(e.target.value);
  };
  const handlePublicationYearChange = (e) => {
    setPublicationYear(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleKeywordsChange = (e) => {
    setKeywords(e.target.value);
  };

  const [selectedFile, setSelectedFile] = useState(null);

  //Handle Login API Integration here
  const HandleSubmitArticle = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    // Define the form fields and their values as an object
    const formFields = {
      title: title,
      authors: authors,
      publicationHouse: publicationHouse,
      publicationYear: publicationYear,
      description: description,
      keywords: keywords,
      userId: userId,
    };

    // Append the form fields to the FormData object in a loop
    for (const [fieldName, fieldValue] of Object.entries(formFields)) {
      formDataToSend.append(fieldName, fieldValue);
    }

    if (selectedFile) {
      // Set the field name to 'artriclePdf' to match your backend configuration
      formDataToSend.append("articlePdf", selectedFile);
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/article/",
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Data sent successfully:", response.data);

      setAlerts((prevAlerts) => [...prevAlerts, "circulateArticleSucess"]);

      // Reset the form fields
      setTitle("");
      setAuthors("");
      setPublicationYear("");
      setPublicationHouse("");
      setDescription("");
      setKeywords("");

      navigate("/articles");
    } catch (error) {
      console.error("Error sending data:", error);
      setAlerts((prevAlerts) => [...prevAlerts, "circulateArticleFailed"]);
    }
  };
  const renderAlerts = () => {
    return alerts.map((alert, index) => {
      switch (alert) {
        case "circulateArticleSucess":
          return (
            <SucessAlert
              key={index}
              message={"Circulate article successfully"}
            />
          );
        case "circulateArticleFailed":
          return (
            <FailedAlert key={index} message={"Failed to circulate article"} />
          );
        default:
          return null;
      }
    });
  };
  return (
    <div>
      <div className=" max-sm:w-[350px] max-md:w-[350px] lg:w-[600px] 2xl:w-[900px]  p-4 border border-boderColor rounded-lg mt-5 ">
        {renderAlerts()}
        <h1 className="text-center md:text-xl font-bold pb-3">
          Circulate Article
        </h1>

        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          placeholder="Title"
          class="flex items-start md:text-[20px] w-full 2xl:h-[40px]  p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <input
          type="text"
          id="authors"
          value={authors}
          onChange={handleAuthorsChange}
          placeholder="authors"
          class="flex mt-4 items-start md:text-[20px] w-full 2xl:h-[40px]  p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        {/* <input type="text" id="author" placeholder="published year" class=" mt-4 items-start md:text-[20px] w-1/2  p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/> */}
        <p className="text-gray-500 md:text-[20px] inline-flex">
          {" "}
          published Year :
        </p>
        <select
          className="mt-3 pt-1 h-[30px] border-boderColor rounded-lg ml-2"
          value={publicationYear}
          onChange={handlePublicationYearChange}
        >
          <option disabled value="" selected>
            Year
          </option>
          {years.map((year, index) => {
            return (
              <option key={`year${index}`} value={year}>
                {year}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          id="publicationHouse"
          value={publicationHouse}
          onChange={handlePublicationHouseChange}
          placeholder="publication House"
          class="mt-4 items-start md:text-[20px] max-sm:w-full md:ml-10 2xl:w-2/3 w-1/2  p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <TextareaAutosize
          placeholder="Description"
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          minRows={5}
          className="flex items-start md:text-[20px] w-full mt-3  p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></TextareaAutosize>
        <TextareaAutosize
          placeholder="keywords"
          id="keywords"
          value={keywords}
          onChange={handleKeywordsChange}
          aria-rowcount={1}
          maxRows={1}
          className="max-sm:flex md:inline-flex md:mr-10 items-start md:text-[20px] w-full mt-3  p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></TextareaAutosize>
        <UploadPDF
          message={"Upload Archive Details PDF"}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
        <div className="flex justify-center mt-5">
          <button class=" bg-green-500  hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
            Draft
          </button>
          <button
            class="ml-10 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={HandleSubmitArticle}
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CirculateArticle;
