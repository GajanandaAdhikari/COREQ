import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import axios from "axios";
import FailedAlert from "../Static/FailedAlert";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

export default function SocialLink() {
  const navigate = useNavigate();
  const token = Cookies.get('token');
  const userId = Cookies.get('userId');
  const [githubUserName, setGithubUserName] = useState("");
  const [linkedinUserName, setLinkedinUserName] = useState("");
  const [facebookUserName, setFacebookUserName] = useState("");
  const [instagramUserName, setInstagramUserName] = useState("");
  const [twitterUserName, setTwitterUserName] = useState("");
  const [showFailedAlert, setShowFailedAlert] = useState(false);
  const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);

  // Handle input changes and update the state variables
  const handleGithubUserNameChange = (e) => {
    setGithubUserName(e.target.value);
  };

  const handleLinkedinUserNameChange = (e) => {
    setLinkedinUserName(e.target.value);
  };

  const handleFacebookUserNameChange = (e) => {
    setFacebookUserName(e.target.value);
  };
  const handleInstagramUserNameChange = (e) => {
    setInstagramUserName(e.target.value);
  };
  const handleTwitterUserNameChange = (e) => {
    setTwitterUserName(e.target.value);
  };

  // Handle Save button click
  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        `http://localhost:8000/user/editProfile/${userId}`,
        {
          socialNames: {
            github: githubUserName,
            linkedin: linkedinUserName,
            facebook: facebookUserName,
            instagram: instagramUserName,
            twitter: twitterUserName
          }
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsUpdateSuccess(true);
      setShowFailedAlert(false);
      navigate("/profile");
    } catch (error) {
      console.error(error);
      setIsUpdateSuccess(false);
      setShowFailedAlert(true);
    }
  };

  return (
    <>
      <div className="bg-back-color h-screen md:h-full">
        <div>
          <h3 className="text-2xl font-bold pt-20 pl-20">Social Link</h3>
        </div>
        {showFailedAlert && !isUpdateSuccess && (
          <FailedAlert message={"Failed to update social links"} />
        )}
        <div className="w-2/3 mx-auto mb-10 pb-20 pt-20 mt-20">
          <span className="flex mt-8">
            <FontAwesomeIcon icon={faGithub} size="3x" />
            <input
              className="ml-5 justify-center shadow appearance-none border border-bcolor rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="githubUsername"
              type="text"
              placeholder="Github Username"
              value={githubUserName}
              onChange={handleGithubUserNameChange}
            />
          </span>
          <span className="flex mt-8">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
            <input
              className="ml-7 justify-center shadow appearance-none border border-bcolor rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="linkedinUsername"
              type="text"
              placeholder="Linkedin Username"
              value={linkedinUserName}
              onChange={handleLinkedinUserNameChange}
            />
          </span>
          <span className="flex mt-8">
            <FontAwesomeIcon icon={faFacebook} size="3x" />
            <input
              className="ml-5 justify-center shadow appearance-none border border-bcolor rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="facebookUsername"
              type="text"
              placeholder="Facebook Username"
              value={facebookUserName}
              onChange={handleFacebookUserNameChange}
            />
          </span>
          <span className="flex mt-8">
            <FontAwesomeIcon icon={faTwitter} size="3x" />
            <input
              className="ml-5 justify-center shadow appearance-none border border-bcolor rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="twitterUsername"
              type="text"
              placeholder="Twitter Username"
              value={twitterUserName}
              onChange={handleTwitterUserNameChange}
            />
          </span>
          <span className="flex mt-8">
            <FontAwesomeIcon icon={faInstagram} size="3x" />
            <input
              className="ml-6 justify-center shadow appearance-none border border-bcolor rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="instagramUsername"
              type="text"
              placeholder="Instagram Username"
              value={instagramUserName}
              onChange={handleInstagramUserNameChange}
            />
          </span>
        </div>

        <div className="flex justify-center">
          <Link to={"/profile"}>
            <button className="inline-flex max-sm:mr-20 md:mr-20 border border-pbcolor bg-white rounded hover:bg-gray-100 text-pbcolor font-bold py-1 px-8">
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
