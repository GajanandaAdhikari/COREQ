import ProfileEditSideBar from "./ProfileEditSideBar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function Security() {
  return (
    <>
      <div className="bg-back-color h-screen md:h-full overflow-y-scroll">
        <div>
          <h3 className="text-2xl font-bold pt-20 pl-20">Social Link</h3>
        </div>
        <div className="w-2/3 mx-auto mb-10 pb-20 pt-20 mt-20">
          <input className="ml-5 text-xl mb-10 text-center justify-center shadow appearance-none border border-bcolor rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="OldPassword" type="text" placeholder="Old Password" />
          <input className="ml-5 text-xl text-center mt-20 justify-center shadow appearance-none border border-bcolor rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="NewPassword" type="text" placeholder="Create New Password" />
          <input className="ml-5 text-xl text-center mt-10 justify-center shadow appearance-none border border-bcolor rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ConfirmPassword" type="text" placeholder="Confirm Password" />
        </div>

        <div className="flex justify-end w-2/3 mx-auto">
          <Link to={"/profile"}>
            <button className="inline-flex border mr-10 border-pbcolor bg-white rounded hover:bg-gray-100 text-pbcolor font-bold py-1 px-8">Cancel</button>
          </Link>
          <button className="inline-flex max-sm:mt-3 bg-pbcolor text-white font-bold py-1 px-9 rounded">Save</button>
        </div>
      </div>
    </>
  );
}
