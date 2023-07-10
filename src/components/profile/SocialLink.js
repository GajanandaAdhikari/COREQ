import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialLink() {
  return (
    <>
      <div className="bg-back-color  h-screen md:h-full">
        <div >
          <h3 className="text-2xl font-bold pt-20 pl-20">Social Link</h3>
        </div>
        <div class="w-2/3 mx-auto mb-10 pb-20 pt-20 mt-20">
          <span className="flex mt-8"> <FontAwesomeIcon icon={faGithub} size="3x" /> <input class="ml-5  justify-center  shadow appearance-none border border-bcolor rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="githubUsername" type="text" placeholder="Github Username" /></span>
          <span className="flex mt-8"> <FontAwesomeIcon icon={faLinkedin} size="3x" /> <input class="ml-7 justify-center  shadow appearance-none border border-bcolor rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="likedinUsername" type="text" placeholder="Linkedin Username" /></span>
          <span className="flex mt-8"> <FontAwesomeIcon icon={faFacebook} size="3x" /> <input class="ml-5 justify-center  shadow appearance-none border border-bcolor rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="facebookUsername" type="text" placeholder="Facebook Username" /></span>
          <span className="flex mt-8"> <FontAwesomeIcon icon={faInstagram} size="3x" /> <input class="ml-6 justify-center  shadow appearance-none border border-bcolor rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="instagramUsername" type="text" placeholder="Instagram Username" /></span>
          <span className="flex mt-8"> <FontAwesomeIcon icon={faTwitter} size="3x" /> <input class="ml-6 justify-center  shadow appearance-none border border-bcolor rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="twitterU1sername" type="text" placeholder="Twitter Username" /></span>

        </div>

        <div className="flex justify-center ">
          <Link to={"/profile"}>
            <button className="inline-flex max-sm:mr-20 md:mr-20 border border-pbcolor bg-white rounded hover:bg-gray-100 text-pbcolor font-bold py-1 px-8">Cancel</button>
          </Link>
          <button className="inline-flex   max-sm:mt-3 bg-pbcolor  text-white font-bold py-1 px-9 rounded">Save</button>
        </div>
      </div>


    </>
  )
}