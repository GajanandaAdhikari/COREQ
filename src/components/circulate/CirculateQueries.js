import TextareaAutosize from "@mui/base/TextareaAutosize";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function CirculateQueries() {
  const navigate = useNavigate();

  const token = Cookies.get("token");
  const userId = Cookies.get("userId");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Handle input changes and update the state variables
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  //Handle Login API Integration here
  const handleSubmitQuery = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/query",
        {
          title: title,
          description: description,
          userId: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTitle("");
      setDescription("");
      navigate("/query");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className=" max-sm:w-[350px] max-md:w-[350px] lg:w-[600px] 2xl:w-[900px]  p-4 border border-boderColor rounded-lg mt-5 ">
        <h1 className="text-center md:text-xl font-bold pb-3">
          Circulate Queries{" "}
        </h1>

        <input
          type="text"
          id="title"
          placeholder="Title"
          class="flex items-start md:text-[20px] w-full 2xl:h-[40px]  p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={title}
          onChange={handleTitleChange}
        />

        <TextareaAutosize
          placeholder="Description"
          minRows={5}
          className="flex items-start md:text-[20px] w-full mt-3  p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={description}
          onChange={handleDescriptionChange}
        ></TextareaAutosize>
        <div className="items-center text-center">
          <button class="inline-flex mt-3  max-sm:mr-20   md:mr-20 bg-green-500  hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
            Draft
          </button>
          <button
            class="inline-flex   max-sm:mt-3 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleSubmitQuery}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default CirculateQueries;
